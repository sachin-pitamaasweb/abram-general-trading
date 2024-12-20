"use client";

import { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

export default function Milestones() {
  const milestones = [
    {
      number: 200,
      suffix: "+",
      description: "Products across multiple domain"
    },
    {
      number: 1700,
      suffix: "+",
      description: "People-strong network of dealers and channel partners"
    },
    {
      number: 10,
      suffix: "+",
      description: "Multinational Brands have worked with us so far"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Milestones</h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            Here are some numbers that tell the story of our journey to agricultural excellence and pioneering innovation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-3">
                  <AnimatedNumber end={milestone.number} />
                  {milestone.suffix}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

