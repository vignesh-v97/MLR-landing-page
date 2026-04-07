import React from 'react';

import Accordion from '@/components/ui/accordion';

const accordianData = [
  {
    title: 'Customized Solutions',
    description:
      'We offer personalized solutions to meet the specific requirements of law firms and insurance companies.',
  },
  {
    title: 'Team of Experts',
    description:
      ' We have more than 50 MDs with nursing staff in India and some nurse consultants in the United States.',
  },
  {
    title: 'HIPPA Compliance',
    description:
      'We strictly follow HIPPA Compliance with free secure cloud storage and file transfers.',
  },
  {
    title: 'Cost Effective',
    description:
      'We’re charging $25/hr for medical record review and summary services. For expert opinion $50/hr.',
  },
  {
    title: '1 Week TAT',
    description:
      'Our normal turnaround time is one week from your approval and no expedited fee for rush requests.',
  },
  {
    title: 'Free Cost Estimate',
    description:
      'We provide a free cost estimate and delivery date for your approval before proceeding the case.',
  },
];

const AboutWhyChooseUs = () => {
  return (
    <div className="mx-auto my-16 max-w-5xl  shadow">
      <div className="px-6 py-4">
        <div className="flex lg:flex-row flex-col">
          <div className="w-full lg:w-7/12">
            <img
              src="/assets/images/Why Choose Us - About Us.jpg"
              alt="Why Choose Us-Medico Legal Request LLC"
              className=""
            />
          </div>
          <div className="ml-3 w-full lg:w-5/12">
            <h2 className="heading mt-5 lg:mt-0 mb-10 text-center">
              Why Choose Us ?
            </h2>

            <Accordion data={accordianData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhyChooseUs;
