import Link from 'next/link';
import React from 'react';

const HomeIntro = () => {
  return (
    <div className="relative bg-gray-50 pt-24 pb-6">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-primary-500 lg:text-4xl">
            Better Solution for your Medical Record Review Services
          </h2>
          <p className="mx-auto mt-5 lg:mt-10  text-base lg:text-xl text-gray-500">
            Medico Legal Request LLC has a dedicated team of experienced MDs,
            nurse consultants, medical professionals who endeavor to provide
            highly cost-effective
            <Link href="/services">
              <a href="" className="text-secondary">
                &nbsp;medical record review services&nbsp;
              </a>
            </Link>
            with a rapid turnaround time. We specialize in the enterprise of
            Personal Injury, Medical Malpractice, Mass Tort, Product Liability,
            and Nursing Home Abuse Medical Record Reviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
