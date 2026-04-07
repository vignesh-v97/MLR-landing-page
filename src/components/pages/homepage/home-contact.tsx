import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Form } from '@/components/ui/forms/form';
import ValidationError from '@/components/ui/validation-error';

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

const HomeContact = () => {
  const captchaRef = useRef<HTMLInputElement>(null);
  const [formStatus, setFormStatus] = useState<'IDLE' | 'LOADING'>('IDLE');

  const formSubmit = async (formData: ContactFormValues) => {
    setFormStatus('LOADING');
    try {
      await axios.post('/api/home-contact', formData);
      toast.success('We received your request!');
      setFormStatus('IDLE');
    } catch (error) {
      setFormStatus('IDLE');
      toast.error('There was an issue sending the mail, try again');
      console.log(error, 'error');
    }
  };
  const onSubmit = async (values: ContactFormValues, e) => {
    const captchaValue = captchaRef?.current.value;

    if (validateCaptcha(captchaValue) === true) {
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
  }, []);

  return (
    <div className="">
      <div className="mx-auto">
        <div className="relative bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact information */}
            <div
              className="relative overflow-hidden  py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12 bg-no-repeat bg-cover"
              style={{
                background: "url('/assets/images/contact-1.jpg')",
                backgroundRepeat: 'no-repeat !important',
                backgroundSize: 'cover',
                minHeight: '300px',
              }}
            ></div>

            {/* Contact form */}
            <div className="bg-primary-700 py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12">
              <h3 className="text-2xl font-medium text-white">
                Leave us your details
              </h3>
              <Form<ContactFormValues>
                action="#"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                onSubmit={onSubmit}
                validationSchema={formSchema}
              >
                {({ register, formState: { errors } }) => (
                  <>
                    <div>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="firm-name"
                          autoComplete="on"
                          placeholder="Firm Name"
                          {...register('firmName')}
                          className="block w-full  border-gray-300 py-3 px-4  shadow-sm focus:border-primary focus:ring-primary"
                        />
                        <ValidationError message={errors.firmName?.message} />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          type="text"
                          autoComplete="on"
                          {...register('contactPerson')}
                          placeholder="Contact Person"
                          className="block w-full border-gray-300 py-3 px-4  shadow-sm focus:border-primary focus:ring-primary"
                        />
                        <ValidationError
                          message={errors.contactPerson?.message}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          type="text"
                          autoComplete="on"
                          placeholder="Email"
                          {...register('email')}
                          className="block w-full  border-gray-300 py-3 px-4  shadow-sm focus:border-primary focus:ring-primary"
                        />
                        <ValidationError message={errors.email?.message} />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          type="text"
                          {...register('phoneNumber')}
                          autoComplete="on"
                          placeholder="Phone Number"
                          className="block w-full  border-gray-300 py-3 px-4  shadow-sm  focus:border-primary focus:ring-primary"
                          aria-describedby="phone-optional"
                        />
                        <ValidationError
                          message={errors.phoneNumber?.message}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="mt-1">
                        <input
                          type="text"
                          autoComplete="on"
                          {...register('subject')}
                          id="subject"
                          placeholder="Subject"
                          className="block w-full  border-gray-300 py-3 px-4  shadow-sm focus:border-primary focus:ring-primary"
                        />
                        <ValidationError message={errors.subject?.message} />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="mt-1">
                        <textarea
                          id="message"
                          {...register('message')}
                          rows={4}
                          placeholder="Message"
                          className="block w-full  border border-gray-300 py-3 px-4  shadow-sm focus:border-primary focus:ring-primary"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                        <ValidationError message={errors.message?.message} />
                      </div>
                    </div>
                    <div className="home-contact-captcha flex-col lg:flex-row flex ">
                      <div className="">
                        <LoadCanvasTemplate />
                      </div>
                      <input
                        type="text"
                        id="user_captcha_input"
                        autoComplete="on"
                        ref={captchaRef}
                        className=" lg:ml-4 mt-2 lg:mt-0 block border-gray-300  px-4 h-8  shadow-sm focus:border-primary focus:ring-primary w-40 "
                        placeholder="Enter the Captcha"
                      />
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="btn btn-2 disabled:opacity-50"
                        disabled={formStatus !== 'IDLE'}
                      >
                        {formStatus === 'LOADING' && (
                          <div className="loader ease-linear rounded-full border-4 border-t-4 border-secondary-200 h-4 w-4 " />
                        )}
                        {formStatus === 'IDLE' && 'Submit'}
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
  );
};

export default HomeContact;
