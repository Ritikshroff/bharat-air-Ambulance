import React from "react";
import { cities, getCityData } from "@/data/cities";
import { 
  FaPhoneAlt, 
  FaPlane, 
  FaUserMd, 
  FaClock, 
  FaShieldAlt, 
  FaHospitalSymbol,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStethoscope,
  FaAward,
  FaUsers,
  FaBuilding,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: `air-ambulance-service-in-${city.slug}`,
  }));
}

export async function generateMetadata({ params }) {
  const fullSlug = params.city;
  const prefix = "air-ambulance-service-in-";
  
  if (!fullSlug.startsWith(prefix)) {
    return { title: "Page Not Found" };
  }

  const citySlug = fullSlug.replace(prefix, "");
  const cityData = getCityData(citySlug);
  const cityName = cityData.name;

  return {
    title: `Air Ambulance Service in ${cityName} | #1 ICU Flight Support`,
    description: `Best Air Ambulance Service in ${cityName}. 24/7 ICU medical flights, bed-to-bed transfers from ${cityData.hospitals.slice(0, 2).join(', ')}. Certified medical crew and vent-equipped aircraft. Call +91 88823 83902.`,
    keywords: `air ambulance in ${cityName}, medical flight ${cityName}, ventilator ambulance ${cityName}, emergency repatriation ${cityName}, ambulance from ${cityData.hospitals[0]}`,
    alternates: {
      canonical: `https://bharatairambulance.com/air-ambulance-service-in-${citySlug}`,
    },
  };
}

const CityLandingPage = ({ params }) => {
  const fullSlug = params.city;
  const prefix = "air-ambulance-service-in-";

  if (!fullSlug.startsWith(prefix)) {
    notFound();
  }

  const citySlug = fullSlug.replace(prefix, "");
  const cityData = getCityData(citySlug);
  
  if (!cityData) {
    notFound();
  }

  const cityName = cityData.name;

  // Schema for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": `Bharat Air Ambulance ${cityName}`,
    "description": `Emergency Air Ambulance and Medical Repatriation services in ${cityName} with bedside-to-bedside coordination.`,
    "provider": {
      "@type": "Organization",
      "name": "Bharat Air Ambulance",
      "url": "https://bharatairambulance.com"
    },
    "serviceArea": {
      "@type": "City",
      "name": cityName
    },
    "offers": {
      "@type": "Offer",
      "description": "24/7 Emergency ICU Air Ambulance"
    }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-28 pb-20 md:py-32 bg-medical-blue overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/slide1.jpg" 
            alt={`Air Ambulance Service in ${cityName}`}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-medical-blue/90 via-medical-blue/95 to-medical-blue lg:bg-gradient-to-r"></div>
        </div>
        
        <div className="container mx-auto px-5 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-red rounded-full text-white text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 animate-pulse shadow-lg shadow-medical-red/40">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                Response within 15 Minutes
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Air Ambulance Service <br className="hidden sm:block" />
                <span className="text-medical-red-light">in {cityName}</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium">
                Certified Bed-to-Bed Medical Transfers. 
                Full ICU setups for critical care repatriation from {cityName}.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <a 
                  href="tel:+918882383902" 
                  className="flex items-center justify-center gap-3 bg-white text-medical-blue hover:bg-medical-red hover:text-white px-8 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-2xl active:scale-95 group w-full sm:w-auto"
                >
                  <FaPhoneAlt className="group-hover:rotate-12 transition-transform" /> 
                  +91-88823 83902
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> 1000+ Families Saved</span>
                <span className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Pan-India ICU Support</span>
              </div>
            </div>
            
            {/* Quick Stats Grid - Grid on mobile, list-like on desktop sidebar */}
            <div className="w-full lg:w-2/5">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 bg-white/10 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 md:gap-4 text-white text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-medical-red rounded-xl flex items-center justify-center shrink-0">
                    <FaClock className="text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-60">Status</p>
                    <p className="text-sm md:text-lg font-black leading-none">24x7 Ready</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-white text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <FaPlane className="text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-60">Airport</p>
                    <p className="text-sm md:text-lg font-black leading-none">{cityData.airport.split('(')[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Logistics - Stacks on Mobile */}
      <section className="py-16 md:py-24 bg-medical-grey">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[10px] font-black text-medical-blue tracking-[0.2em] uppercase mb-4 text-center lg:text-left">Local Presence</h2>
              <h3 className="text-3xl md:text-5xl font-black text-medical-dark mb-6 text-center lg:text-left leading-tight">
                Repatriation from <br className="lg:hidden" />
                <span className="text-medical-red">{cityName}</span>
              </h3>
              <div className="text-base md:text-xl text-gray-600 mb-8 leading-relaxed space-y-4 text-center lg:text-left">
                <p>{cityData.localContext}</p>
                <p>
                  Coordinating with <strong>{cityData.hospitals.slice(0, 3).join(', ')}</strong> for zero-delay patient handover.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm">
                  <FaBuilding className="text-2xl text-medical-blue shrink-0" />
                  <span className="text-sm font-bold text-medical-dark">Hospital Tie-ups</span>
                </div>
                <div className="p-4 bg-white rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm">
                  <FaMapMarkerAlt className="text-2xl text-medical-blue shrink-0" />
                  <span className="text-sm font-bold text-medical-dark">City Ground Support</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
               {[
                 { icon: <FaStethoscope />, title: "ICU Onboard", color: "text-medical-red" },
                 { icon: <FaUsers />, title: "Expert Crew", color: "text-medical-blue" }
               ].map((box, i) => (
                 <div key={i} className="p-6 md:p-8 bg-white rounded-3xl shadow-xl shadow-medical-blue/5 border border-gray-100 text-center lg:text-left">
                  <div className={`text-4xl ${box.color} mb-4 flex justify-center lg:justify-start`}>{box.icon}</div>
                  <h4 className="text-lg md:text-xl font-black text-medical-dark mb-2">{box.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Full hospital-grade life support systems available.</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Mobile Padding Fix */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="bg-medical-dark rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="text-medical-red text-[10px] font-black tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-medical-red"></span> Case Summary
              </div>
              <h3 className="text-2xl md:text-5xl font-black text-white mb-10 leading-tight">
                Case in {cityName}: <span className="text-medical-red">Success</span>
              </h3>
              
              <div className="grid gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-medical-red-light font-bold text-xs uppercase">Route</span>
                    <span className="text-white text-sm md:text-lg font-bold text-right">{cityData.caseStudy.from.split(',')[0]} → {cityData.caseStudy.to.split(',')[0]}</span>
                  </div>
                  <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                    <p className="text-white text-base md:text-2xl font-medium leading-relaxed italic">
                      "{cityData.caseStudy.detail}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Experts Section */}
      <section className="py-16 md:py-24 bg-medical-grey">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-5xl font-black text-medical-dark mb-12 text-center leading-tight">
            Our Medical <span className="text-medical-red">Experts</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "ICU MD Doctors", icon: <FaUserMd /> },
              { title: "Paramedic Crew", icon: <FaStethoscope /> },
              { title: "Aviation Medics", icon: <FaPlane /> }
            ].map((team, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg text-center md:text-left flex flex-col items-center md:items-start group">
                <div className="text-4xl text-medical-blue/30 mb-6 group-hover:scale-110 transition-transform">{team.icon}</div>
                <h4 className="text-xl font-black text-medical-dark mb-3">{team.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Highly trained for aero-medical physiology and high-altitude critical care.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Ready FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-medical-dark leading-tight">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `Activation time in ${cityName}?`,
                a: `15-minute response for inquiries. Flight activation via ${cityData.airport} usually within 2-4 hours after medical clearance.`
              },
              {
                q: `Bed-to-bed coverage?`,
                a: `Yes, we handle everything from ground ambulance pickup in ${cityName} to hospital admission at the destination.`
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-medical-grey p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-black text-medical-dark mb-3 flex items-start gap-3">
                  <span className="bg-medical-blue text-white w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-1 text-xs">?</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacking Internal Linking */}
      <section className="py-16 md:py-24 bg-medical-dark text-white">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">Cities Near You</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.filter(c => c.slug !== citySlug).slice(0, 10).map((city) => (
              <Link key={city.slug} href={`/air-ambulance-service-in-${city.slug}`} className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-sm font-bold hover:bg-medical-red transition-all">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CityLandingPage;
