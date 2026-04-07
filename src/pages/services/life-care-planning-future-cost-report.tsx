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
    title:
      'Do you need to pre-pay? For requesting life care planning services?',
    description:
      'No, John. You can pay after the life care plan report (LCP) is delivered.',
  },
  {
    title: 'What is a Life care plan?',
    description:
      "A life care plan/Future cost report is an in-depth analysis of a person's financial requirements and costs after a personal injury accident.",
  },
  {
    title: `Where is your expert's team and do they provide Life care plans with the MD’s Signature?`,
    description:
      'Our experts are in India. Yes, our MDs do if you require the signature in the Life care plan (LCP) document. We have some nurse consultants in the United States as well who also prepare life care planning reports.',
  },
  {
    title: 'With what kind of injuries may life care planners assist?',
    description:
      'The Medical Legal Request LLC Group offers assistance with a wide range of injuries, including burns, conditions that result from auto accidents, birth injuries, spinal and neurological injuries, traumatic brain injuries, and other severe and life-threatening conditions.',
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
    .default('Requesting samples for life care planning future cost report'),
});

const samplesData = SamplesData.lifeCarePlan.pages;
const LifeCarePlanningFutureCostReport = () => {
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
          title="Life Care Planning Services in the USA - Future Care Cost Report"
          description="A life care plan, also known as a future cost report, is a comprehensive document that outlines the estimated medical and non-medical needs of an individual who has suffered a catastrophic injury or has a chronic illness."
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Life Care Planning Services"
        subheading="Affordable and customized Life care planning services at $25/hr."
        imgUrl="/assets/images/page-banners/life-care-planning-banner.jpg"
        alt="Life Care Plan/Future Cost Summary-Banner"
      />
      <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full text-gray-600 lg:w-8/12">
            <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl text-primary-400">
              Life Care Planning Services
            </h1>
            <p className="text-lg text-gray-600">
              A life care planning report is a way to plan for an accident
              victim’s future expenses. A life care plan, also known as a future
              care cost report, is a comprehensive document that outlines the
              estimated medical and non-medical needs of an individual who has
              suffered a catastrophic injury or has a chronic illness. It is
              commonly used in legal and insurance contexts to determine the
              future costs associated with the care and support of an individual
            </p>
            <p className="mt-6 text-lg text-gray-600">
              We prepare customized, comprehensive Life Care Planning reports
              for all types of injuries or illnesses, including catastrophic
              injuries.
            </p>
            <h3 className="my-6 text-xl font-bold text-primary">
              The key points of our Life care planning services
            </h3>
            <ul className="mr-10 space-y-5">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Summary of Patient Records
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Current Medical Care
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">Equipment</span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Current Medications
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  History and Background Information
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Current Medical/Physical Status
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">Life Expectancy</span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Recommendations & Future Cost Projection
                </span>
              </li>
            </ul>

            <p className="mt-8 mb-4 text-lg text-gray-600">
              The life care planning report covers various aspects of the
              individual's life, including medical care, assistive devices,
              medications, home modifications, transportation, personal care,
              therapy services, vocational training, and more. It considers the
              individual's specific needs and provides a detailed account of the
              frequency, duration, and cost of each recommended service. Life
              care planning services can be provided by healthcare professionals
              and USA-based nurse consultants. They work with our team to
              develop a comprehensive life care plan report that meets the
              individual's unique needs.
            </p>

            <p className="my-4 text-lg text-gray-600">
              The below sample Life Care Plan was prepared by one of our medical
              experts. Have a look at our life care planning sample and reach
              out to us if any modifications/customizations are required.
            </p>

            <p className="my-4 text-lg text-gray-600">
              For more information about our Life care planning services,
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
            <ServicesList active="Life Care Plan" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default LifeCarePlanningFutureCostReport;
