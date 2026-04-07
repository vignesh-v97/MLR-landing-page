import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ExpertiseList from '@/components/pages/expertise/expertise-list';
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

const ProductLiablility = () => {
  return (
    <Main
      meta={
        <Meta
          title="Product Liability Case Reviews - Medical Record Review"
          description="Defective or dangerous products are the cause of thousands of injuries every year. Design, production, or marketing flaws can all result in injuries."
        />
      }
    >
      <Navbar />
      <div className="">
        <HeroBanner
          title={' Product Liability'}
          subheading="This is the legal responsibility a producer or seller faces for
              creating or offering a defective product for sale."
          imgUrl={'/assets/images/page-banners/Product Liability-Banner.jpg'}
          alt="Product Liability-Banner"
        />

        <div className="px-4 py-8 mx-auto max-w-7xl lg:p-8">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="w-full text-gray-600 lg:w-8/12">
              <h1 className="heading mb-4">
                Product Liability Medical Record Review
              </h1>
              <p className="text-lg text-gray-600">
                Defective or dangerous products are the cause of thousands of
                injuries every year. Design, production, or marketing flaws can
                all result in injuries. Our staff makes sure to compile all of
                the important details in order to prove that the damages were
                caused by the defective goods. We make sure to include all the
                intricate details to justify the damages incurred and prove the
                case.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Medical records are a vital piece of evidence in product
                liability litigation and can quickly become very complex. There
                are various types of medical record review reports to assist in
                the evaluation and defense of product liability lawsuits and
                claims.
              </p>
              <h3 className="my-6 text-xl font-bold text-primary">
                Types of product liability claims:
              </h3>
              <ul className="my-5 text-lg ">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  Defective design
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  Manufacturing defects
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  Failure to warn
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                  Breach of Warranty
                </li>
              </ul>
              <p className="mt-6 text-lg text-gray-600">
                In order to successfully negotiate a settlement in a product
                liability case, the plaintiff must provide a detailed and
                accurate assessment of their losses, in addition to compelling
                evidence that the defendant was careless in the design or
                marketing of the product that caused the plaintiff's harm.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Product liability attorneys can benefit from a medical record
                review to get a clear understanding of the medical facets of the
                claim.
              </p>
              <p className="my-4 text-lg text-gray-600">
                For more information about our product liability medical record
                review services, Contact us at{' '}
                <a className="text-secondary" href="tel:+1 903-765-6073">
                  +1 (903) 765-6073
                </a>{' '}
                or email us at{' '}
                <a
                  href="mailto:support@medicolegalrequestllc.com"
                  className="break-all text-secondary "
                >
                  support@medicolegalrequestllc.com
                </a>
              </p>
            </div>
            <div className="w-full mt-5 lg:w-3/12 lg:block lg:mt-5 ">
              <ExpertiseList active="Product Liability" />
            </div>
          </div>
        </div>
        {/* <div className="mt-10">
          <ExpertiseBanner />
        </div> */}
      </div>
      <Footer />
    </Main>
  );
};

export default ProductLiablility;
