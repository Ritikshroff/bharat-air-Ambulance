import React from "react";
import { guidesData } from "@/data/guidesData";
import Link from "next/link";
import {
  FaClock,
  FaCalendarAlt,
  FaArrowRight,
  FaBookOpen,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Emergency Procedures, Legal Guidelines & Mortuary Guides | Bharat",
  description:
    "Authoritative guides on domestic dead body transport by flight, international mortal remains repatriation, electric cremation grounds in Delhi NCR, and freezer box rentals.",
  alternates: {
    canonical: "https://bharatairambulance.com/News",
  },
};

export default function GuidesAndNewsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-medical-dark text-white py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-5 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-black text-medical-red tracking-widest uppercase mb-3 block">
            Emergency Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            Legal Procedures & <br />
            <span className="text-medical-red">Medical Guides</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-medium leading-relaxed">
            Clear, transparent, and legally verified procedures to help families
            navigate dead body transport, international repatriation, and
            cremation logistics without confusion.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24 bg-medical-grey">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {guidesData.map((guide) => (
              <div
                key={guide.slug}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    <span className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {guide.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-medical-dark mb-4 group-hover:text-medical-blue transition-colors leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">
                    By {guide.author}
                  </span>
                  <Link
                    href={`/News/${guide.slug}`}
                    className="inline-flex items-center gap-2 text-medical-red font-black text-sm hover:translate-x-1 transition-transform"
                  >
                    Read Guide <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Emergency Help Banner */}
      <section className="py-16 bg-medical-blue text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-4xl font-black mb-4">
            Need Immediate Help with Documentation or Cargo?
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-8">
            Our 24/7 command center coordinates directly with airlines, police,
            hospitals, and municipal authorities.
          </p>
          <a
            href="tel:+918882383902"
            className="inline-flex items-center gap-3 bg-medical-red hover:bg-medical-red-dark text-white px-8 py-4 rounded-xl font-black text-lg transition-transform active:scale-95 shadow-xl"
          >
            <FaPhoneAlt /> Call +91 88823 83902
          </a>
        </div>
      </section>
    </div>
  );
}
