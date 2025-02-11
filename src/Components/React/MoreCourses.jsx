
import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "../React/CourseCard";

const translations = {
  en: {
    topCourse: "🚀 TOP COURSE",
    moreCourses: "More Courses by",
    viewAll: "View All Courses →",
  },
  te: {
    topCourse: "🚀 టాప్ కోర్సు",
    moreCourses: "ఇంకా ఎక్కువ కోర్సులు",
    viewAll: "అన్ని కోర్సులను చూడండి →",
  },
  hi: {
    topCourse: "🚀 शीर्ष पाठ्यक्रम",
    moreCourses: "और पाठ्यक्रम",
    viewAll: "सभी पाठ्यक्रम देखें →",
  },
};

function MoreCourses() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const courses = [
    {
      image: "/meeting1.jpg",
      title: "Basics of HiStudy Theme",
      lessons: 14,
      students: 4,
      description: "HiStudy Education Theme by Rainbow-Themes is a user-friendly WordPress tool...",
      author: "Rainbow Themes",
      category: "Core Functions",
      reviews: 0,
    },
    {
      image: "/Blogpost1.jpg",
      title: "App Development",
      lessons: 7,
      students: 18,
      description: "App Development by building 100 projects in 100 days. Learn...",
      author: "Rainbow Themes",
      category: "API",
      reviews: 0,
    },
    {
      image: "/Hero1.jpg",
      title: "English Popular Course",
      lessons: 7,
      students: 0,
      description: "Histudy is elegant theme.",
      author: "Rainbow Themes",
      category: "API",
      reviews: 0,
    },
  ];

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <select
          className="border p-2 rounded-lg bg-white shadow-sm"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

      {/* Header Section */}
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div>
          <motion.span
            className="text-pink-500 text-sm font-medium uppercase mb-2 block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {t.topCourse}
          </motion.span>
          <motion.h2
            className="text-2xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {t.moreCourses} <span className="text-blue-600">Rainbow Themes</span>
          </motion.h2>
        </div>
        <motion.button
          className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-blue-100 text-blue-600 font-semibold transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {t.viewAll}
        </motion.button>
      </motion.div>

      {/* Course Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            whileHover={{ scale: 1.03 }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MoreCourses;
