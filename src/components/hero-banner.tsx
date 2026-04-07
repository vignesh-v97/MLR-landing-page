import React from 'react';

const HeroBanner = ({
  title,
  imgUrl,
  subheading,
  opacity = 0.8,
  titleSize = 'text-5xl',
}: {
  title: string;
  imgUrl: string;
  subheading?: string;
  opacity?: number;
  titleSize?: string;
}) => {
  return (
    <div
      className="h-40vh lg:h-50vh bg-no-repeat bg-cover"
      style={{
        backgroundRepeat: 'no-repeat !important',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(245deg, rgba(0,89,122,${opacity}) 0%, rgba(0,56,76,${opacity}) 100%), url('${imgUrl}')`,
      }}
    >
      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1
          className={`text-lg sm:text-xl mx-auto text-center md:text-2xl lg:text-3xl xl:text-4xl font-bold block text-white ${titleSize}`}
        >
          {title}
        </h1>
        {subheading && (
          <p className="text-base lg:text-lg mt-2 block text-white w-full lg:w-8/12 mx-auto text-center px-4 lg:px-0">
            {subheading}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
