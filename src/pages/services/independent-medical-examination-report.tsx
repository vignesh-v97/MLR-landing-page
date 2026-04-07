import { CheckCircleIcon, DocumentDownloadIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import Modal from '@/components/pages/modal';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';
import Accordion from '@/components/ui/accordion';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import SamplesData from '@/data/samples';
import type SampleFormValues from '@/types/sample-form-type';
import type SampleRequestTypes from '@/types/sample-request-types';

const faqData = [
  {
    title: 'What is an Independent Medical Evaluation (IME)?',
    description: `An IME is a medical evaluation conducted by a neutral and independent physician to assess an individual's medical condition. It is often requested by insurance companies, employers, or legal entities to obtain an unbiased opinion about a person's health status.`,
  },
  {
    title: 'Why is an IME necessary?',
    description: `An IME is requested to obtain an independent and objective medical opinion about an individual's health, especially when there are conflicting reports or when the extent of impairment or disability is under question. It helps in making informed decisions regarding claims, legal cases, or employment matters.`,
  },
  {
    title: `How is an IME different from a regular doctor's visit?`,
    description: `An IME is performed by a neutral, independent physician who hasn’t previously treated the individual. It's a one-time evaluation focused on specific medical issues or conditions rather than providing ongoing care.`,
  },
];

// require('yup-phone');

const formSchema = yup.object().shape({
  firmName: yup.string().required(),
  contactPerson: yup.string().required(),
  email: yup.string().email().required('Email required'),
  phoneNumber: yup
    .string()
    // .matches(/^[6-9]\d{9}$/, {
    //   message: 'Please enter valid number.',
    //   excludeEmptyString: false,
    // })
    .required(),
  comments: yup.string(),
  reference: yup
    .string()
    .default('Requesting samples for independent medical examination report'),
});

const samplesData = SamplesData.independentMedicalExaminationReport.pages;
const IndependentMedicalExaminationReport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [formStatus, setFormStatus] = useState<'IDLE' | 'LOADING'>('IDLE');

  const formSubmit = async (formData: SampleRequestTypes) => {
    setFormStatus('LOADING');

    try {
      await axios.post('/api/samples', formData);
      setFormStatus('IDLE');
      toast.success('We received your request!');
    } catch (error) {
      setFormStatus('IDLE');
      toast.error('There was an issue sending the mail, try again');
    }
  };

  const onSubmit = async (values: SampleRequestTypes, e: any) => {
    await formSubmit(values);
    e.target.reset();
  };
  return (
    <Main
      meta={
        <Meta
          title="IME Report Drafting Services – Independent Medical Evaluation Report"
          description="An independent medical examination (IME) report is an evaluation conducted by a medical professional who is not involved in the ongoing care of a patient."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Drafting IME Report Services"
        subheading="IME Report Drafting Services for Doctors & Healthcare Firms at $25/hr."
        imgUrl="/assets/images/page-banners/Ime-banner.jpg"
        alt="Independent-medical-examinattion-Banner"
      />
      <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full text-gray-600 lg:w-8/12">
            <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl text-primary-400">
              IME Report Drafting Services
            </h1>
            <p className="text-lg text-gray-600">
              An independent medical examination (IME) report is an evaluation
              conducted by a medical professional who is not involved in the
              ongoing care of a patient. Insurance firms and healthcare
              professionals can save lots of time when choosing our firm’s IME
              report drafting services.
            </p>
            <p className="my-6 text-lg text-gray-600">
              IMEs serve various purposes, including assessing the extent of
              injuries or disabilities, determining the need for ongoing
              treatment, evaluating work-related injuries, reviewing medical
              records, and providing an independent medical opinion for legal or
              insurance purposes. We at Medico Legal Request LLC’s experts
              drafting IME reports for independent doctors and healthcare firms
              to simplify their work.
            </p>

            <h3 className="my-6 text-xl font-bold text-primary">
              The key points of our IME Report services:
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Drafted by Experienced Experts
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Contains Introductory Information, History, Overview, and so
                  on...
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  1 Week turnaround time
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Free cost estimate
                </span>
              </li>
            </ul>

            <div className="">
              <p className="mt-8 mb-2 text-lg text-gray-600">
                Depending on who requests it, an IME report may be used in a
                variety of ways. For instance:
              </p>
              <ul className="mt-3 mb-6 ml-5 space-y-5 list-decimal">
                <li className="text-left">
                  <span className="text-lg leading-tight">
                    An IME requested by the insurance company may be used to
                    confirm or reject accident benefits.
                  </span>
                </li>
                <li className="text-left">
                  <span className="text-lg leading-tight">
                    A plan for an injured employee's safe return to work (i.e.
                    accommodations, altered hours and duties, etc.) may be
                    provided following an IME that was requested by the
                    employer.
                  </span>
                </li>
                <li className="text-left">
                  <span className="text-lg leading-tight">
                    An IME that was sought by a legal professional may be
                    utilized to help determine the amount of compensation that
                    the defendant owes the injured party in the event of a
                    trial, settlement, or mediation.
                  </span>
                </li>
              </ul>
              <p className="my-2 text-lg text-gray-600">
                An independent medical examination aims to provide a more
                thorough picture of your client's injury or medical condition
                for any form of compensation claim or employment fitness issue.
                Making decisions regarding your rehabilitation, return to work,
                or claim is aided by the assessment report.
              </p>
              <p className="my-4 text-lg text-gray-600">
                For more information about our IME report drafting services,
                Contact us today at{' '}
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

            <div className="mt-12 ">
              <h2 className="flex items-center mb-6 text-3xl font-bold bg-white text-primary-400">
                Request Sample
                <DocumentDownloadIcon className="block w-8 ml-2" />
              </h2>
              <div className="flex flex-wrap w-full">
                {samplesData.map((sample) => {
                  return (
                    <div
                      onClick={openModal}
                      className="group block w-10/12 p-4 m-5 transition-all ease-linear bg-white border-2 cursor-pointer sm:w-3/12 shadow-slate-900 hover:shadow-2xl hover:scale-105"
                      key={sample.title}
                    >
                      <img src={sample.img} alt="" className="w-full" />
                      <p className="p-2 font-semibold text-center border-t group-hover:text-secondary-500 text-primary-700">
                        {sample.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Modal
                isOpen={isOpen}
                onClose={closeModal}
                title={'Request Sample form'}
              >
                <div>
                  <Form<SampleFormValues>
                    onSubmit={onSubmit}
                    className="lg:p-4"
                    validationSchema={formSchema}
                  >
                    {({ register, formState: { errors } }) => (
                      <>
                        <div
                          className="w-full max-w-5xl p-5 mx-auto rounded shadow md:p-8 "
                          style={{ backgroundColor: '#DEEBF7' }}
                        >
                          <div className="space-y-12">
                            {/* Row 1 */}
                            <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0 lg:space-x-16">
                              <Input
                                label="*Firm Name"
                                placeholder="Firm Name"
                                {...register('firmName')}
                                error={errors.firmName?.message}
                                variant="solid"
                                className="flex-1 w-full"
                              />
                              <Input
                                label="*Your Name"
                                {...register('contactPerson')}
                                error={errors.contactPerson?.message}
                                variant="solid"
                                className="flex-1 w-full"
                                placeholder="Your Name"
                              />
                            </div>
                            {/* Row 2 */}
                            <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0 lg:space-x-16">
                              <Input
                                label="*Email"
                                placeholder="Email"
                                {...register('email')}
                                error={errors.email?.message}
                                variant="solid"
                                className="flex-1 w-full"
                              />
                              <Input
                                type="text"
                                label="Phone Number"
                                {...register('phoneNumber')}
                                error={errors.phoneNumber?.message}
                                variant="solid"
                                className="flex-1 w-full"
                                placeholder="Phone Number"
                              />
                            </div>
                            {/* Row 3 */}
                            <TextArea
                              label="Comments"
                              placeholder="Comments"
                              {...register('comments')}
                              error={errors.comments?.message}
                              className="flex-1"
                              variant="solid"
                            />

                            {/* ========================= */}
                            <div className="flex justify-center">
                              <button
                                type="submit"
                                className="btn btn-1 mx-auto text-center"
                                disabled={formStatus !== 'IDLE'}
                              >
                                {formStatus === 'LOADING' && (
                                  <div className="loader w-4 h-4 ease-linear border-4 border-t-4 rounded-full border-secondary-200 " />
                                )}
                                {formStatus === 'IDLE' && (
                                  <span className="flex items-center">
                                    <span className="text-lg capitalize">
                                      Submit
                                    </span>
                                  </span>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* <Button className="w-full col-span-2">Submit</Button> */}
                      </>
                    )}
                  </Form>
                </div>
              </Modal>
            </div>
            <div className="py-16">
              <h2 className="mb-4 text-3xl font-bold bg-white text-primary-400">
                FAQ
              </h2>
              <Accordion data={faqData} />
            </div>
          </div>
          <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
            <ServicesList active="Independent Medical Examination" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default IndependentMedicalExaminationReport;
