import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  en: {
    courseInfo: "📘 Course Info",
    lessons: "📚 Lessons",
    reviews: "⭐ Reviews",
    courseInfoContent: "📘 Course information will go here...",
    lessonsContent: "📚 Lessons content will go here...",
    reviewsContent: "⭐ Reviews will go here..."
  },
  te: {
    courseInfo: "📘 కోర్సు సమాచారం",
    lessons: "📚 పాఠాలు",
    reviews: "⭐ సమీక్షలు",
    courseInfoContent: "📘 కోర్సు సమాచారం ఇక్కడ ఉంటుంది...",
    lessonsContent: "📚 పాఠాల విషయం ఇక్కడ ఉంటుంది...",
    reviewsContent: "⭐ సమీక్షలు ఇక్కడ ఉంటాయి..."
  }
};

function CourseTabs() {
  const [activeTab, setActiveTab] = useState("info");
  const [language, setLanguage] = useState("en");
  
  const t = translations[language];

  const tabs = [
    { id: "info", label: t.courseInfo },
    { id: "lessons", label: t.lessons },
    { id: "reviews", label: t.reviews }
  ];

  return (
    <div className="relative border-b mb-6 bg-white p-4 rounded-lg shadow-lg">
      {/* Language Selector */}
      <div className="mb-4">
        <label className="mr-2 font-medium text-gray-700">🌍 Select Language:</label>
        <select
          className="border p-2 rounded-md"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      {/* Tab Navigation */}
      <nav className="flex space-x-4 relative">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-3 px-4 font-medium text-sm transition-colors rounded-md ${
              activeTab === tab.id
                ? "text-white bg-blue-600 shadow-lg"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-blue-600 rounded-md -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Tab Content with Smooth Transition */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-gray-800"
          >
            {activeTab === "info" && <p>{t.courseInfoContent}</p>}
            {activeTab === "lessons" && <p>{t.lessonsContent}</p>}
            {activeTab === "reviews" && <p>{t.reviewsContent}</p>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CourseTabs;
