import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import ExpertiseList from '@/data/expertise-list';
import type { ExpertiseTypes } from '@/types/expertise-types';

const ServicesList = ({ active }: { active: ExpertiseTypes }) => {
  return (
    <div className="">
      <h3 className="mb-3 text-2xl font-bold uppercase lg:text-4xl text-primary-400">
        Expertise
      </h3>
      <ul className="p-3 border divide-y divide-gray-200 rounded-md shadow">
        {ExpertiseList.map((expertiseItem) => {
          return (
            <li
              key={expertiseItem.name}
              className={cn(
                'text-primary-600 border-b py-2 hover:text-secondary-500',
                {
                  'font-bold': expertiseItem.name === active,
                }
              )}
            >
              <Link href={expertiseItem.url}>
                <a>{expertiseItem.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServicesList;
