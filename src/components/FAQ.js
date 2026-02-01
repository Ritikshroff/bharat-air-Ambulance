"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "Why is a funeral important?",
    answer:
      "A funeral service serves a social, emotional, as well as a religious purpose after the loss of a loved one. It is a customary way to announce the demise to the community in an honourable manner. Family and friends gather to mourn the loss of the deceased, share the memories, pay condolences, and honour the life of the lost soul. It is the foremost and the most vital step in the journey towards healing.",
  },
  {
    question: "What to do if family death occurs away from home?",
    answer:
      "It is the uncertain nature of loss that makes it more difficult. When a family death occurs away from home, it is advisable to reach out to a readily available funeral service provider. Such are times of confusion, and the only thing to do is look for the right services, who can assume responsibility and make the necessary arrangements for the last rites of the deceased. Bharat Ambulance team will prepare for everything ranging from the transport, the cremation/burial, to the post-cremation services.",
  },
  {
    question: "Are your services available in multiple cities?",
    answer: "Yes, we provide services in over 15 cities across the country.",
  },
  {
    question: "How can I personalize a funeral?",
    answer:
      "A funeral, though essentially a time of mourning, can be replete with remembrances and honours. Rather than a responsibility, it should be about bidding that well-deserved farewell to the beloved lost soul. A personalized funeral can be created through activities, eulogies, memory displays, favourite quotes, a celebration of life events, and much more.",
  },
  // Add more FAQs here
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-medical-blue tracking-widest uppercase mb-4">
            Questions?
          </h2>
          <p className="text-4xl font-black text-medical-dark">
            Frequently Asked Questions
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${activeIndex === index ? "border-medical-blue bg-medical-blue-light/30 shadow-sm" : "border-gray-100 bg-medical-grey"}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center group"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-lg font-bold ${activeIndex === index ? "text-medical-blue" : "text-medical-dark"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-2xl transition-transform duration-300 ${activeIndex === index ? "rotate-45 text-medical-blue" : "text-medical-dark/30"}`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {faq.answer}
                  </p>
                  <a
                    href="tel:+918882383902"
                    className="inline-flex items-center gap-2 font-bold text-medical-blue hover:underline"
                  >
                    Speak to an expert
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
