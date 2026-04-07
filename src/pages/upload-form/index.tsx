import { ChevronRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Footer from '@/components/footer';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import Radio from '@/components/ui/forms/radio/radio';
import TextArea from '@/components/ui/forms/text-area';

type FormValues = {
  lawFirmName: string;
  attorneyName: string;
  contactPersonName: string;
  email1: string;
  email2: string;
  caseName: string;
  caseOverview: string;
  reviewServices: {
    medicalChronology: boolean;
    expertMedicalOpinion: boolean;
    narrativeSummary: boolean;
    billingSummary: boolean;
    imeReport: boolean;
    lifeCarePlanning: boolean;
    medicalSynopsis: boolean;
    demandLetter: boolean;
    depositionSummary: boolean;
  };
  additionalServices: {
    medicalTranscription: boolean;
    hyperLinks: boolean;
    providersList: boolean;
    plaintiffFactSheets: boolean;
    bookmarks: boolean;
    medInterpret: boolean;
    juryQuestionnaireSummaries: boolean;
    missingMedicalRecordsIdentification: boolean;
    pdfSortingAndMerging: boolean;
  };
  specialReports: {
    listOfInjuries: boolean;
    comparativeChart: boolean;
    painAndMedicationGraph: boolean;
    treatmentChart: boolean;
    preExistingInjuries: boolean;
    painScoreChart: boolean;
    accidentTimeline: boolean;
    painAndSufferingChart: boolean;
    diagnosticStudiesChart: boolean;
  };
  otherServices: string;
  deliverySpeed: string;
  specificInstruction: string;
};

const formSchema = yup.object().shape({
  lawFirmName: yup.string().required('Law firm name required.'),
  attorneyName: yup.string(),
  contactPersonName: yup.string(),
  email1: yup.string().email().required('Primary email required'),
  email2: yup.string().email(),
  caseName: yup.string().required('Case name requried'),
  caseOverview: yup.string(),
  reviewServices: yup.object().shape({
    medicalChronology: yup.boolean(),
    expertMedicalOpinion: yup.boolean(),
    narrativeSummary: yup.boolean(),
    billingSummary: yup.boolean(),
    imeReport: yup.boolean(),
    lifeCarePlanning: yup.boolean(),
    medicalSynopsis: yup.boolean(),
    demandLetter: yup.boolean(),
    depositionSummary: yup.boolean(),
  }),
  additionalServices: yup.object().shape({
    medicalTranscription: yup.boolean(),
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

const UploadForm = () => {
  const router = useRouter();
  const [isExpediateSelected, setIsExpediateSelected] = useState(false);
  const [formStatus, setFormStatus] = useState<'IDLE' | 'LOADING'>('IDLE');

  const formSubmit = async (formData: FormValues) => {
    setFormStatus('LOADING');
    try {
      await axios.post('/api/upload', formData);
      setFormStatus('IDLE');
      toast.success('We received your request!');
      setTimeout(() => {
        router.push('/upload-form/upload-files');
      }, 1000);
    } catch (error) {
      setFormStatus('IDLE');
      toast.error('There was an issue sending the mail, try again');
      console.log(error, 'error');
    }
  };

  const onSubmit = async (values: FormValues, e) => {
    console.log(values, 'values');
    await formSubmit(values);
    e.target.reset();
  };
  return (
    <div>
      <Main
        meta={
          <Meta
            title="Submit Your New Case with Case Details - Medical Record Review"
            description="Submit your medical records: Law firm name, contact person name, email, case overview and instructions, review services, additional services and special reports"
          />
        }
      >
        <Navbar />
        <div className="pt-12 pb-20">
          <h1 className="max-w-5xl mx-auto mb-4 text-xl font-semibold underline font-openSans text-primary-700">
            Step-1: Please use the below form to submit the case details
          </h1>
          <Form<FormValues>
            onSubmit={onSubmit}
            className="p-4"
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
                    <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-16">
                      <Input
                        label="*Firm Name"
                        placeholder="Firm Name"
                        {...register('lawFirmName')}
                        error={errors.lawFirmName?.message}
                        variant="solid"
                        className="flex-1 w-full"
                      />
                      <Input
                        label="Attorney Name"
                        {...register('attorneyName')}
                        error={errors.attorneyName?.message}
                        variant="solid"
                        className="flex-1 w-full"
                        placeholder="Attorney Name"
                      />
                      <Input
                        label="Contact Person Name "
                        placeholder="Contact Person Name "
                        {...register('contactPersonName')}
                        error={errors.contactPersonName?.message}
                        variant="solid"
                        className="flex-1 w-full"
                      />
                    </div>
                    {/* Row 2 */}
                    <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-16">
                      <Input
                        label="*Email-1"
                        placeholder="Primary Email"
                        {...register('email1')}
                        error={errors.email1?.message}
                        variant="solid"
                        className="flex-1 w-full"
                      />
                      <Input
                        label="Email-2"
                        {...register('email2')}
                        error={errors.email2?.message}
                        variant="solid"
                        className="flex-1 w-full"
                        placeholder="Secondary Email"
                      />
                      <Input
                        label="*Case Name"
                        placeholder="Case Name"
                        {...register('caseName')}
                        error={errors.caseName?.message}
                        variant="solid"
                        className="flex-1 w-full"
                      />
                    </div>
                    {/* Row 3 */}
                    <TextArea
                      label="Case Overview"
                      placeholder="Case related details. Such as focus, date of incident"
                      {...register('caseOverview')}
                      error={errors.caseOverview?.message}
                      className="flex-1 w-full"
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
                          label="Demand Letter"
                          {...register('reviewServices.demandLetter')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="Deposition Summary"
                          {...register('reviewServices.depositionSummary')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="Narrative Summary"
                          {...register('reviewServices.narrativeSummary')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="Expert Medical Opinion"
                          {...register('reviewServices.expertMedicalOpinion')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="Billing Summary"
                          {...register('reviewServices.billingSummary')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="IME Report"
                          {...register('reviewServices.imeReport')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="Life Care Planning"
                          {...register('reviewServices.lifeCarePlanning')}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
                        <Checkbox
                          label="Medical Synopsis"
                          {...register('reviewServices.medicalSynopsis')}
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
                          label="Medical Transcription"
                          {...register(
                            'additionalServices.medicalTranscription'
                          )}
                          className="w-full my-1 sm:w-6/12 lg:w-4/12"
                        />
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
                          {...register(
                            'additionalServices.plaintiffFactSheets'
                          )}
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
                          {...register(
                            'additionalServices.pdfSortingAndMerging'
                          )}
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
                    {/* ROW 7 */}
                    <div className="">
                      <Input
                        label="Other Services"
                        placeholder="Other Services"
                        {...register('otherServices')}
                        error={errors.otherServices?.message}
                        variant="solid"
                        className="w-4/12"
                      />
                    </div>
                    {/* ROW 8 */}
                    <div className="">
                      <p className="block mb-3 text-sm font-semibold leading-none text-primary-800">
                        Delivery Speed:
                      </p>
                      <div className="flex items-start space-x-8 ">
                        <Radio
                          id="oneWeekTat"
                          {...register('deliverySpeed')}
                          name="deliverySpeed"
                          label="One Week TAT"
                          type="radio"
                          value="One Week TAT"
                          checked={!isExpediateSelected}
                          onClick={(e) =>
                            setIsExpediateSelected(e.target?.checked && false)
                          }
                        />
                        <div className="flex flex-col">
                          <Radio
                            id="expediate"
                            name="deliverySpeed"
                            label="Expediate (For Rush Request)"
                            type="radio"
                            checked={isExpediateSelected}
                            onClick={(e) =>
                              setIsExpediateSelected(e.target?.checked && true)
                            }
                          />
                          {isExpediateSelected && (
                            <Input
                              placeholder="dd-mm-yyyy"
                              {...register('deliverySpeed')}
                              error={errors.deliverySpeed?.message}
                              variant="solid"
                              className="w-full mt-5"
                              type="date"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* ROW 9 */}
                    <TextArea
                      label="Specific Instruction"
                      placeholder="Give if any specific format needed or follow Bates Ref like this."
                      {...register('specificInstruction')}
                      error={errors.specificInstruction?.message}
                      className="flex-1 w-full"
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
                            <span className="text-lg capitalize">Next</span>
                            <ChevronRightIcon className="w-5 h-5 ml-3" />
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
        <Footer />
      </Main>
    </div>
  );
};

export default UploadForm;
