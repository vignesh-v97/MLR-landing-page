import React from 'react';

const StatsList = [
  {
    count: '4',
    title: 'Years of experience',
    imgSrc: '/assets/images/icons/stats/user-experience.png',
  },
  {
    count: '50',
    title: 'Team of experts',
    imgSrc: '/assets/images/icons/stats/medical-team.png',
  },
  {
    count: '100',
    title: 'Satisfied customers',
    imgSrc: '/assets/images/icons/stats/people.png',
  },
  {
    count: '3',
    title: 'Locations',
    imgSrc: '/assets/images/icons/stats/location.png',
  },
];

const Stats = () => {
  return (
    <div className="py-16 px-4 lg:px-0" style={{ background: '#4F78AB' }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
          {StatsList.map((stat, i) => (
            <div className="" key={stat.title}>
              <div className="counter-box">
                <div className="icon">
                  <img src={stat.imgSrc} alt="" className="w-14 h-14" />
                </div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="500"
                  data-speed="3000"
                >
                  {stat.count}
                </span>
                <h6 className="title">+ {stat.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
