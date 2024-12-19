import { motion } from 'framer-motion';

const HeroAbout = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/about.webp')", // Replace with your .webp file path
        }}
      >
        <div className="absolute inset-0 bg-black/10" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 md:mb-10">
            Your Trusted Medical Billing Partner
          </h1>
          <p className="text-base sm:text-lg md:text-[16px] mb-8 sm:mb-12 text-white">
            With years of experience, we simplify complex billing processes for healthcare professionals 
            of all specializations, assuring accuracy and increasing compensation. We're here to help 
            you streamline your revenue cycle by providing customized & compliant solutions that meet 
            industry standards.
          </p>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
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
  );
};

export default HeroAbout;
