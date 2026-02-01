"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBriefcaseMedical,
  FaGlobeAmericas,
  FaPlaneDeparture,
} from "react-icons/fa";

const CreativeEffect = () => {
  return (
    <div className="p-6 md:p-10 bg-medical-blue-light/30 rounded-[2.5rem] border border-medical-blue/10 h-full flex flex-col justify-center">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-sm font-black text-medical-red tracking-[0.3em] uppercase mb-4">
          India's Global Lead
        </h2>
        <h3 className="text-3xl md:text-5xl font-black text-medical-blue mb-4 leading-tight">
          Bridging India <br /> with the World
        </h3>
        <p className="text-gray-600 font-medium max-w-md">
          Specialized in complex international repatriations and cross-border
          medical transfers via high-tech aero-medical units.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            icon: <FaPlaneDeparture className="text-medical-red" />,
            title: "Global Repatriation",
            desc: "Full logistics handling for bringing your loved ones home from any global location, compliant with international health laws.",
          },
          {
            icon: <FaBriefcaseMedical className="text-medical-blue" />,
            title: "ICU-Standard Transit",
            desc: "Every flight and ambulance is an 'ICU on wheels/wings', equipped with advanced life support and monitored by specialists.",
          },
          {
            icon: <FaGlobeAmericas className="text-green-500" />,
            title: "Pan-India Network",
            desc: "Instant dispatch capabilities across all 28 states and 8 Union Territories with localization in every major metro.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex gap-5"
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-medical-dark mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white rounded-2xl border border-medical-blue/5 shadow-sm">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">
          Accredited Excellence
        </p>
        <div className="flex justify-center flex-wrap gap-8 grayscale opacity-40">
          <div className="font-black text-xl italic">NABH</div>
          <div className="font-black text-xl italic">DGCA</div>
          <div className="font-black text-xl italic">ISO 9001</div>
          <div className="font-black text-xl italic">IATA</div>
        </div>
      </div>
    </div>
  );
};

export default CreativeEffect;
