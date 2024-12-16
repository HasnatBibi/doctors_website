import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative w-full">
      {/* Top Bar */}
      <div className="top-0 left-0 w-full bg-[#002147] z-10">
  <div className="flex w-full">
    {/* Logo section (30% width) */}
    <div className="w-[30%] bg-white flex items-end justify-end p-16">
      <img
        src="../src/assets/billnow-logo.svg"
        alt="Billnow Logo"
        className="h-28 w-auto" 
      />
    </div>
    {/* Contact info section (70% width) */}
    <div className="w-[70%] bg-[#002147] flex items-center justify-center p-4">
      <div className="flex justify-center items-center space-x-10 text-[#FFB800]">
        <a href="mailto:info@bilnow.com" className="flex items-center hover:text-[#FFD700] transition-colors">
          <FaEnvelope className="mr-2 text-lg" />
          info@bilnow.com
        </a>
        <a href="tel:7187018169" className="flex items-center hover:text-[#FFD700] transition-colors">
          <FaPhone className="mr-2 text-lg" />
          718 701 8169
        </a>
        <span className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-lg" />
          407 Rockaway Ave, Brooklyn, NY 11212
        </span>
      </div>
    </div>
  </div>
</div>



      {/* Main Navigation - Floating */}
      <nav
  className={`w-full ${isScrolled ? 'fixed top-0 left-0 right-0' : 'absolute -bottom-10'} transition-all duration-300 z-50`}
>
  <div className="w-full px-4 lg:px-32">
    <div className="bg-white shadow-lg">
      <div className="flex justify-between items-center py-4 px-16">
        {/* Navigation items */}
        <div className="flex space-x-12">
          {['Home', 'About Us', 'Services', 'Specialties', 'Blogs', 'Contact Us'].map((item) => (
            <div key={item} className="relative group">
              <Link
                to={
                  item === 'Home'
                    ? '/' // Navigate to the Home page
                    : `/${item.toLowerCase().replace(/\s+/g, '-')}` // Dynamically create paths for other pages
                }
                className="text-[#002147] hover:text-[#00BFB3] transition-colors py-2 flex items-center"
              >
                {item}
                {['Services', 'Specialties'].includes(item) && (
                  <FaChevronDown className="ml-1 text-xs" />
                )}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00BFB3] transition-all duration-300 group-hover:w-full" />
              {/* Dropdown menu */}
              {['Services', 'Specialties'].includes(item) && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Submenu Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Submenu Item 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Submenu Item 3
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Request Demo button */}
        <button className="px-6 py-3 bg-[#1dbfcc] text-white rounded-0 relative overflow-hidden group">
          <span className="relative z-10">Request Demo</span>
        </button>
      </div>
    </div>
  </div>
</nav>

    </header>
  )
}

