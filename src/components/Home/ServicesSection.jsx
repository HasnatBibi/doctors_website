import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: "../src/assets/rcm-icon.svg",  
    title: "Revenue Cycle Management",
    description: "Integrate our scalable revenue cycle management solutions to optimize your cash flow and shorten the payment"
  },
  {
    icon: "../src/assets/credentialing-icon.svg", 
    title: "Medical Credentialing",
    description: "Successful medical credentialing is one of the significant reasons BilNow stands out from its competitors."
  },
  {
    icon: "../src/assets/denial-management-icon.svg", 
    title: "Medical Coding",
    description: "Are you trying to achieve no revenue leakage, compliance issues, and timely reimbursements?"
  },
  {
    icon: "../src/assets/denial-management-icon.svg", 
    title: "Denial Management",
    description: "Are partial or underpayments causing financial burdens on your healthcare practice? Don't lose hope."
  },
  {
    icon: "../src/assets/medical-audit-icon.svg", 
    title: "Medical Billing Audit",
    description: "Are you facing financial challenges despite sending claims to payers? If so, you're not alone."
  },
  {
    icon: "../src/assets/medical-billing-icon.svg", 
    title: "Medical Billing Services",
    description: "Are you behind your revenue targets? Fret Not! You're in the right place. Our medical billing services ensure the highest"
  }
];

const ServicesSection = () => {
  return (
    <div className="bg-[#edf3f6] py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-[32px]  text-center mb-12 text-[#002345]">
          Achieve Optimal Reimbursements for Your Claims
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              whileHover="hover"
            >
              {/* Blue overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-[#1dbfcc]"
                initial={{ x: '-100%' }}
                variants={{
                  hover: {
                    x: 0,
                    transition: { duration: 0.3, ease: 'easeInOut' }
                  }
                }}
              />
              
              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                    {/* Use img to display the SVG file */}
                    <img src={service.icon} alt={service.title} className="w-full h-full" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-[23px] text-[#002147] mb-2 mt-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#002147] mb-4 flex-grow text-[16px]">
                  {service.description}
                </p>
                
                <motion.div
  className="self-end flex items-center justify-center w-10 h-10 bg-[#1dbfcc] rounded-full group-hover:bg-[#002147] transition-colors"
  variants={{
    hover: {
      backgroundColor: "#002147",
      transition: { duration: 0.2 }
    }
  }}
>
  <ArrowRight className="w-6 h-6 text-white" />
</motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{
              scale: 1.05,                // Zoom-in effect on hover (scale up)
              backgroundColor: "#ffc567", // Change color to yellow on hover
              color: "#000",              // Change text color to black
            }}
            transition={{
              duration: 0.3,             // Duration for the hover effect
            }}
            className="bg-[#1dbfcc] text-white px-8 py-3 font-medium shadow-md hover:shadow-lg"
          >
            View All Services
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
