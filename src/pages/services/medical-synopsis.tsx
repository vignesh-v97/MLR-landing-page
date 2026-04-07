import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';
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

const MedicalSynopsis = () => {
  return (
    <Main
      meta={
        <Meta
          title="Medical Synopsis – Medical Record Review – Medico Legal Request"
          description="A medical synopsis is a concise summary or overview of a patient's medical history, conditions, treatments, and pertinent information derived from their medical records."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical Synopsis Services"
        subheading="Affordable and customized medical synopsis services at $25/hr."
        imgUrl="/assets/images/page-banners/Medical Synopsis.jpg"
        alt="Medical Synopsis-Banner"
      />

      <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full text-gray-600 lg:w-8/12">
            <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl text-primary-400">
              Medical Synopsis Services
            </h1>
            <p className="text-lg text-gray-600">
              A medical synopsis is a concise summary or overview of a patient’s
              medical history, conditions, treatments, and pertinent information
              derived from their medical records. It condenses complex medical
              information into a more manageable and understandable format. A
              well-crafted medical synopsis should convey crucial information
              clearly and concisely.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Are you an attorney or legal professional seeking a concise and
              informative overview of your client’s medical history? We at
              Medico Legal Request LLC specialize in providing high-quality and
              custom medical synopsis services to meet legal professional’s
              unique needs. With the help of our comprehensive medical synopsis
              services, you will understand the case’s merits and make
              well-informed decisions.
            </p>
            <div className="mt-6">
              <h2 className="mb-6 text-xl font-bold text-primary">
                Salient features of our Medical Synopsis Service
              </h2>
              <ul className="mr-10 space-y-5">
                <li className="flex items-start text-left">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  <span className="text-lg leading-tight">
                    A brief narrative of the visit
                  </span>
                </li>
                <li className="flex items-start text-left ">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  <span className="text-lg leading-tight">
                    Every relevant visit and corresponding dates
                  </span>
                </li>
                <li className="flex items-start text-left ">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  <span className="text-lg leading-tight">
                    Highlights of any major events
                  </span>
                </li>
                <li className="flex items-start text-left ">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  <span className="text-lg leading-tight">
                    Can be customized to suit your needs
                  </span>
                </li>
              </ul>
            </div>
            <p className="my-8 text-lg text-gray-600">
              If you have a case to be reviewed or need more info about our
              medical synopsis services, contact us at{' '}
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
          </div>
          <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
            <ServicesList active="Medical Chronology" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default MedicalSynopsis;
