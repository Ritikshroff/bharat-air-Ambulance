import React from "react";
import { servicesData, serviceToPrefixMap } from "@/data/servicesData";
import { cities } from "@/data/cities";
import ServiceClient from "./ServiceClient";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Bharat Emergency Logistics`,
    description: `${service.shortDesc} 24/7 emergency coordination across India with direct hospital and airport access. Call +91 88823 83902.`,
    alternates: {
      canonical: `https://bhartiyanairambulanceservices.in/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | 24/7 Pan-India Service`,
      description: service.shortDesc,
      url: `https://bhartiyanairambulanceservices.in/services/${service.id}`,
      images: [{ url: service.imgSrc || "/images/slide1.jpg" }],
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export default function Page({ params }) {
  const { id } = params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <ServiceClient service={null} />;
  }

  const prefix = serviceToPrefixMap[service.id];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://bhartiyanairambulanceservices.in/services/${service.id}#service`,
        name: service.title,
        serviceType: service.name,
        description: service.fullDesc,
        provider: {
          "@type": "Organization",
          name: "Bharat Air Ambulance and Funeral Logistics",
          url: "https://bhartiyanairambulanceservices.in",
          telephone: "+918882383902",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.name} Offerings`,
          itemListElement: service.features.map((feat) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: feat,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://bhartiyanairambulanceservices.in/services/${service.id}#breadcrumb`,
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
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceClient service={service} />

      {/* Internal Linking: Cities where this service is active */}
      {prefix && (
        <section className="py-16 bg-medical-dark text-white border-t border-white/10">
          <div className="container mx-auto px-5">
            <div className="text-center md:text-left mb-8">
              <span className="text-xs font-black text-medical-red tracking-widest uppercase block mb-2">
                Pan-India Availability
              </span>
              <h2 className="text-2xl md:text-3xl font-black">
                {service.name} Available Across Major Indian Cities
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${prefix}${city.slug}`}
                  className="bg-white/5 hover:bg-medical-red border border-white/10 p-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 group"
                >
                  <FaMapMarkerAlt className="text-medical-red group-hover:text-white shrink-0" />
                  <span className="truncate">{city.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
