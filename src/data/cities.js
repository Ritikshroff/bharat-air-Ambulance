export const cities = [
  {
    name: "Delhi",
    slug: "delhi",
    airport: "Indira Gandhi International Airport (DEL)",
    hospitals: ["AIIMS New Delhi", "Safdarjung Hospital", "Apollo Hospital", "Max Super Speciality Saket", "Fortis Escorts"],
    cremationGrounds: ["Nigambodh Ghat (Kashmere Gate)", "Lodhi Road Electric Crematorium", "Punjabi Bagh Cremation Ground", "Green Park Shamshan Ghat"],
    mortuaries: ["AIIMS Mortuary Center", "Safdarjung Cold Storage", "Subroto Park Mortuary"],
    zones: ["South Delhi", "Dwarka", "Rohini", "Connaught Place", "Noida", "Gurgaon"],
    geo: { latitude: 28.6139, longitude: 77.2090 },
    localContext: "In Delhi NCR, navigating through heavy traffic in areas like Ring Road, Connaught Place, and Gurugram expressway requires swift coordination. We maintain dedicated fleet bases in South Delhi, Dwarka, and East Delhi for 15-minute dispatch.",
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
    hospitals: ["Lilavati Hospital", "Kokilaben Dhirubhai Ambani Hospital", "Nanavati Max", "Breach Candy Hospital", "Hinduja Hospital"],
    cremationGrounds: ["Banganga Crematorium (Walkeshwar)", "Shivaji Park Crematorium (Dadar)", "Chandanwadi Electric Crematorium (Marine Lines)", "Oshiwara Cremation Ground"],
    mortuaries: ["JJ Hospital Mortuary", "KEM Hospital Cold Storage", "Cooper Hospital Mortuary"],
    zones: ["South Mumbai", "Bandra-Andheri Western Suburbs", "Thane", "Navi Mumbai"],
    geo: { latitude: 19.0760, longitude: 72.8777 },
    localContext: "Mumbai's coastal geography and intense monsoon transit require specialized AC mortuary vehicles and rapid green corridor clearance connecting Western Suburbs, South Mumbai, and BOM Cargo Terminals.",
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
    hospitals: ["Manipal Hospital", "Narayana Health City", "Aster CMI", "St. John's Medical College", "Apollo Bannerghatta"],
    cremationGrounds: ["Wilson Garden Electric Crematorium", "Kalpalli Crematorium (CV Raman Nagar)", "Hebbal Electric Crematorium", "Banashankari Cremation Ground"],
    mortuaries: ["Victoria Hospital Mortuary", "Bowring Hospital Cold Storage", "Ramaiah Mortuary"],
    zones: ["Koramangala", "Indiranagar", "Whitefield", "Jayanagar", "Hebbal", "Electronic City"],
    geo: { latitude: 12.9716, longitude: 77.5946 },
    localContext: "To overcome Bangalore's outer ring road and IT-corridor congestion, our ambulance and hearse fleet is stationed strategically across Hebbal, Electronic City, and Koramangala for rapid response.",
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
    hospitals: ["Apollo Health City Jubilee Hills", "Yashoda Hospitals", "AIG Hospitals Gachibowli", "KIMS Secunderabad"],
    cremationGrounds: ["Mahaprasthanam (Jubilee Hills)", "Amberpet Crematorium", "Bansilalpet Hindu Shamshan Ghat", "Panjagutta Crematorium"],
    mortuaries: ["Osmania General Hospital Mortuary", "Gandhi Hospital Cold Storage"],
    zones: ["Hitech City", "Gachibowli", "Banjara Hills", "Secunderabad", "Madhapur"],
    geo: { latitude: 17.3850, longitude: 78.4867 },
    localContext: "Hyderabad's medical tourism hub requires seamless bed-to-bed transfers from Gachibowli and Banjara Hills to RGIA, along with dignified funeral and freezer box coordination across the Twin Cities.",
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
    hospitals: ["Apollo Hospitals Greams Road", "MIOT International", "Fortis Malar", "SIMS Hospital Vadapalani"],
    cremationGrounds: ["Besant Nagar Crematorium", "Mylapore Electric Crematorium", "Otteri Cremation Ground", "Kilpauk Cemetery & Crematorium"],
    mortuaries: ["Rajiv Gandhi Government General Hospital Mortuary", "Kilpauk Medical College Cold Storage"],
    zones: ["Anna Nagar", "Mylapore", "Adyar", "T. Nagar", "Velachery", "Guindy"],
    geo: { latitude: 13.0827, longitude: 80.2707 },
    localContext: "As South India's premier medical gateway, our Chennai operations handle international patient flights at MAA and 24/7 freezer box / hearse transport connecting key hospitals on Greams Road and Mount Road.",
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
    hospitals: ["Apollo Multispeciality Salt Lake", "AMRI Hospitals Dhakuria", "Fortis Hospital Anandapur", "Woodlands Multispeciality"],
    cremationGrounds: ["Keoratola Burning Ghat", "Nimtala Ghat (Shobhabazar)", "Siriti Burning Ghat", "Kasi Mitra Ghat"],
    mortuaries: ["Calcutta Medical College Mortuary", "SSKM Hospital Cold Storage", "RG Kar Medical College"],
    zones: ["Salt Lake", "New Town", "Alipore", "Ballygunge", "Howrah", "Dum Dum"],
    geo: { latitude: 22.5726, longitude: 88.3639 },
    localContext: "Serving Eastern India and neighboring states, we coordinate rapid transfers to CCU cargo and passenger terminals, and provide immediate hearse/freezer assistance to sacred ghats like Keoratola and Nimtala.",
    caseStudy: {
      patient: "B. Dasgupta",
      from: "Apollo Multispeciality",
      to: "Mount Elizabeth, Singapore",
      detail: "Critical oncological transfer involving complex monitoring and pain management throughout the international transit."
    }
  },
  {
    name: "Pune",
    slug: "pune",
    airport: "Pune International Airport (PNQ)",
    hospitals: ["Jupiter Hospital Baner", "Ruby Hall Clinic", "Sahyadri Super Speciality", "Deenanath Mangeshkar Hospital"],
    cremationGrounds: ["Vaikunth Crematorium (Navi Peth)", "Koregaon Park Electric Crematorium", "Aundh Crematorium", "Katraj Ghat"],
    mortuaries: ["Sassoon General Hospital Mortuary", "YCM Hospital Cold Storage Pimpri"],
    zones: ["Kothrud", "Baner", "Hinjewadi", "Viman Nagar", "Pimpri-Chinchwad", "Kalyani Nagar"],
    geo: { latitude: 18.5204, longitude: 73.8567 },
    localContext: "Fast connectivity between Hinjewadi IT park, Kothrud, and Mumbai Pune Expressway with round-the-clock emergency medical evacuations and hearse dispatch across Pune and PCMC.",
    caseStudy: {
      patient: "P. Kulkarni",
      from: "Ruby Hall",
      to: "Johns Hopkins, USA",
      detail: "Pediatric ICU transfer requiring specialized neo-natal equipment and pediatric cardiologist."
    }
  },
  {
    name: "Ahmedabad",
    slug: "ahmedabad",
    airport: "Sardar Vallabhbhai Patel International Airport (AMD)",
    hospitals: ["Zydus Hospital", "KD Hospital SG Highway", "Apollo Hospitals Ahmedabad", "Sterling Hospital"],
    cremationGrounds: ["VS Hospital Crematorium", "Thaltej Cremation Ground", "Dudheshwar Burning Ghat", "Bodakdev Crematorium"],
    mortuaries: ["Civil Hospital Asarwa Mortuary", "Sola Civil Cold Storage"],
    zones: ["SG Highway", "Satellite", "Bodakdev", "Maninagar", "Navrangpura", "Gandhinagar"],
    geo: { latitude: 23.0225, longitude: 72.5714 },
    localContext: "Serving Gujarat's commercial and healthcare hub along SG Highway, facilitating air transfers via AMD and rapid interstate mortuary transport to Rajasthan and Maharashtra.",
    caseStudy: {
      patient: "M. Patel",
      from: "Zydus Hospital",
      to: "London, UK",
      detail: "Stroke recovery transfer with specialized physiotherapist and neuro-nurse escort."
    }
  },
  {
    name: "Lucknow",
    slug: "lucknow",
    airport: "Chaudhary Charan Singh International Airport (LKO)",
    hospitals: ["Medanta Lucknow", "Sanjay Gandhi Postgraduate Institute (SGPGI)", "Apollomedics Super Speciality", "KGMU"],
    cremationGrounds: ["Gulab Ghat Cremation Ground", "Bhainsa Kund (Baikunth Dham)", "Alambagh Electric Crematorium"],
    mortuaries: ["KGMU Mortuary Center", "Civil Hospital Cold Storage Lucknow"],
    zones: ["Gomti Nagar", "Hazratganj", "Alambagh", "Indira Nagar", "Ashiyana"],
    geo: { latitude: 26.8467, longitude: 80.9462 },
    localContext: "Connecting UP's healthcare heartland with Delhi and Mumbai via green corridors and chartered air ambulance, alongside respectful funeral management at Baikunth Dham.",
    caseStudy: {
      patient: "V. Tiwari",
      from: "Medanta Lucknow",
      to: "AIIMS Delhi",
      detail: "Organ transport and recipient transfer coordinated within a 4-hour window."
    }
  },
  {
    name: "Jaipur",
    slug: "jaipur",
    airport: "Jaipur International Airport (JAI)",
    hospitals: ["Sawai Man Singh (SMS) Hospital", "Fortis Escorts Hospital", "Eternal Heart Care (EHCC)", "Narayana Multispeciality"],
    cremationGrounds: ["Adarsh Nagar Cremation Ground", "Maharaniyon Ki Chhatriyan Ghat", "Lal Dungri Shamshan", "Vidhyadhar Nagar Ghat"],
    mortuaries: ["SMS Medical College Mortuary", "Jaiawati Cold Storage"],
    zones: ["Malviya Nagar", "Vaishali Nagar", "C-Scheme", "Mansarovar", "Tonk Road"],
    geo: { latitude: 26.9124, longitude: 75.7873 },
    localContext: "Dedicated air ambulance support for international tourists and local residents, with extensive hearse van routes connecting Delhi, Ajmer, and Shekhawati regions.",
    caseStudy: {
      patient: "G. Schmidt",
      from: "Fortis Jaipur",
      to: "Berlin, Germany",
      detail: "Repatriation of a foreign national following a critical road accident."
    }
  },
  {
    name: "Chandigarh",
    slug: "chandigarh",
    airport: "Shaheed Bhagat Singh International Airport (IXC)",
    hospitals: ["Postgraduate Institute of Medical Education and Research (PGIMER)", "Fortis Hospital Mohali", "Max Super Speciality Mohali"],
    cremationGrounds: ["Sector 25 Cremation Ground", "Mohali Phase 6 Electric Crematorium", "Panchkula Sector 20 Shamshan Ghat"],
    mortuaries: ["PGI Chandigarh Mortuary", "GMCH Sector 32 Cold Storage"],
    zones: ["Sector 17", "Sector 35", "Mohali", "Panchkula", "Zirakpur"],
    geo: { latitude: 30.7333, longitude: 76.7794 },
    localContext: "Serving the Tricity, Punjab, Haryana, and Himachal Pradesh with urgent hill-evacuations to PGIMER and high-standard funeral assistance across the region.",
    caseStudy: {
      patient: "G. Singh",
      from: "PGI Chandigarh",
      to: "London, UK",
      detail: "Air ambulance transfer for a spinal cord injury patient with specialized vacuum mattress."
    }
  },
  {
    name: "Patna",
    slug: "patna",
    airport: "Jay Prakash Narayan Airport (PAT)",
    hospitals: ["AIIMS Patna", "Paras HMRI Hospital", "Ruban Memorial Hospital", "IGIMS Patna"],
    cremationGrounds: ["Bans Ghat Electric Crematorium", "Gulbi Ghat", "Digha Ghat Cremation Ground"],
    mortuaries: ["PMCH Mortuary Complex", "AIIMS Patna Cold Storage"],
    zones: ["Kankarbagh", "Boring Road", "Bailey Road", "Patliputra Colony", "Danapur"],
    geo: { latitude: 25.5941, longitude: 85.1376 },
    localContext: "Critical aero-medical bridge transporting patients from Bihar to Delhi NCR hospitals, with 24/7 dead body freezer boxes and respectful rituals along the holy Ganges.",
    caseStudy: {
      patient: "R. Singh",
      from: "Paras HMRI, Patna",
      to: "Medanta, Gurgaon",
      detail: "Emergency transfer of a patient with 60% burns requiring specialized skin-care protocol during flight."
    }
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    airport: "Lal Bahadur Shastri International Airport (VNS)",
    hospitals: ["Sir Sunderlal Hospital (BHU)", "Heritage Hospitals Lanka", "Apex Hospital DLW"],
    cremationGrounds: ["Manikarnika Ghat (Maha Shamshan)", "Harishchandra Ghat Electric Crematorium", "Rajghat"],
    mortuaries: ["IMS BHU Mortuary", "Pandit Deen Dayal Upadhyay Hospital Mortuary"],
    zones: ["Godowlia", "Lanka", "Cantonment", "Sigra", "Shivpur"],
    geo: { latitude: 25.3176, longitude: 82.9739 },
    localContext: "The global spiritual center for Moksha and Asthi Visarjan. We handle end-to-end holy immersion ceremonies, pandit arrangements, and mortal remains transit to Manikarnika and Harishchandra Ghats.",
    caseStudy: {
      patient: "Pandit S. Shastri",
      from: "BHU Hospital Varanasi",
      to: "AIIMS New Delhi",
      detail: "High-priority critical air evacuation with full ventilator and cardiologist escort."
    }
  },
  {
    name: "Indore",
    slug: "indore",
    airport: "Devi Ahilya Bai Holkar Airport (IDR)",
    hospitals: ["Medanta Super Speciality Indore", "Bombay Hospital Indore", "CHL Hospital", "Apollo Hospitals Vijay Nagar"],
    cremationGrounds: ["Muktidham Crematorium Rambagh", "Jawahar Nagar Muktidham", "Tilak Nagar Cremation Ground"],
    mortuaries: ["MY Hospital Mortuary", "District Hospital Indore Cold Storage"],
    zones: ["Vijay Nagar", "Palasia", "Saket", "Bhawarkua", "Rau"],
    geo: { latitude: 22.7196, longitude: 75.8577 },
    localContext: "Madhya Pradesh's commercial hub with active flight routes to Mumbai/Delhi and swift hearse van coordination across Indore, Ujjain, and Dewas.",
    caseStudy: {
      patient: "J. Sharma",
      from: "Medanta Indore",
      to: "Kokilaben Mumbai",
      detail: "Pediatric cardiac transfer with full surgical team support."
    }
  },
  {
    name: "Nagpur",
    slug: "nagpur",
    airport: "Dr. Babasaheb Ambedkar International Airport (NAG)",
    hospitals: ["Kingsway Hospitals", "Alexis Hospital Mankapur", "AIIMS Nagpur", "Care Hospital Ramdaspeth"],
    cremationGrounds: ["Mokshadham Ghat (Ghat Road)", "Ambazari Ghat", "Manewada Crematorium"],
    mortuaries: ["Government Medical College (GMC) Mortuary", "IGGMC Mayo Cold Storage"],
    zones: ["Dharampeth", "Civil Lines", "Ramdaspeth", "Wardha Road", "Sitabuldi"],
    geo: { latitude: 21.1458, longitude: 79.0882 },
    localContext: "Geographical center of India serving as a vital medical airlift refueling center and primary emergency transfer node for Vidarbha and MP.",
    caseStudy: {
      patient: "F. Robert",
      from: "Kingsway, Nagpur",
      to: "Chennai",
      detail: "Long-distance transfer for advanced spinal rehabilitation."
    }
  },
  {
    name: "Surat",
    slug: "surat",
    airport: "Surat Airport (STV)",
    hospitals: ["Kiran Multispeciality Hospital", "Sunshine Global Hospital", "Mahavir Hospital"],
    cremationGrounds: ["Ramnath Ghela Shamshan Ghat", "Kurukshetra Crematorium Jahangirpura", "Ashwinikumar Shamshan"],
    mortuaries: ["New Civil Hospital Mortuary Surat", "SMIMER Hospital Cold Storage"],
    zones: ["Athwa Lines", "Varachha", "Adajan", "Vesu", "Piplod"],
    geo: { latitude: 21.1702, longitude: 72.8311 },
    localContext: "Fast response for South Gujarat industrial belt with rapid road and air medical evacuations to Mumbai super-speciality hospitals.",
    caseStudy: {
      patient: "D. Mehta",
      from: "Kiran Hospital",
      to: "Mumbai",
      detail: "Swift medical transfer for advanced cardiac surgery."
    }
  },
  {
    name: "Bhopal",
    slug: "bhopal",
    airport: "Raja Bhoj Airport (BHO)",
    hospitals: ["AIIMS Bhopal", "Bansal Hospital", "Chirayu Medical College", "Hamidia Hospital"],
    cremationGrounds: ["Bhadbhada Vishram Ghat", "Subhash Nagar Vishram Ghat", "Bairagarh Muktidham"],
    mortuaries: ["Hamidia Hospital Mortuary", "AIIMS Bhopal Cold Storage"],
    zones: ["Arera Colony", "MP Nagar", "Shahpura", "Kolar Road", "Hoshangabad Road"],
    geo: { latitude: 23.2599, longitude: 77.4126 },
    localContext: "Central India medical logistics providing 24/7 ICU air charters and compassionate hearse and mortuary services connecting all MP districts.",
    caseStudy: {
      patient: "S. Varma",
      from: "Bansal Hospital",
      to: "Apollo Delhi",
      detail: "Successful transfer of a patient on high-flow oxygen support."
    }
  },
  {
    name: "Visakhapatnam",
    slug: "visakhapatnam",
    airport: "Visakhapatnam International Airport (VTZ)",
    hospitals: ["Apollo Hospitals Health City", "SevenHills Hospital", "Care Hospitals Ramnagar"],
    cremationGrounds: ["Gnanapuram Hindu Cremation Ground", "Chavulamadum Electric Crematorium", "Kailasapuram Ghat"],
    mortuaries: ["King George Hospital (KGH) Mortuary", "VIMS Cold Storage"],
    zones: ["Siripuram", "MVP Colony", "Gajuwaka", "Madhurawada", "Maharanipeta"],
    geo: { latitude: 17.6868, longitude: 83.2185 },
    localContext: "Specialized in maritime offshore medical transfers, port dockyard evacuations, and comprehensive mortuary transport across Coastal Andhra.",
    caseStudy: {
      patient: "Capt. M. Singh",
      from: "Vizag Port",
      to: "Chennai",
      detail: "Emergency evacuation from a mid-sea vessel followed by air transfer."
    }
  },
  {
    name: "Guwahati",
    slug: "guwahati",
    airport: "Lokpriya Gopinath Bordoloi International Airport (GAU)",
    hospitals: ["Apollo Hospitals Guwahati", "GNRC Medical Dispur", "Narayana Superspeciality", "Down Town Hospital"],
    cremationGrounds: ["Navagraha Shamshan Ghat", "Bhootnath Shamshan Ghat", "Ulubari Electric Crematorium"],
    mortuaries: ["Gauhati Medical College (GMCH) Mortuary", "Narayana Cold Storage"],
    zones: ["Dispur", "GS Road", "Ulubari", "Six Mile", "Paltan Bazaar"],
    geo: { latitude: 26.1445, longitude: 91.7362 },
    localContext: "Gateway for Northeast India, overcoming tough regional terrain to connect Assam and sister states to premier hospitals in Delhi and Kolkata.",
    caseStudy: {
      patient: "P. Baruah",
      from: "Apollo Guwahati",
      to: "Sir Ganga Ram, Delhi",
      detail: "Navigating heavy monsoon weather to deliver a critical liver patient safely."
    }
  },
  {
    name: "Ranchi",
    slug: "ranchi",
    airport: "Birsa Munda Airport (IXR)",
    hospitals: ["Medanta Abdur Razzaque Ansari Memorial", "Raj Hospitals", "RIMS Ranchi"],
    cremationGrounds: ["Muktidham Harmu", "Namkum Crematorium", "Swargdham Ghat"],
    mortuaries: ["RIMS Mortuary Complex", "Sadar Hospital Cold Storage"],
    zones: ["Kanke Road", "Harmu", "Doranda", "Bariatu", "Lalpur"],
    geo: { latitude: 23.3441, longitude: 85.3096 },
    localContext: "Rapid medical repatriation and specialized mortuary transport linking Jharkhand patients with oncology and neuro centres in Delhi and Kolkata.",
    caseStudy: {
      patient: "K. Mahto",
      from: "Medanta Ranchi",
      to: "Tata Memorial Mumbai",
      detail: "Compassionate oncological transfer with full family support."
    }
  },
  {
    name: "Coimbatore",
    slug: "coimbatore",
    airport: "Coimbatore International Airport (CJB)",
    hospitals: ["G.Kuppuswamy Naidu Memorial (GKNM)", "KG Hospital", "Kovai Medical Center (KMCH)", "PSG Hospitals"],
    cremationGrounds: ["Thudiyalur Electric Crematorium", "Pappanaickenpalayam Crematorium", "Nanjundapuram Ghat"],
    mortuaries: ["Coimbatore Medical College Hospital (CMCH) Mortuary", "KMCH Cold Storage"],
    zones: ["RS Puram", "Peelamedu", "Gandhipuram", "Saibaba Colony", "Saravanampatti"],
    geo: { latitude: 11.0168, longitude: 76.9558 },
    localContext: "Serving Western Tamil Nadu and Kerala border with high-reliability aero-medical evacuations and hearse van connectivity to Chennai and Bangalore.",
    caseStudy: {
      patient: "S. Ramaswamy",
      from: "KG Hospital",
      to: "Apollo Chennai",
      detail: "Neuro-critical care transfer with continuous brain-activity monitoring."
    }
  },
  {
    name: "Vijayawada",
    slug: "vijayawada",
    airport: "Vijayawada International Airport (VGA)",
    hospitals: ["Manipal Hospital Tadepalli", "Ramesh Hospitals", "Ayush Hospitals", "Andhra Hospitals"],
    cremationGrounds: ["Swargapuri Electric Crematorium (Bhavanipuram)", "Krishnalanka Hindu Cremation Ground", "Gollapudi Ghat"],
    mortuaries: ["New Government General Hospital (GGH) Mortuary", "Manipal Cold Storage"],
    zones: ["MG Road", "Benz Circle", "Bhavanipuram", "Governorpet", "Tadepalli"],
    geo: { latitude: 16.5062, longitude: 80.6480 },
    localContext: "Heart of Andhra Pradesh healthcare, facilitating instant ICU air transfers to Hyderabad and Chennai, plus complete funeral samagri and hearse coordination.",
    caseStudy: {
      patient: "Y. Rao",
      from: "Ramesh Hospital",
      to: "Yashoda Hyderabad",
      detail: "Golden-hour cardiac intervention following a swift VGA activation."
    }
  },
  {
    name: "Haridwar",
    slug: "haridwar",
    airport: "Dehradun Jolly Grant Airport (DED)",
    hospitals: ["Metro Hospital Haridwar", "Ramakrishna Mission Sevashrama", "AIIMS Rishikesh"],
    cremationGrounds: ["Kankhal Shamshan Ghat", "Har Ki Pauri Ghat", "Chandi Ghat Crematorium"],
    mortuaries: ["District Hospital Haridwar Mortuary", "AIIMS Rishikesh Cold Storage"],
    zones: ["Har Ki Pauri", "Kankhal", "Jwalapur", "Ranipur", "Shivalik Nagar"],
    geo: { latitude: 29.9457, longitude: 78.1642 },
    localContext: "Sacred pilgrimage center for Antim Sanskar and Asthi Visarjan on Mother Ganga. We provide verified Vedic pandits, ritual samagri, and transportation directly to Har Ki Pauri and Kankhal Ghats.",
    caseStudy: {
      patient: "Emergency Transfer",
      from: "Haridwar Local Hospital",
      to: "AIIMS Rishikesh",
      detail: "Rapid ICU ground ambulance transfer via dedicated mountain-corridor protocol."
    }
  },
  {
    name: "Noida",
    slug: "noida",
    airport: "Indira Gandhi International Airport (DEL) / Jewar Airport (DXN)",
    hospitals: ["Fortis Hospital Sector 62", "Jaypee Hospital Sector 128", "Kailash Hospital Sector 27", "Yatharth Super Speciality"],
    cremationGrounds: ["Sector 94 Antim Niwas Crematorium", "Sector 151 Cremation Ground", "Hindon Crematorium"],
    mortuaries: ["District Hospital Sector 39 Mortuary", "Jaypee Cold Storage"],
    zones: ["Sector 62", "Sector 18", "Sector 128", "Sector 50", "Noida Expressway", "Sector 76"],
    geo: { latitude: 28.5355, longitude: 77.3910 },
    localContext: "Serving Gautam Buddha Nagar and Noida Expressway with 15-minute dispatch for dead body freezer boxes, hearse vans to Sector 94 Antim Niwas, and rapid ICU transfers via DND and Yamuna Expressway.",
    caseStudy: {
      patient: "Mr. V. Saxena",
      from: "Jaypee Hospital, Sector 128",
      to: "Safdarjung Hospital, Delhi",
      detail: "Green-corridor ICU ground transfer executed in under 22 minutes during morning peak traffic."
    }
  },
  {
    name: "Gurgaon",
    slug: "gurgaon",
    airport: "Indira Gandhi International Airport (DEL)",
    hospitals: ["Medanta The Medicity", "Fortis Memorial Research Institute (FMRI)", "Artemis Hospital Sector 51", "Max Hospital Sushant Lok"],
    cremationGrounds: ["Madanpuri Shamshan Ghat", "Sukhrali Cremation Ground", "Sector 32 Crematorium", "Atul Kataria Chowk Ghat"],
    mortuaries: ["Civil Hospital Sector 10 Mortuary", "Medanta Cold Storage"],
    zones: ["DLF Phase 1-5", "Golf Course Road", "Cyber City", "Sohna Road", "Sushant Lok", "Sector 56"],
    geo: { latitude: 28.4595, longitude: 77.0266 },
    localContext: "Corporate & healthcare capital of Haryana. Direct standby ambulances at Medanta & Fortis for IGI Airport flights, alongside 24/7 freezer box delivery across DLF, Golf Course Road, and Cyber City.",
    caseStudy: {
      patient: "Corporate Executive",
      from: "Medanta The Medicity",
      to: "London Heathrow (Air Transfer)",
      detail: "International medical repatriation on ECMO support coordinated directly with DEL Terminal 3 airside."
    }
  },
  {
    name: "Faridabad",
    slug: "faridabad",
    airport: "Indira Gandhi International Airport (DEL)",
    hospitals: ["Amrita Hospital Sector 88", "Asian Institute of Medical Sciences", "Fortis Escorts Hospital Neelam Bata Road", "Sarvodaya Hospital Sector 8"],
    cremationGrounds: ["AC Nagar Shamshan Ghat", "Sector 8 Crematorium", "Ballabhgarh Ghat"],
    mortuaries: ["BK Civil Hospital Mortuary Faridabad"],
    zones: ["Sector 15", "Sector 21", "NIT Faridabad", "Greater Faridabad", "Neharpar", "Ballabhgarh"],
    geo: { latitude: 28.4089, longitude: 77.3178 },
    localContext: "Strategic coverage for South NCR and Haryana industrial belt, providing rapid hearse van and freezer box services connecting Amrita Hospital and Asian Institute to Delhi.",
    caseStudy: {
      patient: "Critical Patient",
      from: "Amrita Hospital Sector 88",
      to: "AIIMS Delhi",
      detail: "Emergency ventilator ambulance transit via Delhi-Faridabad Skyway."
    }
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad",
    airport: "Hindon Airport (HDO) / IGI Airport (DEL)",
    hospitals: ["Max Super Speciality Vaishali", "Yashoda Super Speciality Kaushambi", "Manipal Hospital NH 24", "Columbia Asia"],
    cremationGrounds: ["Hindon Ghat Electric Crematorium", "Vaishali Shamshan Ghat", "Raj Nagar Muktidham"],
    mortuaries: ["MMG District Hospital Mortuary", "Sanjay Nagar Combined Hospital"],
    zones: ["Indirapuram", "Vaishali", "Kaushambi", "Raj Nagar Extension", "Crossings Republik", "Vasundhara"],
    geo: { latitude: 28.6692, longitude: 77.4538 },
    localContext: "Swift mortuary logistics and hearse transport along Delhi-Meerut Expressway, with priority ground access to Hindon Ghat electric furnaces and Kaushambi/Vaishali hospitals.",
    caseStudy: {
      patient: "Mrs. U. Gupta",
      from: "Max Hospital Vaishali",
      to: "Jaipur",
      detail: "Interstate road transportation in an AC mortuary vehicle with GPS monitoring."
    }
  },
  {
    name: "Greater Noida",
    slug: "greater-noida",
    airport: "Jewar International Airport (DXN) / DEL",
    hospitals: ["Sharda Hospital Knowledge Park", "Yatharth Super Speciality Omega 1", "Kailash Hospital Knowledge Park", "GIMS"],
    cremationGrounds: ["Surajpur Crematorium", "Alpha 1 Shamshan Ground", "Kasna Shamshan Ghat"],
    mortuaries: ["Government Institute of Medical Sciences (GIMS) Mortuary"],
    zones: ["Knowledge Park", "Pari Chowk", "Alpha 1 & 2", "Omega 1", "Greater Noida West (Noida Extension)"],
    geo: { latitude: 28.4744, longitude: 77.5040 },
    localContext: "Serving universities, residential complexes, and tech parks around Pari Chowk and Noida Extension with doorstep mortuary cabinets and highway ambulance transit.",
    caseStudy: {
      patient: "Student Trauma Case",
      from: "Sharda Hospital",
      to: "Max Saket Delhi",
      detail: "Bed-to-bed neurological evacuation handled via Noida-Greater Noida Expressway."
    }
  },
  {
    name: "South Delhi",
    slug: "south-delhi",
    airport: "Indira Gandhi International Airport (DEL)",
    hospitals: ["Max Super Speciality Saket", "Apollo Hospital Jasola", "Fortis Escorts Okhla", "AIIMS New Delhi", "Safdarjung Hospital"],
    cremationGrounds: ["Lodhi Road Electric Crematorium", "Green Park Shamshan Ghat", "Madangir Crematorium"],
    mortuaries: ["AIIMS Mortuary Center", "Safdarjung Cold Storage"],
    zones: ["Saket", "Hauz Khas", "Vasant Kunj", "Greater Kailash", "Lajpat Nagar", "Defence Colony"],
    geo: { latitude: 28.5245, longitude: 77.2066 },
    localContext: "Home to India's top multispeciality institutions like Max Saket and AIIMS. We guarantee 15-minute response across GK, Saket, and Vasant Kunj for freezer boxes and hearse vehicles to Lodhi Road.",
    caseStudy: {
      patient: "D. Kapoor",
      from: "Max Saket",
      to: "Geneva, Switzerland",
      detail: "Bed-to-bed international aero-medical transfer coordinated directly through DEL airport."
    }
  },
  {
    name: "Dwarka",
    slug: "dwarka",
    airport: "Indira Gandhi International Airport (DEL) - 10 Mins Proximity",
    hospitals: ["Venkateshwar Hospital Sector 18", "Manipal Hospital Sector 6", "Indira Gandhi Hospital Sector 9", "Aakash Healthcare Sector 3"],
    cremationGrounds: ["Sector 24 Dwarka Crematorium", "Janakpuri Shamshan Ghat", "Kakrola Cremation Ground"],
    mortuaries: ["DDU Hospital Mortuary Hari Nagar", "Indira Gandhi Hospital Cold Storage"],
    zones: ["Sector 6", "Sector 10", "Sector 12", "Sector 21", "Sector 23", "Dwarka Expressway"],
    geo: { latitude: 28.5921, longitude: 77.0460 },
    localContext: "Located immediately adjacent to IGI Airport (DEL). Primary launchpad for our airport cargo body transfer and instant freezer box dispatch across all Dwarka sub-city sectors.",
    caseStudy: {
      patient: "Repatriation Handover",
      from: "Venkateshwar Hospital",
      to: "DEL Cargo Terminal",
      detail: "Airport cargo coffin handover completed in under 45 minutes from hospital discharge."
    }
  },
  {
    name: "Rohini",
    slug: "rohini",
    airport: "Indira Gandhi International Airport (DEL)",
    hospitals: ["Rajiv Gandhi Cancer Institute", "Saroj Super Speciality Sector 14", "Fortis Hospital Shalimar Bagh", "Max Hospital Pitampura"],
    cremationGrounds: ["Sector 16 Rohini Crematorium", "Sector 24 Rohini Ghat", "Pitampura Shamshan Ghat"],
    mortuaries: ["Dr. BSA Hospital Mortuary Sector 6 Rohini"],
    zones: ["Sector 3", "Sector 7", "Sector 8", "Sector 13", "Sector 16", "Pitampura", "Prashant Vihar"],
    geo: { latitude: 28.7166, longitude: 77.1194 },
    localContext: "North-West Delhi command center serving Rohini sectors, Pitampura, and Outer Ring Road with 24/7 antim sanskar coordination and oncology patient medical shifts.",
    caseStudy: {
      patient: "Oncology Patient",
      from: "Rajiv Gandhi Cancer Institute",
      to: "Kolkata",
      detail: "Commercial stretcher patient flight coordinated with ground ICU ambulances at both ends."
    }
  },
  {
    name: "Navi Mumbai",
    slug: "navi-mumbai",
    airport: "Navi Mumbai International Airport (NMI) / BOM",
    hospitals: ["Apollo Hospitals Belapur", "Fortis Hiranandani Vashi", "MGM Hospital Vashi", "Terna Speciality Nerul"],
    cremationGrounds: ["Vashi Sector 9 Crematorium", "Turbhe Shamshan", "Belapur Electric Cremation Ground", "Kharghar Crematorium"],
    mortuaries: ["NMMC General Hospital Vashi Mortuary", "Apollo Belapur Cold Storage"],
    zones: ["Vashi", "Belapur", "Kharghar", "Nerul", "Panvel", "Kopar Khairane", "Seawoods"],
    geo: { latitude: 19.0330, longitude: 73.0297 },
    localContext: "Covering the expanding satellite city with rapid transit via Palm Beach Road and Sion-Panvel Highway to Vashi Sector 9 and Belapur crematoriums.",
    caseStudy: {
      patient: "Cardiac Emergency",
      from: "Apollo Belapur",
      to: "Nanavati Max Mumbai",
      detail: "Corridor ICU ambulance transfer executed smoothly during evening rush."
    }
  },
  {
    name: "Thane",
    slug: "thane",
    airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    hospitals: ["Jupiter Hospital Eastern Express Highway", "Bethany Hospital", "Kaushalya Medical Foundation", "Currae Speciality"],
    cremationGrounds: ["Jawahar Baug Crematorium", "Wagle Estate Cremation Ground", "Kopri Ghat"],
    mortuaries: ["Thane Civil Hospital Mortuary", "Jupiter Hospital Cold Storage"],
    zones: ["Majiwada", "Ghodbunder Road", "Naupada", "Vartak Nagar", "Hiranandani Estate", "Kasarvadavali"],
    geo: { latitude: 19.2183, longitude: 72.9781 },
    localContext: "Connecting Ghodbunder Road and Central Thane with rapid mortuary transport, hospital bed-to-bed shifts, and dignified funeral logistics.",
    caseStudy: {
      patient: "R. Nair",
      from: "Jupiter Thane",
      to: "Singapore",
      detail: "Multi-organ failure management during international flight transit."
    }
  },
  {
    name: "Andheri",
    slug: "andheri",
    airport: "Chhatrapati Shivaji Maharaj International Airport (BOM) - In-City Access",
    hospitals: ["Kokilaben Dhirubhai Ambani Hospital", "CritiCare Hospital", "SevenHills Hospital Marol", "Holy Spirit Hospital"],
    cremationGrounds: ["Oshiwara Electric Crematorium (Jogeshwari West)", "Chakala Shamshan Ghat", "Parsiwada Crematorium"],
    mortuaries: ["Cooper Hospital Mortuary Juhu Vile Parle", "SevenHills Cold Storage"],
    zones: ["Lokhandwala", "Versova", "Marol", "MIDC", "J.B. Nagar", "Andheri West", "Andheri East"],
    geo: { latitude: 19.1136, longitude: 72.8697 },
    localContext: "Located right next to Mumbai Airport (BOM). Prime operational node for Kokilaben Ambani Hospital transfers and immediate hearse vehicle dispatch to Oshiwara crematorium.",
    caseStudy: {
      patient: "International Repatriation",
      from: "Kokilaben Hospital",
      to: "BOM Cargo Terminal",
      detail: "Hermetically sealed coffin packaging and customs clearance completed in under 3 hours."
    }
  },
  {
    name: "Bandra",
    slug: "bandra",
    airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    hospitals: ["Lilavati Hospital Bandra Reclamation", "Holy Family Hospital", "Bhabha Hospital Bandra West"],
    cremationGrounds: ["Santacruz Hindu Crematorium", "Bandra West Cemetery", "Khar Shamshan Ghat"],
    mortuaries: ["KB Bhabha Hospital Cold Storage", "Lilavati Hospital Mortuary"],
    zones: ["Bandra West", "Pali Hill", "Bandra Kurla Complex (BKC)", "Khar West", "Bandra Reclamation"],
    geo: { latitude: 19.0596, longitude: 72.8295 },
    localContext: "Serving Mumbai's western coastline and BKC commercial hub with premier AC hearse vans, floral tribute setups, and Lilavati Hospital patient repatriations.",
    caseStudy: {
      patient: "Cardiac Emergency",
      from: "Lilavati Hospital",
      to: "Dubai",
      detail: "Charter jet air ambulance dispatched within 3 hours of hospital green signal."
    }
  },
  {
    name: "Whitefield",
    slug: "whitefield",
    airport: "Kempegowda International Airport (BLR)",
    hospitals: ["Manipal Hospital Whitefield", "Vydehi Institute of Medical Sciences", "Columbia Asia (Manipal) ITPL", "Sri Sathya Sai Hospital"],
    cremationGrounds: ["Hope Farm Electric Crematorium", "Kadugodi Shamshan Ghat", "Mahadevapura Crematorium"],
    mortuaries: ["Vydehi Medical College Mortuary", "Manipal Whitefield Cold Storage"],
    zones: ["ITPL Road", "Hope Farm", "Kadugodi", "Hoodi", "ECC Road", "Brookefield", "Channasandra"],
    geo: { latitude: 12.9698, longitude: 77.7499 },
    localContext: "Dedicated fleet stationed at Hope Farm and ITPL for Bangalore's tech corridor. 15-minute doorstep delivery of dead body freezer boxes and direct airport hearse transit via SH 104.",
    caseStudy: {
      patient: "Tech Professional Case",
      from: "Manipal Hospital Whitefield",
      to: "Delhi NCR",
      detail: "Deceased mortal remains transport by flight with complete embalming and cargo clearance."
    }
  },
  {
    name: "Koramangala",
    slug: "koramangala",
    airport: "Kempegowda International Airport (BLR) / HAL Airport",
    hospitals: ["St. John's Medical College Hospital", "Apollo Spectra Koramangala"],
    cremationGrounds: ["Wilson Garden Electric Crematorium", "Madiwala Cremation Ground", "Tavarekere Ghat"],
    mortuaries: ["St. John's Mortuary Cold Storage"],
    zones: ["Koramangala Blocks 1-8", "Madiwala", "Ejipura", "Sony World Signal", "ST Bed Layout"],
    geo: { latitude: 12.9352, longitude: 77.6245 },
    localContext: "Connecting South Bangalore's central hub with St. John's Medical College Hospital and instant mortuary vehicle support to Wilson Garden crematorium.",
    caseStudy: {
      patient: "Critical ICU Shift",
      from: "St. John's Hospital",
      to: "Hyderabad",
      detail: "Interstate ICU ventilator road transport executed safely over 560 KM."
    }
  },
  {
    name: "Electronic City",
    slug: "electronic-city",
    airport: "Kempegowda International Airport (BLR)",
    hospitals: ["Narayana Health City (Narayana Hrudayalaya)", "Mazumdar Shaw Cancer Centre", "Kauvery Hospital"],
    cremationGrounds: ["Bommasandra Crematorium", "Hebbagodi Shamshan Ghat", "Attibele Cremation Ground"],
    mortuaries: ["Narayana Health City Mortuary Cold Storage"],
    zones: ["Phase 1", "Phase 2", "Bommasandra", "Huskur", "Doddathoguru", "Attibele"],
    geo: { latitude: 12.8399, longitude: 77.6770 },
    localContext: "Serving Narayana Health City, the cardiac capital of India. Immediate bed-to-bed transfers to BLR airport and local freezer box setups across Phase 1 and Bommasandra.",
    caseStudy: {
      patient: "Cardiac Transplant Followup",
      from: "Narayana Hrudayalaya",
      to: "Dhaka, Bangladesh",
      detail: "International aero-medical flight with pediatric cardiac team on board."
    }
  },
  {
    name: "Gachibowli",
    slug: "gachibowli",
    airport: "Rajiv Gandhi International Airport (HYD)",
    hospitals: ["AIG Hospitals Gachibowli", "Care Hospital Hi-Tech City", "Continental Hospitals Financial District"],
    cremationGrounds: ["Mahaprasthanam (Whisper Valley Jubilee Hills)", "Gachibowli Shamshan Ghat", "Serilingampally Crematorium"],
    mortuaries: ["Continental Hospital Cold Storage", "AIG Mortuary Care"],
    zones: ["Financial District", "Nanakramguda", "Telecom Nagar", "IIIT Junction", "Kondapur"],
    geo: { latitude: 17.4401, longitude: 78.3489 },
    localContext: "Hyderabad's IT and medical tourism capital. 20-minute direct connectivity to RGIA via Outer Ring Road (ORR) and funeral management at the state-of-the-art Mahaprasthanam.",
    caseStudy: {
      patient: "Liver Transplant Case",
      from: "AIG Hospitals Gachibowli",
      to: "Dubai Medical Center",
      detail: "International air charter with specialized liver-perfusion team."
    }
  },
  {
    name: "Secunderabad",
    slug: "secunderabad",
    airport: "Rajiv Gandhi International Airport (HYD)",
    hospitals: ["KIMS Hospitals Minister Road", "Yashoda Hospitals Secunderabad", "Sunshine Hospital", "Apollo Secunderabad"],
    cremationGrounds: ["Bansilalpet Hindu Shamshan Ghat", "West Marredpally Crematorium", "Ranigunj Ghat"],
    mortuaries: ["Gandhi Medical College & Hospital Mortuary", "KIMS Cold Storage"],
    zones: ["Marredpally", "Begumpet", "Paradise", "Trimulgherry", "Sainikpuri", "Bowenpally"],
    geo: { latitude: 17.4399, longitude: 78.4983 },
    localContext: "Connecting the Twin Cities healthcare network with KIMS and Yashoda hospitals, providing 24/7 antim sanskar rites at Bansilalpet and direct railway station mortuary transfer.",
    caseStudy: {
      patient: "Trauma Case",
      from: "Yashoda Secunderabad",
      to: "AIIMS Delhi",
      detail: "Charter jet evacuation handled with zero-delay air traffic green corridor."
    }
  }
];

export const getCityData = (slug) => {
  const city = cities.find((c) => c.slug === slug);
  if (city) return city;

  // Graceful fallback for any additional query
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    name,
    slug,
    airport: `${name} Airport`,
    hospitals: [`Major Multispeciality Hospitals in ${name}`, `Apollo ${name}`, `Fortis ${name}`],
    cremationGrounds: [`Primary Cremation Ground in ${name}`, `Municipal Electric Crematorium ${name}`],
    mortuaries: [`Civil Hospital Mortuary ${name}`],
    zones: [`Central ${name}`, `North ${name}`, `South ${name}`],
    geo: { latitude: 20.5937, longitude: 78.9629 },
    localContext: `In ${name}, we prioritize rapid medical response and dignified funeral logistics. Our localized fleet ensures 15-30 minute dispatch across all city sectors and direct airport/railway transfers.`,
    caseStudy: {
      patient: "Emergency Case",
      from: `Hospital in ${name}`,
      to: "Specialised Medical Center",
      detail: `Conducted safe bedside-to-bedside transfer in ${name} with complete critical care monitoring.`
    }
  };
};
