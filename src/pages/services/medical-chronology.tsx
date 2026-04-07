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
    title: 'What is medical chronology?',
    description: `A medical chronology is a chronological document of a patient's medical history and treatment. Medical chronologies are valuable tools for healthcare professionals, legal professionals, and insurance companies to review and understand a patient's medical history comprehensively.`,
  },
  {
    title: 'Do you provide medical record summaries to insurance firms?',
    description:
      'Yes, we provide medical record chronology and summary services to insurance firms as well as doctors, medico-legal consultants, and independent paralegals.',
  },
  {
    title:
      'What is the cost of medical chronology? I have medical records less than 500 pages that we need summarized in the next 24 hours or the soonest possible. Do you have that bandwidth and how much would it cost?',
    description: `We're charging $25/hr for medical chronology services. The approximate charge for 500 pages of medical records is $250-$300. However, the cost estimate may vary depending on the case focus pages, complexity of the case, number of visits, handwritten notes, and quality of the records. Yes, we have a team and if you require a medical chronology sooner, please mention the expected delivery date while uploading a case (No expedited fee for rush requests).`,
  },
  {
    title:
      'Can a medical record chronology be customized to meet specific case needs?',
    description:
      'Yes, our medical record chronology services typically offer customization to meet the unique needs of each case. This may include focusing on specific medical events, highlighting critical details, and tailoring the format to suit legal or research requirements.',
  },
  {
    title:
      'How can medical chronology services benefit attorneys and insurance professionals?',
    description: `Medical chronology services streamline the review of extensive medical records, saving time for legal professionals. However, with the help of an excellent medical chronology, they can now obtain a clear and organized understanding of the plaintiff's medical chart, including what happened to the plaintiff, the kind and severity of their injury, the medical treatments they received, the effects of those treatments, and a solid foundation for legal arguments.`,
  },
  {
    title: `Can you guys prepare a review of the medical chronology report using our firm's template?`,
    description:
      'Yes, our team will do it. If you have any specific medical chronology template or sample, forward it to us. Our team will review the format and reach out to you if they have any doubts',
  },
  {
    title:
      'What do your teams do in the medical chronology of personal injury cases?',
    description:
      'Medical case chronology aids in understanding the fundamental sequence of events in medicine. It is a crucial document in a personal injury case because it concisely summarises all of the pertinent medical information. The timeline and summary will make any gaps in the information clear. Our personal injury medical chronology contains injury report patient history, causation/symptoms, providers, dates of treatment, treatment plan, impairment details, and medical treatment details.',
  },
  {
    title:
      'How do I get started? And after I upload the records, do you provide a cost estimate?',
    description: `Just click File Upload and share your client’s medical records with basic details about the case. Yes, after receiving medical records, our team will provide you with a free cost estimate and an expected delivery date. Upon receiving your approval, we will start our work.`,
  },
  {
    title:
      'In the past, another company created a medical chronology report for one of our clients. We have some new records. Do you guys update them in the medical chronology?',
    description: `Yes, Jason. Our team will update them. Please share your client’s medical records with medical chronology (the old version of chronology). We will update the newly received records in the medical chronology and highlight them in different colors for ease of reference, if you prefer.`,
  },
  {
    title: 'Who creates the medical record summary?',
    description: `Medical record summaries are prepared by healthcare professionals, such as physicians, and nurses. They extract and compile essential information from the patient's complete medical record and create accurate chronologies and medical record summaries`,
  },
  {
    title: 'Do you guys charge an expedited fee for rush requests?',
    description: `No, we will not charge any extra fees for rush requests, and our normal turnaround time is 1 week. If you need a medical chronology within a week, share the expected delivery date while uploading a case.`,
  },
];

const samplesData = SamplesData.medicalChronology.pages;

const MedicalChronology = () => {
  return (
    <Main
      meta={
        <Meta
          title="Medical Chronology Services for Paralegal and Attorneys - Chronologies and Summaries"
          description="A medical chronology is a detailed timeline or record of the medical events related to a specific case. In our medical chronology, we summarize and highlight legally and medically significant points that are critical tools at various phases of the case discovery process."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical Chronologies and Timeline Summaries"
        subheading="Get affordable, Concise, and customized medical chronology services at $25/hr."
        imgUrl="/assets/images/page-banners/Medical Record Chronology-Banner.jpg"
        alt="Medical Record Chronology-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Medical Chronology Services
            </h1>
            <p className="text-lg text-gray-600">
              A medical chronology is a detailed timeline or record of the
              medical events related to a specific case. In our medical
              chronology, we summarize and highlight legally and medically
              significant points that are critical tools at various phases of
              the case discovery process. This entails sifting through hundreds
              of pages of medical documents to identify, locate, review, and
              interpret relevant information from the medical records.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Medical record chronologies are often used in legal cases,
              especially in personal injury, medical malpractice, mass tort, and
              SSD claims, to provide attorneys and other professionals with a
              clear understanding of the client’s medical background and the
              sequence of events leading to or following an injury or illness.
              Our medical chronology services help busy attorneys spend less
              time reviewing records and more time optimizing productivity and
              building a winning case.
            </p>
            <div className="mt-6">
              <h2 className="text-primary text-xl mb-6 font-bold">
                The key points of our Medical Record Chronology
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    We sort, organize, and categorize the medical records in
                    chronological order
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Accurately captures the medical record dates, procedures,
                    treatment and other customized data fields
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    The most important points and case-related issues are
                    highlighted in different colors
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Case strengths and weaknesses are reviewed and identified
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Missing medical records are identified and communicated
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    If a chronology needs to be updated at any time, we just add
                    the new information by building on the work that has already
                    been done
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg  leading-tight">
                    Flexible medical record chronology templates
                  </span>
                </li>
                <li className=" flex items-start text-left">
                  <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                  <span className="text-lg   leading-tight">
                    Approximate charge for &nbsp;
                    <span className="text-secondary font-medium">
                      500 pages of medical records is $250 (10 hours)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-10 text-lg text-gray-600">
              We summarize the patient’s medical history in chronological order,
              including the date, provider name, types of visits, and so on. The
              original medical record is cross-referenced with every piece of
              medical data. Our chronological medical summaries save paralegals
              and attorneys time by highlighting key medical facts and
              deviations from the standard of treatment in a particular medical
              malpractice case.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              As part of a review of medical records, creating an accurate,
              concise medical chronology can be challenging. But our nurses and
              physician team make it simple! Depending on client requirements,
              our experts present the medical chronology in different formats.
              We also work on your firm’s medical chronology template as well.
            </p>
            <h3 className="text-primary my-6 text-xl font-bold">
              Salient features of our Medical Chronology Services
            </h3>
            <ul className="mr-10 space-y-5">
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Focused, condensed and precise
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Unbiased, fact-based, and insightful
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Easy-to-read and interpret
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
                  1 week turnaround time
                </span>
              </li>
              <li className=" flex items-start text-left">
                <CheckCircleIcon className="mr-3 w-5 shrink-0 text-secondary" />
                <span className="text-lg  leading-tight">
                  Free cost estimate
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
              For more information about our medical chronology services,
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
                      <p className="group-hover:text-secondary-500 text-center p-2 text-primary-700 font-semibold border-t ">
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
            <div className="w-full">
              <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                className="aspect-video	w-full"
                type="text/html"
                src="https://www.youtube.com/embed/TDJg_W3EUDw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Medical Chronology" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default MedicalChronology;
