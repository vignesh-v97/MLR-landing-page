import cn from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import Button from '@/components/ui/button';
import expertiseList from '@/data/expertise-list';

const Services = () => {
  const router = useRouter();
  return (
    <Main
      meta={
        <Meta
          title="Expertise | Medico Legal Request LLC | Medical Chart Review"
          description="We have a team of experts who provide medical chart review services for personal injury, medical malpractice, workers’ compensation, nursing home abuse, mass tort, and other medico-legal claims."
        />
      }
    >
      <Navbar />
      <HeroBanner
        title="Expertise"
        subheading="Our Expertise is supported by a diligent team of professionals,
              trained to highlight and organize key evidence in your case."
        imgUrl="/assets/images/page-banners/Expertise-Banner.jpg"
        alt="Expertise-Banner"
      />

      {/* <Highlights bgColor="bg-neutral-100" /> */}
      <div className=" bg-white p-5 lg:p-10 text-center">
        <div className="mx-auto mt-10 mb-20 max-w-5xl">
          <h1 className="mb-4 text-xl lg:text-2xl 2xl:text-3xl font-bold text-primary">
            Medical Record Review Services
          </h1>
          <p className="mb-5 text-lg text-gray-600">
            Our team of experts provides medical chart review services for
            personal injury, medical malpractice, workers’ compensation, nursing
            home abuse, mass tort, and other medico-legal claims.
          </p>
          <p className="mb-10 text-lg text-gray-600">
            A medical chart review is a systematic evaluation of a person's
            whole medical record. Medico Legal Request LLC’s vision is to
            provide an innovative, cost-effective, and more accurate medical
            record/chart review service with due diligence. All of our services
            are designed to draw attention to important pieces of evidence in
            your case.
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <ul
            role="list"
            className="mx-auto grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center "
          >
            {expertiseList.map((expertiseItem, key) => (
              <li
                key={expertiseItem.name}
                className={cn(
                  {
                    'flex flex-col rounded-lg bg-white text-center shadow transition-transform duration-500 hover:scale-105':
                      key !== 3,
                  },
                  {
                    'flex flex-col rounded-lg bg-white text-center shadow transition-transform duration-500 hover:scale-105':
                      key === 3,
                  }
                )}
              >
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-6   bg-primary-500 py-3 text-xl font-bold text-white">
                    {expertiseItem.name}
                  </h3>
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <img
                      src={expertiseItem.icon}
                      alt=""
                      className="mb-4 h-16 w-16 rounded-full border p-1"
                    />
                    <p className="px-4">{expertiseItem.description}</p>
                  </div>
                </div>
                <div className="my-4">
                  <Button
                    className="border border-secondary-400 focus:ring-secondary-700"
                    size="small"
                    variant="outline"
                    onClick={() => router.push(expertiseItem.url!)}
                  >
                    View More
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </Main>
  );
};

export default Services;
