import React from "react";
import ServiceCards from "@/components/ServiceCards";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Emergency Medical & Funeral Services | Bharat Air Ambulance",
  description:
    "Comprehensive medical transportation including Air Ambulance, Freezer Box, Repatriation, and Funeral services. Trusted pan-India and global reach.",
};

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-medical-blue py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-24"></div>
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <h2 className="text-sm font-black text-white/60 tracking-[0.3em] uppercase mb-4">
            India's Global Medical Bridge
          </h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Comprehensive <br /> Global Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
            From high-altitude ICU air ambulances to international body
            repatriation and dignified local funeral management — we handle
            every mission with Indian heart and global standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-medical-dark mb-8">
              World-Class Care
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Bharat Air Ambulance, we bridge the gap between emergency and
              hospital care. Our fleet is equipped with state-of-the-art life
              support systems, ensuring that patients receive continuous medical
              attention during transit.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Bed-to-Bed Transfer",
                "Specialized Aero-Medical Crew",
                "Hi-Tech Life Support Systems",
                "Real-time Mission Monitoring",
                "Compassionate Funeral Support",
                "Global Repatriation Network",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-bold text-medical-dark"
                >
                  <FaCheckCircle className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-medical-grey p-8 rounded-[2rem] border border-gray-100 h-fit">
            <h3 className="text-xl font-bold text-medical-dark mb-6 text-center">
              Talk to a Medical Expert
            </h3>
            <p className="text-gray-500 text-sm text-center mb-8">
              Get immediate guidance on the best transport solution for your
              specific case.
            </p>
            <a
              href="tel:+918882383902"
              className="w-full bg-medical-red text-white py-4 rounded-xl flex items-center justify-center gap-3 font-black shadow-lg shadow-red-100 hover:scale-105 transition-transform"
            >
              <FaPhoneAlt />
              +9188823 83902
            </a>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-medical-dark">
              All Service Categories
            </h2>
            <div className="h-1 flex-1 bg-gray-100 ml-8 md:block hidden"></div>
          </div>
          <ServiceCards />
        </div>
      </div>
    </div>
  );
};

export default Services;
