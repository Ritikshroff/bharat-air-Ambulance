"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqakqzdb");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 md:p-10 bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl mx-auto border border-gray-100"
    >
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-medical-dark mb-2">
          Request Assistance
        </h2>
        <p className="text-gray-500 font-medium">
          Fill the form for immediate callback
        </p>
      </div>

      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 bg-green-50 text-green-700 rounded-3xl text-center border border-green-100"
        >
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            ✓
          </div>
          <p className="font-bold text-xl mb-2">Request Sent Successfully</p>
          <p>Our emergency team will contact you within 10-15 minutes.</p>
        </motion.div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-bold text-medical-dark ml-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-medical-grey border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-bold text-medical-dark ml-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 00000 00000"
                className="w-full px-5 py-4 bg-medical-grey border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="service"
              className="text-sm font-bold text-medical-dark ml-1"
            >
              Required Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-5 py-4 bg-medical-grey border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-all font-medium appearance-none"
              required
            >
              <option value="">Select a service</option>
              <option value="air-ambulance">Air Ambulance</option>
              <option value="icm-ground">ICU Ground Ambulance</option>
              <option value="funeral">Funeral Services</option>
              <option value="repatriation">Repatriation</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="requirements"
              className="text-sm font-bold text-medical-dark ml-1"
            >
              Additional Details
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows="3"
              placeholder="Tell us about the patient's condition or specific requirements..."
              className="w-full px-5 py-4 bg-medical-grey border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-medical-blue hover:bg-medical-blue-dark text-white font-black rounded-2xl shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 text-lg"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Submit Emergency Request"}
            {!state.submitting && (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            )}
          </motion.button>

          <p className="text-center text-xs text-gray-400 font-medium">
            Your data is protected. By submitting, you agree to our privacy
            policy.
          </p>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
