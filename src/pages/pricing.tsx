import Link from 'next/link';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import ROUTES from '@/data/routes';

/* This example requires Tailwind CSS v2.0+ */
const pricingList = [
  {
    name: 'Medical Chronology/Summary/Timeline',
    link: ROUTES.services.medicalChronology,
    pricing: '$25',
  },
  {
    name: 'Medical Narrative Summary',
    link: ROUTES.services.narrativeSummary,
    pricing: '$25',
  },
  {
    name: 'Settlement Demand Letter',
    link: ROUTES.services.demandLeter,
    pricing: '$25',
  },
  {
    name: 'Expert Medical Opinion',
    link: ROUTES.services.expertMedicalOpinion,
    pricing: '$50',
  },
  {
    name: 'Medical Transcription',
    link: ROUTES.services.medicalTranscription,
    pricing: '$25',
  },
  {
    name: 'Deposition Summary',
    link: ROUTES.services.depositionSummary,
    pricing: '$25',
  },
  {
    name: 'Medical Synopsis',
    link: ROUTES.services.medicalSynopsis,
    pricing: '$25',
  },
  {
    name: 'Medical Expenses/Billing Summary',
    link: ROUTES.services.billingSummary,
    pricing: '$25',
  },
  {
    name: 'Provider List',
    link: ROUTES.services.providersList,
    pricing: '$20',
  },
  {
    name: 'Med-Interpret/ Med-A-Word',
    link: ROUTES.services.medAWord,
    pricing: '$20',
  },
  {
    name: 'PDF Merging & Sorting',
    link: ROUTES.services.pdfSortingMerging,
    pricing: '$20',
  },
  {
    name: 'Jury Questionnaires',
    link: '',
    pricing: '$20',
  },
  {
    name: 'Special Reports (customized)',
    link: ROUTES.services.specialReport,
    pricing: '$20',
  },
  {
    name: 'Bookmarks',
    link: ROUTES.services.bookmarks,
    pricing: 'Free',
  },
  {
    name: 'Hyperlinks',
    link: ROUTES.services.hotlinks,
    pricing: 'Free',
  },
  {
    name: 'Identification of missing medical records',
    link: ROUTES.services.missingRecordIdentification,
    pricing: 'Free',
  },
];

const averageCost = [
  {
    name: 'Medical Chronology	',
    link: ROUTES.services.medicalChronology,
    hours: '10',
    pricing: '$250',
  },
  {
    name: 'Medical Opinion',
    link: ROUTES.services.expertMedicalOpinion,
    hours: '3',
    pricing: '$150',
  },
  {
    name: 'Demand Letter',
    link: ROUTES.services.demandLeter,
    hours: '10',
    pricing: '$250',
  },
  {
    name: 'Narrative Summary',
    link: ROUTES.services.narrativeSummary,
    hours: '8',
    pricing: '$200',
  },
  {
    name: 'Bookmarks & Hyperlinks',
    link: ROUTES.services.bookmarks,
    hours: '3',
    pricing: 'Free',
  },
];

export default function Pricing() {
  return (
    <Main
      meta={
        <Meta
          title="Pricing - Medical Record Review Services -  Medico Legal Request LLC"
          description="Medical record review and chronology services at $25/hr. We will share you the estimation for all cases before we start the production process"
        />
      }
    >
      <>
        <Navbar />
        <HeroBanner
          title="Our Pricing"
          subheading="Medical Record Review Services for Attorneys, Law firm and Insurance Firms"
          imgUrl="/assets/images/page-banners/Our Pricing-Banner.jpg"
          alt="Our Pricing-Banner"
        />
        <div className="mx-4 max-w-7xl lg:mx-auto ">
          <div className="flex flex-col items-start justify-between my-10 lg:flex-row">
            <div className="max-w-5xl">
              <h1 className="px-8 text-2xl font-bold text-primary-400 ">
                Pricing - Medical Record Review Services
              </h1>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-8">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Review Services
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Pricing
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            {pricingList.map((pricing, pricingIdx) => (
                              <tr
                                key={pricing.name}
                                className={
                                  pricingIdx % 2 === 0
                                    ? undefined
                                    : 'bg-gray-100'
                                }
                              >
                                <td className="py-4 pl-4 pr-3 text-sm font-medium duration-100 ease-linear border-r text-primary-700 sm:pl-6 sm:pr-16 hover:scale-105">
                                  <Link href={pricing.link} passHref>
                                    <a>{pricing.name}</a>
                                  </Link>
                                </td>
                                <td className="px-5 py-4 text-sm text-gray-500 ">
                                  <span className="mr-2 text-primary-800">
                                    {pricing.pricing}
                                  </span>
                                  <span className="text-primary-600">
                                    {pricing.pricing !== 'Free' && '/ hour'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="invisible hidden px-8 my-4 text-red-700 lg:block">
                *Final cost estimate may vary depends on the case focus pages,
                complexity of the case, Number of visits, handwritten notes &
                quality of the records. We will share you the
                <span className="text-primary-500">
                  &nbsp;final cost estimate for your approval
                </span>
                , before we proceed our work.
              </p>
            </div>
            {/* ================================= */}
            <div className="max-w-5xl mt-8 lg:mt-0">
              <div className="px-8 mb-6 text-gray-600">
                <span className="font-bold text-primary-700">
                  Request a Free Quote: &nbsp;
                </span>
                <Link href="/upload-form">
                  <a href="" className="font-medium text-secondary-600">
                    Upload your clients' medical records&nbsp;
                  </a>
                </Link>
                and get a free cost estimate and delivery date. You don’t need
                to worry about the quote because we will start our work once we
                get a approval from your end.
              </div>
              <h1 className="px-8 text-lg text-gray-600">
                Average Cost Estimate for
                <span className="font-bold text-primary-800">
                  {' '}
                  500 Pages
                </span>{' '}
                of Medical Record Review,
              </h1>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-8">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Review Services
                              </th>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Hours
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Pricing
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            {averageCost.map((pricing, pricingIdx) => (
                              <tr
                                key={pricing.name}
                                className={
                                  pricingIdx % 2 === 0
                                    ? undefined
                                    : 'bg-gray-100'
                                }
                              >
                                <td className="py-4 pl-4 pr-3 text-sm font-medium duration-100 ease-linear border-r text-primary-700 sm:sm:pr-16 hover:scale-105">
                                  <Link href={pricing.link} passHref>
                                    <a>{pricing.name}</a>
                                  </Link>
                                </td>
                                <td className="py-4 pl-4 pr-3 text-sm font-medium border-r text-primary-700 sm:pl-6">
                                  {pricing.hours}
                                </td>
                                <td className="px-5 py-4 text-sm text-gray-500 ">
                                  <span className="mr-2 text-primary-800">
                                    {pricing.pricing}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="px-8 my-4">
                  <span className="font-bold text-primary-700">
                    *Please note: &nbsp;
                  </span>
                  Final cost estimate may vary depending on the case focus
                  pages, complexity of the cases, number of visits, handwritten
                  notes, and quality of the records.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Main>
  );
}
