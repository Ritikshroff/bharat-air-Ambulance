import React from "react";
import { guidesData, getGuideBySlug } from "@/data/guidesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCalendarAlt,
  FaUserShield,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: `${guide.metaTitle} | Bharat Emergency Logistics`,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://bharatairambulance.com/News/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `https://bharatairambulance.com/News/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishedDate,
      authors: [guide.author],
    },
  };
}

export default function GuideDetailPage({ params }) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedDate,
    dateModified: guide.publishedDate,
    author: {
      "@type": "Organization",
      name: guide.author,
      url: "https://bharatairambulance.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bharat Air Ambulance and Funeral Logistics",
      logo: {
        "@type": "ImageObject",
        url: "https://bharatairambulance.com/images/slide1.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bharatairambulance.com/News/${guide.slug}`,
    },
  };

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="container mx-auto px-5 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/News"
          className="inline-flex items-center gap-2 text-medical-blue font-bold text-sm mb-8 hover:underline"
        >
          <FaArrowLeft /> Back to All Guides & Procedures
        </Link>

        {/* Category & Read Time */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          <span className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full">
            {guide.category}
          </span>
          <span className="flex items-center gap-1.5">
            <FaClock /> {guide.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt /> Verified {guide.publishedDate}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-medical-dark leading-tight mb-8">
          {guide.title}
        </h1>

        {/* Summary Card */}
        <div className="bg-medical-grey p-6 md:p-8 rounded-3xl border-l-4 border-medical-red mb-12">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            {guide.summary}
          </p>
        </div>

        {/* Emergency Assistance Box Inside Article */}
        <div className="bg-medical-blue text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl font-black mb-1">
              Facing an Immediate Emergency?
            </h3>
            <p className="text-white/80 text-sm">
              Our 24/7 command center assists with flight cargo, ambulance, and
              paperwork.
            </p>
          </div>
          <a
            href="tel:+918882383902"
            className="bg-medical-red hover:bg-medical-red-dark text-white px-8 py-3.5 rounded-xl font-black text-base flex items-center gap-2 shrink-0 transition-transform active:scale-95 shadow-lg"
          >
            <FaPhoneAlt /> +91-88823 83902
          </a>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          {guide.contentSections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-medical-dark">
                {sec.heading}
              </h2>
              <div className="text-base md:text-lg text-gray-600 whitespace-pre-line leading-relaxed">
                {sec.body}
              </div>
            </section>
          ))}
        </div>

        {/* E-E-A-T Author & Review Box */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
          <div className="w-10 h-10 bg-medical-dark text-white rounded-full flex items-center justify-center font-black">
            <FaUserShield size={20} />
          </div>
          <div>
            <p className="font-bold text-medical-dark">
              Written & Verified by {guide.author}
            </p>
            <p>
              Strictly adheres to DGCA, IATA, and Indian Municipal Health
              guidelines.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
