import Link from 'next/link';
import React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const FourOFour = () => {
  return (
    <>
      <Navbar />
      <div className="m-4 mx-auto max-w-6xl my-12 leading-relaxed text-gray-800">
        <img src="/assets/images/404.png" alt="" className="w-7/12 mx-auto" />
        <h1 className="heading text-center">
          Sorry! This Route Does not exist
        </h1>
        <div className="flex justify-center mt-6">
          <Link href="/">
            <button className="btn btn-1">Re Route to Homepage</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FourOFour;
