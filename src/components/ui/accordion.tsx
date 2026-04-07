import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

interface AccordianData {
  title: string;
  description: string;
}

export default function Accordion({
  data,
  titleSize,
  descriptionSize,
}: {
  data: AccordianData[];
  titleSize?: string;
  descriptionSize?: string;
}) {
  return (
    <div className="w-full  ">
      <div className="mx-auto w-full rounded-2xl">
        {data.map((accordianItem) => {
          return (
            <Disclosure key={accordianItem.title} as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 shadow hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span className={`${titleSize} text-gray-600`}>
                      {accordianItem.title}
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180' : ''
                      } h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`px-4 pt-4 pb-2 text-sm text-gray-800 ${descriptionSize}`}
                  >
                    {accordianItem.description}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
