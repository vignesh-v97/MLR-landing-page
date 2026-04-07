import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import { Meta } from '@/components/Meta';
import Navbar from '@/components/navbar';
import { Main } from '@/components/templates/Main';
import { Form } from '@/components/ui/forms/form';
import ValidationError from '@/components/ui/validation-error';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const locations = [
  {
    city: 'United States',
    address: ['539 W Commerce St #7399', 'Dallas, TX 75208'],
  },
  {
    city: 'Cannada',
    address: ['7307 cork tree row', 'Mississauga, ON L5N8N9'],
  },
  {
    city: 'India',
    address: [
      'No 16, Lal Bahadur Street, Ram Nagar',
      'Ambattur, Chennai-600053',
    ],
  },
];
interface ContactFormValues {
  firmName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const formSchema = yup.object().shape({
  firmName: yup.string().required(),
  contactPerson: yup.string().required(),
  email: yup.string().email().required('Email required'),
  phoneNumber: yup
    .string()
    // .matches(/^[6-9]\d{9}$/, {
    //   message: 'Please enter valid number.',
    //   excludeEmptyString: false,
    // })
    .required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const Contact = () => {
  const captchaRef = useRef<HTMLInputElement>(null);
  const [formStatus, setFormStatus] = useState<'IDLE' | 'LOADING'>('IDLE');
  const [hasWindow, setHasWindow] = useState(false);

  const formSubmit = async (formData: ContactFormValues) => {
    setFormStatus('LOADING');

    try {
      await axios.post('/api/home-contact', formData);
      toast.success('We received your request!');
      setFormStatus('IDLE');
    } catch (error) {
      toast.error('There was an issue sending the mail, try again');
      console.log(error, 'error');
      setFormStatus('IDLE');
    }
  };

  const onSubmit = async (values: ContactFormValues, e) => {
    const captchaValue = captchaRef?.current.value;

    if (validateCaptcha(captchaValue) === true) {
      // alert('Captcha Matched');
      await formSubmit(values);
      e.target.reset();
    } else {
      toast.warning('Captcha does not match, Please try again', {
        position: 'bottom-center',
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      loadCaptchaEnginge(6);
    }, 1000);
    if (typeof window !== undefined) {
      setHasWindow(true);
    }
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Contact US | Medico Legal Request LLC | Record Review Services"
          description="Contact Number: +1 (903) 765-6073, Email: support@medicolegalrequestllc.com, Address: 539 W. Commerce St #7399, Dallas, TX 75208.
          "
        />
      }
    >
      <div className="bg-white">
        <Navbar />
        <HeroBanner
          title="Contact us"
          imgUrl="/assets/images/page-banners/Contact Us-Banner.jpg"
          alt="Contact Us-Banner"
        />

        <main>
          {/* ============================FORM==================== */}
          <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 text-gray-600">
            <div className="relative max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="">
                  <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 grid gap-8">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium">Email</h3>
                      <a
                        href="mailto:support@medicolegalrequestllc.com"
                        className="break-all  mt-2 text-base text-black "
                      >
                        support@medicolegalrequestllc.com
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium">
                        Phone Number&nbsp;
                      </h3>
                      <a
                        className=" mt-2 text-base text-gray-600"
                        href="tel:+1 903-765-6073"
                      >
                        +1 (903) 765-6073
                      </a>
                    </div>
                    {locations.map((location) => (
                      <div key={location.city}>
                        <h3 className=" text-lg font-medium">
                          {location.city}
                        </h3>
                        <div className=" mt-2 text-base space-y-1">
                          {location.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full max-w-xl mx-auto lg:mt-0 mt-10">
                  <div className="text-center">
                    {/* <p className="mt-4 text-lg leading-6 text-gray-500">
                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                    volutpat massa dictumst amet. Sapien tortor lacus arcu.
                  </p> */}
                  </div>
                  <div className="">
                    <Form<ContactFormValues>
                      onSubmit={onSubmit}
                      validationSchema={formSchema}
                      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 rounded  p-5 shadow md:p-8 "
                      style={{ backgroundColor: '#DEEBF7' }}
                    >
                      {({ register, formState: { errors } }) => (
                        <>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="firm-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Firm Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="firm-name"
                                autoComplete="on"
                                className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                                {...register('firmName')}
                              />
                              <ValidationError
                                message={errors.firmName?.message}
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="contact-person"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Contact Person
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="contact-person"
                                {...register('contactPerson')}
                                autoComplete="on"
                                className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                              />
                              <ValidationError
                                message={errors.contactPerson?.message}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <div className="mt-1">
                              <input
                                id="email"
                                {...register('email')}
                                type="email"
                                autoComplete="on"
                                className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                              />
                              <ValidationError
                                message={errors.email?.message}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="phone-number"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone Number
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                              {/* <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-primary-500 focus:border-primary-500 rounded-md"
                          >
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                          </select>
                        </div> */}
                              <input
                                type="text"
                                {...register('phoneNumber')}
                                id="phone-number"
                                autoComplete="on"
                                className="py-3 px-4 block w-full  focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                              />
                              <ValidationError
                                message={errors.phoneNumber?.message}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Subject
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                {...register('subject')}
                                id="subject"
                                autoComplete="on"
                                className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Message
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="message"
                                rows={4}
                                className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md"
                                defaultValue={''}
                                {...register('message')}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex items-start">
                              <div className="shrink-0">{/* Captcha */}</div>
                            </div>
                          </div>
                          <div className="contact-captcha flex ">
                            <div className="">
                              {hasWindow && <LoadCanvasTemplate />}
                            </div>
                            <input
                              type="text"
                              id="user_captcha_input"
                              ref={captchaRef}
                              className=" ml-4 block border-gray-300  px-4 h-8  shadow-sm focus:border-primary focus:ring-primary w-40 "
                              placeholder="Enter the Captcha"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <button
                              type="submit"
                              disabled={formStatus !== 'IDLE'}
                              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                              {formStatus === 'LOADING' && (
                                <div className="loader ease-linear rounded-full border-4 border-t-4 border-secondary-200 h-4 w-4 " />
                              )}
                              {formStatus === 'IDLE' && `Let's Talk`}
                            </button>
                          </div>
                        </>
                      )}
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Side-by-side grid */}
          {/* <div className="bg-white mt-16">
      <div
        style={{
          height: '350px',
          backgroundSize: 'cover !important',
          backgroundRepeat: 'no-repeat !important',
          backgroundPosition: 'center',
          background:
            "linear-gradient(245deg, rgba(0,89,122,0.8) 0%, rgba(0,56,76,0.8) 100%), url('/assets/images/page-banners/home.jpg')",
        }}
        className="bg-cover"
      >
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="  p-12 text-center ">
            <span className="text-4xl font-bold block text-white">
              Contact Us
            </span>
          </h1>
        </div>
      </div>
      <main>
        {/* Side-by-side grid */}
          {/* <div className="bg-white mt-16">
          <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl  sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-warm-gray-200 divide-y">
              <section
                className=" lg:grid lg:grid-cols-3 lg:gap-8"
                aria-labelledby="location-heading"
              >
                <h2
                  id="location-heading"
                  className="text-warm-gray-900 text-2xl font-extrabold sm:text-3xl"
                >
                  Locations
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  {locations.map((location) => (
                    <div key={location.city}>
                      <h3 className="text-warm-gray-900 text-lg font-medium">
                        {location.city}
                      </h3>
                      <div className="text-warm-gray-500 mt-2 text-base space-y-1">
                        {location.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div> */}
          {/* ==================== */}
          <div className="">
            {hasWindow && (
              <div style={{ width: '100%' }}>
                <iframe
                  className="aspect-video	w-full"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=539%20W%20Commerce%20St,%20Dallas,%20TX%2075208+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </Main>
  );
};
export default Contact;
