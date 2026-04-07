import { InboxIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';

const HomeCTA = () => {
  return (
    <section className="py-16 " style={{ background: '#E5F5FD' }}>
      <div className="mx-auto max-w-5xl ">
        <div className="text-center text-xl md:text-2xl lg:text-3xl  font-bold text-primary">
          <h3 className="">NOT SURE WHAT YOU NEED?</h3>
          <h3 className="">REACH OUR MEDICO LEGAL EXPERTS NOW!</h3>
        </div>
        <div className="mt-12 flex flex-col md:flex-row space-y-3 lg:space-y-0 items-center justify-center mx-4 lg:mx-0">
          <div className="flex w-full lg:w-96 items-center bg-white p-8">
            <span className="">
              <PhoneIcon className="h-6 w-6 text-primary" />
            </span>
            <div className="ml-4 flex flex-col">
              <span className="font-medium text-primary-600">Call Now</span>
              <a className="text-primary-800" href="tel:+1 903-765-6073">
                +1 (903) 765-6073
              </a>
            </div>
          </div>
          <span className="h-12 w-12 rounded-full bg-secondary-500 p-3 font-bold text-white">
            OR
          </span>
          <div className="flex w-full lg:w-96 items-center bg-white p-8">
            <span className="">
              <InboxIcon className="h-6 w-6 text-primary" />
            </span>
            <div className="ml-4 flex flex-col">
              <span className="font-medium text-primary-600">Email</span>
              <a
                href="mailto:support@medicolegalrequestllc.com"
                className="break-all text-primary-800 "
              >
                support@medicolegalrequestllc.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
