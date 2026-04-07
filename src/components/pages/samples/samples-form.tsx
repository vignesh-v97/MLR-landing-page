import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import type SampleFormValues from '@/types/sample-form-type';

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
  reviewServices: yup.object().shape({
    medicalChronology: yup.boolean(),
    expertMedicalOpinion: yup.boolean(),
    medicalTranscription: yup.boolean(),
    narrativeSummary: yup.boolean(),
    billingSummary: yup.boolean(),
    demandLetter: yup.boolean(),
    depositionSummary: yup.boolean(),
  }),
  additionalServices: yup.object().shape({
    hyperLinks: yup.boolean(),
    providersList: yup.boolean(),
    plaintiffFactSheets: yup.boolean(),
    bookmarks: yup.boolean(),
    medInterpret: yup.boolean(),
    juryQuestionnaireSummaries: yup.boolean(),
    missingMedicalRecordsIdentification: yup.boolean(),
    pdfSortingAndMerging: yup.boolean(),
  }),
  specialReports: yup.object().shape({
    listOfInjuries: yup.boolean(),
    comparativeChart: yup.boolean(),
    painAndMedicationGraph: yup.boolean(),
    treatmentChart: yup.boolean(),
    preExistingInjuries: yup.boolean(),
    painScoreChart: yup.boolean(),
    accidentTimeline: yup.boolean(),
    painAndSufferingChart: yup.boolean(),
    diagnosticStudiesChart: yup.boolean(),
  }),
  otherServices: yup.string(),
  deliverySpeed: yup.string(),
  specificInstruction: yup.string(),
});

const SamplesForm = () => {
  const [formStatus, setFormStatus] = useState<'IDLE' | 'LOADING'>('IDLE');

  const formSubmit = async (formData: SampleFormValues) => {
    setFormStatus('LOADING');

    try {
      await axios.post('/api/samples', formData);
      setFormStatus('IDLE');
      toast.success('We received your request!');
    } catch (error) {
      setFormStatus('IDLE');
      toast.error('There was an issue sending the mail, try again');
      console.log(error, 'error');
    }
  };

  const onSubmit = async (values: SampleFormValues, e: any) => {
    await formSubmit(values);
    e.target.reset();
  };
  // formSubmit();
  return (
    <div>
      <div className="my-12">
        <h1 className="max-w-5xl mx-auto mb-4 text-xl font-bold font-openSans text-primary-700 ">
          If you need any other samples, please request using the below form.
        </h1>
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
                      label="*Law Firm Name"
                      placeholder="Law Firm Name"
                      {...register('firmName')}
                      error={errors.firmName?.message}
                      variant="solid"
                      className="flex-1 w-full"
                    />
                    <Input
                      label="*Attorney Name"
                      {...register('contactPerson')}
                      error={errors.contactPerson?.message}
                      variant="solid"
                      className="flex-1 w-full"
                      placeholder="Attorney Name"
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
                  {/* Row 4 */}
                  <div className="">
                    <p className="block mb-3 text-sm font-semibold leading-none text-primary-800">
                      Review Services
                    </p>
                    <div className="flex flex-wrap">
                      <Checkbox
                        label="Medical Chronology"
                        {...register('reviewServices.medicalChronology')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Expert Medical Opinion"
                        {...register('reviewServices.expertMedicalOpinion')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Medical Transcription"
                        {...register('reviewServices.medicalTranscription')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Narrative Summary"
                        {...register('reviewServices.narrativeSummary')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Demand Letter"
                        {...register('reviewServices.demandLetter')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Billing Summary"
                        {...register('reviewServices.billingSummary')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Deposition Summary"
                        {...register('reviewServices.depositionSummary')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className="">
                    <p className="block mb-3 text-sm font-semibold leading-none text-primary-800">
                      Additional Services
                    </p>
                    <div className="flex flex-wrap">
                      <Checkbox
                        label="Hyperlinks/Hotlinks"
                        {...register('additionalServices.hyperLinks')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Providers List"
                        {...register('additionalServices.providersList')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Plaintiff Fact Sheets"
                        {...register('additionalServices.plaintiffFactSheets')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Bookmarks"
                        {...register('additionalServices.bookmarks')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Med Interpret/Med-A-Word"
                        {...register('additionalServices.medInterpret')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Jury Questionnaire Summaries"
                        {...register(
                          'additionalServices.juryQuestionnaireSummaries'
                        )}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="PDF Sorting & Merging"
                        {...register('additionalServices.pdfSortingAndMerging')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Missing Medical Records Identification"
                        {...register(
                          'additionalServices.missingMedicalRecordsIdentification'
                        )}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                    </div>
                  </div>
                  {/* Row 6 */}
                  <div className="">
                    <p className="block mb-3 text-sm font-semibold leading-none text-primary-800">
                      Special Reports
                    </p>
                    <div className="flex flex-wrap">
                      <Checkbox
                        label="List of Injuries"
                        {...register('specialReports.listOfInjuries')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Comparative Chart"
                        {...register('specialReports.comparativeChart')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Pain and Medication Graph"
                        {...register('specialReports.painAndMedicationGraph')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Pre-existing Injuries"
                        {...register('specialReports.preExistingInjuries')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Treatment Chart"
                        {...register('specialReports.treatmentChart')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Pain Score Chart"
                        {...register('specialReports.painScoreChart')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Accident Timeline"
                        {...register('specialReports.accidentTimeline')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Pain & Suffering Chart"
                        {...register('specialReports.painAndSufferingChart')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                      <Checkbox
                        label="Diagnostic Studies Chart"
                        {...register('specialReports.diagnosticStudiesChart')}
                        className="w-full my-1 sm:w-6/12 lg:w-4/12"
                      />
                    </div>
                  </div>

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
                          <span className="text-lg capitalize">Submit</span>
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
    </div>
  );
};

export default SamplesForm;
