import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import NextNprogress from 'nextjs-progressbar';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import * as ga from '@/lib/ga';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const rootElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById('root');
    rootElementRef.current = element;
    setRootElement(element);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageviewGA(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <NextNprogress
        color="#F47A20"
        startPosition={0.3}
        stopDelayMs={0}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="root"></div>
      {rootElement && (
        <button
          className="calendly-btn"
          onClick={() =>
            window.open(
              'https://calendly.com/medicolegalrequestllc/appointment-scheduling',
              '_blank',
              'noopener,noreferrer'
            )
          }
          style={{
            backgroundColor: '#F47A20',
            color: '#ffffff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Schedule Appointment
        </button>
      )}
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/622c0be71ffac05b1d7e3028/1ftu0t0jp"
      />
    </>
  );
};

export default MyApp;
