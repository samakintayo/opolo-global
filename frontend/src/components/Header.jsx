import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/Opolo-logo-blue.png"
                alt="Opolo Global"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 font-medium">
              Home
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium">
              How It Works
            </a>
            <a href="#programs" className="text-gray-600 hover:text-indigo-600 font-medium">
              Programs
            </a>
            {/* <a href="#footer" className="text-gray-600 hover:text-indigo-600 font-medium">
              Contact
            </a> */}
          </nav>

          {/* CTA Button (desktop only) */}
          <div className="hidden md:flex">
            <a
              href="#footer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         text-white font-semibold shadow-md transition 
                         hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/50"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                // Close icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-3 space-y-3">
            <a href="#home" className="block text-gray-600 hover:text-indigo-600 font-medium">
              Home
            </a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600 font-medium">
              How It Works
            </a>
            <a href="#programs" className="block text-gray-600 hover:text-indigo-600 font-medium">
              Programs
            </a>
            {/* <a href="#footer" className="block text-gray-600 hover:text-indigo-600 font-medium">
              Contact
            </a> */}
            <a
              href="#programs"
              className="block w-full text-center px-4 py-2 rounded-lg 
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         text-white font-semibold shadow-md transition 
                         hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/50"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
