import React from "react";
import Image from "next/image";
import ServiceCards from "@/components/ServiceCards";

export const metadata = {
  title: "About Us | Bharat Air Ambulance & Funeral Services",
  description:
    "Learn about our 15-year legacy under founder Pradeep Verma. Dedicated to compassionate global repatriation and dignified medical transportation from India.",
};

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-medical-blue py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-black text-white/60 tracking-widest uppercase mb-4">
            Our Legacy
          </h2>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            About Bharat Air Ambulance
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-medium">
            Compassion driven, medical grade transportation and funeral services
            with a commitment to dignity and respect.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-2xl font-bold text-medical-dark leading-relaxed">
            At Bharat Air Ambulance and Funeral Services, we understand how
            difficult it is to lose a loved one. We're here to provide
            compassionate and professional support during this challenging time.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32 bg-medical-grey rounded-[3rem] p-12 lg:p-20">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-red rounded-3xl -z-10"></div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/slide1.jpg" // Using slide1 as placeholder for founder if missing
                alt="Founder and CEO"
                width={600}
                height={600}
                className="w-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <p className="text-2xl font-black text-medical-dark">
                Pradeep Verma
              </p>
              <p className="text-medical-blue font-bold uppercase tracking-widest text-sm">
                Founder & CEO
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-medical-dark leading-tight">
              A Mission of Compassion
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "Losing a loved one is a deeply challenging experience. When I
              founded Bharat Air Ambulance, I envisioned a company that could
              offer not only support but also options to honor your loved one
              with traditional and modern alternatives."
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Leading our team with compassion and a forward-thinking approach,
              I am committed to ensuring that every service we provide reflects
              our values of dignity, respect, and care.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 bg-medical-blue text-white rounded-[2.5rem] shadow-xl shadow-blue-100">
            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              To be India's most trusted provider of compassionate and dignified
              medical transportation and funeral services, honoring the diverse
              needs and beliefs of families across all faiths.
            </p>
          </div>
          <div className="p-12 border-4 border-medical-blue rounded-[2.5rem]">
            <h3 className="text-3xl font-black text-medical-blue mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              To provide professional medical care during transit and dignified
              funeral services that honor individuals from all communities,
              while supporting families through the grieving process.
            </p>
          </div>
        </div>

        {/* Service CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-medical-dark mb-12 italic">
            Services You Can Trust
          </h2>
          <ServiceCards />
        </div>
      </div>
    </div>
  );
};

export default About;
