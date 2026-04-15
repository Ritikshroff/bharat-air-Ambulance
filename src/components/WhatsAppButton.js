import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const draftMessage = encodeURIComponent(
    "Hello Texting you from Your Website, I'm interested in your services. Can we discuss further?",
  );
  return (
    <a
      href={`https://wa.me/8882383902?text=${draftMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="z-50 fixed bottom-24 right-6 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-2 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
