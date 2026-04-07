import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import generateHTML from '@/utils/generate-html';

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_APP_PASSWORD;

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: [
        'support@medicolegalrequestllc.com',
        'medicolegalrequestllc@gmail.com',
      ],
      subject: req.body?.firmName
        ? `${req.body.firmName} uploaded a samples form`
        : `Sample Form request `,
      html: generateHTML('Data for sample form', req.body, [
        'reviewServices',
        'additionalServices',
        'specialReports',
      ]),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
};

export default contact;
