import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TreesIcon as Lungs, Stethoscope, Droplets, BabyIcon as Kidney, ActivitySquare } from 'lucide-react';

const specialties = [
  {
    icon: Stethoscope,
    title: "Internal Medicine Billing",
    description: "Our medical billing experts handle complex disease management billing while ensuring accuracy"
  },
  {
    icon: Droplets,
    title: "Dermatology Billing",
    description: "We manage billing for extensive dermatology procedures, ensuring timely reimbursements."
  },
  {
    icon: Kidney,
    title: "Nephrology Billing",
    description: "We're well vested with managing medical billing for dialysis, renal, and other nephrology procedures"
  },
  {
    icon: ActivitySquare,
    title: "Urology Billing",
    description: "We seamlessly manage billing for cystoscopies, lithotripsy, and other urology procedures."
  },
  {
    icon: Brain,
    title: "Mental Health Billing",
    description: "We provide customized mental health billing so you don't lose your hard-earned revenue."
  },
  {
    icon: Lungs,
    title: "Pulmonology Billing",
    description: "Whether it's lungs function tests, bronchoscopy, or other procedures, we are here to help you with billing."
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="py-16 px-4 bg-[#edf3f6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0a2351] mb-4">
            Our Specialties
          </h2>
          <p className="text-gray-600 text-lg">
            Empowering Healthcare Providers in Their Financial Journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden"
              whileHover="hover"
            >
              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-[#0a2351] origin-top"
                initial={{ scaleY: 0 }}
                variants={{
                  hover: {
                    scaleY: 1,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }
                }}
                style={{ transformOrigin: "top" }}
              />

              {/* Content */}
              <div className="relative z-10 p-10">
                <motion.div
                  variants={{
                    hover: {
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }
                  }}
                  className="flex flex-col gap-4"
                >
                  <motion.div
                    variants={{
                      hover: {
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }
                    }}
                  >
                    <specialty.icon className="w-12 h-12 text-[#02bdd5]" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-[#0a2351]"
                    variants={{
                      hover: {
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }
                    }}
                  >
                    {specialty.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700"
                    variants={{
                      hover: {
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }
                    }}
                  >
                    {specialty.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0a2351]" />
            </motion.div>
          ))}
        </div>

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
    </section>
  );
}

