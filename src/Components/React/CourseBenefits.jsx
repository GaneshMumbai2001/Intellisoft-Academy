import React, { useState } from "react";
import { motion } from "framer-motion";

// Translations for different Indian languages
const translations = {
  en: {
    benefitsHeading: "🚀 Benefits of the Course",
    benefits: [
      {
        title: "Grasp the core concepts and principles of the React JavaScript library",
        description: "Master the fundamentals and build a solid foundation."
      },
      {
        title: "Understand the importance of component-based architecture",
        description: "Learn to build scalable applications with proper structure."
      },
      {
        title: "Master the handling of state and props",
        description: "Fundamental to React component development."
      },
      {
        title: "Learn how to connect React applications to external APIs",
        description: "Handle asynchronous data and manage application state."
      }
    ]
  },
  te: {
    benefitsHeading: "🚀 కోర్సు ప్రయోజనాలు",
    benefits: [
      {
        title: "React JavaScript లైబ్రరీ యొక్క ప్రధాన భావనలు మరియు సూత్రాలను అర్థం చేసుకోండి",
        description: "ఆధునిక ప్రమాణాలను నేర్చుకుని గట్టి పునాది నిర్మించండి."
      },
      {
        title: "కంపోనెంట్-ఆధారిత నిర్మాణం ప్రాముఖ్యతను అర్థం చేసుకోండి",
        description: "సరైన నిర్మాణంతో విస్తరించదగిన అనువర్తనాలను రూపొందించండి."
      },
      {
        title: "State మరియు Props నిర్వహణలో నైపుణ్యం పొందండి",
        description: "React కంపోనెంట్ అభివృద్ధికి ఇది ఎంతో అవసరం."
      },
      {
        title: "React అనువర్తనాలను బయటి APIలకు ఎలా కనెక్ట్ చేయాలో తెలుసుకోండి",
        description: "అసంకేతిక డేటాను నిర్వహించండి మరియు అనువర్తన స్థితిని నియంత్రించండి."
      }
    ]
  },
  hi: {
    benefitsHeading: "🚀 कोर्स के लाभ",
    benefits: [
      {
        title: "React JavaScript लाइब्रेरी की मुख्य अवधारणाओं और सिद्धांतों को समझें",
        description: "मौलिकताओं में महारत हासिल करें और एक ठोस नींव बनाएं।"
      },
      {
        title: "कंपोनेंट-आधारित आर्किटेक्चर के महत्व को समझें",
        description: "सही संरचना के साथ स्केलेबल एप्लिकेशन बनाना सीखें।"
      },
      {
        title: "State और Props को संभालने में महारत हासिल करें",
        description: "React कंपोनेंट विकास के लिए यह आवश्यक है।"
      },
      {
        title: "React एप्लिकेशन को बाहरी API से कनेक्ट करने का तरीका सीखें",
        description: "असिंक्रोनस डेटा को प्रबंधित करें और एप्लिकेशन की स्थिति नियंत्रित करें।"
      }
    ]
  },
  ta: {
    benefitsHeading: "🚀 பாடநெறியின் நன்மைகள்",
    benefits: [
      {
        title: "React JavaScript நூலகத்தின் முக்கியமான கருத்துகள் மற்றும் கொள்கைகளைப் புரிந்துகொள்ளுங்கள்",
        description: "அடிப்படை உள்ளடக்கங்களில் தேர்ச்சி பெறுங்கள் மற்றும் உறுதிப்படுத்தப்பட்ட அடித்தளத்தை உருவாக்குங்கள்."
      },
      {
        title: "கூறுசார்ந்த கட்டமைப்பின் முக்கியத்துவத்தைப் புரிந்துகொள்ளுங்கள்",
        description: "தகுந்த கட்டமைப்புடன் அளவளாவக்கூடிய பயன்பாடுகளை உருவாக்க கற்றுக்கொள்ளுங்கள்."
      },
      {
        title: "State மற்றும் Props கையாளுதலில் தேர்ச்சி பெறுங்கள்",
        description: "React கூறு உருவாக்கத்திற்கு இது முக்கியமானது."
      },
      {
        title: "React பயன்பாடுகளை வெளிப்புற API களுடன் இணைக்க கற்றுக்கொள்ளுங்கள்",
        description: "அசிங்கரான தரவை மேலாண்மை செய்யுங்கள் மற்றும் பயன்பாட்டு நிலையை நிர்வகிக்கவும்."
      }
    ]
  },
  kn: {
    benefitsHeading: "🚀 ಕೋರ್ಸ್‌ನ ಲಾಭಗಳು",
    benefits: [
      {
        title: "React JavaScript ಲೈಬ್ರರಿಯ ಮೂಲ ಕಲ್ಪನೆಗಳು ಮತ್ತು ತತ್ವಗಳನ್ನು ಗ್ರಹಿಸಿ",
        description: "ಮೂಲಭೂತ ವಿಚಾರಗಳಲ್ಲಿ ಪರಿಣತಿ ಪಡೆಯಿರಿ ಮತ್ತು ಭದ್ರವಾದ ಅಡಿಪಾಯವನ್ನು ನಿರ್ಮಿಸಿ."
      },
      {
        title: "ಕಾಂಪೊನೆಂಟ್-ಆಧಾರಿತ ವಾಸ್ತುಶಿಲ್ಪದ ಮಹತ್ವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
        description: "ಸರಿಯಾದ ರಚನೆಯೊಂದಿಗೆ ವಿಸ್ತರಿಸಬಹುದಾದ ಅನ್ವಯಗಳನ್ನು ನಿರ್ಮಿಸಲು ಕಲಿಯಿರಿ."
      },
      {
        title: "State ಮತ್ತು Props ಅನ್ನು ನಿರ್ವಹಿಸುವುದರಲ್ಲಿ ಪರಿಣತಿ ಪಡೆಯಿರಿ",
        description: "React ಕಾಂಪೊನೆಂಟ್ ಅಭಿವೃದ್ಧಿಗೆ ಇದು ಅತ್ಯಗತ್ಯವಾಗಿದೆ."
      },
      {
        title: "React ಅನ್ವಯಗಳನ್ನು ಬಾಹ್ಯ API ಗಳಿಗೆ ಹೇಗೆ ಸಂಪರ್ಕಿಸಲು ಕಲಿಯಿರಿ",
        description: "ಅಸಂಕೇತಿತ ಡೇಟಾವನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ಅನ್ವಯ ಸ್ಥಿತಿಯನ್ನು ನಿಯಂತ್ರಿಸಿ."
      }
    ]
  }
};

function CourseBenefits() {
  const [language, setLanguage] = useState("en");

  return (
    <motion.div
      className="mb-8 bg-gradient-to-br from-[#D4E7FA] to-[#F5E0EC] p-8 rounded-lg shadow-xl backdrop-blur-md border border-white/40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Language Selector */}
      <div className="mb-4 flex justify-end">
        <select
          className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm shadow-md"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिंदी</option>
          <option value="ta">தமிழ்</option>
          <option value="kn">ಕನ್ನಡ</option>
        </select>
      </div>

      {/* Section Heading */}
      <motion.h2
        className="text-2xl font-bold mb-6 text-indigo-800 drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {translations[language].benefitsHeading}
      </motion.h2>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {translations[language].benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-white/60 border border-white/50 backdrop-blur-lg transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.8)"
            }}
          >
            <motion.h3
              className="font-semibold text-lg mb-2 text-gray-800"
              whileHover={{ color: "#4F46E5" }}
            >
              {benefit.title}
            </motion.h3>
            <p className="text-gray-700 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CourseBenefits;
