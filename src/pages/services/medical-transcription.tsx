import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';

const faqData = [
  {
    title: 'What is a billing summary and its uses?',
    description: `A "billing summary" lists the client's entire outlay for services on a single sheet, including all medical costs incurred during each visit, modifications, and insurance payments.`,
  },
  {
    title: 'How much does the billing summary cost and is it tailored ?',
    description:
      'The summary costs $25/hr and is customized based on your template if available.',
  },
  {
    title: 'How does the billing summary work?',
    description: `The billing summary aids in understanding the plaintiff's financial situation.`,
  },
  {
    title: 'How are total expenses calculated in the billing summary ?',
    description: `Overall costs are determined by adding up each provider/visit facility's expenses.`,
  },
];

const samplesData = [
  {
    title: 'Medical Transcription Sample',
    img: '/assets/images/samples/Providers List.jpg',
    pdf: '',
  },
];
const MedicalTranscription = () => {
  return (
    <Main
      meta={
        <Meta
          title="Medical and Legal Transcription Services | Transcription Services Company"
          description="Medico Legal Request LLC provides transcription services for all legal firms, clinical specialties, and sub-specialties. We provide customized services"
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Medical & Legal Transcription Services"
        subheading="We provide Professional Transcription Services at
        competitive prices with quick turnaround time."
        imgUrl="/assets/images/page-banners/Medical Transcription-Banner.jpg"
        alt="Medical Transcription-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Medico-Legal Transcription Services
            </h1>
            <p className="text-lg text-gray-600 mt-6">
              Medico Legal Request LLC provides transcription services for all
              legal firms, clinical specialties, and subspecialties. We provide
              customized services for individual and group practices, legal
              firms, hospitals, medical research centers, dentists, nursing
              homes, clinics, and other healthcare professionals.
            </p>
            <p className="text-lg text-gray-600 mt-6">
              Medical transcription is part of the healthcare industry that
              renders and edits dictated reports, procedures, and notes in an
              electronic format in order to create files. Pertinent, up-to-date,
              and confidential patient information is converted into documents
              by a medical transcriptionist (MT).
            </p>
            <p className="text-lg text-gray-600 mt-6">
              All you have to do is send us your audio recordings, and we'll
              turn them into an accurate transcript that's formatted exactly as
              you want it. Medical transcribing services are, of course,
              restricted to professionals involved in the healthcare field.
            </p>
            <p className="text-lg text-gray-600 my-4">
              For more information about our transcription services, Contact us
              at{' '}
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
            <div className="my-10">
              <h4 className="heading mb-6">Reference Image</h4>
              <img
                src="/assets/images/medical-transcription.jpg"
                alt="Sample_Medical Transcription"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Medical Transcription" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default MedicalTranscription;
