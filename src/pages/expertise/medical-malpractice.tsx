import { CheckCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ExpertiseBanner from '@/components/pages/expertise/expertise-banner';
import ExpertiseList from '@/components/pages/expertise/expertise-list';
import LinkedServicesList from '@/components/pages/services/linked-services-list';
import { Main } from '@/components/templates/Main';

const types = [
  'Anesthesia errors',
  'Child Birth Injuries',
  'Delayed diagnosis',
  'Diagnostic errors',
  'Emergency room negligence',
  'Medication dosage errors and side effects',
  'Misdiagnosis',
  'Medical Device Error',
  'Nursing Home Abuse',
  'Improper medication or dosage',
  'Hospital Negligence',
  'Pressure ulcer',
  'Surgical Negligence',
  'Treatment errors',
  'Wrongful death',
];

const areaOfMedicine = [
  'Anesthesiology',
  'Cardiology',
  'Cardiovascular Surgery',
  'Colorectal Surgery',
  'Critical Care Medicine',
  'Dental Surgery',
  'Drug and Alcohol Dependency',
  'Emergency Medicine',
  'Endocrinology',
  'Family Practice',
  'Gastroenterology',
  'General Medicine',
  'General Surgery',
  'Geriatrics',
  'Gynecology',
  'Healthcare Administration',
  'Hematology',
  'Infectious Diseases',
  'Internal Medicine',
  'Laparoscopic Surgery',
  'Nephrology',
  'Neurology',
  'Neurosurgery',
  'Nursing',
  'Obstetrics',
  'Oncology',
  'Ophthalmology',
  'Orthopedics',
  'Otolaryngology',
  'Pathology',
  'Pediatrics',
  'Pharmacology',
  'Plastic and Reconstructive Surgery',
  'Psychiatry',
  'Paleontology',
  'Radiology',
  'Rehabilitation',
  'Rheumatology',
  'Urology',
];

const MedicalChronology = () => {
  return (
    <Main
      meta={
        <Meta
          title="Medical Malpractice - Medical Record Review and Experts Opinion"
          description="In medical malpractice cases, a medical record review is mainly conducted to identify the strengths and weaknesses of a particular case. It also helps identify any deviation from the expected standards of care."
        />
      }
    >
      <Navbar />
      <div className="">
        <HeroBanner
          title={'Medical Malpractice'}
          subheading=" When a doctor, nurse, or other medical practitioner fails to give
              the proper degree of care and if that failure causes harm to the
              patient, he or she can be held accountable for malpractice."
          imgUrl={'/assets/images/page-banners/Medical Malpractice-Banner.jpg'}
          alt="Medical Malpractice-Banner"
        />

        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="w-full text-gray-600 lg:w-8/12">
              <h1 className="heading mb-4">
                Medical Malpractice Medical Record Review
              </h1>
              <p className="text-lg text-gray-600">
                In medical malpractice cases, a medical record review is mainly
                conducted to identify the strengths and weaknesses of a
                particular case. It also helps identify any deviation from the
                expected standards of care. A comprehensive review of the
                medical records helps determine the merit and causation of the
                case.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Medico Legal Request LLC is well-versed in handling various
                types of medical malpractice cases. Our medical malpractice case
                handling team comprises doctors for each specialty. Each case is
                screened initially, and then it is allocated to the respective
                specialty doctors. After a comprehensive assessment, our staff
                examines the case's strength and weaknesses and outline all of
                the important elements. We ensure that the data provided by the
                quality management system is accurate and complete. Our final
                output allows our clients to fully comprehend the matter,
                consequently assisting them in winning the lawsuits.
              </p>
              <h3 className="my-6 text-xl font-bold text-primary">
                Various types of medical malpractice cases:
              </h3>
              <ul className="grid grid-cols-1 gap-5 mr-10 md:grid-cols-2">
                {types.map((item) => {
                  return (
                    <li className="flex items-start text-left" key={item}>
                      <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                      <span className="text-lg leading-tight">{item}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-10 text-lg text-gray-600">
                The medical record reviewers first assist the attorneys in
                navigating the intricate jungle of medical records paperwork.
                Following that, our doctors provide a medical opinion to assist
                attorneys in proving the negligence.
              </p>
              <div className="mt-10">
                <h3 className="my-6 text-xl font-bold text-primary">
                  Areas of Medicine
                </h3>
                <ul className="grid grid-cols-1 gap-5 mr-10 sm:grid-cols-2">
                  {areaOfMedicine.map((item, key) => {
                    return (
                      <li className="flex items-start text-left" key={item}>
                        <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                        <span className="text-lg leading-tight">{item}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-10 text-lg text-gray-600">
                  Our medical malpractice case review team comprises experienced
                  MDs and nurse consultants who provide {''}
                  <Link href="/services/medical-chronology">
                    <a className="text-secondary">medical chronology,</a>
                  </Link>
                  {''}
                  {''}
                  <Link href="/services/narrative-summary">
                    <a className="text-secondary">&nbsp;narrative summary,</a>
                  </Link>
                  {''} and{''}
                  <Link href="/services/expert-medical-opinion">
                    <a className="text-secondary">
                      &nbsp;expert medical opinion&nbsp;
                    </a>
                  </Link>
                  {''}
                  services for attorneys and law firms. Our medical record
                  review service plays an important role in helping medical
                  malpractice attorneys successfully develop and argue their
                  cases.
                </p>
                <p className="my-4 text-lg text-gray-600">
                  For more information about our medical malpractice medical
                  record review services, Contact us at{' '}
                  <a className="text-secondary" href="tel:+1 903-765-6073">
                    +1 (903) 765-6073
                  </a>{' '}
                  or email us at{' '}
                  <a
                    href="mailto:support@medicolegalrequestllc.com"
                    className="break-all text-secondary "
                  >
                    support@medicolegalrequestllc.com.
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
              <ExpertiseList active="Medical Malpractice" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ExpertiseBanner />
        </div>
        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <h2 className="text-2xl font-bold text-primary">
            Our Extensive Support
          </h2>
          <p className="my-3 text-lg text-gray-600">
            Medical malpractice cases are often complicated and time-consuming.
            Reviewing and interpreting a patient's medical records, and
            determining whether correct treatment occurred, requires a high
            level of expertise. Attorneys usually turn to medical professionals
            to make these decisions. Our experienced MDs give the medical
            malpractice attorneys access to medical chronology, a narrative
            summary, and expert medical opinions with key points. With an
            in-depth review of medical records, you get a complete scope of the
            claim, and they are very useful to pick a point and helpful for
            attorneys to win the case.
          </p>
          <LinkedServicesList caseType="medical malpractice" />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default MedicalChronology;
