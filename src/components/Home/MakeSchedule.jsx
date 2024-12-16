import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import the check-circle icon

const MakeSchedule = () => {
  return (
    <section className="min-h-900px flex items-center justify-center p-6 mb-20 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <picture>
            <source
              srcSet="../src/assets/make-schedule.webp"
              type="image/webp"
            />
            <img
              src="../src/assets/make-schedule.jpg"
              alt="Schedule"
              className="rounded-lg max-w-full bg-transparent border-none shadow-none" // Remove border and shadow
            />
          </picture>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* Short Heading */}
          <h4 className="font-bold text-xl text-gray-700">
            Make a Schedule
          </h4>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-navy-800 leading-tight">
            Transform the Billing Process <br /> with Hyperautomation
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#002345] group-hover:text-yellow-500 mr-3"
                size="lg"
              />
              Tailored in-house automation solutions
            </li>
            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#002345] group-hover:text-yellow-500 mr-3"
                size="lg"
              />
              Automation of Repetitive Tasks
            </li>
            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#002345] group-hover:text-yellow-500 mr-3"
                size="lg"
              />
              Reduced Manual Errors, Faster Reimbursement
            </li>
            <li className="flex items-center group">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#002345] group-hover:text-yellow-500 mr-3"
                size="lg"
              />
              Proactive Issue Resolution
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffc567", // Yellow
              color: "#000",
            }}
            transition={{ duration: 0.3 }}
            className="bg-[#1dbfcc] text-white px-8 py-3  shadow-md font-semibold hover:shadow-lg"
          >
            Schedule A Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MakeSchedule;
