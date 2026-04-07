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
    title: 'What is included in a medical opinion?',
    description:
      'A medical opinion often includes a summary of the case, the negligence or malpractice that was committed, and any relevant citations.',
  },
  {
    title: 'What kind of circumstances call for an expert opinion?',
    description: `Most medical malpractice, negligence, or mass tort claims involve medical opinions in order to strongly support the plaintiff's version of events.`,
  },
  {
    title: 'Do you provide firsthand medical opinions for malpractice cases?',
    description: `Yes, we do. For cases where attorneys are unsure about the breach/injury, we do a preliminary assessment of the medical records and provide a firsthand opinion - generally on a single page with no references or specifics about the issue but sufficient to make a decision.`,
  },
  {
    title: 'How much do you charge for medical opinion services?',
    description: `We’re charging $50/hr for expert medical opinion services. To know the exact price, please share your client's medical records and get a free cost estimate`,
  },
];

const samplesData = SamplesData.expertMedicalOpinion.pages;

const ExpertMedicalOpinion = () => {
  return (
    <Main
      meta={
        <Meta
          title="Expert Medical Opinion Services | Medical Record Review by MDs"
          description="Our doctors conduct a rational evaluation of the medical records and offer an unbiased expert opinion that is tough to refute. Our physician’s opinions are based on the current standard treatment regimen used in the United States healthcare system."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Expert Medical Opinion Services"
        subheading="Medical Opinion Services by Physicians at $50/hr."
        imgUrl="/assets/images/page-banners/Expert Medical Opinion-Banner.jpg"
        alt="Expert Medical Opinion-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Expert Medical Opinion Services
            </h1>
            <p className="text-lg text-gray-600">
              Medical opinions involve reviewing the medical documents,
              including the medical summary of a patient, and figuring out if
              there is negligence or malpractice involved in the standard of
              care given to that patient. Our physicians provide an opinion on a
              medical case based on sound reasoning.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              To establish liability in medical malpractice lawsuits, a medical
              expert or a team of medical specialists is always required. We at
              Medico Legal Request, have a group of doctors from various
              specialties who have no personal or professional relationship with
              the defendants. Our doctors conduct a rational evaluation of the
              medical records and offer an unbiased expert opinion that is tough
              to refute. Our physician's opinions are based on the current
              standard treatment regimen used in the United States healthcare
              system.
            </p>
            <div className="mt-6">
              <h2 className="text-primary text-xl mb-6 font-bold">
                The key points of our Medical Opinion Services
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    A clear verdict on the case's merits and flaws
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Critical issues are highlighted, as well as case strengths
                    and weaknesses.
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    In addition to the views, medical literature is also
                    presented (unsigned).
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Ideal for securing supportive testifying specialists and
                    doing initial case screenings.
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Approximate charge&nbsp;
                    <span className="text-secondary font-medium">
                      for 500 pages of medical records is $150 (3 hours)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-10 text-lg text-gray-600">
              Attorneys who handle medical claims may have a variety of
              questions about their client's medical conditions or issues. Our
              doctors are available to answer those questions that will help
              attorneys understand their client’s medical conditions and
              identify deviations from the standard of care. Expert medical
              opinions are very helpful for a preliminary case evaluation in
              medical malpractice cases.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              For cases where attorneys are unsure about the breach/injury, we
              do a preliminary assessment of the medical records and provide a
              firsthand opinion - generally on a single page with no references
              or specifics about the issue, but sufficient to make a decision.
              For cases in which attorneys have decided to proceed, we give an
              analysis of the case and present the opinion in a detailed format
              that includes questions and answers substantiated with points,
              counter-points, citations, references, and a clear conclusion of
              the merit or demerit of the case.
            </p>
            <h3 className="text-primary my-6 text-xl font-bold">
              Salient features of our MDs Medical Opinion
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Medical opinions are prepared by relevant case specialty MD’s
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Strengthened legal cases
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Trustworthy second opinions
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Enhanced medical understanding
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  1 Week turnaround
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">Free Reference</span>
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
                  Free Missing Medical Records Identification
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 my-8">
              For more information about our expert medical opinion services,
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
                src="https://www.youtube.com/embed/TZqQiVfICX0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Expert Medical Opinion" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default ExpertMedicalOpinion;
