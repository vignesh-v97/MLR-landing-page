import Link from 'next/link';
import React, { useState } from 'react';
import { useBoolean, useInterval } from 'react-use';

const slides = [
  'Medical Chronologies',
  'Narrative Summaries',
  'Demand Letters',
  'Deposition Summaries',
];
const Hero = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1500);
  const [currentService, setCurrentService] = useState(slides[0]);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      console.log(count, 'count');
      if (count < 3) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
      setCurrentService(slides[count]);
    },
    isRunning ? delay : null
  );

  return (
    <div
      className="relative py-10 xl:py-28 2xl:py-40"
      style={{ background: '#eff8fb' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between ">
          <div className="w-full xl:w-8/12">
            <div className="hero-content px-6 xl:px-0">
              <h6 className="inline-block px-6 py-2 text-white rounded-3xl bg-primary">
                # Welcome To Medico Legal Request LLC
              </h6>
              <h1 className="mt-6 text-xl font-bold leading-normal uppercase xl:text-5xl text-primary">
                Trusted Legal Outsourcing Services
              </h1>
              <h1 className="mt-2 text-3xl font-bold leading-normal uppercase text-primary-400">
                $25/hour for{' '}
                <span className="text-secondary">{currentService}</span>
              </h1>

              <p className="w-full mt-3 leading-loose text-primary-800 xl:w-full lg:w-8/12">
                Legal outsourcing services allows a company to rapidly scale up
                by reducing workload and allowing employees to focus on core
                business and revenue-generating tasks.
              </p>
              <div className="hero-btn flex flex-col justify-start gap-5 mt-5 xl:mt-4 md:flex-row md:gap-12">
                <Link href="/about-us">
                  <a className="btn btn-1">
                    About Us<i className="far fa-arrow-right"></i>
                  </a>
                </Link>
                <Link href="/our-samples">
                  <a className="btn btn-2 ">
                    Our Samples<i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="hidden xl:block xl:w-4/12"
            style={{ flex: '0 0 auto' }}
          >
            <div className="hero-img">
              <img src="/assets/images/hero.png" alt="hero-banner image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
