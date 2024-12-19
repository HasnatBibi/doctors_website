import { motion } from 'framer-motion'

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Start from left (-50)
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[500px]"
          >
            <img
              src="/src/assets/WhoWeAre.webp"
              alt="Healthcare professionals shaking hands"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Start from right (50)
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-[38px] font-bold mb-6 text-[#002345]">
              Who We Are
            </h2>
            <p className="text-[#000000] leading-relaxed mb-8 text-sm sm:text-base lg:text-[16px]">
              BilNow is one of the leading medical billing companies, offering smart RCM solutions 
              backed by advanced technology to modernize outdated and manual administrative tasks 
              for healthcare organizations of all sizes. With over a decade of industry experience, 
              we understand the challenges and complications of the medical billing process.
            </p>
            <p className="text-[#000000] leading-relaxed mb-8 text-sm sm:text-base lg:text-[16px]">
              Experts at BilNow integrate comprehensive revenue cycle management solutions to streamline 
              operations, simplify decision-making, and ensure compliance with industry standards-helping 
              you save resources by reducing manual tasks and time spent on billing while achieving 
              smooth revenue recovery.
            </p>
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
