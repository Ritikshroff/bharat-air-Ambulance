import React from "react";
import {
  FaUserFriends,
  FaRegStar,
  FaMapSigns,
  FaGlobeAmericas,
} from "react-icons/fa";

const statistics = [
  {
    value: "15,000+",
    label: "International Missions",
    icon: <FaUserFriends />,
  },
  { value: "150+", label: "Countries Covered", icon: <FaGlobeAmericas /> },
  { value: "24/7", label: "Global Command Center", icon: <FaMapSigns /> },
];

const Statistics = () => {
  return (
    <section className="py-24 bg-medical-blue text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6 text-medical-red">
                {stat.icon}
              </div>
              <h3 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-medical-blue-light font-black text-xs md:text-sm tracking-[0.2em] uppercase opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
