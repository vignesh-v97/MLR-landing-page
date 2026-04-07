type SampleFormValues = {
  firmName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  comments: string;
  reviewServices: {
    medicalChronology?: boolean;
    expertMedicalOpinion?: boolean;
    medicalTranscription?: boolean;
    narrativeSummary?: boolean;
    billingSummary?: boolean;
    demandLetter?: boolean;
    depositionSummary?: boolean;
  };
  additionalServices: {
    hyperLinks?: boolean;
    providersList?: boolean;
    plaintiffFactSheets?: boolean;
    bookmarks?: boolean;
    medInterpret?: boolean;
    juryQuestionnaireSummaries?: boolean;
    missingMedicalRecordsIdentification?: boolean;
    pdfSortingAndMerging?: boolean;
  };
  specialReports: {
    listOfInjuries?: boolean;
    comparativeChart?: boolean;
    painAndMedicationGraph?: boolean;
    treatmentChart?: boolean;
    preExistingInjuries?: boolean;
    painScoreChart?: boolean;
    accidentTimeline?: boolean;
    painAndSufferingChart?: boolean;
    diagnosticStudiesChart?: boolean;
  };
};

export default SampleFormValues;
