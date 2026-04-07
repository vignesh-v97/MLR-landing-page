import { CheckCircleIcon, DocumentDownloadIcon } from '@heroicons/react/solid';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';
import Accordion from '@/components/ui/accordion';
import SamplesData from '@/data/samples';

const faqData = [
  {
    title: 'What methods can be used to prepare a deposition summary?',
    description:
      'Various approaches are as follows: Page-line summarization method, Topic summarization method, and Chronological summarization method. Additionally, they can be personalized for you.',
  },
  {
    title: 'Why should I outsource deposition summaries?',
    description:
      'Deposition testimony includes vital information that attorneys may utilize to better defend their clients. It may take time for busy legal practitioners to extract the main points from all of the deposition testimony in order to establish the case. Outsourcing to a reputable provider is a realistic solution. MLR LLC professionally prepares deposition summaries by condensing difficult deposition testimony into an easy-to-use format, increasing productivity, reducing effort, and saving you time and money.',
  },
  {
    title: 'Who do you provide services for?',
    description:
      'We offer deposition summaries to law firms, independent attorneys, paralegals, medical professionals, and independent medical examiners.',
  },
  {
    title:
      'How do I get started? After I upload the records, do you provide a cost estimate?',
    description:
      'Just click File Upload and share your client’s medical records with basic details about the case. Yes, after receiving medical records, our team will provide you with a free cost estimate and an expected delivery date for your approval.',
  },
  {
    title: 'What details are included in a deposition summary?',
    description: `Important objections raised during the deposition, facts, and remarks from significant witnesses are usually included in deposition summaries. The purpose is to offer a detailed summary of the deposition's content.`,
  },
  {
    title:
      'Can deposition summaries be customized to meet my unique requirements?',
    description:
      'Yes, our deposition summary services are customizable. If you have any specific sample deposition summary or format to be followed, please share it with us. Our team will be happy to work on that.',
  },
];

const samplesData = SamplesData.depositionSummary.pages;
const DepositionSummary = () => {
  return (
    <Main
      meta={
        <Meta
          title="Deposition Summary Services for Law Firms - Outsource Depo Transcripts"
          description="Medico Legal Request LLC provides deposition summary services to law firms, individual attorneys, and paralegals to assist them in better preparing for trials without having to summarise the full deposition on their own."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Deposition Summary Services"
        subheading="Get customized, accurate, concise, and affordable deposition summary services at $25/hr."
        imgUrl="/assets/images/page-banners/Deposition Summary-Banner.jpg"
        alt="Deposition Summary-Banner"
      />
      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Deposition Summary Services
            </h1>
            <p className="text-lg text-gray-600 my-6">
              Medico Legal Request LLC provides deposition summary services to
              law firms, individual attorneys, and paralegals to assist them in
              better preparing for trial without having to summarise the full
              deposition on their own. Creating a deposition summary can be a
              lengthy process. When you outsource deposition summary services,
              you save a lot of time that you may use on other critical
              case-related responsibilities.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Our deposition summary service comprises a thorough analysis of
              all deposition transcripts related to a particular case. We have a
              team of experts who can condense hours of deposition testimony
              into a succinct summary that can save lawyers hours of time and
              thousands of dollars in legal expenses. Dates, figures, names, and
              exhibits are all meticulously recorded. We keep track of important
              events and actions.
            </p>
            <div className="mt-6">
              <h2 className="text-primary text-xl mb-6 font-bold">
                The key points of our Deposition Summary Services
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Drafting depositions relevant to the client's case
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Identifying and analyzing depositions
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Highlights key events and actions
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Analysis of key issues
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Ensuring conformity with the law firms to maintain standards
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Precise page/line format with topic headers
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Ability to adapt to your preferred format.
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mt-8 text-lg text-gray-600 my-2">
                Are you looking to outsource deposition summaries in order to
                efficiently evaluate the depositions? If yes, we can assist with
                precise, succinct, and insightful deposition summaries.
              </p>
              <div className="my-8">
                <h2 className="mb-5 text-primary  text-xl font-bold">
                  Types of deposition summaries
                </h2>
                <ul className="ml-5 space-y-5 list-decimal">
                  <li className="text-left">
                    <span className="text-lg leading-tight">
                      Page line deposition summary
                    </span>
                  </li>
                  <li className="text-left">
                    <span className="text-lg leading-tight">
                      Topic-by-Topic deposition summary
                    </span>
                  </li>
                  <li className="text-left">
                    <span className="text-lg leading-tight">
                      Chronological deposition summary
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-600 my-2">
                Deposition summaries are a necessary component of litigation
                services because they reduce the burden on litigators of having
                to sift through the huge volume of deposition pages. Nationwide,
                we provide accurate deposition summaries to hundreds of
                paralegals and attorneys to cut their workload in half.
              </p>
            </div>
            <h3 className="text-primary my-6 text-xl font-bold">
              Salient features of our Deposition Transcript Summary
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Flexible deposition summary templates
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Expertise in summarizing in a clear, concise format
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Summaries help a lot in pre-trial preparation
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Reducing the time spent by the reviewer
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Ability to handle high-volume deposition transcripts
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  40-50% cost savings
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Complete confidentiality & accuracy
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  1 Week turnaround time
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Free cost estimate
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 my-8">
              For more information about our deposition summary services,
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
            <div className="mt-12 ">
              <h2 className="mb-6 flex items-center bg-white text-3xl font-bold text-primary-400">
                Download Sample
                <DocumentDownloadIcon className="ml-2 block w-8" />
              </h2>
              <div className="flex w-full flex-wrap">
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
            </div>
            <div className="py-16">
              <h2 className="mb-4 bg-white text-3xl font-bold text-primary-400">
                FAQ
              </h2>
              <Accordion data={faqData} />
            </div>
            <div className="">
              <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                className="aspect-video	w-full"
                type="text/html"
                src="https://www.youtube.com/embed/lDE5jMy80RU?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Deposition Summary" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default DepositionSummary;
