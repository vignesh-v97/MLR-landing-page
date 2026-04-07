import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const OurVisionMission = () => {
  return (
    <div className="mx-auto my-16 max-w-5xl px-6 py-4">
      <h2 className="heading mb-5 lg:mb-10 text-center">
        Our Vision & Mission
      </h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="px-0 lg:mt-0 mt-5  lg:px-10">
          <h2 className="mb-6 text-center text-xl font-bold text-primary">
            Our Vision
          </h2>
          <ul className="">
            <li className="mb-3 flex items-center">
              <span className="mr-4">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </span>
              <span className="">
                We help attorneys, law firm, and insurance firms seek justice on
                behalf of their clients.
              </span>
            </li>
            <li className="mb-3  flex items-center">
              <span className="mr-4">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </span>
              <span className="">
                Expand our areas of competence to fulfill more demanding global
                standards.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-4">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </span>
              <span className="">
                Participating in justice with our powerful services
              </span>
            </li>
          </ul>
        </div>
        <div className="px-0 lg:mt-0 mt-12 lg:px-10">
          <h2 className="mb-6 text-center text-xl font-bold text-primary">
            Our Mission
          </h2>
          <ul className="">
            <li className="mb-3 flex items-center ">
              <span className="mr-4">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </span>
              <span className="">
                Provide our clients with innovative, precise, and economical
                solutions.
              </span>
            </li>
            <li className="mb-3 flex items-center ">
              <span className="mr-4">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </span>
              <span className="">
                To be a role model organization in rural development by
                providing jobs.
              </span>
            </li>
            <li className="mb-3 flex items-center ">
              <span className="mr-4">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </span>
              <span className="">
                To lead the world in connecting worldwide clientele
              </span>
            </li>
            <li className=""></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurVisionMission;
