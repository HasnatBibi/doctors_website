import { MdMail, MdPhone, MdPerson, MdChevronRight } from 'react-icons/md';
import Newbilnow from '../../assets/new-logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-[#002345] text-white py-12">
      <div className="container mx-auto px-36">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src={Newbilnow}
                alt="BILNOW Logo"
                width={150}
                height={50}
                className="mb-6"
              />
              <p className="text-gray-300">
                BILNOW is your ultimate partner for seamless medical billing solutions
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">RCM</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Medical Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Credentialing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Denial Management</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Medical Coding</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Medical Audit</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">View All Services</a></li>
            </ul>
          </div>

          {/* Specialties Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Internal Medicine Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Dermatology Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Nephrology Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Urology Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Mental Health Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Pulmonology Billing</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">View All Specialties</a></li>
            </ul>
          </div>

          {/* Helpful Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Helpful Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#22d3ee] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="p-2 rounded bg-white text-gray-800 w-full"
                />
                <button className="bg-[#22d3ee] text-white px-4 py-2 rounded hover:bg-[#0891b2] transition-colors min-w-[100px]">
                  Sign Up
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <MdMail className="w-5 h-5 text-[#22d3ee]" />
                <a href="mailto:info@bilnow.com" className="hover:text-[#22d3ee] transition-colors">
                  info@bilnow.com
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <MdPhone className="w-5 h-5 text-[#22d3ee]" />
                <a href="tel:7187018169" className="hover:text-[#22d3ee] transition-colors">
                  718 701 8169
                </a>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MdPerson className="w-5 h-5 text-[#22d3ee]" />
                  <span>General Manager:</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdChevronRight className="w-5 h-5 text-[#22d3ee]" />
                  <span>Tanzeel Aqdas</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MdPerson className="w-5 h-5 text-[#22d3ee]" />
                  <span>Finance Manager:</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MdChevronRight className="w-5 h-5 text-[#22d3ee]" />
                  <span>Muhammad Khalid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}