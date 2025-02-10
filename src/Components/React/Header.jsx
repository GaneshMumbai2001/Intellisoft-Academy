import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../React/Navigation";

const translations = {
  en: {
    logoText: "Study",
    purchase: "Purchase Now",
  },
  hi: {
    logoText: "अध्ययन",
    purchase: "अभी खरीदें",
  },
  te: {
    logoText: "అధ్యయనం",
    purchase: "ఇప్పుడే కొనండి",
  },
};

function Header() {
  const [language, setLanguage] = useState("en");
  
  return (
    <motion.header
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/courses5.jpg"
            alt="Study"
            className="h-8 sm:h-10"
            whileHover={{ rotate: 5 }}
          />
          <motion.span
            className="ml-2 text-xl sm:text-2xl font-bold text-blue-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {translations[language].logoText}
          </motion.span>
        </motion.div>

        {/* Navigation with Hover Effects */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <Navigation />
        </motion.div>

        {/* Language Selector */}
        <select
          className="border px-2 py-1 rounded-lg text-gray-700"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="te">తెలుగు</option>
        </select>

        {/* Animated Purchase Button */}
        <motion.button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden sm:inline-block shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {translations[language].purchase}
        </motion.button>
      </div>
    </motion.header>
  );
}

export default Header;
