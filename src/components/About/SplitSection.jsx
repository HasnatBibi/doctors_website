

import { motion } from "framer-motion"

export default function SplitSection() {
  return (
    <div className="container mx-auto px-36 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left side with image */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-full h-full rounded-lg" />
            <img
              src="/src/assets/splitsection.webp"
              alt="Healthcare Professional"
              className="relative z-10 rounded-lg w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Right side with content */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Shaping the Future of Healthcare Billing Where We're Headed
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-3">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the top choice for healthcare providers by combining cutting-edge
                technology with personalized healthcare revenue cycle management services,
                helping providers to achieve financial growth and operational efficiency
                without compromising patient care.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-3">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                We don't believe in one-size-fits-all solutions. Our mission is to
                provide expert, specialty-specific support that strengthens your practice
                and optimizes your revenue cycle, ensuring financial success and
                operational ease.
              </p>
            </div>

            <div className="text-start mt-12">
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
                              Schedule A Free Demo
                            </motion.button>
                          </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

