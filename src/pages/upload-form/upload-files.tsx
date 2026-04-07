import { CheckCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useState } from 'react';

import Footer from '@/components/footer';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';

const UploadFiles = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  return (
    <div>
      <Main
        meta={
          <Meta
            title="Upload Your Medical Records - Medical Record Review"
            description="File Upload Process: 1. Update email and Case Name,  2. Click “Browse files”, open the folder location and Select all files & upload them (Or) Drag & Drop."
          />
        }
      >
        <Navbar />
        <div className="py-10 bg-white">
          <div className="px-10 py-6 mx-5 bg-white ">
            <h1 className="mx-auto mb-6 text-xl font-semibold underline font-openSans text-primary-700">
              Step-2: Upload your files
            </h1>

            <ul className="mr-10 space-y-4">
              <li className="flex items-start text-left">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Select “Browse Files”, navigate to your folder, choose the
                  files, and upload them.
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Alternatively, you can drag and drop files directly into the
                  upload area.
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Once files are selected, click “Upload” to begin the process.
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  Zip files are also supported for upload.
                </span>
              </li>
              <li className="flex items-start text-left ">
                <CheckCircleIcon className="w-5 mr-3 shrink-0 text-secondary" />
                <span className="text-lg leading-tight">
                  If you encounter any issues, please try uploading via{' '}
                  <Link
                    href="https://www.dropbox.com/request/LaBjVwSk9HEduzoPnY7g"
                    passHref
                  >
                    <a
                      target="_blank"
                      className="font-bold underline text-primary-600"
                    >
                      Dropbox
                    </a>
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </div>
          {/* {!isIframeLoaded && <Spinner />} */}
          <div className="p-10 m-5 bg-white shadow">
            <iframe
              src="https://medicolegalrequest.sharefile.com/remoteupload/06f2688e-7845-4562-8d7f-dea317a0927d"
              frameBorder="0"
              className="w-full aspect-video"
              scrolling="auto"
              id="sfRemoteUploadFrame"
              loading="lazy"
              onLoad={() => setIsIframeLoaded(true)}
            ></iframe>
          </div>
        </div>
        <Footer />
      </Main>
    </div>
  );
};

export default UploadFiles;
