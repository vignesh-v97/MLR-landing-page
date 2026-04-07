import { Popover, Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChevronDownIcon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  UploadIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';

import TopNav from './top-nav';

const medRequest = [
  {
    name: 'Our Pricing',
    description: "Connect with third-party tools that you're already using.",
    href: '/pricing',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Our Samples',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/our-samples',
    icon: InboxIcon,
  },
  {
    name: 'Frequently Asked Questions',
    description: "Your customers' data will be safe and secure.",
    href: '/faq',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Contact Us',
    description: "Connect with third-party tools that you're already using.",
    href: '/contact-us',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Blogs',
    description: "Connect with third-party tools that you're already using.",
    href: '/blogs',
    icon: QuestionMarkCircleIcon,
  },
];
const expertise = [
  {
    name: 'Personal Injury',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/expertise/personal-injury',
  },
  {
    name: 'Medical Malpractice',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/expertise/medical-malpractice',
  },
  {
    name: 'Mass Tort',
    description: "Connect with third-party tools that you're already using.",
    href: '/expertise/mass-tort',
  },
  {
    name: 'Nursing Home Abuse',
    description:
      'Medical records can be pivotal in substantiating claims of nursing home abuse, highlighting patterns of neglect or mistreatment, and establishing the damages suffered by the resident.',
    href: '/expertise/nursing-home-abuse',
  },
  {
    name: 'Workers’ Compensation',
    description:
      " In workers' compensation cases, a medical records review is a critical component in evaluating and determining the extent of an employee's work-related injuries or illnesses.",
    href: '/expertise/workers-compensation',
  },
  {
    name: 'Product Liability',
    description: "Your customers' data will be safe and secure.",
    href: '/expertise/product-liability',
  },
];
const services = [
  {
    name: 'Medical Chronology',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/services/medical-chronology',
    icon: InboxIcon,
  },
  {
    name: 'Demand Letter',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/services/settlement-demand-letter',
    icon: AnnotationIcon,
  },
  {
    name: 'Narrative Summary',
    description: "Your customers' data will be safe and secure.",
    href: '/services/narrative-summary',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Expert Medical Opinion',
    description: "Your customers' data will be safe and secure.",
    href: '/services/expert-medical-opinion',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Deposition Summary',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/deposition-summary',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Life Care Plan',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/life-care-planning-future-cost-report',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Independent Medical Examination',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/independent-medical-examination-report',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Billing Summary',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/billing-summary',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Providers List',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/providers-list',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'PDF Sorting & Merging',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/pdf-sorting-merging',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Medical Transcription',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/medical-transcription',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Med-A-Word/Med-Interpret',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/med-a-word',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Bookmarks',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/bookmarks',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Hot Links/Hyperlinks',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/hot-links',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Missing Records Identification',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/missing-records-identification',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Special Reports',
    description: "Connect with third-party tools that you're already using.",
    href: '/services/special-reports',
    icon: QuestionMarkCircleIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  return (
    <div>
      <TopNav />
      <div className={`relative w-full ${stickyClass}`}>
        <Popover className="relative bg-white">
          <div className="flex items-center justify-between p-4 mx-auto max-w-7xl sm:px-6 lg:justify-start lg:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <img
                    className="w-auto h-10 lg:h-12 xl:h-20"
                    src="/assets/images/logo.png"
                    alt="Logo-Medico Legal Request LLC"
                  />
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="items-center hidden space-x-10 lg:flex"
            >
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900 ">
                  Home
                </a>
              </Link>
              <Link href="/about-us">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About Us
                </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <Link href="/expertise">
                        <a className="text-gray-500 hover:text-primary-700">
                          <span>Expertise</span>
                        </a>
                      </Link>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-4 px-5 py-6 bg-slate-200 sm:gap-4 sm:p-4">
                            {expertise.map((item) => (
                              <Link href={item.href} key={item.name} passHref>
                                <a className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <Link href="/services">
                        <a className="text-gray-500 hover:text-primary-700">
                          <span>Services</span>
                        </a>
                      </Link>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-4 px-5 py-6 bg-slate-200 sm:gap-4 sm:p-4">
                            {services.map((item) => (
                              <Link key={item.name} href={item.href} passHref>
                                <a className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span>Med Request</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-4 px-5 py-6 bg-slate-200 sm:gap-4 sm:p-4">
                            {medRequest.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a
                href={process.env.NEXT_PUBLIC_ADMIN_PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                <span className="flex items-center">
                  File Upload
                  <UploadIcon className="w-4 h-4 ml-2 text-white" />
                </span>
              </a>
            </Popover.Group>
          </div>
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right lg:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8 sm:h-12"
                        src="/assets/images/logo.png"
                        alt="Logo-Medico Legal Request LLC"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 ">
                    <Popover.Group as="nav" className="space-y-6 lg:flex">
                      <div className="flex flex-col space-y-6">
                        <Link href="/home">
                          <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                            Home
                          </a>
                        </Link>
                        <Link href="/about-us">
                          <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                            About
                          </a>
                        </Link>
                      </div>
                      {/* Expertise */}
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                              )}
                            >
                              <Link href="/expertise">
                                <a className="text-gray-500 hover:text-primary-700">
                                  <span>Expertise</span>
                                </a>
                              </Link>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 left-1/2 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-4 px-5 py-6 bg-slate-200 sm:gap-4 sm:p-4">
                                    {expertise.map((item) => (
                                      <Link key={item.name} href={item.href}>
                                        <a className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                          </div>
                                        </a>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                              )}
                            >
                              <Link href="/services">
                                <a className="text-gray-500 hover:text-primary-700">
                                  <span>Services</span>
                                </a>
                              </Link>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 left-1/2 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-4 px-5 py-6 bg-slate-200 sm:gap-4 sm:p-4">
                                    {services.map((item) => (
                                      <Link key={item.name} href={item.href}>
                                        <a className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                          </div>
                                        </a>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                              )}
                            >
                              <span>Med Request</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 left-1/2 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-4 px-5 py-6 bg-slate-200 sm:gap-4 sm:p-4">
                                    {medRequest.map((item) => (
                                      <Link key={item.name} href={item.href}>
                                        <a className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                          </div>
                                        </a>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </Popover.Group>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="">
                    <a
                      href={process.env.NEXT_PUBLIC_ADMIN_PANEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-primary-400 to-indigo-600 bg-origin-border hover:from-primary-500 hover:to-indigo-700"
                    >
                      Upload Files
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
