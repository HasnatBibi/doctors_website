import React from 'react';

const certifications = [
  { src: "../src/assets/partner-cmrs.svg" },
  { src: "../src/assets/partner-cpb.svg" },
  { src: "../src/assets/partner-cca.svg" },
  { src: "../src/assets/partner-cmaa.svg" },
  { src: "../src/assets/partner-hipaa.svg" },
  { src: "../src/assets/partner-cpc.svg" },
];

const AboutSection = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Images Section */}
        <div className="flex items-center justify-center">
          <picture>
            <source srcSet="../src/assets/home-about-banner.webp" type="image/webp" />
            <img
              src="../src/assets/home-about-banner.jpg"
              alt="Medical consultation"
              className="rounded-lg object-cover w-full h-auto max-h-[400px] lg:max-h-[500px]"
            />
          </picture>
        </div>

        {/* Content Section */}
        <div className="py-6 lg:py-8 space-y-6 lg:space-y-8 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0a2558]">
            How We're Different
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Our method is unique. We build a specialized team around your distinct billing requirements,
            taking into account factors such as your specialty, patient volume, and denial rates. With
            a structured approach to revenue cycle management, each team member focuses on their area
            of expertise, ensuring optimal efficiency. As a leading medical billing company in the USA,
            we offer healthcare providers the confidence and peace of mind they need.
          </p>

          <div className="border-t border-orange-400 pt-4 lg:pt-6">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0a2558]">
                Certified Medical Billing
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={cert.src}
                      alt=""
                      className="w-16 h-16 sm:w-20 sm:h-20 transition-transform hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
