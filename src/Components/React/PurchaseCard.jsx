import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function PurchaseCard() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
       className={`bg-white rounded-xl shadow-2xl overflow-hidden w-80 max-h-[450px] text-sm fixed bottom-10 right-10 transform transition-all duration-300 z-[9999] ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <motion.div
        className="relative aspect-video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <img
          src="/course-thumbnail.jpg"
          alt="Course thumbnail"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-500 line-through text-sm">$120.00</span>
          <motion.span
            className="text-xl font-bold text-green-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            $70.00
          </motion.span>
        </div>
        <motion.button
          className="w-full bg-blue-600 text-white py-2 rounded-lg mb-3 text-sm shadow-md"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Add to cart
        </motion.button>
        <motion.button
          className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg mb-4 text-sm shadow-md"
          whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Buy now
        </motion.button>

        <motion.div
          className="space-y-2 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <motion.div
            className="flex justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-600">Enrolled</span>
            <span>1</span>
          </motion.div>
          <motion.div
            className="flex justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-600">Lectures</span>
            <span>12</span>
          </motion.div>
          <motion.div
            className="flex justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-600">Skill Level</span>
            <span>Intermediate</span>
          </motion.div>
          <motion.div
            className="flex justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-600">Language</span>
            <span>English</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default PurchaseCard;
