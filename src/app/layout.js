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
  title:
    "Bharat Air Ambulance | Global Medical Repatriation & Funeral Services",
  description:
    "Leading Global Air Ambulance from India. Specialized in international repatriation, ICU transfers, and pan-India funeral services. 15+ years of excellence in saving lives and honoring legacies.",
  keywords:
    "global air ambulance, international repatriation india, icu flights, funeral services pan-india, dead body transportation, bharat medical transport",
  openGraph: {
    title: "Bharat Air Ambulance | Global Repatriation Leader",
    description:
      "24/7 Global Medical Transportation & Repatriation Services. Bridging India with the World.",
    url: "https://bharatairambulance.com",
    type: "website",
    images: [{ url: "/images/slide1.jpg" }],
  },
  alternates: {
    canonical: "https://bharatairambulance.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className="bg-medical-grey text-medical-dark font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}

          {/* Global Trust & Contact Section */}
          <section
            id="quote"
            className="py-24 bg-white border-t border-gray-100"
          >
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
