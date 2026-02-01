"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaStethoscope } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-medical-grey py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 md:p-16 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 max-w-2xl w-full"
      >
        <div className="w-20 h-20 bg-medical-blue-light rounded-3xl flex items-center justify-center text-4xl text-medical-blue mx-auto mb-8">
          <FaStethoscope className="animate-bounce" />
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-medical-dark mb-6">
          Feature Under <br />{" "}
          <span className="text-medical-red">Clinical Review</span>
        </h1>

        <p className="text-lg text-gray-500 mb-10 font-medium">
          We're finalizing the details of this section to provide you with the
          most accurate and helpful medical information. Expected available
          soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-medical-blue text-white rounded-2xl font-black shadow-lg shadow-blue-100 hover:scale-105 transition-transform"
          >
            Return to Home
          </Link>
          <a
            href="tel:+918882383902"
            className="px-8 py-4 border-2 border-medical-red text-medical-red rounded-2xl font-black hover:bg-medical-red hover:text-white transition-all"
          >
            Emergency Call
          </a>
        </div>
      </motion.div>
    </div>
  );
}
