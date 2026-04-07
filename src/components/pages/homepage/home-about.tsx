import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

const HomeAbout = () => {
  const timeline = [
    {
      id: 1,
      content: '$25 per hour',
    },
    {
      id: 2,
      content: 'Advanced to phone screening by',
    },
    {
      id: 3,
      content: 'Completed phone screening with',
    },
    {
      id: 4,
      content: 'Advanced to interview by',
    },
    {
      id: 5,
      content: 'Completed interview with',
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <section className="pt-16 pb-8 lg:pt-32 lg:pb-16">
      <div className="max-w-5xl px-5 lg:mx-auto">
        <div className="flex flex-col justify-between lg:space-x-6 lg:flex-row">
          <div className="w-full lg:w-6/12">
            <div className="relative block p-6">
              <div className="about-img relative">
                <img
                  className=""
                  src="assets/images/about-1.jpg"
                  alt="Legal Support Services"
                />
              </div>
              <div className="about-left-content">
                <div className="about-left-icon">
                  <i className="flaticon-telephone"></i>
                </div>
                <div className="about-left-info">
                  <h5>Need Any Help ?</h5>
                  <p>
                    Call Now :{' '}
                    <a href="tel:+1 903-765-6073">+1 (903) 765-6073</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="">
              <div className="mb-3">
                <span className="font-bold tracking-widest uppercase text-primary-400">
                  About Us
                </span>
                <h2 className="mt-1 text-2xl font-bold capitalize md:text-3xl lg:text-4xl text-primary-600">
                  Legal Support Services
                </h2>
              </div>
              <p className="text-lg text-gray-500 whitespace-pre-wrap">
                Attorneys and paralegals spend a lot of time organizing,
                summarizing, and examining massive medical records. Our
                qualified and experienced medical professionals work efficiently
                to summarize medical records in a precise manner, allowing the
                client to achieve higher success rates. We specialize in
                providing clients with superior legal support services in a wide
                array of practice areas.
              </p>
              <div className="mt-6">
                <ul className="list-unstyled space-y-3">
                  <li className="flex align-middle">
                    <ArrowCircleRightIcon className="w-5 h-5 mr-3 text-primary" />
                    <h5 className="text-xl text-primary-600">$25 per hour</h5>
                  </li>
                  <li className="flex align-middle">
                    <ArrowCircleRightIcon className="w-5 h-5 mr-3 text-primary" />
                    <h5 className="text-xl text-primary-600">
                      Customized Services
                    </h5>
                  </li>
                  <li className="flex align-middle">
                    <ArrowCircleRightIcon className="w-5 h-5 mr-3 text-primary" />
                    <h5 className="text-xl text-primary-600">
                      Free Cost Estimate
                    </h5>
                  </li>
                  <li className="flex align-middle">
                    <ArrowCircleRightIcon className="w-5 h-5 mr-3 text-primary" />
                    <h5 className="py-0 my-0 text-xl text-primary-600">
                      1 Week Turnaround Time
                    </h5>
                  </li>
                  <li className="flex align-middle">
                    <ArrowCircleRightIcon className="w-5 h-5 mr-3 text-primary" />
                    <h5 className="py-0 my-0 text-xl text-primary-600">
                      No Expedite Fee for Rush Request
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="flex mt-4">
                <Link href="/about-us">
                  <a className="btn btn-1 mt-4">
                    Discover More <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
