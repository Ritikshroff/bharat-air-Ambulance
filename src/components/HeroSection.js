"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-white pt-12 md:pt-20">
      {/* Background Subtle Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-medical-red-light text-medical-red rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-medical-red"></span>
            </span>
            GLOBAL MEDICAL REPATRIATION AVAILABLE
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-medical-dark leading-[1.1] mb-6 md:mb-8">
            Global <span className="text-medical-red">Air Ambulance</span>{" "}
            <br /> From India to World
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            World-class aero-medical transit and international repatriation
            services. Bridging gaps for life-critical missions with 15+ years of
            Indian leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
            <motion.a
              href="tel:+918882383902"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:flex-1 px-6 py-4 md:py-5 bg-medical-red hover:bg-medical-red-dark text-white font-black rounded-2xl shadow-xl shadow-red-100 flex items-center justify-center gap-3 text-lg transition-all"
            >
              <FaPhoneAlt className="text-xl" />
              CALL NOW
            </motion.a>
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:flex-1 px-6 py-4 md:py-5 border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white font-black rounded-2xl flex items-center justify-center transition-all bg-white"
            >
              Get a Quote
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 text-xs md:text-sm font-bold text-gray-400">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-lg" />
              Verified Services
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-lg" />
              Pan-India Coverage
            </div>
          </div>
        </motion.div>

        {/* Right Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 lg:order-2 px-4 md:px-0"
        >
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-white">
            <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] relative">
              <img
                src="/images/slide1.jpg"
                alt="Medical Emergency Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/40 to-transparent"></div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-0 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-black text-medical-blue">
              15+
            </div>
            <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase text-center leading-tight">
              Years
              <br />
              Experience
            </div>
          </div>
          <div className="absolute -top-4 -right-0 md:-top-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-black text-medical-red">
              5000+
            </div>
            <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase text-center leading-tight">
              Successful
              <br />
              Missions
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
