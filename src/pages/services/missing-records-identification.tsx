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
          title="Missing Records Identification | Medico Legal Request LLC"
          description="A thorough list of missing records, including dates, providers, record type, and importance to case analysis, is supplied."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Missing Medical Records Identification"
        subheading="Free Service for Medical Records Review, Summary and Opinion
        Services"
        imgUrl="/assets/images/page-banners/Missing Records Identification-Banner.jpg" alt="Missing Records Identification-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Missing Medical Records Identification
            </h1>
            <p className="text-lg text-gray-600">
              A thorough list of missing records, including dates, providers,
              record type, and importance to case analysis, is supplied. On
              request, we provide free missing records identification services
              and aid in locating them for all of our clients.
            </p>

            <p className="text-lg  my-3">
              We typically offer them without charge for medical chronology
              services.
            </p>
            {/* <div className="mt-12 ">
              <h2 className="mb-6 flex items-center bg-white text-3xl font-bold text-primary-400">
                Download Sample
                <DocumentDownloadIcon className="ml-2 block w-8" />
              </h2>
              <div className="flex w-full flex-wrap ">
                {samplesData.map((sample) => {
                  return (
                    <a
                      href={sample.pdf}
                      target="_blank"
                      className="group w-10/12 border-2 sm:w-3/12 block shadow-slate-900	 p-4 bg-white m-5 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all ease-linear"
                      key={sample.title}
                      rel="noreferrer"
                    >
                      <img src={sample.img} alt="" className="w-full" />
                      <p className="group-hover:text-secondary-500 text-center p-2 text-primary-700 font-semibold border-t">
                        {sample.title}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div> */}

            <div className="mt-16">
              <img
                src="/assets/images/service-samples/Bookmarks and Hyperlinked Summary _ Medical Chronology.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Missing Records Identification" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Bookmarks;
