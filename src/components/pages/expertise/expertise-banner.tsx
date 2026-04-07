import router from 'next/router';
import React from 'react';

import Button from '../../ui/button';

const ExpertiseBanner = () => {
  return (
    <div className="">
      <div
        className=""
        style={{
          height: '350px',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat !important',
          backgroundImage:
            'linear-gradient(151deg, rgba(0,0,0,0.7) 0%, rgba(37,129,178,0.8) 99%), url("/assets/images/Overwhelming with Medical Records Review.jpg")',
        }}
      >
        <div className="flex h-full flex-col items-end justify-center px-4 lg:px-16 xl:px-20">
          <div className="">
            <h1 className=" text-center text-2xl lg:text-3xl 2xl:text-4xl font-bold  leading-relaxed text-neutral-100">
              Overwhelmed by medical record review?
            </h1>
            <h1 className="text-center text-xl lg:text-2xl xl:text-3xl font-bold  leading-relaxed text-secondary-200">
              Outsource & Relax!
            </h1>
            <div className="mt-5 flex justify-center">
              <Button
                className="bg-secondary-400"
                onClick={() => router.push('/upload-form')}
              >
                Upload Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseBanner;
