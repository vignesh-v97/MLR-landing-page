/* eslint-disable tailwindcss/no-custom-classname */
import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import type { ServiceTypes } from '@/types/service-types';

const servicesList: IServiceList[] = [
  {
    name: 'Medical Chronology',
    href: '/services/medical-chronology',
    description:
      'A Medical Chronology/Summary is a record of medical events in the order of their occurrence.',
  },
  {
    name: 'Demand Letter',
    href: '/services/settlement-demand-letter',
    description:
      'A settlement letter is used to settle a personal injury case, usually before filing a lawsuit in court.',
  },
  {
    name: 'Narrative Summary',
    href: '/services/narrative-summary',
    description:
      'In chronological order, our narrative summaries capture and highlight all of the major events.',
  },
  {
    name: 'Expert Medical Opinion',
    href: '/services/expert-medical-opinion',
    description:
      'Our physicians provide an opinion on a medical case based on sound reasoning.',
  },
  {
    name: 'Deposition Summary',
    href: '/services/deposition-summary',
    description:
      'A deposition is an essential part of the investigation that occurs before a trial.',
  },
  {
    name: 'Billing Summary',
    href: '/services/billing-summary',
    description:
      'All of the bills for a single patient are summarised on the billing summary/expense sheets.',
  },
  {
    name: 'Providers List',
    href: '/services/providers-list',
  },
  {
    name: 'PDF Sorting & Merging',
    href: '/services/pdf-sorting-merging',
    description:
      'We sort the jumbled medical records according to your preferences.',
  },
  {
    name: 'Medical Transcription',
    href: '/services/medical-transcription',
    description:
      'Voice reports dictated by physicians and other healthcare professionals into text format.',
  },
  {
    name: 'Med-A-Word/Med-Interpret',
    href: '/services/med-a-word',
  },
  {
    name: 'Bookmarks',
    href: '/services/bookmarks',
  },
  {
    name: 'Hot Links/Hyperlinks',
    href: '/services/hot-links',
  },
  {
    name: 'Missing Records Identification',
    href: '/services/missing-records-identification',
  },
  {
    name: 'Special Reports',
    href: '/services/special-reports',
  },
  {
    name: 'Life Care Plan',
    href: '/blogs/Life-care-plans-and-future-medical-care-cost-report-medico-legal-request-llc/',
  },
];
const SuccessPage = () => {
  return (
    <div>
      <div className="py-16 bg-white">
        <div className="flex justify-center">
          <div className="check-container">
            <div className="check-background">
              <svg
                viewBox="0 0 65 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 25L27.3077 44L58.5 7"
                  stroke="white"
                  strokeWidth={13}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="check-shadow" />
          </div>
        </div>
        <div className="p-3 md:p-0">
          <div className="text-lg font-medium text-center sm:text-2xl text-primary">
            Successfully Uploaded. Thank you!
          </div>
          <div className="mt-2 text-base text-center text-primary">
            Our team will reach you with the receipt of the received medical
            records soon.
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center mt-3 md:mt-8">
          <div className="hero-btn flex flex-col justify-start gap-5 mt-5 xl:mt-4 md:flex-row md:gap-12">
            <Link href="/upload-form/" passHref>
              <a className="btn btn-1" target="_blank">
                Submit New Case<i className="far fa-arrow-right"></i>
              </a>
            </Link>
            <Link href="/upload-form/upload-files" passHref>
              <a className="btn btn-2 " target="_blank">
                Upload Additional Records
                <i className="far fa-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
        <hr className="mt-8" />
        {/* Services */}
        <div className="flex justify-center mt-4 md:mt-8">
          <div className="w-full m-4 md:m-0 md:max-w-xl">
            <h3 className="mb-4 text-xl font-bold text-center uppercase md:mb-8 lg:text-2xl text-primary-400">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-3 p-4 border rounded-md shadow md:p-6 md:gap-5 md:grid-cols-2">
              {servicesList.map((service) => {
                return (
                  <Link href={service.href} key={service.name} passHref>
                    <a target="_blank">
                      <li
                        className={cn(
                          'text-primary-600 border rounded-md p-2 hover:text-secondary-500'
                        )}
                      >
                        {service.name}
                      </li>
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

interface IServiceList {
  name: ServiceTypes;
  href: string;
  description?: string;
}
