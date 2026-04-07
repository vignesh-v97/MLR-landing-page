/* eslint-disable react/no-unescaped-entities */
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
  'Motor Vehicle Accidents',
  'Burn Injuries',
  'Daycare Provider Negligence',
  'Dog Bite',
  'Slip and Fall',
  'Gunshot Injuries',
  'Head and Spinal Injuries',
  'Mesothelioma',
  'Pedestrian accidents',
  'Premises Liability',
  'Psychological trauma',
  'Sexual Assault',
  'Railroad Injuries',
  'Spinal Cord Injuries',
  'Asbestos Exposure',
  'Workers Compensation',
  'Workplace Injuries',
];

const PersonalInjury = () => {
  return (
    <Main
      meta={
        <Meta
          title="Personal Injury - Medical Record Review and Summary Services"
          description="Medico Legal Request LLC provides reliable and cost-effective medical record review services for personal injury attorneys and insurance firms. In our medical record review, we provide all the essential points to substantiate the damages incurred."
        />
      }
    >
      <Navbar />
      <div className="">
        <HeroBanner
          title=" Personal Injury"
          subheading="Personal injury is a legal term for an injury to the body, mind, or emotions, as opposed to an injury to property."
          imgUrl="/assets/images/page-banners/Personal Injury-Banner.jpg"
          alt="Personal Injury-Banner"
        />

        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="w-full text-gray-600 lg:w-8/12">
              <h1 className="heading mb-4">
                Personal Injury Medical Record Review
              </h1>
              <p className="text-lg text-gray-600">
                Personal injury medical record review plays an important role in
                the legal process by providing a comprehensive and objective
                assessment of the injuries sustained. It forms the foundation
                for building a strong case, determining liability, and
                facilitating fair compensation for the injured party.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Medico Legal Request LLC provides reliable and cost-effective
                {''}
                <Link href="/services">
                  <a className="text-secondary">
                    &nbsp;medical record review services&nbsp;
                  </a>
                </Link>
                {''}
                for personal injury attorneys and insurance firms. In our
                medical record review, we provide all the essential points to
                substantiate the damages incurred. We also notify of any
                pre-existing medical conditions which may act as a defense point
                in some cases. Our review services and medical summary entitles
                all the strengths and weakness in the provided case and enables
                our clients to settle the claims.
              </p>
              <h3 className="my-6 text-xl font-bold text-primary">
                Personal Injury Cases We Handled:
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
                We will review the patient's medical records and prepare the{' '}
                {''}
                <Link href="/services/settlement-demand-letter">
                  <a className="text-secondary">demand letters,</a>
                </Link>{' '}
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
                  <a className="text-secondary">
                    &nbsp;medical chart reports&nbsp;
                  </a>
                </Link>
                {''}
                that clearly outline the extent of the injury, dates and
                frequency of treatments, service providers, and prior conditions
                that were affected or made worse, whether additional treatment
                is required, and potential future health complications.
              </p>
              <p className="my-4 text-lg text-gray-600">
                For more information about our personal injury medical record
                review services, Contact us at{' '}
                <a className="text-secondary" href="tel:+1 903-765-6073">
                  +1 (903) 765-6073
                </a>{' '}
                or email us at{' '}
                <a
                  href="mailto:support@medicolegalrequestllc.com"
                  className="break-all text-secondary "
                >
                  support@medicolegalrequestllc.com.
                </a>
              </p>
            </div>
            <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
              <ExpertiseList active="Personal Injury" />
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
            Every personal injury lawyer is confronted with a mountain of
            medical records/documents that must be analyzed in order to
            determine the case's medical difficulties. While personal injury
            plaintiffs may have a legal right to recover costs related to their
            injuries, the nature and degree of damages cannot be easily
            ascertained without an attorney devoting additional time to
            investigating the facts. Our medical record review experts assist
            such lawyers by summarizing lengthy medical documents. Our medical
            chronologies and summaries are organized in such a way that they cut
            down on attorney's review time.
          </p>
          <div>
            <LinkedServicesList caseType="personal injury" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default PersonalInjury;
