import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";
import Statistics from "../components/Statistics";
import FAQ from "../components/FAQ";
import Tetomonial from "../components/Tetomonial";
import {
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaGlobeAmericas,
} from "react-icons/fa";

export const metadata = {
  title: "Bharat Air Ambulance | Emergency Medical Repatriation India",
  description:
    "Global Leader in Air Ambulance & Funeral Repatriation services from India. 24/7 ICU Flight Support, International Coffin Transport & Sacred Asthi Visarjan.",
};

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />

      {/* Trust Bar - Mobile Scrollable, Desktop Fixed */}
      <div className="bg-medical-blue py-6">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8 md:gap-4 overflow-x-auto scrollbar-hide">
          {[
            { icon: <FaClock />, text: "24/7 Availability" },
            { icon: <FaCheckCircle />, text: "Medical Equipment" },
            { icon: <FaGlobeAmericas />, text: "Pan-India Support" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-white shrink-0"
            >
              <span className="text-xl md:text-2xl opacity-60">
                {item.icon}
              </span>
              <span className="font-bold text-sm md:text-base">
                {item.text}
              </span>
            </div>
          ))}
          <div className="hidden lg:flex items-center gap-3 border-l border-white/20 pl-6 h-8 font-black text-lg text-white">
            Call: +9188823 83902
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-medical-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-sm font-black text-medical-blue tracking-widest uppercase mb-4">
              Our Expertise
            </h2>
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-medical-dark leading-tight">
              Comprehensive <span className="text-medical-red">Medical</span>{" "}
              Services
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-medical-dark mb-8 md:mb-12 leading-[1.1]">
                Global Repatriation <br />
                <span className="text-medical-blue">Across 150+ Countries</span>
              </h2>
              <div className="space-y-10 md:space-y-12">
                {[
                  {
                    step: "01",
                    title: "Case Activation",
                    desc: "Contact our international command center with patient location and destination.",
                  },
                  {
                    step: "02",
                    title: "Logistics Sync",
                    desc: "Coordination with global aviation authorities and hospital medical teams.",
                  },
                  {
                    step: "03",
                    title: "Medical Transit",
                    desc: "Specialized aero-medical transfer with continuous critical care monitoring.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 md:gap-8 items-start">
                    <div className="text-5xl md:text-7xl font-black text-medical-blue/10 leading-none shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-medical-dark mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="bg-medical-blue-light rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 relative z-10 border border-medical-blue/5">
                <h3 className="text-2xl md:text-3xl font-black text-medical-blue mb-6">
                  Global Reach
                </h3>
                <p className="text-medical-dark/70 mb-8 md:mb-12 font-medium text-sm md:text-lg">
                  Connecting all major Indian cities with international hubs
                  like Dubai, London, New York, and Singapore for seamless
                  repatriation.
                </p>
                <ul className="grid grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4">
                  {[
                    "UAE (Dubai)",
                    "United Kingdom",
                    "USA",
                    "Singapore",
                    "European Union",
                    "Southeast Asia",
                    "Pan-India Road",
                    "Interstate Rail",
                  ].map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 md:gap-3 font-bold text-medical-blue text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-medical-red rounded-full"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-medical-red/5 rounded-full blur-3xl hidden md:block"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-medical-blue/5 rounded-full blur-3xl hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      <Statistics />
      <Tetomonial />
      <FAQ />
    </main>
  );
}
