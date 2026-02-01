"use client";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const EmergencyStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex shadow-2xl">
      <a
        href="tel:+918882383902"
        className="flex-1 bg-medical-red hover:bg-medical-red-dark text-white flex items-center justify-center gap-2 py-4 font-bold text-lg transition-colors"
        aria-label="Call Emergency Now"
      >
        <FaPhoneAlt className="animate-pulse" />
        <span>Emergency Call</span>
      </a>
      <a
        href="https://wa.me/918882383902"
        className="flex-1 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-4 font-bold text-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default EmergencyStickyBar;
