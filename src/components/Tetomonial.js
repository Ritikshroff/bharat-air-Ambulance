"use client";

import React from "react";

const testimonials = [
  {
    name: "Ravi Sharma",
    feedback:
      "The services provided were exceptional. The staff was compassionate and made the entire process stress-free.",
    rating: "5.0",
  },
  {
    name: "Priya Kapoor",
    feedback:
      "Highly professional and empathetic. They took care of everything with great respect and dignity.",
    rating: "4.8",
  },
  {
    name: "Arjun Verma",
    feedback:
      "Their attention to detail and prompt service made a difficult time much easier to bear.",
    rating: "4.9",
  },
  {
    name: "Neha Singh",
    feedback:
      "Excellent service! They were supportive and managed everything efficiently.",
    rating: "5.0",
  },
];

const Tetomonial = () => {
  return (
    <div className="bg-medical-grey py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-sm font-black text-medical-blue tracking-widest uppercase mb-4">
          Patient Stories
        </h2>
        <p className="text-4xl font-black text-medical-dark">
          What Families Say About Us
        </p>
      </div>
      <div className="flex animate-marquee hover:pause-animation">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[450px] p-6 md:p-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 mx-3 md:mx-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-lg font-medium text-gray-600 mb-6 leading-relaxed">
              "{testimonial.feedback}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center text-medical-blue font-bold">
                {testimonial.name[0]}
              </div>
              <div>
                <p className="text-md font-bold text-medical-dark">
                  {testimonial.name}
                </p>
                <p className="text-sm text-medical-blue font-medium">
                  Verified Client
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Tetomonial;
