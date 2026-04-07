import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';
import Accordion from '@/components/ui/accordion';

const faqData = [
  {
    title: 'What is a billing summary and its uses?',
    description: `A "billing summary" lists the client's entire outlay for services on a single sheet, including all medical costs incurred during each visit, modifications, and insurance payments.`,
  },
  {
    title: 'How much does the billing summary cost and is it customized?',
    description:
      'The summary costs $25/hr and it is customized based on your template if available.',
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
    title: ' Sample Billing Summary',
    img: '/assets/images/samples/Billing Summary.jpg',
    pdf: '',
  },
];
const BillingSummary = () => {
  return (
    <Main
      meta={
        <Meta
          title="Medical Billing Summary Services | Medical Record Review"
          description="Medical bills are arranged chronologically, and expenses are documented on a separate spreadsheet that includes information such as the date of treatment, the types of therapy provided, and the costs incurred."
          image="/assets/images/page-banners/Billing Summary-Banner.jpg"
        />
      }
    >
      <Navbar />
      <HeroBanner
        title="Medical Expenses/Billing Summary"
        subheading="Tailored and Comprehensive Medical Billing Summary services at $25/hr."
        imgUrl="/assets/images/page-banners/Billing Summary-Banner.jpg"
        alt="Billing Summary-Banner"
      />
      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Medical Billing Summary Services
            </h1>
            <p className="text-lg text-gray-600">
              All of the bills for a single patient are summarized on the
              billing summary. The details of the bills or visits, the amount
              spent, and the total summary are all included in our billing
              summary.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Medical bills are arranged chronologically, and expenses are
              documented on a separate spreadsheet that includes information
              such as the date of treatment, the types of therapy provided, and
              the costs incurred. The costs incurred by the patient for all
              services supplied by each healthcare provider are also recorded.
              An itemized list of all medical expenditures for all relevant
              medical services, including ambulance transportation costs and
              prescription costs.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Our medical billing summaries have allowed attorneys to seek
              larger recoveries for their personal injury clients.
            </p>
            <h2 className="mb-3 mt-6 flex items-center bg-white text-xl font-bold text-primary">
              Medical Record Chronology with Medical Bills
            </h2>
            <p className="text-lg text-gray-600">
              Medical chronology/summaries prepared by our experts include the
              bills or expenses for each of the treatments rendered for injuries
              to the patient. It helps to identify total expenses incurred by
              the injured person for every health care provider.
            </p>

            <div className="py-16">
              <h4 className="heading mb-6">Reference Image</h4>
              <div className="">
                <img
                  src="/assets/images/service-samples/billing-summary-sample.jpg"
                  alt="Billing Summary-Sample"
                  alt=""
                />
              </div>
              <h2 className="pt-16 mb-4 bg-white text-3xl font-bold text-primary-400">
                FAQ
              </h2>
              <Accordion data={faqData} />
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Billing Summary" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default BillingSummary;
