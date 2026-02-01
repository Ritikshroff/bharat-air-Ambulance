"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaWhatsapp,
} from "react-icons/fa";
import Statistics from "@/components/Statistics";

const ServiceClient = ({ service }) => {
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-medical-grey">
        <div className="text-center">
          <h1 className="text-4xl font-black text-medical-dark mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-medical-blue font-bold flex items-center justify-center gap-2"
          >
            <FaArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header section with specialized medical feel */}
      <section className="bg-medical-blue py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 font-bold transition-colors"
          >
            <FaArrowLeft /> All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 font-medium leading-relaxed max-w-xl">
                {service.shortDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="tel:+918882383902"
                className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl transition-all"
              >
                <FaPhoneAlt /> CALL 24/7
              </a>
              <a
                href="https://wa.me/918882383902"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl transition-all"
              >
                <FaWhatsapp size={28} /> WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-12 border-8 border-medical-grey">
                <Image
                  src={service.imgSrc}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-black text-medical-dark mb-6">
                Service Overview
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                {service.fullDesc}
              </p>

              <h3 className="text-2xl font-black text-medical-dark mb-8">
                Key Features & Standards
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-6 bg-medical-grey rounded-3xl border border-gray-100"
                  >
                    <FaCheckCircle className="text-medical-red text-2xl shrink-0 mt-1" />
                    <span className="font-bold text-medical-dark leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-10 bg-medical-dark rounded-[3rem] text-white">
                <h3 className="text-2xl font-black mb-6">
                  Why Choose Our Global Network?
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  With presence in major Indian cities and strategic
                  partnerships worldwide, we provide a seamless bridge for
                  medical and funeral logistics. Our protocols are designed to
                  minimize response time and maximize peace of mind.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-medical-red rounded-full"></div>
                    <span className="font-bold">
                      Compliant with DGCA & International Aviation Norms
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-medical-red rounded-full"></div>
                    <span className="font-bold">
                      Transparent Pricing with No Hidden Costs
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-medical-red rounded-full"></div>
                    <span className="font-bold">
                      Multilingual Support Staff (24/7)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sticky Sidebar Right */}
            <div className="space-y-8">
              <div className="sticky top-24 p-10 bg-white rounded-[3rem] border-2 border-medical-blue/10 shadow-xl">
                <h3 className="text-2xl font-black text-medical-dark mb-4">
                  Request a Quote
                </h3>
                <p className="text-gray-500 mb-8 text-sm">
                  Need pricing for {service.name}? Our specialists can provide
                  an estimate within minutes.
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-medical-grey rounded-2xl border-none outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-4 bg-medical-grey rounded-2xl border-none outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                  <textarea
                    rows="3"
                    placeholder="Requirement Details"
                    className="w-full p-4 bg-medical-grey rounded-2xl border-none outline-none focus:ring-2 focus:ring-medical-blue resize-none"
                  ></textarea>
                  <button className="w-full py-5 bg-medical-blue text-white rounded-2xl font-black text-lg shadow-lg hover:bg-medical-blue-dark transition-all">
                    Check Availability
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">
                      Emergency Help
                    </p>
                    <p className="text-xl font-black text-medical-red">
                      +9188823 83902
                    </p>
                  </div>
                  <FaPhoneAlt className="text-2xl text-medical-red animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Statistics />
    </div>
  );
};

export default ServiceClient;
