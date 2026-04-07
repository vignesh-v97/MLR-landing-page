import React from 'react';

const Highlights = ({ bgColor = 'bg-white' }: { bgColor?: string }) => {
  return (
    <div className={`${bgColor}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:py-12  sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="mx-auto grid sm:grid-cols-4">
          <div className="m-4 flex flex-col items-center">
            <div className="flex h-12 w-12 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary-400">
              <img
                src="/assets/images/icons/book.png"
                alt="Icon-Bookmark"
                className="w-10 lg:w-20 object-contain p-2 lg:p-5"
              />
            </div>
            <p className="mt-4 text-center text-primary-600 text-xs lg:text-base">
              Free Bookmarked Medical Records
            </p>
          </div>
          <div className="m-4 flex flex-col items-center">
            <div className="flex h-12 w-12 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary-400">
              <img
                src="/assets/images/icons/link.png"
                alt="Icon-Hyperlinks"
                className="w-10 lg:w-20 object-contain p-2 lg:p-5"
              />
            </div>
            <p className="mt-4 text-center text-primary-600 text-xs lg:text-base">
              Free Hyperlinked Medical Records
            </p>
          </div>
          <div className="m-4 flex flex-col items-center">
            <div className="flex h-12 w-12 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary-400">
              <img
                src="/assets/images/icons/budget.png"
                alt="Icon-Quote/budget"
                className="w-10 lg:w-20 object-contain p-2 lg:p-5"
              />
            </div>
            <p className=" mt-4 text-center text-primary-600 text-xs lg:text-base">
              Free Cost Estimate/Quote
            </p>
          </div>
          <div className="m-4 flex flex-col items-center">
            <div className="flex h-12 w-12 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-primary-400">
              <img
                src="/assets/images/icons/look-up.png"
                alt="Icon-Missing-Records-Identification"
                className="w-10 lg:w-20 object-contain p-2 lg:p-5"
              />
            </div>
            <p className=" mt-4 text-center text-primary-600 text-xs lg:text-base">
              Free Missing Records Identification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
