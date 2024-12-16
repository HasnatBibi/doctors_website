import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative bg-[#002147] min-h-screen w-full overflow-hidden">
      {/* Background image covering the lower-right corner */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-right opacity-30"
        style={{ backgroundImage: "url('../src/assets/banner-bg.svg')" }}
      ></div>

      {/* Content Section */}
      <div className="w-full px-4 lg:px-36 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content Column */}
          <div className="text-white space-y-8 items-start">
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight">
              Secure and Compliant Medical Billing Services
            </h1>
            <p className="text-white text-xl">
              Why let medical billing stress you out and take time away from patient care? Let us alleviate your burden. As a leading medical billing outsourcing company, we offer cost-effective solutions to streamline your administrative tasks. Whether you need focused support in certain areas or comprehensive billing services, we're here to simplify your workload.
            </p>
            <button className="px-8 py-4 bg-[#1dbfcc] text-white rounded-md hover:bg-[#ffc567] hover:text-black transition-colors duration-300">
              Free Consultation
            </button>
          </div>

          {/* Image Column */}
          <div className="relative flex justify-center items-center">
            <picture>
              <source srcSet="../src/assets/banner-image.webp" type="image/webp" />
              <img
                src="../src/assets/banner-image.jpg"
                alt="Medical consultation"
                className="object-contain max-w-full max-h-[500px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
