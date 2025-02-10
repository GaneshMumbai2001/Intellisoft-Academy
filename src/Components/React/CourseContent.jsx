import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Translations for different Indian languages
const translations = {
  en: {
    courseTitle: "🚀 Course Content",
    sections: [
      {
        title: "Introduction",
        level: "Basic",
        items: [
          { name: "Let's learn React from scratch with projects", duration: "00:00" },
          { name: "How to learn React | A React Roadmap", duration: "15:17" }
        ]
      },
      { title: "Understand React", level: "Basic", items: [] },
      { title: "Hooks And JSX", level: "Basic", items: [] },
      { title: "React Props", level: "Basic", items: [] },
      { title: "React Context API", level: "Advanced", items: [] }
    ]
  },
  te: {
    courseTitle: "🚀 కోర్సు కంటెంట్",
    sections: [
      {
        title: "పరిచయం",
        level: "ప్రాథమిక",
        items: [
          { name: "ప్రాజెక్టులతో React నేర్చుకోండి", duration: "00:00" },
          { name: "React నేర్చుకోవడం ఎలా | React రోడ్‌మ్యాప్", duration: "15:17" }
        ]
      },
      { title: "React ను అర్థం చేసుకోవడం", level: "ప్రాథమిక", items: [] },
      { title: "Hooks మరియు JSX", level: "ప్రాథమిక", items: [] },
      { title: "React Props", level: "ప్రాథమిక", items: [] },
      { title: "React Context API", level: "అధునాతన", items: [] }
    ]
  }
};

function CourseContent() {
  const [language, setLanguage] = useState("en");
  const content = translations[language];

  return (
    <motion.div
      className="mb-8 p-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-xl shadow-lg text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="mb-4 flex justify-end">
        <select
          className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm shadow-md"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      <motion.h2
        className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500"
      >
        {content.courseTitle}
      </motion.h2>

      <motion.div className="space-y-6">
        {content.sections.map((section, index) => (
          <motion.div key={index} className="border border-white/20 rounded-lg bg-white/10 p-4">
            <h3 className="font-medium text-lg text-white">{section.title}</h3>
            <span className="text-sm bg-gray-900/60 px-2 py-1 rounded-lg">{section.level}</span>
            {section.items.length > 0 && (
              <div className="p-4 space-y-3">
                {section.items.map((item, idx) => (
                  <motion.div key={idx} className="flex justify-between text-sm p-3 bg-white/20 rounded-lg">
                    <span>{item.name}</span>
                    <span className="text-gray-300">{item.duration}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default CourseContent;
