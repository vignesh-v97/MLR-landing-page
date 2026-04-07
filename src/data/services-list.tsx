import type { ServiceTypes } from '@/types/service-types';

interface IServiceList {
  name: ServiceTypes;
  href: string;
  description?: string;
}

const servicesList: IServiceList[] = [
  {
    name: 'Medical Chronology',
    href: '/services/medical-chronology',
    description:
      'A Medical Chronology/Summary is a record of medical events in the order of their occurrence.',
  },
  {
    name: 'Demand Letter',
    href: '/services/settlement-demand-letter',
    description:
      'A settlement letter is used to settle a personal injury case, usually before filing a lawsuit in court.',
  },
  {
    name: 'Narrative Summary',
    href: '/services/narrative-summary',
    description:
      'In chronological order, our narrative summaries capture and highlight all of the major events.',
  },
  {
    name: 'Expert Medical Opinion',
    href: '/services/expert-medical-opinion',
    description:
      'Our physicians provide an opinion on a medical case based on sound reasoning.',
  },
  {
    name: 'Deposition Summary',
    href: '/services/deposition-summary',
    description:
      'A deposition is an essential part of the investigation that occurs before a trial.',
  },
  {
    name: 'Life Care Plan',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/life-care-planning-future-cost-report',
  },
  {
    name: 'Independent Medical Examination',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/independent-medical-examination-report',
  },
  {
    name: 'Billing Summary',
    href: '/services/billing-summary',
    description:
      'All of the bills for a single patient are summarised on the billing summary/expense sheets.',
  },
  {
    name: 'Providers List',
    href: '/services/providers-list',
  },
  {
    name: 'PDF Sorting & Merging',
    href: '/services/pdf-sorting-merging',
    description:
      'We sort the jumbled medical records according to your preferences.',
  },
  {
    name: 'Medical Transcription',
    href: '/services/medical-transcription',
    description:
      'Voice reports dictated by physicians and other healthcare professionals into text format.',
  },
  {
    name: 'Med-A-Word/Med-Interpret',
    href: '/services/med-a-word',
  },
  {
    name: 'Bookmarks',
    href: '/services/bookmarks',
  },
  {
    name: 'Hot Links/Hyperlinks',
    href: '/services/hot-links',
  },
  {
    name: 'Missing Records Identification',
    href: '/services/missing-records-identification',
  },
  {
    name: 'Special Reports',
    href: '/services/special-reports',
  },
];

export default servicesList;
