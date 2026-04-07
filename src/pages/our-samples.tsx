import cn from 'classnames';
import React, { useState } from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import SamplesForm from '@/components/pages/samples/samples-form';
import { Main } from '@/components/templates/Main';
import listItems from '@/data/samples';

type ISamplesList =
  | 'medicalChronology'
  | 'demandLetter'
  | 'depositionSummary'
  | 'expertMedicalOpinion'
  | 'narrativeSummary'
  | 'providersList'
  | 'specialReports';

interface ISampleIndex {
  key: ISamplesList;
  title: string;
}

const sampleIndexs: ISampleIndex[] = [
  { key: 'medicalChronology', title: 'Sample Medical Chronologies' },
  { key: 'narrativeSummary', title: 'Sample Narrative Summaries' },
  { key: 'demandLetter', title: 'Sample Demand Letter' },
  { key: 'expertMedicalOpinion', title: 'Sample Medical Opinion' },
  { key: 'depositionSummary', title: 'Sample Deposition Summary' },
  { key: 'specialReports', title: 'Special Reports' },
];

const Samples = () => {
  const [selectedSample, setSelectedSamples] =
    useState<ISamplesList>('medicalChronology');

  return (
    <div className="">
      <div>
        <Main
          meta={
            <Meta
              title="Samples: Medical Record Review - Chronologies and Summaries"
              description="Here you can find some of our sample review work products. We also prepare the medical summaries in different formats based on client request."
            />
          }
        >
          <Navbar />
          <div className="">
            <HeroBanner
              title="Our Samples"
              subheading="Medical Record Review and Summary Samples"
              imgUrl="/assets/images/page-banners/Our Samples-Banner.jpg"
              alt="Samples_Medical Records Review-Banner"
            />
            <div className="mx-auto max-w-7xl p-4 xl:px-0">
              <div className="mb-16 mt-6 text-center">
                <h2 className="heading mb-3">Medical Record Review Samples</h2>
                <p className="lg:w-8/12 w-full mx-auto text-center lg:text-lg text-gray-600">
                  Here you can find some of our medical record review samples.
                  We also review and prepare the summaries in different formats
                  based on our client's request. If you have any specific sample
                  or in need of any customization on our works please feel free
                  to reach us at &nbsp;
                  <a
                    href="mailto:support@medicolegalrequestllc.com"
                    className="break-all text-secondary-600 font-medium"
                  >
                    support@medicolegalrequestllc.com
                  </a>
                  . Our team will adapt with your request.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-3/12 pt-0 pb-10 xl:py-10 h-full">
                  <h3 className="mb-3 text-center text-2xl p-3 font-bold uppercase text-white bg-primary-600">
                    Our Samples
                  </h3>
                  <ul className="shadow bg-white border ">
                    {/* <li className="pb-2 font-bold text-primary-600">Medical Chronology</li> */}
                    <div className="divide-y divide-gray-300 rounded-md   ">
                      {sampleIndexs.map((sampleItem: ISampleIndex) => {
                        return (
                          <li
                            onClick={() => setSelectedSamples(sampleItem.key)}
                            key={sampleItem.key}
                            className={cn(
                              'cursor-pointer p-3 text-lg lg:text-base xl:text-lg hover:text-secondary-600 ',
                              {
                                'bg-gray-400 text-white font-medium ':
                                  sampleItem.key === selectedSample,
                              }
                            )}
                          >
                            {sampleItem.title}
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                </div>
                <div className="w-full lg:w-10/12 xl:p-10">
                  <h1 className="text-primary text-center text-2xl lg:text-3xl xl:text-4xl mb-5 lg:mb-12 font-bold">
                    {listItems[selectedSample].title}
                  </h1>
                  <div className="flex w-full flex-wrap ">
                    {listItems[selectedSample].pages.map((item) => {
                      return (
                        <a
                          href={item.pdf}
                          target="_blank"
                          className="group w-10/12 border-2 sm:w-3/12 block shadow-slate-900	 p-4 bg-white m-5 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all ease-linear"
                          key={item.title}
                          rel="noreferrer"
                        >
                          <img src={item.img} alt="" className="w-full" />
                          <p className="group-hover:text-secondary-500 text-center p-2 text-primary-700 font-semibold border-t">
                            {item.title}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                  {/* Samples Form */}
                  <SamplesForm />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Main>
      </div>
    </div>
  );
};

export default Samples;
