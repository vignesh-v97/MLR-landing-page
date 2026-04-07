import { CheckCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

const serviceWeServe = {
  items: [
    { name: 'Attorneys' },
    { name: 'Medical & Legal Firms' },
    { name: 'Independent Paralegal' },
    { name: 'Medico-Legal Consultants' },
    { name: 'Independent Medical Examiners' },
    { name: 'Insurance Firm' },
  ],
};
const HomeWeServe = () => {
  return (
    <div
      style={{
        height: '400px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat !important',
        background: '#4F78AB',
        backgroundImage:
          'linear-gradient(245deg, rgba(0,89,122,0.8) 0%, rgba(0,56,76,0.8) 100%), url("/assets/images/page-banners/we-serve-1.jpeg")',
      }}
      aria-labelledby="we-serve"
    >
      <div className="max-w-2xl px-4 py-12 mx-auto lg:max-w-4xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid">
          <div className="grid">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="col-span-12 md:col-span-6">
                <p className="mt-6 text-5xl font-bold text-center text-neutral-100">
                  We Serve
                </p>
                <div className="flex justify-center">
                  <Link href="/services">
                    <a
                      style={{ backgroundColor: '#F47A20', color: '#ffffff' }}
                      className="px-5 py-2 mt-6 font-bold rounded-full"
                    >
                      Our Services
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-span-12 mt-12 md:mt-0 md:col-span-6">
                <ul role="list" className="mt-4 space-y-4">
                  {serviceWeServe.items.map((item) => (
                    <li key={item.name}>
                      <p className="flex items-center text-xl font-semibold text-neutral-100">
                        <span>
                          <CheckCircleIcon className="w-5 h-5 mr-4 text-secondary" />
                        </span>
                        {item.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWeServe;
