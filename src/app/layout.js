import "./globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import { ThemeModeScript } from "flowbite-react";
import CreativeEffect from "@/components/CreativeEffect";
import ContactForm from "@/components/ContactForm";
import HeroCarousel from "@/components/HeroCarousel";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import EmergencyStickyBar from "@/components/EmergencyStickyBar";

export const metadata = {
  metadataBase: new URL("https://bharatairambulance.com"),
  title:
    "Bharat Air Ambulance | Global Medical Repatriation & Funeral Services India",
  description:
    "India's premier 24/7 Air Ambulance, Dead Body Freezer Box, Hearse Van, and International Repatriation network. Fast emergency response across all Indian cities. Call +91 88823 83902.",
  keywords:
    "global air ambulance, hearse van service, dead body freezer box on rent, international repatriation india, cremation services, asthi visarjan, dead body transportation, bharat medical transport",
  openGraph: {
    title: "Bharat Air Ambulance | 24/7 Global Repatriation & Emergency Logistics",
    description:
      "24/7 Global Medical Transportation & Funeral Logistics. Bridging India with the World with speed, dignity, and care.",
    url: "https://bharatairambulance.com",
    type: "website",
    images: [{ url: "/images/slide1.jpg" }],
  },
  alternates: {
    canonical: "https://bharatairambulance.com",
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://bharatairambulance.com/#organization",
      name: "Bharat Air Ambulance & Funeral Logistics",
      url: "https://bharatairambulance.com",
      logo: "https://bharatairambulance.com/images/slide1.jpg",
      telephone: "+918882383902",
      email: "info@bharatairambulance.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahipalpur Extension",
        addressLocality: "New Delhi",
        postalCode: "110037",
        addressCountry: "IN",
      },
      areaServed: "IN",
    },
    {
      "@type": "EmergencyService",
      "@id": "https://bharatairambulance.com/#emergency-service",
      name: "Bharat 24/7 Emergency Medical Flights & Mortuary Transport",
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
    },
    {
      "@type": "WebSite",
      "@id": "https://bharatairambulance.com/#website",
      url: "https://bharatairambulance.com",
      name: "Bharat Air Ambulance",
      publisher: {
        "@id": "https://bharatairambulance.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="bg-medical-grey text-medical-dark font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}

          {/* Global Trust & Contact Section */}
          <section id="quote" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                <CreativeEffect />
                <ContactForm />
              </div>
            </div>
          </section>

          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
        <EmergencyStickyBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
