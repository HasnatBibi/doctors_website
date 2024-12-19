import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState({
    about: false,
    service: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdowns({ about: false, service: false });
    document.body.style.overflow = "visible";
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <header
      className={`w-full bg-white shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0" : "relative"
      }`}
    >
      {/* Top Bar with Contact Info */}
      <div className="container mx-auto px-4 lg:px-24 py-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img
            src="/src/assets/billnow-logo.svg"
            alt=""
            className="h-16 w-16"
          />
        </div>

        {/* Contact Information */}
        {/* Contact Information */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-12">
          <div className="flex items-center gap-4">
            <FaPhone className="text-[#1dbfcc]" />
            <span>7187018169</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#1dbfcc]" />
            <span>Info@bilnow.comwnintltravels.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#1dbfcc]" />
            <span>407 Rockaway Ave, Brooklyn, NY 11212</span>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-b border-gray-200"></div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 lg:px-24">
        <nav className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden text-black p-2 z-50 ${
              isMobileMenuOpen ? "fixed top-4 right-4" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:relative lg:inset-auto lg:transform-none lg:transition-none lg:bg-transparent lg:flex lg:items-center lg:justify-between lg:flex-1`}
          >
            <div className="h-full overflow-y-auto lg:h-auto lg:overflow-visible lg:flex lg:items-center">
              <ul className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-10 p-6 lg:p-0">
                <li>
                  <a
                    href="/"
                    className="text-[#002345] font-bold hover:text-[#1dbfcc] text-lg lg:text-base"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-[#002345] font-bold hover:text-[#1dbfcc] text-lg lg:text-base"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </a>
                </li>
                <li className="relative w-full lg:w-auto">
                  <button
                    className="flex items-center justify-between w-full font-bold text-[#002345] hover:text-[#1dbfcc] text-lg lg:text-base"
                    onClick={() => toggleDropdown("about")}
                    onMouseEnter={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({ ...prev, about: true }))
                    }
                    onMouseLeave={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({ ...prev, about: false }))
                    }
                  >
                    Services
                    <FaChevronDown
                      className={`ml-1 h-3 w-3 transform transition-transform duration-200 ${
                        activeDropdowns.about ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul
                    className={`mt-2 space-y-2 lg:absolute lg:left-0 lg:bg-white lg:shadow-lg lg:mt-2 lg:py-2 lg:w-48 lg:z-10 transition-all duration-200 ${
                      activeDropdowns.about
                        ? "max-h-48 opacity-100 visible"
                        : "max-h-0 opacity-0 invisible lg:max-h-48"
                    }`}
                    onMouseEnter={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({ ...prev, about: true }))
                    }
                    onMouseLeave={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({ ...prev, about: false }))
                    }
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#1dbfcc]"
                        onClick={closeMobileMenu}
                      >
                        Medical Coding
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#1dbfcc]"
                        onClick={closeMobileMenu}
                      >
                        Denial Management
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative w-full lg:w-auto">
                  <button
                    className="flex items-center justify-between w-full font-bold text-[#002345] hover:text-[#1dbfcc] text-lg lg:text-base"
                    onClick={() => toggleDropdown("service")}
                    onMouseEnter={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({ ...prev, service: true }))
                    }
                    onMouseLeave={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({
                        ...prev,
                        service: false,
                      }))
                    }
                  >
                    Specialities
                    <FaChevronDown
                      className={`ml-1 h-3 w-3 transform transition-transform duration-200 ${
                        activeDropdowns.service ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul
                    className={`mt-2 space-y-2 lg:absolute lg:left-0 lg:bg-white lg:shadow-lg lg:mt-2 lg:py-2 lg:w-48 lg:z-10 transition-all duration-200 ${
                      activeDropdowns.service
                        ? "max-h-48 opacity-100 visible"
                        : "max-h-0 opacity-0 invisible lg:max-h-48"
                    }`}
                    onMouseEnter={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({ ...prev, service: true }))
                    }
                    onMouseLeave={() =>
                      window.innerWidth > 1024 &&
                      setActiveDropdowns((prev) => ({
                        ...prev,
                        service: false,
                      }))
                    }
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#1dbfcc]"
                        onClick={closeMobileMenu}
                      >
                        Internal Medicine Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#1dbfcc]"
                        onClick={closeMobileMenu}
                      >
                        Mental Billing
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-[#002345] font-bold hover:text-[#1dbfcc] text-lg lg:text-base"
                    onClick={closeMobileMenu}
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/appointment"
                    className="text-[#002345] font-bold hover:text-[#1dbfcc] text-lg lg:text-base"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          {/* Social Icons and CTA for both mobile and desktop */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-[#002147] hover:text-[#1dbfcc] transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-[#002147] hover:text-[#1dbfcc] transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#002147] hover:text-[#1dbfcc] transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <button className="bg-[#1dbfcc] text-white px-6 py-2 rounded hover:bg-[#ffc567] transition duration-300 text-md">
              Request Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
