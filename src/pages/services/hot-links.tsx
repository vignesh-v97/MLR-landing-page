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
const Bookmarks = () => {
  return (
    <Main
      meta={
        <Meta
          title="Free Hyperlinks with Medical Summaries | Medical Record Review Services"
          description="Hot Links provide rapid access to associated source pages from medical summaries and timelines. This improves the speed and accuracy of finding original records."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical Record Hyperlinks"
        subheading="Free Service for Medical Record Chronologies and Summaries"
        imgUrl="/assets/images/page-banners/Hyperlinks-Banner.jpg"
        alt="Hyperlinks-Banner"
      />
      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Hotlink/Hyperlink with Medical Records
            </h1>
            <p className="text-lg text-gray-600">
              Hot Links provide rapid access to associated source pages from
              medical summaries and timelines. This improves the speed and
              accuracy of finding original records. This service is only
              accessible in PDF format. The hot linked document's references
              will take you to the corresponding page in the medical records if
              you click on them.
            </p>

            <p className="text-lg  my-3">
              We typically offer them without charge for medical chronology
              services.
            </p>

            <div className="mt-16">
              <h4 className="heading mb-8">Reference Image</h4>

              <img
                src="/assets/images/bookmarks.jpg"
                alt="Bookmarks and Hotlinks.jpg"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Hot Links/Hyperlinks" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Bookmarks;
