import React, { useState } from "react";
import { motion } from "framer-motion";

const translations = {
  en: {
    free: "Free",
    lessons: "Lessons",
    students: "Students",
    by: "By",
    in: "in",
    learnMore: "Learn More",
  },
  te: {
    free: "ఉచితం",
    lessons: "పాఠాలు",
    students: "విద్యార్థులు",
    by: "రచయిత",
    in: "లో",
    learnMore: "ఇంకా తెలుసుకోండి",
  },
  hi: {
    free: "नि: शुल्क",
    lessons: "पाठ",
    students: "छात्र",
    by: "द्वारा",
    in: "में",
    learnMore: "और जानें",
  },
};

function CourseCard({ image, title, lessons, students, description, author, category, reviews = 0, isFree = true }) {
  const [language, setLanguage] = useState("en");

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Language Selector */}
      <div className="absolute top-2 right-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-200 text-sm rounded-md p-1"
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

      {/* Course Image Section */}
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span 
          className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {isFree ? translations[language].free : "$29.00"}
        </motion.span>
      </div>

      {/* Course Details */}
      <div className="p-5">
        <motion.h3 
          className="font-semibold text-lg mb-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {title}
        </motion.h3>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.3 }}>
            📚 {lessons} {translations[language].lessons}
          </motion.span>
          <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.3 }}>
            👨‍🎓 {students} {translations[language].students}
          </motion.span>
        </div>

        <motion.p className="text-gray-600 text-sm mb-4 line-clamp-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.3 }}>
          {description}
        </motion.p>

        {/* Author & Category */}
        <div className="flex items-center space-x-2">
          <motion.img src="/logo.jpg" alt={author} className="w-8 h-8 rounded-full border" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.3 }} />
          <div className="text-sm">
            <motion.span className="text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.3 }}>
              {translations[language].by}
            </motion.span>
            <motion.span className="font-medium ml-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.3 }}>
              {author}
            </motion.span>
            <motion.span className="text-gray-600 ml-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.3 }}>
              {translations[language].in}
            </motion.span>
            <motion.span className="text-blue-600 ml-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.3 }}>
              {category}
            </motion.span>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div className="flex items-center justify-between mt-4 pt-4 border-t" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.3 }}>
          <span className="font-bold text-gray-900">{isFree ? translations[language].free : "$29.00"}</span>
          <motion.button className="text-blue-600 text-sm hover:underline" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            {translations[language].learnMore} →
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CourseCard;
