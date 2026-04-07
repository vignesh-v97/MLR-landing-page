import { CheckCircleIcon } from '@heroicons/react/solid';
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
          title="Medical Record Sorting and Collation - PDF Sorting & Merging Services"
          description="As a professional provider of medical record sorting services, We sort and organize the jumbled medical records according to your preferences. Medical Record Sorting and collation is..."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical Record Sorting and Collation"
        subheading="Expert Medical Record Sorting and Bookmarking Services at $20/hr."
        imgUrl="/assets/images/page-banners/PDF Sorting _ Merging-Banner.jpg"
        alt="PDF Sorting and Merging-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Medical Record Sorting Services
            </h1>
            <p className="text-lg text-gray-600">
              We sort and organize the jumbled medical records according to your
              preferences. We specialize in classifying medical records by date
              of occurrence, provider, and service type. We may also sort the
              medical records to your specifications.
            </p>
            <div className="mt-6">
              <h2 className="text-primary text-xl mb-6 font-bold">
                Types of Medical record sorting
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    <span className="font-bold">Provider wise sorting</span>:
                    The medical records are sorted and arranged by individual
                    healthcare providers (i.e., Provider A, Provider B)
                  </span>
                </li>
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    <span className="font-bold">
                      Chronological wise sorting
                    </span>
                    : The medical records are indexed, sorted, and arranged by
                    the order of events (Chronological order)
                  </span>
                </li>
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    <span className="font-bold">Record wise sorting</span>: All
                    medical records will be integrated and then organized by
                    record type, such as nursing notes, discharge summaries,
                    wound assessment records, and so forth.
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-lg text-gray-600 font-bold">
              Get a well-sorted set of medical records for medico-legal cases!
            </p>
            <p className="mt-8 text-lg text-gray-600">
              As a professional provider of medical record sorting services, we
              have an experienced team in assisting medico-legal firms,
              attorneys, insurance claims, medical evaluators, and medical
              documentation management service providers to meet their medical
              record management needs.
            </p>
            <h3 className="text-primary my-6 text-xl font-bold">
              Medical Record Sorting Process
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Medical records are indexed, sorted, and collated upon client
                  request
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Duplicate medical records are identified and removed from the
                  original medical records
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  For ease of reference, our team will prepare the bookmarks in
                  the sorted and organized medical records
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 my-8">
              For more information about our medical record sorting services,
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

            {/* <div className="">
              <img
                src="/assets/images/service-samples/Billing Summary sample.jpg"
                alt=""
              />
            </div> */}
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="PDF Sorting & Merging" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default ProvidersList;
