import React from "react";
import { motion } from "framer-motion";

function InstructorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 mb-8 hover:shadow-2xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800">Instructor</h2>
      <div className="flex items-start space-x-4">
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/instructor-avatar.jpg"
            alt="Rainbow Themes Logo"
            className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md"
          />
          {/* Floating Effect */}
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
        </motion.div>

        <div className="flex-grow">
          <h3 className="font-bold text-lg mb-1 text-gray-900">Rainbow Themes</h3>
          <p className="text-sm text-gray-600 mb-2">WordPress Developer</p>

          {/* Animated Rating Section */}
          <motion.div
            className="flex items-center text-sm text-gray-600 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mr-4 font-semibold text-gray-800">4.85</span>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg
                  key={star}
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: star * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <span className="ml-4 font-medium text-gray-700">15 Ratings</span>
          </motion.div>

          {/* Instructor Bio with Fade-In Effect */}
          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm the Front-End Developer for <span className="font-semibold text-blue-600">#Rainbow IT</span> in Bangladesh, OR. I have a serious passion for **UI effects, animations**, and creating **intuitive, dynamic user experiences**.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default InstructorCard;
