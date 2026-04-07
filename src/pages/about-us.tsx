import Link from 'next/link';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import AboutWhyChooseUs from '@/components/pages/about/about-why-choose-us';
import OurVisionMission from '@/components/pages/about/our-vision-mission';
import { Main } from '@/components/templates/Main';

const About = () => {
  const items = [
    {
      imgSrc: '/assets/images/about/compliant.png',
      title: 'Compliance',
      content:
        'HIPAA Compliance and our products are available from a secure cloud-based platform.',
    },
    {
      imgSrc: '/assets/images/about/clipboard.png',
      title: 'Free Estimate/Quote',
      content:
        'HIPAA Compliance and our products are available from a secure cloud-based platform.',
    },
    {
      imgSrc: '/assets/images/about/week.png',
      title: '1 Week TAT',
      content:
        'HIPAA Compliance and our products are available from a secure cloud-based platform.',
    },
    {
      imgSrc: '/assets/images/about/quality.png',
      title: 'Quality Management System',
      content:
        'HIPAA Compliance and our products are available from a secure cloud-based platform.',
    },
    {
      imgSrc: '/assets/images/about/save-money.png',
      title: 'Cost Efficient',
      content:
        'HIPAA Compliance and our products are available from a secure cloud-based platform.',
    },
    {
      imgSrc: '/assets/images/about/wallet.png',
      content:
        'HIPAA Compliance and our products are available from a secure cloud-based platform.',
    },
  ];
  return (
    <Main
      meta={
        <Meta
          title="About Us | Medico Legal Request LLC | Legal Support Services"
          description="MLR, LLC is a leading medical record review service provider to the law firms and independent legal practices and teams throughout the United States. Our legal support services assist in reducing your back-office workload "
        />
      }
    >
      <Navbar />
      <HeroBanner
        title="About Us"
        subheading="Our legal support services assist in reducing your back-office workload, allowing you to concentrate on core tasks and customer acquisition."
        imgUrl="/assets/images/page-banners/About Us-Banner.jpg"
        alt="About Us-Banner"
      />

      <div className="max-w-6xl px-6 m-4 mx-auto leading-relaxed text-gray-800 xl:px-0">
        <div className="flex justify-between">
          <div className="w-full lg:w-8/12">
            {/* <p className="p-3">
              <span className="">Medico Legal Request LLC</span> is a forerunner
              in providing medical legal review services to the attorneys and
              law firms.
            </p> */}
            <h2 className="my-3 mb-1 text-xl font-bold lg:mb-4 lg:text-2xl md:text-3xl text-primary-400">
              Legal Support Services Firm
            </h2>
            <p className="p-3 text-lg">
              Medico Legal Request LLC is a forerunner in providing{''}
              <Link href="/services">
                <a className="text-secondary">
                  &nbsp;medical record review services&nbsp;
                </a>
              </Link>
              {''}
              to independent attorneys, paralegal, law firm, insurance firm, and
              medical examiners. Our physicians in India and United States who
              reduce, organize, and review digital files, producing medical
              chronology and timeline summaries, demand letters, deposition
              summaries, and mass tort evaluations.
            </p>
            <p className="p-3 text-lg">
              Legal outsourcing services aid a company to quickly scale up by
              diminishing the workload and allowing employees to focus more on
              core business and revenue-generating activities. We are experts in
              offering clients top-notch{''}
              <Link href="/services">
                <a className="text-secondary">
                  &nbsp;legal support services&nbsp;
                </a>
              </Link>
              {''}
              in a range of practice areas.
            </p>
            <p className="p-3 text-lg">
              Our solutions and services include end-to-end market solutions in
              the core areas of personal injury, medical malpractice, mass tort,
              and medical expert services. We work as an extended team of yours
              and improve your workflow efficiency with our unique medical
              record review services. Our legal support service provides a
              significant advantage over competitors in terms of quality,
              pricing, and turnaround time, firmly establishing us among the top
              legal support companies.
            </p>
          </div>
          <div className="hidden w-full mt-3 ml-12 lg:w-3/12 lg:block">
            <h3 className="mb-3 text-2xl font-bold uppercase lg:text-4xl text-primary-400">
              Our Services
            </h3>
            <ul className="p-3 border divide-y divide-gray-200 rounded-md shadow">
              <li className="pb-2 text-primary hover:text-primary-600 ">
                <Link href="/services/medical-chronology">
                  <a className="">Medical Chronology</a>
                </Link>
              </li>
              <li className="py-2 border-b text-primary hover:text-primary-600">
                <Link href="/services/settlement-demand-letter">
                  <a className="">Demand Letter</a>
                </Link>
              </li>
              <li className="py-2 border-b text-primary hover:text-primary-600">
                <Link href="/services/narrative-summary">
                  <a className="">Narrative Summary</a>
                </Link>
              </li>
              <li className="py-2 border-b text-primary hover:text-primary-600">
                <Link href="/services/deposition-summary">
                  <a className="">Deposition Summary</a>
                </Link>
              </li>
              <li className="py-2 border-b text-primary hover:text-primary-600">
                <Link href="/services/expert-medical-opinion">
                  <a className="">Expert Medical Opinion</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="my-20 ">
        <h2 className="my-16 text-3xl font-bold text-center text-primary-500">
          WHY CHOOSE MEDICO LEGAL REQUEST LLC?
        </h2>
        <div className="relative max-w-5xl mx-auto ">
          <img
            src="/assets/images/man-with-laptop-thinking.png"
            alt=""
            className="absolute w-64"
            style={{ left: '35%', top: '15%' }}
          />
          <div className="relative grid grid-cols-2 gap-10 m-5">
            {items.map((item, key) => {
              return (
                <div
                  key={item.content}
                  className={classNames('w-64', {
                    'justify-self-end': key % 2 !== 0,
                  })}
                >
                  <img src={`${item.imgSrc}`} alt="" className="mb-3" />
                  <h2 className=""></h2>
                  <p className="text-left ">
                    HIPAA Compliance and our products are available from a
                    secure cloud-based platform.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      <div className="">
        <OurVisionMission />
      </div>
      <div className="">
        <AboutWhyChooseUs />
      </div>
      <Footer />
    </Main>
  );
};

export default About;
