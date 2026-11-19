import {
  FaAmbulance,
  FaBox,
  FaChurch,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaStarOfLife,
  FaPlane,
  FaGlobe,
  FaHospitalSymbol,
  FaUserMd,
} from "react-icons/fa";

export const servicesData = [
  {
    id: "air-ambulance",
    name: "Air Ambulance",
    slugPrefix: "air-ambulance-service-in-",
    title: "Global Air Ambulance & Medical Repatriation",
    imgSrc: "/images/slide1.jpg",
    icon: <FaStarOfLife className="text-medical-red" />,
    shortDesc:
      "World-class aero-medical transportation for critical patients across borders.",
    fullDesc:
      "Our Global Air Ambulance service provides bed-to-bed medical transportation for patients who require urgent or specialized care in India or abroad. Equipped with the latest ICU technology and staffed by aero-medical experts, we ensure a safe and rapid transit.",
    features: [
      "Advanced ICU-equipped Aircraft",
      "Specialized Aero-Medical Crew",
      "Global Network for International Repatriation",
      "Bed-to-Bed Transfer with Ground Support",
      "Fastest Permission & Clearance Handling",
    ],
  },
  {
    id: "freezer-box-services",
    name: "Dead Body Freezer Box",
    slugPrefix: "dead-body-freezer-box-in-",
    title: "Dead Body Freezer Box Services on Rent",
    imgSrc: "/images/Freezer-Box.jpg",
    icon: <FaBox />,
    shortDesc:
      "High-quality mobile mortuary cabinets to preserve your loved ones with dignity at home.",
    fullDesc:
      "We provide state-of-the-art mobile mortuary freezer boxes (Dead Body Freezer Boxes) on rent to preserve the mortal remains of your loved ones at home or during transit. Our cabinets feature hygienic stainless steel interiors, sub-zero digital cooling, and transparent glass viewing lids.",
    features: [
      "Sub-Zero Digital Temperature Cooling (-2°C to -15°C)",
      "100% Stainless Steel Hygienic Cabinets",
      "24/7 Home Delivery within 30 Minutes",
      "Crystal-Clear Glass Viewing Lid",
      "Portable & Low Noise Power Unit",
    ],
  },
  {
    id: "hearse-van-services",
    name: "Hearse Van Services",
    slugPrefix: "hearse-van-service-in-",
    title: "Dignified Hearse Van & Mortuary Vehicle Services",
    imgSrc: "/images/hearse-van.jpeg",
    icon: <FaAmbulance />,
    shortDesc: "Professional and respectful mortuary transportation for the departed.",
    fullDesc:
      "Our specialized hearse van services provide a peaceful and respectful final journey. We operate AC and non-AC mortuary vehicles with stretcher loaders, floral decoration options, and seating for accompanying family members across city and interstate routes.",
    features: [
      "AC & Non-AC Hearse Vehicles with Specialized Stretcher Trays",
      "Professional, Compassionate & Trained Drivers",
      "Traditional Floral Decoration & Sacred Emblems",
      "Interstate Mortuary Body Transportation with State Road Permits",
      "Direct Coordination with Hospitals, Mortuaries & Ghats",
    ],
  },
  {
    id: "cremation-services",
    name: "Cremation Services",
    slugPrefix: "cremation-services-in-",
    title: "Complete Antim Sanskar & Cremation Management",
    imgSrc: "/images/cremation1.jpeg",
    icon: <FaChurch />,
    shortDesc:
      "End-to-end assistance for traditional wood and eco-friendly electric cremation rites.",
    fullDesc:
      "We provide comprehensive antim sanskar management, ensuring all rituals are performed with complete Vedic sanctity. From booking cremation slots at major ghats to arranging authentic samagri kits and learned pandits, we manage every detail with reverence.",
    features: [
      "Cremation Ground & Electric Crematorium Slot Booking",
      "Authentic Vedic Samagri Kit (Ghee, Wood, Kapur, Ganga Jal)",
      "Learned Priests / Pandits for All Religious Traditions",
      "Eco-Friendly Green Cremation & CNG Options",
      "Post-Cremation Support (Asthi Collection & Chautha)",
    ],
  },
  {
    id: "dead-body-transportation",
    name: "Dead Body Transportation",
    slugPrefix: "dead-body-transportation-in-",
    title: "Interstate Dead Body Transportation by Road, Train & Flight",
    imgSrc: "/images/dead-body-transportation.jpeg",
    icon: <FaAmbulance />,
    shortDesc: "Safe, legal, and timely transportation of the deceased across Indian states.",
    fullDesc:
      "We specialize in long-distance transportation of deceased persons across India via specialized mortuary ambulances, railway cargo, and commercial airlines. Our team handles embalming, coffin packaging, and police/hospital NOC clearances.",
    features: [
      "Temperature-Controlled Mortuary Ambulances for 500-2000+ KM",
      "Certified Embalming by Registered Medical Practitioners",
      "IATA-Approved Hermetically Sealed Coffin Boxes",
      "Airline & Indian Railways Cargo Clearance Support",
      "Live GPS Tracking for Traveling Family Members",
    ],
  },
  {
    id: "repatriation-services",
    name: "International Repatriation",
    slugPrefix: "dead-body-repatriation-in-",
    title: "International & Domestic Mortal Remains Repatriation",
    imgSrc: "/images/slide1.jpg",
    icon: <FaGlobe className="text-medical-blue" />,
    shortDesc:
      "Global logistics for bringing deceased loved ones home across international borders.",
    fullDesc:
      "Recognized as India's premier international repatriation authority, we handle complex diplomatic, consular, and customs requirements for transporting mortal remains into or out of India. We manage embassy NOCs, quarantine clearances, and airline booking smoothly.",
    features: [
      "Embassy, High Commission & Consulate Clearance",
      "Airport Health Organization (APHO) Clearance in India",
      "IATA Standard Zinc-Lined Hermetic Coffin Sealing",
      "Certified Multi-Lingual Embalming Documentation",
      "Global Network Covering UAE, USA, UK, Europe & SE Asia",
    ],
  },
  {
    id: "funeral-services",
    name: "Funeral Services",
    slugPrefix: "funeral-services-in-",
    title: "End-to-End Dignified Funeral Management",
    imgSrc: "/images/hearse-van.jpeg",
    icon: <FaHandsHelping />,
    shortDesc: "Compassionate planning and coordination for a dignified farewell.",
    fullDesc:
      "Our funeral management service supports grieving families through every step of loss. We coordinate the hearse, freezer box, cremation/burial ground, priest, floral tributes, and memorial arrangements so you can focus on emotional remembrance.",
    features: [
      "A-Z Funeral Coordination with Dedicated Care Manager",
      "Floral Tribute Setup, Photo Framing & Garlands",
      "Multi-Faith Ritual Support (Hindu, Sikh, Christian, Jain)",
      "Obituary & Digital Remembrance Notice Support",
      "24/7 Empathetic Ground Support at Your Doorstep",
    ],
  },
  {
    id: "asthi-visarjan",
    name: "Asthi Visarjan",
    slugPrefix: "asthi-visarjan-services-in-",
    title: "Sacred Asthi Visarjan Services (Holy Immersion)",
    imgSrc: "/images/asthi-visarjan.jpeg",
    icon: <FaChurch />,
    shortDesc:
      "Facilitating the sacred ritual of holy immersion in holy rivers across India.",
    fullDesc:
      "We provide end-to-end sacred Asthi Visarjan services at sacred locations like Varanasi (Ganga), Haridwar, Prayagraj Sangam, Rishikesh, and Rameswaram. We handle travel, boat arrangements, Vedic teerth priests, and ritual puja samagri.",
    features: [
      "End-to-End Travel & Accommodation Coordination",
      "Learned Teerth Purohits for Authentic Shradh Rites",
      "Sacred Puja Samagri, Kalash & Boat Arrangements",
      "Domestic & Global Asthi Courier Service with Live Tracking",
      "Assistance at Har Ki Pauri, Manikarnika Ghat & Triveni Sangam",
    ],
  },
];

// Separate FAQ generator to prevent functions from being passed to Client Components
export const serviceFaqMap = {
  "air-ambulance": (city, cityName) => [
    {
      q: `What is the activation time for an air ambulance in ${cityName}?`,
      a: `Inquiry response is within 15 minutes. Flight takeoff from ${city.airport} is typically activated within 2 to 4 hours post medical clearance and aviation permits.`,
    },
    {
      q: `Do you provide complete bed-to-bed transfer in ${cityName}?`,
      a: `Yes, we provide full bedside-to-bedside transfer, including ground ICU ambulance from hospital in ${cityName} to airport, onboard doctor care, and transfer to destination hospital.`,
    },
    {
      q: `Can family members travel with the patient on the air ambulance?`,
      a: `Yes, up to 1-2 attendants can usually accompany the patient depending on the aircraft type and medical equipment load.`,
    },
  ],
  "freezer-box-services": (city, cityName) => [
    {
      q: `How quickly can a dead body freezer box be delivered in ${cityName}?`,
      a: `We maintain active fleet hubs across ${city.zones?.slice(0, 3).join(", ") || cityName} to deliver and install the freezer box at your doorstep within 30 to 45 minutes.`,
    },
    {
      q: `How long can the body be preserved in the freezer box?`,
      a: `Our high-performance cooling system safely preserves the body for 24 to 72+ hours, allowing distant relatives and NRI family members sufficient travel time.`,
    },
    {
      q: `What power supply is required for the freezer box?`,
      a: `It runs seamlessly on standard household 220V AC power sockets and can also operate via inverter or backup generator.`,
    },
  ],
  "hearse-van-services": (city, cityName) => [
    {
      q: `What is the cost of a hearse van in ${cityName}?`,
      a: `Hearse van charges depend on vehicle type (Standard AC vs Premium Floral Van) and transit distance. We offer transparent flat-rate local city packages with zero hidden charges.`,
    },
    {
      q: `Can the hearse van transport to nearby states or cities from ${cityName}?`,
      a: `Yes, we provide long-distance interstate hearse van transfers across India with full documentation and toll/state permit handling.`,
    },
    {
      q: `Can family members sit inside the hearse van?`,
      a: `Yes, our hearse vehicles include dedicated seating for 4 to 8 family members alongside the deceased.`,
    },
  ],
  "cremation-services": (city, cityName) => [
    {
      q: `Which cremation grounds do you serve in ${cityName}?`,
      a: `We provide complete coordination at all major grounds in ${cityName}, including ${city.cremationGrounds?.slice(0, 3).join(", ") || "municipal crematoriums"}.`,
    },
    {
      q: `What documents are needed for cremation in ${cityName}?`,
      a: `A Doctor's Death Certificate / Hospital Discharge Card and photo ID of the deceased and family representative are required for ground registration.`,
    },
    {
      q: `Do you provide complete antim sanskar samagri and pandit?`,
      a: `Yes, we deliver the complete ritual samagri kit and arrange experienced pandits fluent in your community's customs.`,
    },
  ],
  "dead-body-transportation": (city, cityName) => [
    {
      q: `How to transport a dead body from ${cityName} to another state?`,
      a: `We provide 3 options: (1) Direct AC Mortuary Ambulance by road, (2) Airline Cargo via ${city.airport}, or (3) Train Cargo. We handle the required Embalming Certificate, Coffin Box Certificate, and Police NOC.`,
    },
    {
      q: `Is embalming mandatory for body transport by flight?`,
      a: `Yes, airlines mandate certified embalming and hermetically sealed coffins for all air cargo transit. We arrange embalming at government or certified centers.`,
    },
    {
      q: `What is the fastest way to transport a deceased person to a hometown?`,
      a: `Air cargo or dedicated long-distance AC ambulance are the fastest. We initiate transit protocols within hours of paperwork completion.`,
    },
  ],
  "repatriation-services": (city, cityName) => [
    {
      q: `What is the procedure for international dead body repatriation through ${cityName}?`,
      a: `Through ${city.airport}, we coordinate Death Certificate, Embassy NOC, Embalming Certificate, Coffin Sealing Certificate, Police NOC, and APHO customs quarantine clearance.`,
    },
    {
      q: `How many days does international repatriation take?`,
      a: `Typically 2 to 4 working days, depending on embassy working hours and flight availability.`,
    },
    {
      q: `Do you receive bodies arriving from abroad at ${city.airport}?`,
      a: `Yes, our ground team meets the flight cargo, clears APHO customs, and provides direct hearse van transfer to your residence or hometown.`,
    },
  ],
  "funeral-services": (city, cityName) => [
    {
      q: `What is included in a complete funeral package in ${cityName}?`,
      a: `Our package includes hearse vehicle, freezer box, cremation ground booking, sacred samagri, pandit/priest, floral decor, and assistance with death registration.`,
    },
    {
      q: `Do you cater to different religious traditions in ${cityName}?`,
      a: `Yes, we respect and conduct rituals according to Hindu, Sikh, Christian, Jain, and other cultural traditions.`,
    },
  ],
  "asthi-visarjan": (city, cityName) => [
    {
      q: `Can you conduct Asthi Visarjan on our behalf if we cannot travel?`,
      a: `Yes, we offer our Sacred Asthi Courier & Immersion Service. You can courier the mortal ashes, and our learned priests perform the rites with live video streaming for the family.`,
    },
    {
      q: `Which locations are supported for holy immersion?`,
      a: `We organize ceremonies at Haridwar (Har Ki Pauri), Varanasi (Ganga Ghats), Prayagraj (Triveni Sangam), Rishikesh, and Rameswaram.`,
    },
  ],
};

export const getServiceFaqs = (serviceId, city, cityName) => {
  const faqFn = serviceFaqMap[serviceId];
  if (faqFn) return faqFn(city, cityName);
  return [];
};

// Mapping helpers to resolve any incoming programmatic slug
export const serviceSlugMap = {
  "air-ambulance-service-in-": "air-ambulance",
  "dead-body-freezer-box-in-": "freezer-box-services",
  "hearse-van-service-in-": "hearse-van-services",
  "cremation-services-in-": "cremation-services",
  "dead-body-transportation-in-": "dead-body-transportation",
  "dead-body-repatriation-in-": "repatriation-services",
  "funeral-services-in-": "funeral-services",
  "asthi-visarjan-services-in-": "asthi-visarjan",
};

export const serviceToPrefixMap = {
  "air-ambulance": "air-ambulance-service-in-",
  "freezer-box-services": "dead-body-freezer-box-in-",
  "hearse-van-services": "hearse-van-service-in-",
  "cremation-services": "cremation-services-in-",
  "dead-body-transportation": "dead-body-transportation-in-",
  "repatriation-services": "dead-body-repatriation-in-",
  "funeral-services": "funeral-services-in-",
  "asthi-visarjan": "asthi-visarjan-services-in-",
};

export const resolveServiceFromSlug = (fullSlug) => {
  for (const [prefix, serviceId] of Object.entries(serviceSlugMap)) {
    if (fullSlug.startsWith(prefix)) {
      const citySlug = fullSlug.replace(prefix, "");
      const service = servicesData.find((s) => s.id === serviceId);
      return {
        isValid: true,
        service,
        serviceId,
        prefix,
        citySlug,
      };
    }
  }

  return { isValid: false };
};
