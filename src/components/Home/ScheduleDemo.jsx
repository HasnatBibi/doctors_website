import React from 'react';

const features = [
  {
    title: "Stop Financial Leaks",
    description: "By leveraging sophisticated analytics and robust process controls, we identify and address revenue leakage in healthcare billing services."
  },
  {
    title: "Billing Process Transparency",
    description: "We provide clear visibility into every stage of the billing process with our electronic medical billing services, ensuring that providers experience total transparency."
  },
  {
    title: "Better Clean Claims Percentage",
    description: "Our automated claim scrubbing tools ensure a higher clean claims percentage, reducing rejections and speeding up reimbursements."
  },
  {
    title: "Efficient Denial Management System",
    description: "We optimize denial management through targeted strategies that minimize rejections and boost revenue in healthcare billing services."
  },
  {
    title: "Adherence to Compliance",
    description: "We ensure strict adherence to current coding standards and regulatory compliance, helping your practice avoid penalties and audits."
  },
  {
    title: "Faster Payments",
    description: "We optimize electronic claim submissions and follow-up protocols, which results in quicker payments and improved cash flow for your practice."
  }
];

const ScheduleDemo = () => {
  return (
    <section className="bg-[#26c6da] min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-36 py-12 md:py-16 lg:py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 z-10">
            {/* Titles and Descriptions */}
            <div className="space-y-4">
              <h1 className="text-lg sm:text-2xl md:text-[32px] font-bold leading-tight">
                Transform Your Revenue Cycle
              </h1>
              
              {/* Horizontal Line */}
              <hr className="border-t-2 border-white my-4 md:my-6" />
              
              <h2 className="text-sm sm:text-lg md:text-xl">
                Drive Results With Advanced Medical Billing Solutions
              </h2>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="space-y-2 hover:text-black transition-colors duration-300"
                >
                  <div className="group">
                    {/* Feature Title */}
                    <h3 className="text-lg font-semibold text-[#ffc567] group-hover:text-black">
                      {feature.title}
                    </h3>

                    {/* Feature Description */}
                    <p className="text-[#030000] text-sm leading-relaxed group-hover:text-black">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Demo Button */}
            <button 
              className="bg-[#0a2558] text-white px-6 py-2 sm:px-10 sm:py-3 transition-all duration-300 font-medium 
                hover:bg-[#ffc567] hover:scale-105 hover:text-[#000]"
            >
              Schedule Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="relative w-full max-w-[300px] md:max-w-full h-auto">
              <picture>
                <source srcSet="../src/assets/home-chooseus.webp" type="image/webp" />
                <img
                  src="../src/assets/home-chooseus.jpg"
                  alt="Medical consultation"
                  className="w-full h-auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;
