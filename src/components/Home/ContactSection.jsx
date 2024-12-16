import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    practiceName: '',
    email: '',
    phone: '',
    message: '',
    privacyPolicy: false,
    smsUpdates: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background container */}
      <div className="absolute inset-0">
        {/* Top background with SVG */}
        <div className="h-[60%] bg-[#1dbfcc] relative">
          {/* Curved lines decoration */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-[url('../src/assets/contact-bgx.svg')] bg-cover bg-no-repeat bg-right opacity-100"
            style={{ backgroundPosition: 'right top', backgroundSize: 'auto 100%' }}
          ></div>
        </div>
        {/* Bottom background */}
        <div className="h-[40%] bg-[#edf3f6]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header content */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Request Your Free Billing Audit & Quote Today.
          </h1>
          <p className="text-xl mb-8">
            Top Medical Billing Company in United States Get Quick Quote!
          </p>
          <div className="flex justify-center flex-col gap-4">
            <div className="flex items-center justify-center">
              <FaEnvelope className="mr-2 text-black" />
              info@bilnow.com
            </div>
            <div className="flex items-center justify-center">
              <FaPhone className="mr-2 text-black" />
              718 701 8169
            </div>
          </div>
        </div>

        {/* Form and Image container */}
        <div className="flex justify-center gap-8 max-w-7xl mx-auto">
          {/* Form */}
          <div className="w-[40%] bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Looking for Revenue Impact?
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name Here"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-[#1dbfcc] focus:outline-none"
                required
              />
              <input
                type="text"
                name="practiceName"
                placeholder="Practice Name"
                value={formData.practiceName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-[#1dbfcc] focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-[#1dbfcc] focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-[#1dbfcc] focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-[#1dbfcc] focus:outline-none resize-none"
              ></textarea>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-md text-gray-600">
                    I acknowledge that I have read and agree to BilNow LLC{' '}
                    <a href="#" className="text-[#cc3366]">Privacy Policy</a> and{' '}
                    <a href="#" className="text-[#cc3366]">terms and conditions</a>.
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="smsUpdates"
                    checked={formData.smsUpdates}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-md text-gray-600">
                    By checking this box I agree to receive SMS updates specifically related to Medical Billing Services
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#1dbfcc] text-white py-3 px-8 rounded hover:bg-[#18b0a9] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="w-[40%]">
            <picture>
              <source srcSet="../src/assets/contact-img.webp" type="image/webp" />
              <img
                src="../src/assets/contact-image.jpg"
                alt="Medical professional typing on laptop"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
