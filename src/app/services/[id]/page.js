import React from "react";
import { servicesData } from "@/data/servicesData";
import ServiceClient from "./ServiceClient";

export async function generateMetadata({ params }) {
  const { id } = params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | Bharat Air Ambulance`,
    description: service.shortDesc,
    openGraph: {
      title: service.title,
      description: service.shortDesc,
      images: [service.imgSrc],
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

  return <ServiceClient service={service} />;
}
