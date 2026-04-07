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
  'Abilify',
  'Actos',
  'Bair Hugger',
  'Benicar',
  'Byetta',
  'Celexa',
  'Crestor',
  'Eliquis',
  'Essure',
  'Fluoroquinolones',
  'Granuflo',
  'Hernia Mesh',
  'Invokana',
  'IVC Filter',
  'Januvia',
  'Lexapro',
  'Lipitor',
  'Mirena',
  'Morcellator',
  'Nexium',
  'Onglyza',
  'Opioids',
  'Paxil',
  'Plavix',
  'Propecia',
  'Prozac',
  'Reglan',
  'Risperdal',
  'Round Up Weed',
  'Stockert 3T Heater-Cooler Systems',
  'Stryker-Hip Implant',
  'Talcum',
  'Taxotere',
  'Testosterone Replacement Therapy',
  'TVM',
  'Victoza',
  'Xarelto',
  'Yaz',
  'Zimmer Knee-Hip',
  'Zofran',
  'Zoloft',
];

const MassTrot = () => {
  return (
    <Main
      meta={
        <Meta
          title="Mass Tort Summaries & Case Screening - Medical Record Review"
          description="The Mass Tort case summary template is customized based on the type of drug/device and the damages suffered. Our team quickly screens submitted cases and summarises all pertinent information in order to thoroughly examine the case in a short period of time."
        />
      }
    >
      <Navbar />
      <div className="">
        <HeroBanner
          title={'Mass Tort'}
          subheading=" A mass tort is a wrong that causes harm to several people and is
              typically committed by a huge organization."
          imgUrl={'/assets/images/page-banners/Mass Tort-Banner.jpg'}
          alt="Mass Tort-Banner"
        />

        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="w-full text-gray-600 lg:w-8/12">
              <h1 className="heading mb-4">Mass Tort Medical Record Review</h1>
              <p className="text-lg text-gray-600">
                Medico Legal Request LLC has a separate team dedicated to mass
                tort cases, even if they are in large numbers. The mass tort
                case summary template is customized based on the type of drug or
                device and the damages suffered. Our teams quickly screen
                submitted cases and summarize all pertinent information in order
                to thoroughly examine the case in a short period of time.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Mass tort litigation can be time-consuming, and rummaging
                through vast records of thousands of potential cases can eat up
                a lot of your valuable time. We can assist you in obtaining
                vital information in a timely and effective manner by screening
                these cases for you and providing this information to you in an
                easy-to-read screening matrix or a{''}
                <Link href="/services/medical-chronology">
                  <a className="text-secondary">
                    &nbsp;crisp medical chronology
                  </a>
                </Link>
                {''}, saving you time.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Outsourcing medical record reviews to us will save thousands of
                dollars and time for mass tort law firms. In mass tort case
                reviews, we can effectively give our support to settle the
                claims with our recent case handling experience, such as the{' '}
                <span className="font-bold">
                  3M settlement, Zantac, Xarelto, Hernia Mesh, and Hair Relaxer
                  lawsuits
                </span>
                .
              </p>
              <h3 className="my-6 text-xl font-bold text-primary">
                Drugs and Devices:
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
                The medical summaries for the mass tort cases are focused on
                establishing the relationship between the usage of the product
                and the damages suffered. All the details related to the product
                will be added, along with the damages suffered that would help
                decide the strength of the case. With an in-depth medical record
                review, you get a complete scope of the claim.
              </p>
              <p className="my-4 text-lg text-gray-600">
                For more information about our mass tort medical record review
                services, Contact us at{' '}
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
            <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
              <ExpertiseList active="Mass Tort" />
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
            In mass tort claims, medical record reviews can help attorneys build
            a strong case for their clients by providing a detailed overview of
            a plaintiff’s medical history, establishing causation, identifying
            key issues, and determining the extent of a plaintiff’s injuries and
            resulting damages. Medical record reviews and summaries can play a
            critical role in mass tort litigation by providing attorneys with a
            comprehensive understanding of a plaintiff’s medical history and
            identifying key issues that may be relevant to the case.
          </p>
          <LinkedServicesList caseType="mass tort" />
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default MassTrot;
