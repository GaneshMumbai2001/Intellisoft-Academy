import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "../React/CourseCard";

const translations = {
  en: {
    explore: "🚀 EXPLORE ALL PRODUCTS",
    relatedCourses: "Related Courses",
    courses: [
      {
        image: "/user2.jpg",
        title: "Basics of HiStudy Theme",
        lessons: "14 Lessons",
        students: "4 Students",
        description: "HiStudy Education Theme by Rainbow-Themes is a user-friendly WordPress...",
        author: "Rainbow Themes",
        category: "Core Functions",
      },
      {
        image: "/Blogpost3.jpg",
        title: "App Development",
        lessons: "7 Lessons",
        students: "18 Students",
        description: "App Development by building 100 projects in 100 days. Learn...",
        author: "Rainbow Themes",
        category: "API",
      },
      {
        image: "/courses5.jpg",
        title: "English Popular Course",
        lessons: "7 Lessons",
        students: "0 Students",
        description: "Histudy is an elegant theme.",
        author: "Rainbow Themes",
        category: "API",
      },
    ],
  },
  hi: { // Hindi
    explore: "🚀 सभी उत्पादों का अन्वेषण करें",
    relatedCourses: "संबंधित पाठ्यक्रम",
    courses: [
      {
        title: "HiStudy थीम के मूल सिद्धांत",
        lessons: "14 पाठ",
        students: "4 छात्र",
        description: "HiStudy शिक्षा थीम एक उपयोगकर्ता-अनुकूल वर्डप्रेस थीम है...",
        category: "मुख्य कार्य",
      },
      {
        title: "ऐप डेवलपमेंट",
        lessons: "7 पाठ",
        students: "18 छात्र",
        description: "100 दिनों में 100 प्रोजेक्ट बनाकर ऐप डेवलपमेंट सीखें...",
        category: "एपीआई",
      },
      {
        title: "अंग्रेज़ी लोकप्रिय पाठ्यक्रम",
        lessons: "7 पाठ",
        students: "0 छात्र",
        description: "Histudy एक सुंदर थीम है।",
        category: "एपीआई",
      },
    ],
  },
  te: { // Telugu
    explore: "🚀 అన్ని ఉత్పత్తులను అన్వేషించండి",
    relatedCourses: "సంబంధిత కోర్సులు",
    courses: [
      {
        title: "HiStudy థీమ్ ప్రాథమికాలు",
        lessons: "14 పాఠాలు",
        students: "4 విద్యార్థులు",
        description: "HiStudy ఎడ్యుకేషన్ థీమ్ వినియోగదారునకు అనుకూలమైన WordPress...",
        category: "కోర్ ఫంక్షన్స్",
      },
      {
        title: "యాప్ డెవలప్‌మెంట్",
        lessons: "7 పాఠాలు",
        students: "18 విద్యార్థులు",
        description: "100 రోజుల్లో 100 ప్రాజెక్ట్స్‌ను రూపొందించి యాప్ డెవలప్‌మెంట్ నేర్చుకోండి...",
        category: "API",
      },
      {
        title: "ఇంగ్లీష్ ప్రాచుర్యం పొందిన కోర్సు",
        lessons: "7 పాఠాలు",
        students: "0 విద్యార్థులు",
        description: "Histudy అందమైన థీమ్.",
        category: "API",
      },
    ],
  },
};

function RelatedCourses() {
  const [language, setLanguage] = useState("en");
  const { explore, relatedCourses, courses } = translations[language];

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Language Selector */}
      <div className="mb-4 text-right">
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="border p-2 rounded"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      {/* Section Title */}
      <motion.div 
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.span
          className="text-blue-600 text-sm font-medium uppercase mb-2 block tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {explore}
        </motion.span>
        <motion.h2
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {relatedCourses}
        </motion.h2>
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
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default RelatedCourses;