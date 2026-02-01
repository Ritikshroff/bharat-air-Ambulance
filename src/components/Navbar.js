"use client"; // Mark this as a client component

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu when a link is clicked
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm fixed top-0 w-full z-30 h-20">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col" onClick={handleLinkClick}>
          <span className="text-xl md:text-2xl font-black text-medical-red tracking-tight leading-none">
            BHARAT
          </span>
          <span className="text-sm md:text-base font-bold text-medical-blue tracking-widest leading-none">
            AIR AMBULANCE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-medical-dark font-medium hover:text-medical-blue transition-colors"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-medical-dark font-medium hover:text-medical-blue transition-colors"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-medical-dark font-medium hover:text-medical-blue transition-colors"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/ourwork"
            className="text-medical-dark font-medium hover:text-medical-blue transition-colors"
            onClick={handleLinkClick}
          >
            Our Work
          </Link>
          <Link
            href="/news"
            className="text-medical-dark font-medium hover:text-medical-blue transition-colors"
            onClick={handleLinkClick}
          >
            News
          </Link>
          <Link
            href="/corporate"
            className="text-medical-dark font-medium hover:text-medical-blue transition-colors"
            onClick={handleLinkClick}
          >
            Corporate
          </Link>

          <a
            href="tel:+918882383902"
            className="bg-medical-red hover:bg-medical-red-dark text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <span className="animate-pulse">●</span> EMERGENCY: +9188823 83902
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="tel:+918882383902"
            className="bg-medical-red text-white p-2.5 rounded-full shadow-md"
          >
            <span className="sr-only">Call Emergency</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
          </a>
          <button
            className="text-medical-dark p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-medical-blue">MENU</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-semibold py-2 border-b border-gray-50"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-lg font-semibold py-2 border-b border-gray-50"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold py-2 border-b border-gray-50"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                href="/ourwork"
                className="text-lg font-semibold py-2 border-b border-gray-50"
                onClick={handleLinkClick}
              >
                Our Work
              </Link>
              <Link
                href="/news"
                className="text-lg font-semibold py-2 border-b border-gray-50"
                onClick={handleLinkClick}
              >
                News
              </Link>
              <Link
                href="/corporate"
                className="text-lg font-semibold py-2 border-b border-gray-50"
                onClick={handleLinkClick}
              >
                Corporate
              </Link>

              <div className="pt-6 gap-4 flex flex-col">
                <a
                  href="tel:+918882383902"
                  className="bg-medical-red text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  Emergency Call
                </a>
                <a
                  href="https://wa.me/918882383902"
                  className="bg-green-100 text-green-700 text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
