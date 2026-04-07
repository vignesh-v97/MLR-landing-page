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
    title: 'How much do you charge for narrative summary reports?',
    description:
      'Normally, we charge $25/hr for narrative summary services. An approximate charge for 500 pages of medical records would take $150-$200 to draft a medical narrative summary. However, the cost estimate may vary depending on the type of medical record, quality, handwritten notes, and office visits.',
  },
  {
    title: 'What is a medical narrative summary?',
    description:
      'A medical narrative summary is a concise report that describes all the medical treatments in an easy-to-understand and storytelling format.',
  },
  {
    title: 'What distinguishes a medical chronology from a narrative summary?',
    description:
      'In contrast to the narrative summary, which is written in the past tense like an article, the desired template for the medical chronology mentions the subject verbatim.',
  },
  {
    title: 'Who is responsible for writing the narrative summary services?',
    description:
      'The medical narrative summary reports are prepared by experienced, credentialed nursing staff and medical professionals.',
  },
  {
    title:
      'We have 1200 pages of medical records that need to be summarized. How long would it take?',
    description: `It would take one week to complete the summarization. If you have any specific deadlines, we will meet them without an expedited fee.`,
  },
  {
    title: 'Do you provide medical record summaries to insurance firms?',
    description: `Yes, we do provide medical record summaries to insurance firms as well as law firms and other medico-legal healthcare industries that require medical record summarization services.`,
  },
];

const samplesData = SamplesData.narrativeSummary.pages;

const NarrativeSummary = () => {
  return (
    <Main
      meta={
        <Meta
          title="Narrative Summary Services for Law Firms | Medical Record Review"
          description="In chronological order, our narrative summaries capture and highlight all of the major events that define the course of a case. A medical narrative summary report allows an attorney to concentrate on the more crucial areas of a case, such as establishing liability, causation, and damages."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Narrative Summary Services"
        subheading="Affordable, Clear, and concise narrative summary services at $25/hr."
        imgUrl="/assets/images/page-banners/Narrative Summary-Banner.jpg"
        alt="Narrative Summary-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Medical Narrative Summary Services
            </h1>
            <p className="text-lg text-gray-600">
              In chronological order, our narrative summaries capture and
              highlight all of the major events that define the course of a
              case, including diagnostic procedures, office visits and
              consultations, therapy visits, and other pertinent medical
              records. With the aid of our case narration, a jury that is not
              familiar with medical jargon, acronyms, or symbols can better
              comprehend vast amounts of information that are difficult for them
              to examine and comprehend.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              A medical narrative summary report allows an attorney to
              concentrate on the more crucial areas of a case, such as
              establishing liability, causation, and damages. We don't usually
              include routine findings in our narrative summaries, but they may
              be included if the case needs them.
            </p>
            <div className="mt-6">
              <h2 className="text-primary text-xl mb-6 font-bold">
                The key points of our Narrative Summary Services
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Flow of medical events in chronological order
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Facility name and Provider name will be taken in each visit,
                    study, and others
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Information will be captured in an easily readable narrative
                    format
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Case strengths and weaknesses are identified
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    SOAP format (Subjective, Objective, Assessment, and Plan)
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Highlight the important medical events
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    We exclude repetitive and duplicate details
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Approximate charge for{' '}
                    <span className="text-secondary font-medium">
                      500 pages of medical records is $200 (8 hours)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-10 text-lg text-gray-600">
              The narrative summary will concentrate on all of the injuries
              received as a result of the accident, as well as any pre-existing
              injuries that were aggravated as a result of the accident. The
              pre-existing conditions that are relevant to the case focus will
              be briefly described. We don't usually include routine findings in
              our narrative summaries, but they may be included if the case
              needs them.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              We specialize in drafting narrative summaries for a wide range of
              injury cases, including but not limited to car accidents, slip and
              fall accidents, bike accidents, workers’ compensation, medical
              malpractice, disabilities, dog bites, burns, and sexual
              harassment. Our summaries are customized to meet the needs of each
              case.
            </p>
            <h3 className="text-primary my-6 text-xl font-bold">
              Salient features of our Narrative Summary
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Suitable for pre-deposition and demand letter preparation
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Prepared by an experienced nurse consultants and MDs
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Easy to understand and concise
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Saves time, effort, and cost
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Highlight the important medical events
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
                  Free Cost Estimate
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Free missing medical records identification
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Free Bookmarks & Hyperlinks
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 my-8">
              For more information about our narrative summary services, Contact
              us at{' '}
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
                src="https://www.youtube.com/embed/ZvZ4zUqmCzU?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Narrative Summary" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default NarrativeSummary;
