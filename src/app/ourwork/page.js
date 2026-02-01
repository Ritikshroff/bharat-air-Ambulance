import React from "react";
import Statistics from "@/components/Statistics";
import Tetomonial from "@/components/Tetomonial";
import {
  FaMissionary,
  FaFighterJet,
  FaHeartbeat,
  FaCheckCircle,
  FaProjectDiagram,
} from "react-icons/fa";

export const metadata = {
  title: "Our Work & Mission Impact | Bharat Air Ambulance",
  description:
    "Showcasing our 15,000+ successful international medical missions and 1,500+ family repatriations across 150+ countries. Excellence in global care.",
};

const OurWork = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-medical-dark py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-red/10 skew-x-12 translate-x-24"></div>
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <h2 className="text-sm font-black text-medical-red tracking-[0.3em] uppercase mb-4">
            Global Operations
          </h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Connecting India <br /> With Global Care
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
            With over 15 years of leadership in global medical repatriation, we
            serve as the primary bridge for families bringing loved ones home
            from any corner of the world.
          </p>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-24 bg-medical-grey">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFighterJet className="text-medical-red" />,
                title: "Cross-Border Repatriation",
                desc: "Navigating international aviation laws and health protocols to bring patients home safely from overseas.",
              },
              {
                icon: <FaHeartbeat className="text-medical-blue" />,
                title: "High-Altitude ICU",
                desc: "Specialized aero-medical equipment designed to maintain critical stability in pressurized aircraft cabins.",
              },
              {
                icon: <FaProjectDiagram className="text-green-500" />,
                title: "Universal Logistics",
                desc: "End-to-end coordination with embassies, airlines, and local authorities across 150+ countries.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-medical-grey rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-medical-dark mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-medical-dark leading-tight">
                Supporting Families in <br />{" "}
                <span className="text-medical-blue">Times of Need</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bharat Air Ambulance Services has supported over 1,500 families
                from diverse religions, communities, and nationalities. We
                understand that during the most challenging times, you need a
                partner who can handle every detail with grace and
                professionalism.
              </p>
              <div className="space-y-4">
                {[
                  "International Repatriation Specialists",
                  "24/7 Command Center Operations",
                  "Hospital Bed-to-Bed Transfer",
                  "Direct Airfield Access via DGCA Norms",
                ].map((list, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-medical-dark font-bold"
                  >
                    <FaCheckCircle className="text-medical-red" />
                    {list}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/slide1.jpg"
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                alt="Operational Service"
              />
              <div className="absolute -bottom-10 -left-10 bg-medical-red p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-black mb-1">1500+</p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Families Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Statistics />

      {/* Testimonials */}
      <Tetomonial />

      {/* CTA */}
      <section className="py-24 bg-medical-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Need Assistance Immediately?
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium">
            Our expert team is standing by 24/7 to coordinate emergency medical
            transport or funeral services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+918882383902"
              className="bg-medical-red px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform"
            >
              CALL +9188823 83902
            </a>
            <a
              href="/services"
              className="border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-medical-blue transition-all"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
