import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import servicesList from '@/data/services-list';
import type { ServiceTypes } from '@/types/service-types';

const ServicesList = ({ active }: { active: ServiceTypes }) => {
  return (
    <div className="">
      <h3 className="mb-3 text-2xl font-bold uppercase lg:text-4xl text-primary-400">
        Our Services
      </h3>
      <ul className="p-3 border divide-y divide-gray-200 rounded-md shadow">
        {servicesList.map((service) => {
          return (
            <li key={service.name} className="py-2 border-b">
              <Link href={service.href} passHref>
                <a
                  className={cn(
                    'text-primary-600 hover:text-secondary-500 block w-full',
                    { 'font-bold': service.name === active }
                  )}
                >
                  {service.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
