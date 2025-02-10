import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  en: {
    play: "Play Video",
    pause: "Pause Video",
    thumbnailAlt: "Course thumbnail"
  },
  te: {
    play: "వీడియో ప్లే చేయండి",
    pause: "వీడియో విరమించండి",
    thumbnailAlt: "కోర్సు థంబ్నెయిల్"
  }
};

function CourseVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <div>
      {/* Language Selector */}
      <div className="mb-4">
        <label className="mr-2 text-gray-700">Select Language:</label>
        <select
          className="p-2 border rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
        </select>
      </div>

      <motion.div
        className="relative aspect-video mb-6 rounded-lg overflow-hidden bg-black shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Video Overlay & Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300">
          <motion.button
            className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.2, rotate: 15, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <motion.svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <title>{isPlaying ? translations[language].pause : translations[language].play}</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isPlaying
                    ? "M6 18L18 6M6 6l12 12"
                    : "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                }
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Video Thumbnail with Hover Effects */}
        <motion.img
          src="/courses5.jpg"
          alt={translations[language].thumbnailAlt}
          className="w-full h-full object-cover opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          whileHover={{ scale: 1.05, opacity: 1 }}
          transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.3 } }}
        />

        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}

export default CourseVideo;
