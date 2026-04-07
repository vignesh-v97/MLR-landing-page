import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';

const faqData = [
  {
    title: 'What is a billing summary and its uses?',
    description: `A "billing summary" lists the client's entire outlay for services on a single sheet, including all medical costs incurred during each visit, modifications, and insurance payments.`,
  },
  {
    title: 'How much does the billing summary cost and is it tailored ?',
    description:
      'The summary costs $25/hr and is customized based on your template if available.',
  },
  {
    title: 'How does the billing summary work?',
    description: `The billing summary aids in understanding the plaintiff's financial situation.`,
  },
  {
    title: 'How are total expenses calculated in the billing summary ?',
    description: `Overall costs are determined by adding up each provider/visit facility's expenses.`,
  },
];

const samplesData = [
  {
    title: 'PDF Sorting & Collating',
    img: '/assets/images/samples/Providers List.jpg',
    pdf: '',
  },
];
const ProvidersList = () => {
  return (
    <Main
      meta={
        <Meta
          title="Med-A-Word/Med Interpret Services – Medical Record Review USA"
          description="By just hovering the mouse over the necessary phrases, our Med-A-Word/Med-Interpret service provides you with simple descriptions of complicated medical terminology."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Med-A-Word/Med Interpret Services"
        subheading="Medical Record Review Services for Legal and Healthcare Industries"
        imgUrl="/assets/images/page-banners/med-a-word.jpg"
        alt="Banner_Med-A-Word"
      />
      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Med-A-Word/Med Interpret Services
            </h1>
            <p className="text-lg text-gray-600">
              By just hovering the mouse over the necessary phrases, our
              Med-A-Word/Med-Interpret service provides you with simple
              descriptions of complicated medical terminology, making it easier
              to grasp complex medical jargon used in the medical literature.
              Med-Interpret is a service that may be added on.
            </p>
            <p className="text-lg text-gray-600 py-3">
              The Med-Term feature enables you to understand medical terminology
              in medical chronologies and deposition transcripts. By sliding the
              mouse over the desired term, pop-ups of medical terminology or
              deposition terms show, allowing great definitions for complex
              medical terminologies.
            </p>
            <p className="text-lg text-gray-600 py-3">
              Our experts also provide medical interpretations for medical X-ray
              reports.
            </p>
            <p className="text-lg text-gray-600 my-4">
              For more information about our medical interpretation services,
              Contact us at{' '}
              <a className="text-secondary" href="tel:+1 903-765-6073">
                +1 (903) 765-6073
              </a>{' '}
              or email us at{' '}
              <a
                href="mailto:support@medicolegalrequestllc.com"
                className="break-all text-secondary "
              >
                support@medicolegalrequestllc.com.
              </a>{' '}
            </p>
            <div className="my-10">
              <h4 className="heading mb-2">Reference Image</h4>

              <img
                src="/assets/images/service-samples/Med-A-Word for Medical Summaries.jpg"
                alt="Med-A-Word/Med Interpret"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Med-A-Word/Med-Interpret" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default ProvidersList;
