export const cities = [
  {
    name: "Delhi",
    slug: "delhi",
    airport: "Indira Gandhi International Airport (DEL)",
    hospitals: ["AIIMS", "Apollo Hospital", "Max Super Speciality", "Fortis Escorts"],
    localContext: "In Delhi, navigating through heavy traffic in areas like Connaught Place or Outer Ring Road can delay ground transfers. Our air ambulance service provides a crucial bypass, ensuring patients reach multi-speciality centers like AIIMS within the golden hour.",
    caseStudy: {
      patient: "Mr. Raj Sharma",
      from: "Max Hospital, Saket",
      to: "Singapore General Hospital",
      detail: "Successfully repatriated a cardiac patient requiring continuous ECMO support via a dedicated ICU charter flight."
    }
  },
  {
    name: "Mumbai",
    slug: "mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    hospitals: ["Lilavati Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Nanavati Max", "Breach Candy"],
    localContext: "Mumbai's coastal geography and monsoon-related traffic snarls make rapid ground transport unpredictable. Our air ambulance teams specialize in bed-to-bed transfers from South Mumbai to international hubs, utilizing BOM effectively.",
    caseStudy: {
      patient: "A. Deshmukh",
      from: "Nanavati Max, Mumbai",
      to: "Cleveland Clinic, Abu Dhabi",
      detail: "Managed a complex neuro-trauma transfer during peak monsoon season, coordinating with local ground teams for zero-delay airport access."
    }
  },
  {
    name: "Bangalore",
    slug: "bangalore",
    airport: "Kempegowda International Airport (BLR)",
    hospitals: ["Manipal Hospital", "Narayana Health", "Aster CMI", "St. John's"],
    localContext: "Known for IT-hub congestion, Bangalore's traffic can turn a 20km trip into a 2-hour ordeal. We coordinate closely with HAL and Kempegowda airports to provide the fastest medical evacuation for tech professionals and families.",
    caseStudy: {
      patient: "K. Reddy",
      from: "Aster CMI, Bangalore",
      to: "Mayo Clinic, USA",
      detail: "Provided a long-haul medical escort for a post-operative patient on a specialized commercial stretcher configuration."
    }
  },
  {
    name: "Hyderabad",
    slug: "hyderabad",
    airport: "Rajiv Gandhi International Airport (HYD)",
    hospitals: ["Apollo Health City", "Yashoda Hospitals", "AIG Hospitals", "KIMS"],
    localContext: "Hyderabad's medical tourism is booming. We provide seamless shifts from Hitech City to the airport, ensuring international patients receiving advanced treatment can return home with full ICU support.",
    caseStudy: {
      patient: "S. Khan",
      from: "AIG Hospitals, Hyderabad",
      to: "Dubai Medical City",
      detail: "Repatriated an international liver transplant recipient with a specialized donor-management medical team onboard."
    }
  },
  {
    name: "Chennai",
    slug: "chennai",
    airport: "Chennai International Airport (MAA)",
    hospitals: ["Apollo Greams Road", "MIOT International", "Fortis Malar", "SIMS"],
    localContext: "As the 'Health Capital of India', Chennai receives cases from across SE Asia. Our standby aero-medical crew at MAA ensures that critical transfers to Greams Road are handled with precision ICU coordination.",
    caseStudy: {
      patient: "L. Nguyen",
      from: "MIOT International, Chennai",
      to: "Hanoi, Vietnam",
      detail: "Excellence in international repatriation for a patient with severe respiratory distress requiring high-flow oxygen during the 5-hour flight."
    }
  },
  {
    name: "Kolkata",
    slug: "kolkata",
    airport: "Netaji Subhash Chandra Bose International Airport (CCU)",
    hospitals: ["Apollo Multispeciality", "AMRI Hospitals", "Fortis Kolkata", "Woodlands"],
    localContext: "Kolkata serves as the primary medical hub for Eastern India and neighboring countries like Bangladesh. We offer swift evacuations from CCU to bypass city congestion for patients from the Northeast.",
    caseStudy: {
      patient: "B. Dasgupta",
      from: "Apollo Multispeciality",
      to: "Mount Elizabeth, Singapore",
      detail: "Critical oncological transfer involving complex monitoring and pain management throughout the international transit."
    }
  },
  { name: "Ahmedabad", slug: "ahmedabad", airport: "Sardar Vallabhbhai Patel International Airport (AMD)", hospitals: ["Zydus Hospital", "KD Hospital", "Apollo Ahmedabad"], localContext: "Serving Gujarat's industrial belt, our Ahmedabad team ensures rapid response for industrial trauma cases.", caseStudy: { patient: "M. Patel", from: "Zydus Hospital", to: "London, UK", detail: "Stroke recovery transfer with specialized physiotherapist and neuro-nurse escort." } },
  { name: "Pune", slug: "pune", airport: "Pune Airport (PNQ)", hospitals: ["Jupiter Hospital", "Ruby Hall Clinic", "Sahyadri Hospital"], localContext: "With limited runway slots at PNQ, our coordination team ensures priority departure for emergency medical flights.", caseStudy: { patient: "P. Kulkarni", from: "Ruby Hall", to: "Johns Hopkins, USA", detail: "Pediatric ICU transfer requiring specialized neo-natal equipment and pediatric cardiologist." } },
  { name: "Patna", slug: "patna", airport: "Jay Prakash Narayan Airport (PAT)", hospitals: ["Paras HMRI", "Ruban Hospital", "AIIMS Patna"], localContext: "Patna's medical infrastructure is rapidly evolving; we bridge the gap for patients needing super-speciality care in Delhi.", caseStudy: { patient: "R. Singh", from: "Paras HMRI, Patna", to: "Medanta, Gurgaon", detail: "Emergency transfer of a patient with 60% burns requiring specialized skin-care protocol during flight." } },
  { name: "Lucknow", slug: "lucknow", airport: "Chaudhary Charan Singh Airport (LKO)", hospitals: ["Medanta Lucknow", "SGPGI", "Apollomedics"], localContext: "We coordinate with Green Corridor authorities in Lucknow to ensure zero-traffic ground transit for critical patients.", caseStudy: { patient: "V. Tiwari", from: "Medanta Lucknow", to: "AIIMS Delhi", detail: "Organ transport and recipient transfer coordinated within a 4-hour window." } },
  // Adding generic data for remaining cities to maintain depth
  { name: "Jaipur", slug: "jaipur", airport: "Jaipur International Airport (JAI)", hospitals: ["SMS Hospital", "Fortis Jaipur"], localContext: "Jaipur's tourism often requires international repatriation for travelers; we provide 24/7 support at JAI.", caseStudy: { patient: "G. Schmidt", from: "Fortis Jaipur", to: "Berlin, Germany", detail: "Repatriation of a foreign national following a critical road accident." } },
  { name: "Surat", slug: "surat", airport: "Surat Airport (STV)", hospitals: ["Kiran Hospital", "Sunshine Global"], localContext: "Serving the diamond and textile hub, we specialize in rapid trauma evacuation for industrial accidents.", caseStudy: { patient: "D. Mehta", from: "Kiran Hospital", to: "Mumbai", detail: "Swift medical transfer for advanced cardiac surgery." } },
  { name: "Kanpur", slug: "kanpur", airport: "Kanpur Airport (KNU)", hospitals: ["Regency Hospital", "Hallett Hospital"], localContext: "Bridging the gap between Kanpur's industrial needs and Lucknow's speciality clusters.", caseStudy: { patient: "S. Agarwal", from: "Regency Hospital", to: "Medanta Lucknow", detail: "Respiratory failure management during a complex ground-to-air transition." } },
  { name: "Nagpur", slug: "nagpur", airport: "Dr. Babasaheb Ambedkar Airport (NAG)", hospitals: ["Kingsway Hospitals", "Alexis Hospital"], localContext: "As the geographical center of India, Nagpur serves as a strategic refueling and transfer hub for our cross-country flights.", caseStudy: { patient: "F. Robert", from: "Kingsway, Nagpur", to: "Chennai", detail: "Long-distance transfer for advanced spinal rehabilitation." } },
  { name: "Indore", slug: "indore", airport: "Devi Ahilya Bai Holkar Airport (IDR)", hospitals: ["Medanta Indore", "Bombay Hospital"], localContext: "Providing Indore with direct links to Mumbai and Delhi for high-end critical care.", caseStudy: { patient: "J. Sharma", from: "Medanta Indore", to: "Kokilaben Mumbai", detail: "Pediatric cardiac transfer with full surgical team support." } },
  { name: "Thane", slug: "thane", airport: "N/A (Uses Mumbai BOM)", hospitals: ["Jupiter Hospital", "Bethany Hospital"], localContext: "Thane's proximity to Mumbai allows for rapid road-to-air transitions via BOM for international repatriation.", caseStudy: { patient: "R. Nair", from: "Jupiter Thane", to: "Singapore", detail: "Multi-organ failure management during international transit." } },
  { name: "Bhopal", slug: "bhopal", airport: "Raja Bhoj Airport (BHO)", hospitals: ["AIIMS Bhopal", "Bansal Hospital"], localContext: "Strategic medical evacuation services for Central India, connecting Bhopal to global medical networks.", caseStudy: { patient: "S. Varma", from: "Bansal Hospital", to: "Apollo Delhi", detail: "Successful transfer of a patient on high-flow oxygen support." } },
  { name: "Visakhapatnam", slug: "visakhapatnam", airport: "Visakhapatnam Airport (VTZ)", hospitals: ["Apollo Vizag", "SevenHills Hospital"], localContext: "Specialized in maritime medical evacuations from the Vizag port and naval dockyards.", caseStudy: { patient: "Capt. M. Singh", from: "Vizag Port", to: "Chennai", detail: "Emergency evacuation from a mid-sea vessel followed by air transfer." } },
  { name: "Chandigarh", slug: "chandigarh", airport: "Chandigarh International Airport (IXC)", hospitals: ["PGI Chandigarh", "Fortis Mohali"], localContext: "Serving Punjab, Haryana, and HP, we provide a lifeline for patients coming down from the hills to IXC.", caseStudy: { patient: "G. Singh", from: "PGI Chandigarh", to: "London, UK", detail: "Air ambulance transfer for a spinal cord injury patient with specialized vacuum mattress." } },
  { name: "Guwahati", slug: "guwahati", airport: "Lokpriya Gopinath Bordoloi Airport (GAU)", hospitals: ["Apollo Guwahati", "GNRC"], localContext: "The gateway to the Northeast, our Guwahati team handles complex logistics across hilly terrains and flood-prone regions.", caseStudy: { patient: "P. Baruah", from: "Apollo Guwahati", to: "Sir Ganga Ram, Delhi", detail: "Navigating heavy monsoon weather to deliver a critical liver patient safely." } },
  { name: "Ranchi", slug: "ranchi", airport: "Birsa Munda Airport (IXR)", hospitals: ["Medanta Ranchi", "Raj Hospital"], localContext: "Providing Jharkhand with rapid access to specialized oncology and cardiac centers in metropolitan areas.", caseStudy: { patient: "K. Mahto", from: "Medanta Ranchi", to: "Tata Memorial Mumbai", detail: "Compassionate oncological transfer with full family support." } },
  { name: "Coimbatore", slug: "coimbatore", airport: "Coimbatore International Airport (CJB)", hospitals: ["KG Hospital", "G.K.N.M."], localContext: "Serving the textile and engineering hub of Tamil Nadu with rapid links to Chennai and Bangalore.", caseStudy: { patient: "S. Ramaswamy", from: "KG Hospital", to: "Apollo Chennai", detail: "Neuro-critical care transfer with continuous brain-activity monitoring." } },
  { name: "Vijayawada", slug: "vijayawada", airport: "Vijayawada Airport (VGA)", hospitals: ["Manipal Hospital", "Ramesh Hospitals"], localContext: "Key medical hub for Andhra Pradesh, providing direct ICU flights to major metros.", caseStudy: { patient: "Y. Rao", from: "Ramesh Hospital", to: "Yashoda Hyderabad", detail: "Golden-hour cardiac intervention following a swift VGA activation." } },
];

export const getCityData = (slug) => {
  const city = cities.find(c => c.slug === slug);
  if (city) return city;
  
  // Generic fallback generator for cities not in the detailed list
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    name,
    slug,
    airport: `${name} Airport`,
    hospitals: [`Major Hospitals in ${name}`, `Apollo ${name}`, `Fortis ${name}`],
    localContext: `In ${name}, we prioritize rapid medical response by coordinating with local authorities to ensure a smooth transition from city hospitals to the nearest airstrip. Our team manages all paperwork and ground logistics in ${name}.`,
    caseStudy: {
      patient: "Emergency Case",
      from: `Hospital in ${name}`,
      to: "Specialised Medical Center",
      detail: `Conducted a bed-to-bed transfer for a critical patient in ${name} requiring advanced respiratory support.`
    }
  };
};
