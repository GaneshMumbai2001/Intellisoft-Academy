import React, { useState } from "react";
import { motion } from "framer-motion";

// Translations for different Indian languages
const translations = {
  en: {
    home: "Home",
    courses: "Courses",
    react: "French Courses",
    courseDescription: "Embark on a comprehensive journey with our React Front To Back course.",
    instructor: "By Rainbow Themes in IT",
  },
  te: {
    home: "హోమ్",
    courses: "కోర్సులు",
    react: "రియాక్ట్",
    courseDescription: "మా రియాక్ట్ ఫ్రంట్ టు బ్యాక్ కోర్సుతో సమగ్ర ప్రయాణాన్ని ప్రారంభించండి.",
    instructor: "ఇటీలో రెయిన్‌బో థీమ్స్ ద్వారా",
  },
  hi: {
    home: "होम",
    courses: "पाठ्यक्रम",
    react: "रिएक्ट",
    courseDescription: "हमारे रिएक्ट फ्रंट टू बैक कोर्स के साथ एक व्यापक यात्रा शुरू करें।",
    instructor: "आईटी में रेनबो थीम्स द्वारा",
  },
  ta: {
    home: "முகப்பு",
    courses: "பாடநெறிகள்",
    react: "ரியாக்ட்",
    courseDescription: "எங்கள் ரியாக்ட் ஃப்ரண்ட் டு பாக் கோர்ஸுடன் விரிவான பயணத்தைத் தொடங்குங்கள்.",
    instructor: "ஐ.டி.யில் ரெயின்போ தீம்ஸ் மூலம்",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    courses: "ಪಠ್ಯಕ್ರಮಗಳು",
    react: "ರಿಯಾಕ್ಟ್",
    courseDescription: "ನಮ್ಮ ರಿಯಾಕ್ಟ್ ಫ್ರಂಟ್ ಟು ಬ್ಯಾಕ್ ಕೋರ್ಸ್‌ನೊಂದಿಗೆ ಸಮಗ್ರ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
    instructor: "ಐಟಿಯಲ್ಲಿ ರೇನ್‌ಬೋ ಥೀಮ್ಸ್ ಮೂಲಕ",
  },
  ml: {
    home: "ഹോം",
    courses: "കോഴ്സുകൾ",
    react: "റിയാക്ട്",
    courseDescription: "ഞങ്ങളുടെ റിയാക്ട് ഫ്രണ്ട് ടു ബാക്ക് കോഴ്‌സുമായി സമഗ്രമായ യാത്ര ആരംഭിക്കുക.",
    instructor: "ഐടിയിൽ റെയിൻബോ തീമുകൾ വഴി",
  },
};

function ReactHeader() {
  const [language, setLanguage] = useState("en");

  return (
    <motion.div 
    className="rounded-lg bg-gradient-to-b from-[#D0D4F6] to-[#F5E0EC] shadow-lg backdrop-blur-lg border border-white/30"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
   >
   <motion.div 
  className="content-h  w-[85%] p-8 mx-auto"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>

      {/* Language Selector */}
      <div className="mb-4  flex justify-end">
        <select
          className="p-2 bg-white text-gray-700 text-sm shadow-md"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {Object.keys(translations).map((lang) => (
            <option key={lang} value={lang}>
              {translations[lang].home} ({lang.toUpperCase()})
            </option>
          ))}
        </select>
      </div>

      {/* Breadcrumb Navigation */}
      <motion.nav 
        className="flex  mb-4" 
        aria-label="Breadcrumb"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ol className="flex items-center  space-x-2 text-sm">
          <li>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-all">
              {translations[language].home}
            </a>
          </li>
          <li><span className="text-gray-400">/</span></li>
          <li>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-all">
              {translations[language].courses}
            </a>
          </li>
          <li><span className="text-gray-400">/</span></li>
          <li><span className="text-gray-900 font-semibold">{translations[language].react}</span></li>
        </ol>
      </motion.nav>

      {/* Course Title */}
      <motion.h1 
        className="text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
      {translations[language].react}
      </motion.h1>

      {/* Course Description */}
      <motion.p 
        className="text-gray-700 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {translations[language].courseDescription}
      </motion.p>

      {/* Instructor Section */}
      <motion.div 
        className="flex items-center mt-4 p-3 transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="w-12 h-12">
          <motion.img
            src="/public/react/react.png"
            alt="Instructor"
            className="w-full h-full rounded-full border-2 border-indigo-600 shadow-md"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <span className="ml-3 text-gray-800 font-medium">{translations[language].instructor}</span>
      </motion.div>
    </motion.div>
    </motion.div>
  );
}

export default ReactHeader;