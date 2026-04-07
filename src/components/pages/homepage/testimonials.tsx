/* eslint-disable tailwindcss/no-custom-classname */
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

const TestimonialList = [
  { name: 'CA based law firm', description: 'You guys are awesome' },
  {
    name: 'TX Based Law Firm',
    description:
      'I’m satisfied with your medical summary. I will share more cases this week',
  },
  {
    name: 'TX Based Law Firm',
    description:
      'I can’t thank you enough for the immediate turn around on the summary for the John Doe case',
  },
  { description: 'Your summaries are worthwhile', name: 'John Smith.' },
  {
    name: 'NY Based Law Firm.',
    description:
      'We were quite pleased with the final output, which produced a comprehensive and detailed chronology. We are happy to work on more cases ',
  },
];
const animation = { duration: 20000, easing: (t) => t };

const Testimonials = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      mode: 'free-snap',
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 1, spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: {
        perView: 1,
        spacing: 30,
      },

      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(s) {
        s.moveToIdx(5, true, animation);
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <section
      className="pt-8 pb-32 overflow-hidden lg:pt-16"
      style={{ background: '#EFF8FB' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mt-16 mb-20">
          <h3 className="text-2xl font-bold text-center lg:text-3xl xl:text-4xl text-primary ">
            Testimonials
          </h3>
          <p className="mt-3 text-xl text-center text-primary-400 lg:text-2xl">
            What our beloved clients says
          </p>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {TestimonialList.map((testimonialItem) => {
            return (
              <div
                className="keen-slider__slide"
                key={testimonialItem.description}
              >
                <div className="testimonial-single shadow-sm">
                  <div className="testimonial-quote">
                    <span className="testimonial-quote-icon">
                      <img
                        src="/assets/images/icons/left-quote.png"
                        alt=""
                        className="w-10"
                      />
                    </span>
                    <p className="" style={{ minHeight: '120px' }}>
                      {testimonialItem.description}
                    </p>
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-author-img">
                      <img
                        src="assets/images/profile.png"
                        alt=""
                        className="block w-full"
                      />
                    </div>
                    <div className="testimonial-author-info font-medium">
                      <h4>{testimonialItem.name}</h4>
                      {/* <p>Founder &amp; CEO</p> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots mt-10">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    console.log(idx, 'idx');
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`dot${currentSlide === idx ? ' active' : ''}`}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
