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
    title: 'What is the typical charge for a demand letter drafting service?',
    description: `We’re charging $25/hr for drafting demand letters. Upload your client’s medical records and get a free cost estimate with an expected delivery date before proceeding with the case.`,
  },
  {
    title: 'What does a settlement demand letter serve?',
    description: `The main goal of demand letters is to outline what happened and request payment for your client's injury. A well-drafted personal injury settlement letter convinces an insurance adjuster that settling the case is better than going to court.`,
  },
  {
    title: 'What do you include in the settlement demand letter?',
    description:
      'In the settlement demand letter, we include the claim details, facts and liability, a summary of injuries, accident images, medical expenses, lifestyle impact, future medical expenses, and other notes. Also, we do follow customized demand letter templates upon your request.',
  },
  {
    title: 'Can you draft the demand letter using our firm’s template?',
    description: `Yes, our team will do it. Please share your firm's sample demand letter or template with us (email: support@medicolegalrequestllc.com). Our team will review the format and reach out to you if they have any doubts or clarifications.`,
  },
  {
    title:
      'I am concerned about the confidential documents of my client. Which security measures do you follow?',
    description:
      'You don’t have to worry about confidentiality, we strictly follow HIPPA compliance, and provide security solutions such as access control, encryption, secure file-sharing tools, data loss prevention, and network security solutions. Confidential information about your clients is secure with us.',
  },
  {
    title: 'What are Exhibits?',
    description:
      'Exhibits are a sequence of the occurrences in chronological order right after the MVA, extracted from the medical records and bills provided. Medical records will be organized so that they are simple to utilize for future reference.',
  },
  {
    title: 'What expenses are summarized in the Billing Summary?',
    description:
      'In our billing summary service, we summarize all the medical expenses related to the accident/injury from the received medical records.',
  },
  {
    title:
      'How do I get started? After I upload the records, do you provide a cost estimate?',
    description:
      'Just click File Upload and share your client’s medical records with basic details about the case. Yes, after receiving medical records, our team will provide you with a free cost estimate and an expected delivery date for your approval.',
  },
];

const samplesData = SamplesData.demandLetter.pages;

const NarrativeSummary = () => {
  return (
    <Main
      meta={
        <Meta
          title="Drafting Settlement Demand Letter - Demand Letter Services for Attorneys"
          description="Demand Letter Services: We at Medico Legal Request LLC, help paralegals and attorneys save a lot of time and cost with customized demand letter drafting services."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Demand Letter Services for Attorneys"
        subheading="Get a well-drafted and customized demand letters for your personal injury cases at $25/hr."
        imgUrl="/assets/images/page-banners/Settlement Demand Letter-Banner.jpg"
        alt="Settlement Demand Letter-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Demand Letter Services
            </h1>
            <p className="text-lg text-gray-600">
              Drafting a settlement demand letter is an important step in the
              negotiation process for personal injury claims. Organizing the
              case information might take a significant amount of time when
              drafting demand letters. We at Medico Legal Request LLC, help
              paralegals and attorneys save a lot of time and cost with
              customized demand letter drafting services.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Our expert’s demand letter contains the facts and liability,
              accident images, a summary of physical injuries, the treatment and
              care provided, medical bills and future medical expenses,
              lifestyle impact, and other pertinent information. Based on the
              specific case needs and facts, every settlement letter is unique.
              The objective of the demand letter is to convey details about the
              accident in order to encourage the insurance adjuster to
              compensate you fairly and adequately.
            </p>
            <div className="mt-6">
              <h2 className="text-primary text-xl mb-6 font-bold">
                The key points of our Demand Letter Services
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Gives an overview of the incident's facts
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Summary of the accident or incident
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Injuries, pain, and suffering are described in detail
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Summary of Physical Injuries with ICD Codes
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Providing a clear description of the reduced quality of life
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Medical treatment statements and a summary of Medical
                    Expenses/Medical Bills
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Lost income statements
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Amount demanded in a personal injury settlement.
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg   leading-tight">
                    Approximate charge for &nbsp;
                    <span className="text-secondary font-medium">
                      500 pages of medical records is $200 (8 hours)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-10 text-lg text-gray-600">
              The goal of a settlement demand letter is to get more compensation
              by highlighting all of the events in a medical situation. Writing
              an effective settlement demand letter increases your chances of
              winning your claim.
            </p>
            <div className="my-8">
              <h2 className="mb-5 text-primary  text-xl font-bold">
                Types of demand letters
              </h2>
              <ul className="ml-5 space-y-5 list-decimal">
                <li className="text-left">
                  <span className="text-lg leading-tight">
                    Normal Settlement Demand Letter
                  </span>
                </li>
                <li className="text-left">
                  <span className="text-lg leading-tight">
                    Under-Insured Demand Letter
                  </span>
                </li>
                <li className="text-left">
                  <span className="text-lg leading-tight">
                    Stowers Demand Letter
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-lg text-gray-600">
              Are you a personal injury lawyer or paralegal? Are you worried
              about the demand letter draft? We are here for you. We have a team
              of experts who provide customized demand letter services at
              affordable price. For your reference, we have given our firm’s
              sample demand letter below. We also work on your firm’s demand
              letter templates as well.
            </p>
            <h3 className="text-primary my-6 text-xl font-bold">
              Salient features of our demand letter drafting services
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  With our customized demand letter templates, you can address
                  all of the important parts needed to write an effective demand
                  letter
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Concentrate on assisting the attorney or law firm in reaching
                  out-of-court settlements.
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  By outsourcing demand letters, you can save a lot of time,
                  effort, and cost.
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Demand letters are prepared by experienced professionals
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
                  Free cost Estimate
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
                  Free Billing Summary and Exhibits
                </span>
              </li>
            </ul>
            <p className="mt-8 text-lg text-gray-600">
              Outsourcing demand letter services can help you save a lot of time
              and cost, while also improving the quality of the demand letters
              and turnaround time.
            </p>
            <p className="text-lg text-gray-600 my-6">
              For more information about our settlement demand letter services,
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
                src="https://www.youtube.com/embed/k-3LbTwkhac?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Demand Letter" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default NarrativeSummary;
