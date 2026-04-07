import { CheckCircleIcon } from '@heroicons/react/outline';
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
          title="Medical Record Bookmarks - Medical Record Review & Tagging"
          description="Bookmarks are navigational aids for PDF documents that help the reader rapidly find and link to points of interest within the medical record."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical Record Bookmarking Service"
        subheading="Free Service for Medical Record Chronologies and Summaries"
        imgUrl="/assets/images/page-banners/Bookmarks-Banner.jpg"
        alt="Bookmarks-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Medical Record Bookmarking
            </h1>
            <p className="text-lg text-gray-600">
              Bookmarks are navigational aids for PDF documents that help the
              reader rapidly find and link to points of interest within the
              medical record. They can be organized into user-defined categories
              like providers, record types, and dates, allowing for quick file
              retrieval. We customize the bookmarks based on your needs.
            </p>
            <h2 className="text-primary text-xl my-6 font-medium">
              Types of Bookmarks:
            </h2>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  <span className="font-bold">Provider-wise Bookmark</span>: In
                  this type, the medical records are bookmarked by individual
                  healthcare providers (i.e., Provider A, Provider B)
                </span>
              </li>
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  <span className="font-bold">Chronological Bookmark</span>: In
                  chronological bookmarks, the bookmarks will be created based
                  on the chronological order of medical events.
                </span>
              </li>
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  <span className="font-bold">Record Type Bookmark</span>: In
                  this type, the entire set of records will be merged together,
                  and chronological bookmarks will be created for each type of
                  record, such as progress notes, nursing notes, physical
                  therapy records, etc…
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-lg  my-3">
                Medical record bookmarking enables you to jump from one page to
                another without friction while sifting through a bulky document.
                We typically offer them without charge for medical chronology
                and narrative summary services if our clients require this
                service.
              </p>
              <p className="text-lg text-gray-600 my-4">
                For more information about our medical record bookmarking
                services, Contact us at{' '}
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
            </div>
            <div className="mt-16">
              <h4 className="heading mb-8">Reference Image</h4>

              <img
                src="/assets/images/bookmarks.jpg"
                alt="Bookmarks and Hotlinks.jpg"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Bookmarks" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Bookmarks;
