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
    name: "Freezer Box Services",
    title: "Premium Dead Body Freezer Box Services",
    imgSrc: "/images/Freezer-Box.jpg",
    icon: <FaBox />,
    shortDesc:
      "High-quality mobile mortuary cabinets to preserve your loved ones with dignity.",
    fullDesc:
      "We provide state-of-the-art mobile mortuary freezer boxes (Dead Body Freezer Boxes) to help families preserve the body of their loved ones at home or during transit. Our boxes are hygienic, temperature-controlled, and designed for dignity.",
    features: [
      "High-Performance Cooling System",
      "Hygienic and Stainless Steel Interior",
      "24/7 Delivery & Installation",
      "Transparent Viewing Lid",
      "Available for Domestic & Long-Distance Transit",
    ],
  },
  {
    id: "hearse-van-services",
    name: "Hearse Van Services",
    title: "Dignified Hearse Van & Transportation",
    imgSrc: "/images/hearse-van.jpeg",
    icon: <FaAmbulance />,
    shortDesc: "Professional and respectful transportation for the departed.",
    fullDesc:
      "Our hearse van services offer a respectful and dignified final journey for the deceased. We provide a fleet of well-maintained vehicles, decorated as per family traditions, ensuring a smooth and peaceful transition.",
    features: [
      "AC & Non-AC Hearse Vehicles",
      "Professional & Empathetic Staff",
      "Flowers & Traditional Decor Options",
      "Interstate Body Transportation",
      "Coordination with Hospital & Authorities",
    ],
  },
  {
    id: "repatriation-services",
    name: "Repatriation Services",
    title: "International & Domestic Body Repatriation",
    imgSrc: "/images/slide1.jpg",
    icon: <FaGlobe className="text-medical-blue" />,
    shortDesc:
      "Global logistics for bringing your loved ones home from any part of the world.",
    fullDesc:
      "Recognized as a leader in global repatriation, we handle the complex legal and logistical requirements of transporting a deceased person across international borders. From documentation to airline coordination, we take care of everything.",
    features: [
      "Embassy & Consulate Documentation",
      "Embalming Services by Certified Professionals",
      "Coffin Packaging (IATA Standards)",
      "Customs & Clearance Coordination",
      "Global Network of Partners",
    ],
  },
  {
    id: "cremation-services",
    name: "Cremation Services",
    title: "Comprehensive Cremation & Last Rite Management",
    imgSrc: "/images/cremation1.jpeg",
    icon: <FaChurch />,
    shortDesc:
      "Complete support for traditional and eco-friendly cremation rites.",
    fullDesc:
      "We provide end-to-end support for cremation services, ensuring that last rites are performed as per the religious and personal preferences of the family. From booking the ground to arranging priests, we handle it all.",
    features: [
      "Cremation Ground Booking",
      "Samagri & Last Rite Essentials",
      "Qualified Priests for All Rituals",
      "Eco-Friendly Cremation Options",
      "Support for Post-Cremation Rituals",
    ],
  },
  {
    id: "dead-body-transportation",
    name: "Dead Body Transportation",
    title: "Reliable Road & Rail Transportation",
    imgSrc: "/images/dead-body-transportation.jpeg",
    icon: <FaAmbulance />,
    shortDesc: "Safe and timely transportation of the deceased across India.",
    fullDesc:
      "Whether it's by road in specialized ambulances or by rail, we provide reliable and cost-effective solutions for transporting the deceased across cities and states in India.",
    features: [
      "ICU-Equivalent Preservation during Transit",
      "Dedicated Long-Distance Drivers",
      "Railway Booking & Coordination",
      "GPS Tracking for Families",
      "State-wise Road Permits Handling",
    ],
  },
  {
    id: "funeral-services",
    name: "Funeral Services",
    title: "A-Z Funeral Management & Coordination",
    imgSrc: "/images/hearse-van.jpeg",
    icon: <FaHandsHelping />,
    shortDesc: "Professional planning for a meaningful farewell.",
    fullDesc:
      "Our funeral management services take the burden off grieving families. We manage everything from floral arrangements to memorial service planning, allowing you to focus on remembrance.",
    features: [
      "Full Memorial Service Planning",
      "Floral Tributes & Decoration",
      "Obituary & Announcement Support",
      "Catering & Guest Coordination",
      "Religious & Secular Service Options",
    ],
  },
  {
    id: "prayer-hall",
    name: "Prayer Hall",
    title: "Peaceful Prayer Hall & Memorial Venues",
    imgSrc: "/images/prayer-hall.jpeg",
    icon: <FaMapMarkerAlt />,
    shortDesc: "Quiet spaces for remembrance and community support.",
    fullDesc:
      "We assist families in finding and booking peaceful prayer halls and venues for Chautha, Tehravin, or Memorial services, ensuring all logistical needs are met efficiently.",
    features: [
      "Selection of Prime Venues",
      "Audio-Visual Setup for Tributes",
      "Seating & Hospitality Management",
      "Ritual & Priest Coordination",
      "Post-Service Cleaning & Support",
    ],
  },
  {
    id: "asthi-visarjan",
    name: "Asthi Visarjan",
    title: "Sacred Asthi Visarjan Services (Holy Immersion)",
    imgSrc: "/images/asthi-visarjan.jpeg",
    icon: <FaChurch />,
    shortDesc:
      "Facilitating the sacred ritual of holy immersion in various holy rivers.",
    fullDesc:
      "We provide comprehensive assistance for Asthi Visarjan (Holy Immersion) rituals at major sacred locations across India including Varanasi, Haridwar, Allahabad (Prayagraj), and Rishikesh. Our team handles travel, priest arrangements, and ritual samagri.",
    features: [
      "End-to-End Travel Coordination",
      "Learned Priests for Traditional Rites",
      "Ritual Samagri & Vessel Provision",
      "Courier Services for Asthi (Domestic/Global)",
      "Assistance at Har Ki Pauri & Dashashwamedh Ghat",
    ],
  },
];
