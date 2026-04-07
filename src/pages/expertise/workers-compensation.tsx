import { CheckCircleIcon } from '@heroicons/react/solid';
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
  'Medical-Only',
  'Temporary Partial Disability',
  'Temporary Total Disability',
  'Permanent Partial Disability',
  'Permanent Total Disability',
  'Death',
  'Vocational Rehabilitation',
];

const WorkersCompensation = () => {
  return (
    <Main
      meta={
        <Meta
          title="Workers’ Compensation - Medical Record Review - Medico Legal Request LLC"
          description="In workers' compensation cases, a medical record review is a critical component in evaluating and determining the extent of an employee's work-related injuries or illnesses."
        />
      }
    >
      <Navbar />
      <div className="">
        <HeroBanner
          title="Workers Compensation"
          subheading="When someone is hurt or ill at work, workers' compensation insurance pays for their medical care as well as lost wages."
          imgUrl="/assets/images/page-banners/Workers Compensation-Banner.jpg"
          alt="Workers Compensation-Banner"
        />

        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="w-full text-gray-600 lg:w-8/12">
              <h1 className="heading mb-4">
                Workers’ compensation Medical Record Review
              </h1>
              <p className="text-lg text-gray-600">
                In workers' compensation cases, a medical records review is a
                critical component in evaluating and determining the extent of
                an employee's work-related injuries or illnesses. It involves
                the examination and analysis of the relevant medical documents
                and records related to the individual's condition.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Our comprehensive medical record review for workers’
                compensation focuses on an accurate chronological breakdown of
                all significant events in the case’s history.
              </p>
              <h3 className="my-6 text-xl font-bold text-primary">
                Workers’ Compensation Claims:
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
                In workers' compensation claims, medical record review is a
                useful tool for attorneys and law firms. It gives them access to
                objective assessments, expert analysis, and evidence support
                that can lead to better outcomes for their clients and more
                effective advocacy in the legal process.
              </p>
              <p className="my-4 text-lg text-gray-600">
                For more information about our workers' compensation medical
                record review services, Contact us at{' '}
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
              <ExpertiseList active="Workers Compensation" />
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
            It is important to consult with legal professionals and experienced
            medical experts specializing in workers' compensation to ensure a
            thorough and accurate medical records review. They can guide you
            through the process, interpret the medical findings, and provide
            valuable insights for your specific case.
          </p>
          <LinkedServicesList caseType="workers’ compensation" />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default WorkersCompensation;
