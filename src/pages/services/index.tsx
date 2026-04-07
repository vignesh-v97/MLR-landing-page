import { CheckIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import Button from '@/components/ui/button';

const servicesList = [
  {
    name: 'Medical Chronology',
    href: '/services/medical-chronology',
    points: [
      'Focused, condensed and precise',
      'Non-biased, fact based and insightful',
      'Presentation of important facts',
      'Highlight the important medical events',
      'Customized templates',
      'Free Bookmarks & Hyperlinks',
    ],
  },
  {
    name: 'Narrative Summary',
    href: '/services/narrative-summary',
    points: [
      'Easy to understand and concise',
      'Flow of Medical events in Chronological order',
      'Highlight the important medical events',
      'Detailed case focus',
      'Summary in story telling format',
      'Free Bookmarks & Hyperlinks',
    ],
  },
  {
    name: 'Settlement Demand Letter',
    href: '/services/settlement-demand-letter',
    points: [
      'Crisp presentation',
      'Future medical expenses',
      'ICD & CPT Codes',
      'Case strengths and weaknesses are identified',
      'Customized templates',
      'Free Billing Summary & Exhibits',
    ],
  },
  {
    name: 'Expert Medical Opinion',
    href: '/services/expert-medical-opinion',
    points: [
      'A clear verdict on the case’s merits and flaws',
      'References pertaining to deviation',
      'Easy to comprehend',
      'Reviewed by experienced MDs',
      'Free cost estimate',
    ],
  },
  {
    name: 'Deposition Summary',
    href: '/services/deposition-summary',
    points: [
      'Concise & Customized formats',
      'Review relevant facts',
      'Drafted by Experts',
      'High quality, friendly, reliable service',
      'Nationwide summarizing',
    ],
  },
  {
    name: 'Billing Summary',
    href: '/services/billing-summary',
    points: [
      'Arranged chronological order',
      'Customized formats',
      'Just $25/hour',
      'Free cost estimate',
    ],
  },
  {
    name: 'Pdf Sorting & Merging',
    href: '/services/pdf-sorting-merging',
    points: [
      'Duplicate records will be removed',
      'Customized work products',
      'Free Bookmarks',
      'Free cost estimate',
    ],
  },
  {
    name: 'Providers List',
    href: '/services/providers-list',
    points: ['Customized work products', 'Just $25/hour', 'Free cost estimate'],
  },
  {
    name: 'Med-A-Word/Med-Interpret',
    href: '/services/med-a-word',
    points: [
      'Customized work products',
      'Just $25/hour',
      'Free cost estimation',
    ],
  },
  {
    name: 'Medical Transcription',
    href: '/services/medical-transcription',
    points: [
      'Customized services for individual and group',
      'Audio to accurate transcripts',
      'Services restricted to professionals',
    ],
  },
  {
    name: 'Bookmarks',
    href: '/services/bookmarks',
    points: [
      'Navigational aids for PDF documents',
      'Organized into user-defined categories',
      'Free cost estimate',
    ],
  },
  {
    name: 'Hot Links/Hyperlinks',
    href: '/services/hot-links',
    points: [
      'Rapid access to associated source pages',
      'Accessible in PDF format',
      'Free Service',
    ],
  },
  {
    name: 'Missing Records Identification',
    href: '/services/missing-records-identification',
    points: [
      'Identify the missed records',
      'Tabular format for easy understanding  ',
      'Free Service',
    ],
  },
  {
    name: 'Special Reports 1',
    href: '/services/special-reports',
    points: [
      'Accident Timeline',
      'Comparative Chart',
      'Treatment Chart',
      'List of Injuries',
      'Pre-existing Injuries',
    ],
  },
  {
    name: 'Special Reports 2',
    href: '/services/special-reports',
    points: [
      'Pain & Suffering Chart',
      'Pain and Medication Graph',
      'Pain Score Chart',
      'Diagnostic Studies Chart',
    ],
  },
];
const Services = () => {
  const router = useRouter();
  return (
    <Main
      meta={
        <Meta
          title="Medical Record Review Services for Attorneys | Medico Legal Request LLC"
          description="We have a team of experts who provide customized medical record review services to the attorneys, law firm, and legal industries."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical Record Review Services for Legal & Insurance Firms"
        subheading="Let us help you simplify your case preparation with expert medical review services tailored to your needs."
        imgUrl="/assets/images/page-banners/Medical Records Review-Banner.jpg"
        alt="Medical Records Review-Banner"
      />

      {/* <Highlights bgColor="bg-neutral-100" /> */}
      <div className=" bg-white p-10 text-center">
        <div className="mx-auto mt-10 mb-20 max-w-5xl">
          <h1 className="mb-4  text-3xl font-bold text-primary">
            CUSTOMIZED MEDICAL RECORD REVIEW SERVICES
          </h1>
          <p className="mb-10 text-lg text-gray-800">
            We have a team of experts who provide customized medical record
            review services to Attorneys, Law Firm, Independent Paralegal,
            Healthcare Firm, and Insurance Firms. Based on our client’s
            requirements we provide customized review services with quick
            turnaround time. Here are some Salient features of our review
            services.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <ul
            role="list"
            className="mx-auto grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          >
            {servicesList.map((serviceItem) => (
              <li
                key={serviceItem.name}
                className="col-span-1 flex flex-col rounded-lg bg-white text-center shadow transition-transform duration-500 hover:scale-105"
              >
                <div className="flex flex-1 flex-col   ">
                  <h3 className="mb-6 bg-primary-500 py-3 text-xl font-bold text-white normal-case">
                    {serviceItem.name}
                  </h3>
                  <ul className="space-y-5 px-4">
                    {serviceItem.points.map((point) => (
                      <li key={point} className=" flex items-center text-left">
                        <CheckIcon className="mr-3 w-5 text-primary-600" />
                        <span className="text-lg  leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="my-4">
                  <Button
                    className="border border-secondary-400 focus:ring-secondary-700"
                    size="small"
                    variant="outline"
                    onClick={() => router.push(serviceItem.href)}
                  >
                    View More
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-10">
          <h1 className="text-white bg-primary-700 text-xl md:text-3xl font-bold py-3">
            Comprehensive Assistance
          </h1>
          <div className="flex  border flex-col md:flex-row">
            <div className="w-full md:w-5/12 p-2 md:p-0 md:m-5">
              <img
                src="/assets/images/services/services-card.jpg"
                alt="Experts-Medical Records Review Services"
              />
            </div>
            <div className="w-full md:w-7/12 px-4 md:px-10 py-5">
              <h2 className="text-primary-600 py-2 text-xl md:text-2xl font-bold mb-6 text-left">
                Medical Record Review and Medical Chart Review Services for Law
                Firm and Insurance Firms
              </h2>
              <div className="space-y-6 text-left">
                <p className="">
                  Medical record review and medical chart analysis are critical
                  components of any personal injury or medical negligence case.
                  Personal injury attorneys, paralegals, medical-legal
                  consultants, independent medical examiners, qualified medical
                  evaluators, and legal nurse reviewers should analyze medical
                  records to understand the facts, causation, and losses during
                  the time of litigation.
                </p>
                <p className="">
                  Analysing and understanding the facts while reviewing medical
                  records is a time-consuming process for people who are not
                  proficient in medical terminologies. We at Medico Legal
                  Request LLC have a team of experts consisting of medical chart
                  review nurses, legal nurse consultants, and physicians to
                  offer medical chart review services. You can save thousands of
                  dollars and hours of time using our medical record review
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Services;
