"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.imgSrc}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/60 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-3 text-medical-blue">
              <span className="p-2 bg-medical-blue-light rounded-lg text-xl">
                {service.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-medical-dark mb-4 leading-tight">
              {service.name}
            </h3>
            <p className="text-sm text-gray-500 mb-6 line-clamp-2">
              {service.shortDesc}
            </p>
            <div className="mt-auto">
              <Link
                href={`/services/${service.id}`}
                className="text-sm font-bold text-medical-blue flex items-center gap-2 group-hover:translate-x-1 transition-transform"
              >
                View Details
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
