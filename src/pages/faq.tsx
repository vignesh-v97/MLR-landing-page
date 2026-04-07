import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import Accordion from '@/components/ui/accordion';

const faqData = [
  {
    title: 'What is the cost of your services?',
    description: `For chronology/summaries and other services, the hourly charge is $25. And expert medical opinion $50/hr.`,
  },
  {
    title: 'What is medical chronology?',
    description: `A medical chronology is a chronological document of a patient's medical history and treatment. Medical chronologies are valuable tools for healthcare professionals, legal professionals, and insurance companies to review and understand a patient's medical history comprehensively.`,
  },
  {
    title:
      'How do I get started? After I upload the records, do you provide a cost estimate?',
    description: `Just click File Upload and share your client’s medical records with basic details about the case. Yes, after receiving medical records, our team will provide you with a free cost estimate and an expected delivery date. Upon receiving your approval, we will start our work`,
  },
  {
    title: `How do we keep track of our clients' medical records? Are they in a safe place?`,
    description: `Yes. For source file uploads and downloads of organised files, summaries, and hyperlinks, we employ a secure, HIPAA-compliant internet interface.
    `,
  },
  {
    title: `Who creates the medical record summary?`,
    description: `Medical record summaries are prepared by healthcare professionals, such as physicians, and nurses. They extract and compile essential information from the patient's complete medical record and create accurate chronologies and medical record summaries.`,
  },
  {
    title: `Who reviews our clients medical records?`,
    description: `We have a team of physicians, nurses, and other medical professionals. who review your clients medical records and provide highly cost-effective solutions in a rapid turnover time. `,
  },
  {
    title: `Do you guys charge an expedited fee for rush requests?`,
    description: `No, we will not charge any extra fees for rush requests, and our normal turnaround time is 1 week. If you need a medical chronology within a week, share the expected delivery date while uploading a case.`,
  },
  {
    title: 'What is the typical charge for a demand letter drafting service?',
    description:
      'We’re charging $25/hr for drafting settlement demand letters. Upload your client’s medical records and get a free cost estimate with an expected delivery date before proceeding with the case',
  },
  {
    title: 'What do you include in the settlement demand letter?',
    description:
      'In the settlement demand letter, we include the claim details, facts and liability, a summary of injuries, accident images, medical expenses, lifestyle impact, future medical expenses, and other notes. Also, we do follow customized demand letter templates upon your request.',
  },
  {
    title: 'How Does your Medical Chronology Service Assist Attorneys?',
    description: `Sifting through enormous numbers of medical records one by one would be a time-consuming task for attorneys managing numerous cases at once. However, with the aid of an excellent medical chronology, they can now obtain a clear and organized understanding of the plaintiff's medical chart, including what happened to the plaintiff, the kind and severity of their injury, the medical treatments they received, and the effects of those treatments.`,
  },
  {
    title:
      'We have 1200 pages of medical records that need to be summarized. How long would it take?',
    description: `It would take one week to complete the summarization. If you have any specific deadlines, we will meet them without an expedited fee`,
  },
  {
    title: 'Who do you provide services for?',
    description: `We offer deposition summaries to law firms, independent attorneys, paralegals, medical professionals, and independent medical examiners.`,
  },
];

const FAQ = () => {
  return (
    <Main
      meta={
        <Meta
          title="FAQ's | Medico Legal Request LLC | Medical Record Review"
          description="What is the cost of your services? For chronology/summaries and other services, the hourly charge is $25 and expert medical opinion $50/hr."
        />
      }
    >
      <Navbar />
      <HeroBanner
        title="FAQ's"
        imgUrl="/assets/images/page-banners/FAQ_s-Banner.jpg"
        alt="FAQ_s-Banner"
      />
      <div className="m-4 mx-auto max-w-6xl  leading-relaxed text-gray-800 py-20">
        <h1 className="heading mt-3  mb-10">Frequently Asked Questions</h1>
        <Accordion
          titleSize="text-xl"
          descriptionSize="text-lg"
          data={faqData}
        />
      </div>

      <Footer />
    </Main>
  );
};

export default FAQ;
