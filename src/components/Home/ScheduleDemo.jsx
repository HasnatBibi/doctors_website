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
      <div className="container mx-auto px-36 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-sm md:text-4xl font-bold">
                Transform Your Revenue Cycle
              </h1>
              
              {/* White Horizontal Line */}
              <hr className="border-t-2 border-white my-4" />
              
              <h2 className="text-xl md:text-lg">
                Drive Results With Advanced Medical Billing Solutions
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="space-y-2 hover:text-black transition-colors duration-300"
                >
                  {/* Parent container for title and description */}
                  <div className="group">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#ffc567] group-hover:text-black">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#030000] text-sm leading-relaxed group-hover:text-black">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            

            <button 
              className="bg-[#0a2558] text-white px-10 py-3 transition-all duration-300 font-medium 
                hover:bg-[#ffc567] hover:scale-105 hover:text-[#000]"
            >
              Schedule Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="relative md:block flex justify-center items-center">
            <div className="relative w-full h-full">
              <picture>
                <source srcSet="../src/assets/home-chooseus.webp" type="image/webp" />
                <img
                  src="../src/assets/home-chooseus.jpg"
                  alt="Medical consultation"
                  className="w-full h-full object-cover"
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
