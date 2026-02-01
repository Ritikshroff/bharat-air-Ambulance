import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-medical-red tracking-tight leading-none">
                BHARAT
              </span>
              <span className="text-base font-bold text-white tracking-widest leading-none">
                AIR AMBULANCE
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bharat Air Ambulance is a premier global medical repatriation and
              funeral service provider from India. We specialize in
              international ICU transfers and cross-border logistics, serving as
              a trusted lifeline for families worldwide.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-medical-red transition-colors"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-medical-red"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/ourwork"
                  className="hover:text-white transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-white transition-colors">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Emergency Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-medical-red"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a
                  href="/services/air-ambulance"
                  className="hover:text-white transition-colors"
                >
                  Air Ambulance
                </a>
              </li>
              <li>
                <a
                  href="/services/repatriation-services"
                  className="hover:text-white transition-colors"
                >
                  International Repatriation
                </a>
              </li>
              <li>
                <a
                  href="/services/funeral-services"
                  className="hover:text-white transition-colors"
                >
                  Funeral & Cremation
                </a>
              </li>
              <li>
                <a
                  href="/services/freezer-box-services"
                  className="hover:text-white transition-colors"
                >
                  Dead Body Freezer Box
                </a>
              </li>
              <li>
                <a
                  href="/services/asthi-visarjan"
                  className="hover:text-white transition-colors"
                >
                  Asthi Visarjan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-medical-red"></span>
            </h4>
            <div className="space-y-6 text-sm text-gray-400">
              <div className="flex gap-4">
                <FaPhoneAlt className="text-medical-red mt-1" />
                <div>
                  <p className="text-white font-bold">24/7 Helpline</p>
                  <p>+9188823 83902</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaEnvelope className="text-medical-red mt-1" />
                <div>
                  <p className="text-white font-bold">Email Support</p>
                  <p>info@bharatairambulance.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-medical-red mt-1" />
                <div>
                  <p className="text-white font-bold">Main Office</p>
                  <p>Mahipalpur Extension, New Delhi 110037</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2024 Bharat Air Ambulance and Funeral Services. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <SiVisa
              size={40}
              className="text-gray-500 hover:text-white transition-colors"
            />
            <SiMastercard
              size={40}
              className="text-gray-500 hover:text-white transition-colors"
            />
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
