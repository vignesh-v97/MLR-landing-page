/* eslint-disable simple-import-sort/imports */
import Link from 'next/link';
import React from 'react';

const servicesList = [
  {
    name: 'Medical Chronology',
    href: '/services/medical-chronology',
    description:
      'A Medical Chronology/Summary is a record of medical events in the order of their occurrence.',
    imgSrc: '/assets/images/icons/services/medical-chronology.png',
  },
  {
    name: 'Demand Letter',
    href: '/services/settlement-demand-letter',
    description:
      'A settlement letter is used to settle a personal injury case, usually before filing a lawsuit in court.',
    imgSrc: '/assets/images/icons/services/demand-letter.png',
  },
  {
    name: 'Narrative Summary',
    href: '/services/narrative-summary',
    description:
      'In chronological order, our narrative summaries capture and highlight all of the major events.',
    imgSrc: '/assets/images/icons/services/narrative-summary.png',
  },
  {
    name: 'Expert Medical Opinion',
    href: '/services/expert-medical-opinion',
    description:
      'Our physicians provide an opinion on a medical case based on sound reasoning.',
    imgSrc: '/assets/images/icons/services/expert-medical-opinion.png',
  },
  {
    name: 'Deposition Summary',
    href: '/services/deposition-summary',
    description:
      'A deposition is an essential part of the investigation that occurs before a trial.',
    imgSrc: '/assets/images/icons/services/deposition-summary.png',
  },
  {
    name: 'Billing Summary',
    href: '/services/billing-summary',
    description:
      'All of the bills for a single patient are summarised on the billing summary/expense sheets.',
    imgSrc: '/assets/images/icons/services/billing-summary.png',
  },
];

const HomeServices = () => {
  return (
    <section className="py-8 mx-4 lg:py-16 sm:mx-6 lg:mx-0">
      <div className="max-w-5xl mx-auto">
        <h3 className="mt-6 text-3xl font-bold text-center text-primary">
          Our Featured Review Services
        </h3>
        <p className="mt-6 mb-16 text-lg text-center text-gray-600">
          Medico Legal Request LLC, employing a consultative approach, provides
          accurate, fast drafting and project management services, ensuring that
          each venture is tailored to the needs of the customer. With our legal
          outsourcing services, we can help legal teams restructure and empower
          them to focus on what they do best. We assist businesses in realizing
          cost savings and efficiency they didn't know were achievable.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((serviceItem) => {
            return (
              <Link href={serviceItem.href} key={serviceItem.name}>
                <a>
                  <div className="feature-item ">
                    <div className="feature-icon">
                      <img
                        src={serviceItem.imgSrc}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="feature-content">
                      <h5 className="text-lg font-semibold text-primary">
                        {serviceItem.name}
                      </h5>
                      <p
                        className="mt-2 leading-relaxed text-gray-600"
                        style={{ minHeight: '80px' }}
                      >
                        {serviceItem.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/services">
            <a className="btn btn-1">View More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
