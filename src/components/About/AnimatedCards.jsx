import { motion } from "framer-motion";

export default function AnimatedCards() {
  const cards = [
    {
      title: "Integrity",
      description: "We're committed to transparency and honesty in every step of the medical billing process."
    },
    {
      title: "Confidentiality",
      description: "We prioritize protecting patient information and ensure full compliance with HIPAA regulations."
    },
    {
      title: "Innovation",
      description: "We're constantly exploring advanced solutions to enhance your medical billing process and stay ahead of the competition."
    },
    {
      title: "Compliance",
      description: "We strictly follow industry regulations and standards, protecting your practice from financial and compliance issues."
    }
  ];

  return (
    <div className="min-h-[300px] bg-[#002147] py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-lg p-6 overflow-hidden border-t-4 border-[#1dbfcc]"
            whileHover="hover"
          >
            {/* Animated overlay */}
            <motion.div
              className="absolute inset-0 bg-[#1dbfcc]"
              initial={{ y: "-100%" }}
              variants={{
                hover: {
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }
              }}
              style={{ originY: 0 }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-[24px] font-semibold text-[#1dbfcc] group-hover:text-white mb-4">
                {card.title}
              </h3>
              <p className="text-[#121212] text-[15px] group-hover:text-white">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
