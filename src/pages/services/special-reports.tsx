import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import ServicesList from '@/components/pages/services/services-list';
import { Main } from '@/components/templates/Main';
import SamplesData from '@/data/samples';

const samples = SamplesData.specialReports.pages;
const ProvidersList = () => {
  return (
    <Main
      meta={
        <Meta
          title="Customized Special Reports | Medical Record Review Services"
          description="Our medical experts prepare custom reports based on our client’s specifications/requirements. These reports delineate medical facts that describe injuries and"
        />
      }
    >
      <Navbar />

      <HeroBanner
        title="Special Reports"
        subheading=" Customized medical chart reviews and special reports"
        imgUrl="/assets/images/page-banners/Special Reports-Banner.jpg"
        alt="Special Reports-Banner"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:p-8">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-8/12 w-full text-gray-600">
            <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary-400">
              Customized Special Reports
            </h1>
            <p className="text-lg text-gray-600">
              Our medical experts prepare custom reports based on our client’s
              specifications/requirements. These reports delineate medical facts
              that describe injuries and subsequent pain/suffering sustained by
              the patient.
            </p>

            <ul className="ml-5 space-y-5 list-disc mt-6">
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Comparative Chart</span>: This is
                  a chart differentiating the medical conditions and injuries,
                  diagnostic tests, diagnosis and injuries, and treatment
                  performed prior to the date of loss and postdate of loss.
                  Comparative charts are useful for isolating injuries to a
                  specific accident when there are many accidents.
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Treatment Chart</span>: A
                  spreadsheet is used to illustrate the pain complaints,
                  diagnosis, and treatment delivered, as well as provide visuals
                  for the specific diagnoses. Each injury can have its own
                  treatment plan. There is a graphic representation of the
                  treatment and its progress.
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Pain & Suffering Chart</span>:
                  Date, provider/prescribing provider, chief complaints, and
                  location of pain; pain scale, pain meds, assessment/plan,
                  prognosis, and PDF/Bates reference are all included in the
                  pain and suffering chart.
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Pain and Medication Graph</span>:
                  A chart detailing the use of pain medications, as well as a
                  visual representation of the increase in pain, can be
                  presented. The quantity of medications and dates of refill are
                  required to plot this graph, so pharmacy records are required
                  to prepare this report.
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Timeline of the Accident</span>:
                  Our medical specialists provide tailored reports based on the
                  needs of our clients. These reports detail medical facts such
                  as the patient's injuries and consequent pain and suffering. A
                  few instances of special reports are as follows:
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">List of Injuries</span>: Our
                  medical professionals create personalised reports based on the
                  needs of our clients. These reports detail medical facts such
                  as the patient's injuries and consequent pain and suffering. A
                  few instances of special reports are as follows:
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Pre-existing Injuries</span>: Our
                  medical professionals will create a report stating that a
                  "pre-existing condition" is a medical ailment or injury that
                  you have before starting a new health-care plan. A few
                  instances of special reports are as follows:
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Pain Score Chart</span>: Our
                  medical professionals provide personalised reports based on
                  the needs of our clients. These reports detail medical facts
                  such as the patient's injuries and consequent pain and
                  suffering. A few instances of special reports are as follows:
                </span>
              </li>
              <li className="text-left">
                <span className="text-lg leading-tight">
                  <span className="font-bold">Diagnostic Studies Chart</span>:
                  This chart will list all diagnostic tests performed both
                  before and after the date of loss. relevant to the injuries
                  incurred at the time of the loss.
                </span>
              </li>
            </ul>

            <div className="flex w-full flex-wrap mt-10">
              {samples.map((item) => {
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
          </div>
          <div className="w-full lg:w-3/12 lg:block mt-5 lg:mt-5 ">
            <ServicesList active="Special Reports" />
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default ProvidersList;
