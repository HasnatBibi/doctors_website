

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, DollarSign, FileCheck, ClipboardCheck } from 'lucide-react'

const cards = [
  {
    icon: FileText,
    title: "Insurance Contract Negotiation",
    description: "As a trusted medical billing agency, we handle tough negotiations with insurers to secure favorable terms for your practice."
  },
  {
    icon: DollarSign,
    title: "Reimbursement Negotiations",
    description: "We negotiate reimbursements effectively, addressing payment discrepancies and maximizing revenue for your healthcare practice."
  },
  {
    icon: FileCheck,
    title: "Appeals",
    description: "We manage denied claims appeals, improving your revenue cycle and securing rightful reimbursements."
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Review",
    description: "We conduct comprehensive compliance reviews, identifying billing inaccuracies and ensuring adherence to industry regulations."
  }
]

export default function RevenueCycle() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative min-h-screen px-36 bg-[#edf3f6] overflow-hidden">
      {/* Background Medical Cross */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 overflow-hidden">
        <div className="w-[141%] h-[141%] origin-center-left">
          <img 
            src="/src/assets/chooseus-bg.svg" 
            alt="Background pattern" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-semibold text-center text-navy-900 mb-20 mt-12">
          Own Every Aspect of Your Revenue Cycle
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg p-6 ${
                activeIndex === index ? 'bg-[#002147] text-white' : 'bg-white'
              } shadow-lg transition-all duration-500 group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                scale: activeIndex === index ? 1.05 : 1
              }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Diagonal hover effect background */}
              {activeIndex !== index && (
                <div className="absolute inset-0 bg-[#002147] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              )}

              <div className={`w-16 h-16 mb-4 rounded-full ${
                activeIndex === index ? 'bg-white text-[#1dbfcc]' : 'bg-cyan-50 text-cyan-500'
              } flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:text-[#1dbfcc]`}>
                {card.icon && <card.icon size={32} />}
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${
                activeIndex === index ? 'text-white' : 'text-gray-900 group-hover:text-white'
              } transition-colors duration-300`}>
                {card.title}
              </h3>
              
              <p className={`${
                activeIndex === index ? 'text-gray-100' : 'text-gray-600 group-hover:text-white'
              } transition-colors duration-300`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-[#1dbfcc] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

