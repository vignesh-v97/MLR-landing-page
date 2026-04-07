import { CheckCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

import servicesLinkedList from '@/data/services-linked-list';

interface CaseTypeProps {
  caseType: string;
}

const LinkedServicesList = ({ caseType }: CaseTypeProps) => {
  return (
    <div className="">
      <h3 className="my-6 text-3xl font-bold text-center text-primary">
        Our Review Services
      </h3>
      <ul className="grid grid-cols-1 gap-5 mr-10 md:grid-cols-3">
        {servicesLinkedList.map((service) => (
          <li className="flex items-start text-left" key={service.name}>
            <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
            {service.href ? (
              <Link href={service.href} passHref>
                <a className="block w-full text-lg text-primary-600 hover:text-secondary-500">
                  {service.name}
                </a>
              </Link>
            ) : (
              <span className="text-lg leading-tight text-primary-600 hover:text-secondary-500">
                {service.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xl font-medium text-primary">
        Just submit your {caseType} case and get a free cost estimate with
        delivery date -{' '}
        <a
          href={process.env.NEXT_PUBLIC_ADMIN_PANEL_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-secondary">Get Started</span>
        </a>
      </p>
    </div>
  );
};

export default LinkedServicesList;
