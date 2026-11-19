import React from "react";
import { cities, getCityData } from "@/data/cities";
import {
  servicesData,
  serviceToPrefixMap,
  resolveServiceFromSlug,
  getServiceFaqs,
} from "@/data/servicesData";
import {
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBuilding,
  FaArrowRight,
  FaWhatsapp,
  FaShieldAlt,
  FaStar,
  FaHospital,
  FaFire,
} from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params = [];
  for (const prefix of Object.values(serviceToPrefixMap)) {
    for (const city of cities) {
      params.push({
        city: `${prefix}${city.slug}`,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const fullSlug = params.city;
  const resolution = resolveServiceFromSlug(fullSlug);

  if (!resolution.isValid) {
    return { title: "Page Not Found" };
  }

  const { service, citySlug } = resolution;
  const cityData = getCityData(citySlug);
  const cityName = cityData.name;

  return {
    title: `${service.name} in ${cityName} | 24/7 Verified Support & Fast Dispatch`,
    description: `Best ${service.name} in ${cityName}. 24/7 emergency response, verified fleet, transparent pricing, hospital & cremation ground coordination. Call +91 88823 83902.`,
    keywords: `${service.name.toLowerCase()} in ${cityName}, ${service.name.toLowerCase()} near me, 24/7 ${cityName} ${service.name.toLowerCase()}, emergency ${service.name.toLowerCase()} contact ${cityName}`,
    alternates: {
      canonical: `https://bhartiyanairambulanceservices.in/${fullSlug}`,
    },
    openGraph: {
      title: `${service.name} in ${cityName} | Bharat Emergency Logistics`,
      description: `Immediate 24/7 ${service.name} in ${cityName}. Fast dispatch within 15-30 minutes. Contact emergency team now.`,
      url: `https://bhartiyanairambulanceservices.in/${fullSlug}`,
      type: "website",
      images: [{ url: service.imgSrc || "/images/slide1.jpg" }],
    },
  };
}

export default function DynamicProgrammaticLandingPage({ params }) {
  const fullSlug = params.city;
  const resolution = resolveServiceFromSlug(fullSlug);

  if (!resolution.isValid) {
    notFound();
  }

  const { service, citySlug } = resolution;
  const cityData = getCityData(citySlug);

  if (!cityData) {
    notFound();
  }

  const cityName = cityData.name;
  const faqs = getServiceFaqs(service.id, cityData, cityName);

  // Google Schema.org Structured Data: EmergencyService + FAQPage + BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmergencyService",
        "@id": `https://bhartiyanairambulanceservices.in/${fullSlug}#service`,
        name: `Bharat ${service.name} in ${cityName}`,
        description: `24/7 Emergency ${service.name} and logistics support in ${cityName} with rapid dispatch and transparent assistance.`,
        url: `https://bhartiyanairambulanceservices.in/${fullSlug}`,
        telephone: "+918882383902",
        priceRange: "₹₹",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: cityName,
          addressRegion: cityName,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: cityData.geo?.latitude || 28.6139,
          longitude: cityData.geo?.longitude || 77.209,
        },
        provider: {
          "@type": "Organization",
          name: "Bharat Air Ambulance and Funeral Logistics",
          url: "https://bhartiyanairambulanceservices.in",
          telephone: "+918882383902",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://bhartiyanairambulanceservices.in/${fullSlug}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://bhartiyanairambulanceservices.in/${fullSlug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bhartiyanairambulanceservices.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://bhartiyanairambulanceservices.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `https://bhartiyanairambulanceservices.in/services/${service.id}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${service.name} in ${cityName}`,
            item: `https://bhartiyanairambulanceservices.in/${fullSlug}`,
          },
        ],
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Bharat Emergency Support, I need immediate assistance for ${service.name} in ${cityName}. Please contact me.`
  );

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:py-28 bg-medical-blue overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.imgSrc || "/images/slide1.jpg"}
            alt={`${service.name} in ${cityName}`}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-medical-blue/90 via-medical-blue/95 to-medical-blue lg:bg-gradient-to-r"></div>
        </div>

        <div className="container mx-auto px-5 relative z-10 text-center lg:text-left">
          {/* Breadcrumb path */}
          <nav className="flex items-center justify-center lg:justify-start gap-2 text-white/60 text-xs md:text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">
              {service.name} in {cityName}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-red rounded-full text-white text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 animate-pulse shadow-lg shadow-medical-red/40">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                24/7 Verified Dispatch &bull; 15-30 Min Arrival
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                {service.name} <br className="hidden sm:block" />
                <span className="text-medical-red-light">in {cityName}</span>
              </h1>

              <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed font-medium">
                Dignified, prompt, and licensed 24/7 support across {cityName}.
                Coordinated by experienced command center specialists with direct
                hospital and ground network access.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <a
                  href="tel:+918882383902"
                  className="flex items-center justify-center gap-3 bg-white text-medical-blue hover:bg-medical-red hover:text-white px-8 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-2xl active:scale-95 group w-full sm:w-auto"
                >
                  <FaPhoneAlt className="group-hover:rotate-12 transition-transform text-medical-red group-hover:text-white" />
                  +91-88823 83902
                </a>
                <a
                  href={`https://wa.me/918882383902?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-2xl active:scale-95 w-full sm:w-auto"
                >
                  <FaWhatsapp size={24} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" /> Transparent Pricing
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" /> Pan-{cityName} Coverage
                </span>
                <span className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-400" /> Government & Hospital Compliant
                </span>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/20 shadow-2xl text-white space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    City Hub
                  </span>
                  <span className="font-black text-base md:text-lg">{cityName} Central</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Avg Response
                  </span>
                  <span className="font-black text-base md:text-lg text-green-300">
                    15-30 Mins
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Availability
                  </span>
                  <span className="font-black text-base md:text-lg text-medical-red-light">
                    24 Hours / 365 Days
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Operational Base
                  </span>
                  <span className="font-bold text-xs md:text-sm text-right max-w-[200px]">
                    {cityData.zones ? cityData.zones.slice(0, 2).join(", ") : cityName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details & Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black text-medical-blue tracking-widest uppercase mb-2 block">
                Standard of Care in {cityName}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-medical-dark mb-6 leading-tight">
                Why Families Trust Our <br />
                <span className="text-medical-red">{service.name}</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-medical-grey rounded-2xl border border-gray-100"
                  >
                    <FaCheckCircle className="text-medical-red text-xl shrink-0 mt-0.5" />
                    <span className="font-bold text-medical-dark text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[320px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-medical-grey">
                <img
                  src={service.imgSrc || "/images/slide1.jpg"}
                  alt={`${service.name} execution in ${cityName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-8 bg-medical-dark text-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-red rounded-xl flex items-center justify-center shrink-0">
                  <FaStar className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-gray-400">Trusted By</p>
                  <p className="text-base font-black">15,000+ Families Pan-India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Infrastructure: Hospitals & Cremation Grounds in City */}
      <section className="py-16 md:py-24 bg-medical-grey">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-medical-blue tracking-widest uppercase mb-2 block">
              Local Network
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-medical-dark mb-4">
              {cityName} Local Operational Reach
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {cityData.localContext}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hospitals Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-medical-blue/10 rounded-2xl flex items-center justify-center text-medical-blue text-2xl mb-6">
                <FaHospital />
              </div>
              <h3 className="text-xl font-black text-medical-dark mb-4">
                Hospital Tie-ups & Coordination
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Direct bedside handover and emergency paperwork clearance in {cityName}:
              </p>
              <ul className="space-y-3">
                {cityData.hospitals.slice(0, 4).map((hosp, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <span className="w-2 h-2 bg-medical-blue rounded-full"></span>
                    {hosp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cremation Grounds Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-medical-red/10 rounded-2xl flex items-center justify-center text-medical-red text-2xl mb-6">
                <FaFire />
              </div>
              <h3 className="text-xl font-black text-medical-dark mb-4">
                Cremation Grounds & Ghats
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Slot booking, samagri setup, and hearse van transport to:
              </p>
              <ul className="space-y-3">
                {(cityData.cremationGrounds || [
                  `Municipal Cremation Ground ${cityName}`,
                  `Electric Crematorium ${cityName}`,
                ])
                  .slice(0, 4)
                  .map((ground, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <span className="w-2 h-2 bg-medical-red rounded-full"></span>
                      {ground}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Areas / Zones Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 text-2xl mb-6">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-black text-medical-dark mb-4">
                Priority Local Delivery Zones
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Guaranteed 15 to 30-minute rapid dispatch across:
              </p>
              <div className="flex flex-wrap gap-2">
                {(cityData.zones || [cityName, "Central", "North", "South", "East", "West"]).map(
                  (zone, i) => (
                    <span
                      key={i}
                      className="bg-medical-grey px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 border border-gray-200"
                    >
                      {zone}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Real Experience */}
      {cityData.caseStudy && (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-5">
            <div className="bg-medical-dark rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 text-white relative shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <span className="text-medical-red text-xs font-black tracking-widest uppercase mb-4 block">
                  Verified Local Experience in {cityName}
                </span>
                <h3 className="text-2xl md:text-4xl font-black mb-6">
                  {cityName} Operation: Mission Completed with Care
                </h3>
                <p className="text-gray-300 text-base md:text-xl font-medium leading-relaxed italic mb-8">
                  "{cityData.caseStudy.detail}"
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                  <span>From: {cityData.caseStudy.from}</span>
                  <span>&bull;</span>
                  <span>To: {cityData.caseStudy.to}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local FAQs Section (Google FAQ Schema Powered) */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-medical-grey">
          <div className="container mx-auto px-5 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-black text-medical-blue tracking-widest uppercase mb-2 block">
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-medical-dark leading-tight">
                Frequently Asked Questions &bull; {cityName}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-lg md:text-xl font-black text-medical-dark mb-3 flex items-start gap-3">
                    <span className="bg-medical-blue text-white w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      ?
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-10">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Linking Mesh: Other Services in This City & Same Service in Other Cities */}
      <section className="py-16 md:py-24 bg-medical-dark text-white">
        <div className="container mx-auto px-5">
          {/* Services in this city */}
          <div className="mb-14">
            <h3 className="text-xl md:text-2xl font-black mb-6 text-center md:text-left">
              Other 24/7 Services in <span className="text-medical-red">{cityName}</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {Object.entries(serviceToPrefixMap)
                .filter(([id]) => id !== service.id)
                .map(([id, prefix]) => {
                  const s = servicesData.find((item) => item.id === id);
                  if (!s) return null;
                  return (
                    <Link
                      key={id}
                      href={`/${prefix}${citySlug}`}
                      className="bg-white/10 hover:bg-medical-red border border-white/10 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all"
                    >
                      {s.name} in {cityName}
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* Same service in other major cities */}
          <div className="pt-10 border-t border-white/10">
            <h3 className="text-xl md:text-2xl font-black mb-6 text-center md:text-left">
              {service.name} in Other Major Indian Cities
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {cities
                .filter((c) => c.slug !== citySlug)
                .slice(0, 15)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${serviceToPrefixMap[service.id]}${c.slug}`}
                    className="bg-white/5 hover:bg-medical-blue border border-white/10 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all"
                  >
                    {service.name} in {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Emergency Action Banner */}
      <section className="py-12 bg-medical-red text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Need {service.name} in {cityName} Right Now?
          </h2>
          <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto mb-8 font-medium">
            Our 24/7 dispatch coordinator is ready to assist you immediately. No waiting, no delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918882383902"
              className="bg-white text-medical-dark hover:bg-gray-100 px-8 py-4 rounded-2xl font-black text-lg transition-transform active:scale-95 shadow-xl flex items-center justify-center gap-3"
            >
              <FaPhoneAlt /> Call +91 88823 83902
            </a>
            <a
              href={`https://wa.me/918882383902?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-transform active:scale-95 shadow-xl flex items-center justify-center gap-3"
            >
              <FaWhatsapp size={22} /> WhatsApp Helpline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
