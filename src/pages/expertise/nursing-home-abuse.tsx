import { CheckCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ExpertiseBanner from '@/components/pages/expertise/expertise-banner';
import ExpertiseList from '@/components/pages/expertise/expertise-list';
import LinkedServicesList from '@/components/pages/services/linked-services-list';
import { Main } from '@/components/templates/Main';

const types = [
  'Neglect of a residents basic needs',
  'Financial exploitation',
  'Abandonment',
  'Physical abuse',
  'Sexual assault',
  'Emotional abuse',
  'Self-neglect',
];

const NursingHomeAbuse = () => {
  return (
    <Main
      meta={
        <Meta
          title="Nursing Home Abuse – Medical Record Review – Medico Legal Request"
          description="Medical records can be pivotal in substantiating claims of nursing home abuse, highlighting patterns of neglect or mistreatment, and establishing the damages suffered by the resident. In order to review medical records…"
        />
      }
    >
      <Navbar />
      <div className="">
        <HeroBanner
          title=" Nursing Home Abuse"
          subheading="Nursing home abuse refers to any form of mistreatment or harm inflicted on residents of nursing homes or long-term care facilities."
          imgUrl="/assets/images/page-banners/Nursing Home Abuse-Banner.jpeg"
          alt="Personal Injury-Banner"
        />

        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="w-full text-gray-600 lg:w-8/12">
              <h1 className="heading mb-4">
                Nursing Home Abuse Medical Record Review
              </h1>
              <p className="text-lg text-gray-600">
                In nursing home abuse cases, a thorough review of medical
                records is often a crucial step in investigating and building a
                case. Medical records can provide valuable evidence regarding
                the resident's condition, the care provided, any signs of abuse
                or neglect, and the response of the nursing home staff to
                reported incidents.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Medical record review is a challenging and time-consuming
                process for nursing home abuse attorneys and law firms. In order
                to review medical records, lawyers must deal with unreadable
                handwritten notes, missing records, inconsistent documentation,
                and a large amount of information. For reviewing medical
                records, thorough knowledge of medical terminology, clinical
                standards, and regulations is necessary.
              </p>
              <h3 className="my-6 text-xl font-bold text-primary">
                Common Types of Nursing Home Abuse:
              </h3>
              <ul className="grid grid-cols-1 gap-5 mr-10 md:grid-cols-2">
                {types.map((item) => {
                  return (
                    <li className="flex items-start text-left" key={item}>
                      <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                      <span className="text-lg leading-tight">{item}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-10 text-lg text-gray-600">
                Nursing home abuse lawyers have to review a large number of
                medical records to analyze nursing home abuse and injury.
                Outsourcing medical record review may be the most feasible and
                efficient solution. We at Medico Legal Request LLC, handle
                hundreds of nursing home cases each month involving pressure
                ulcers, Bed sores, fall injuries, aspirations, etc. Our nursing
                home abuse {''}
                <Link href="/services/medical-chronology">
                  <a className="text-secondary">medical chronologies,</a>
                </Link>
                {''}
                {''}
                <Link href="/services/narrative-summary">
                  <a className="text-secondary">&nbsp;narrative summaries,</a>
                </Link>
                {''} and{''}
                <Link href="/services/special-reports">
                  <a className="text-secondary">&nbsp;special reports&nbsp;</a>
                </Link>
                {''}are saving valuable time for paralegals and attorneys like
                you.
              </p>
              <p className="my-4 text-lg text-gray-600">
                For more information about our nursing home abuse medical record
                review services, Contact us at{' '}
                <a className="text-secondary" href="tel:+1 903-765-6073">
                  +1 (903) 765-6073
                </a>{' '}
                or email us at{' '}
                <a
                  href="mailto:support@medicolegalrequestllc.com"
                  className="break-all text-secondary "
                >
                  support@medicolegalrequestllc.com
                </a>
              </p>
            </div>
            <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
              <ExpertiseList active="Nursing Home Abuse" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ExpertiseBanner />
        </div>
        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <h2 className="text-2xl font-bold text-primary">
            Our Extensive Support
          </h2>
          <p className="my-3 text-lg text-gray-600">
            Medical records can be pivotal in substantiating claims of nursing
            home abuse, highlighting patterns of neglect or mistreatment, and
            establishing the damages suffered by the resident. Working with
            legal professionals experienced in nursing home abuse cases can
            ensure that the medical record review process is thorough and the
            relevant information is properly analyzed and utilized to build a
            strong case.
          </p>
          <LinkedServicesList caseType="nursing home" />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default NursingHomeAbuse;
