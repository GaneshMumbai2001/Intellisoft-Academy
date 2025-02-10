import React, { useState } from 'react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    aboutCourse: '📘 About Course',
    description: '🚀 Embark on a comprehensive React journey with our React Front To Back course...',
    learnTitle: '✅ You will learn:',
    learnList: [
      'Develop a strong understanding of JavaScript basics, including variables, data types, and control flow, building a solid foundation for advanced concepts.',
      'Master React fundamentals including components, props, state, and lifecycle methods.',
      'Learn modern React features including Hooks, Context API, and Redux.',
      'Build real-world projects using React and related technologies.',
      'Understand best practices and common patterns in React development.'
    ]
  },
  te: {
    aboutCourse: '📘 కోర్సు గురించి',
    description: '🚀 మా React Front To Back కోర్సుతో సమగ్ర React ప్రయాణాన్ని ప్రారంభించండి...',
    learnTitle: '✅ మీరు నేర్చుకునేది:',
    learnList: [
      'జావాస్క్రిప్ట్ ప్రాథమికాలను బలంగా అర్థం చేసుకోండి, ఇందులో వేరియబుల్స్, డేటా రకాలూ, కంట్రోల్ ఫ్లో ఉంటాయి.',
      'కాంపోనెంట్లు, ప్రాప్స్, స్టేట్ మరియు లైఫ్‌సైకిల్ పద్ధతులు వంటి React ప్రాథమికాలను మాస్టర్ చేయండి.',
      'Hooks, Context API, మరియు Redux వంటి ఆధునిక React లక్షణాలను నేర్చుకోండి.',
      'React మరియు సంబంధిత టెక్నాలజీలను ఉపయోగించి నిజజీవిత ప్రాజెక్టులను నిర్మించండి.',
      'React డెవలప్‌మెంట్‌లో ఉత్తమ ఆచరణలు మరియు సాధారణ నమూనాలను అర్థం చేసుకోండి.'
    ]
  }
};

function CourseInfo() {
  const [language, setLanguage] = useState('en');
  const content = translations[language];

  return (
    <motion.div
      className="mb-8 bg-gradient-to-br from-[#D4E7FA] to-[#F5E0EC] p-8 rounded-lg shadow-xl backdrop-blur-md border border-white/40"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Language Selector */}
      <select className="mb-4 p-2 border rounded" onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="te">తెలుగు</option>
      </select>
      
      {/* About Course Title */}
      <motion.h2
        className="text-2xl font-bold mb-4 text-indigo-800 drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {content.aboutCourse}
      </motion.h2>

      {/* Course Description */}
      <motion.div className="prose max-w-none">
        <motion.p
          className="text-gray-800 mb-4 p-4 bg-white/70 rounded-lg shadow-sm border border-white/50 backdrop-blur-lg"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
          transition={{ duration: 0.3 }}
        >
          {content.description}
        </motion.p>
      </motion.div>

      {/* Learning Objectives */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h3
          className="font-bold mb-4 text-gray-900 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {content.learnTitle}
        </motion.h3>

        <motion.ul
          className="list-disc pl-5 space-y-3 text-gray-800"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {content.learnList.map((item, index) => (
            <motion.li
              key={index}
              className="p-3 bg-white/80 rounded-md shadow-md border border-white/60 backdrop-blur-lg"
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default CourseInfo;
