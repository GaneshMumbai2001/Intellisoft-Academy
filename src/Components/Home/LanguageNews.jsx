
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";  
import lan1 from '/home/lan1.png';
import lan2 from '/home/lan2.png';
import lan3 from '/home/lan3.png';
import lan4 from '/home/lan4.png';
import lan5 from '/home/lan5.png';
import lan6 from '/home/lan6.png';
import c1 from '/home/c1.png';
import c2 from '/home/c2.png';
import c3 from '/home/c3.png';
import c4 from '/home/c4.png';
import c5 from '/home/c5.png';
import c6 from '/home/c6.png';

const LanguageNews = () => {
  const cardData = [
    { imgSrc: lan1, title: "Basics of Intellisoft Theme", icon: c1, programs: "21 programs", link: "IntellisoftTheme" },
    { imgSrc: lan2, title: "French Courses", icon: c2, programs: "32 programs", link: "frenchcourse" },
    { imgSrc: lan3, title: "German Courses", icon: c3, programs: "21 programs", link: "germancourse" },
    { imgSrc: lan4, title: "Italian Courses", icon: c4, programs: "5 programs", link: "italiancourse" },
    { imgSrc: lan5, title: "Spanish Courses", icon: c5, programs: "8 programs", link: "spanishcourse" },
    { imgSrc: lan6, title: "Japanese Courses", icon: c6, programs: "10 programs", link: "japanesecourse" }
  ];

  return (
    <div className="p-10">
      <p className="text-center font-normal py-2">
        <span className="text-[13.5px] bg-pink-400/20 px-3 py-2 rounded-full">
          OUR LANGUAGE COURSES
        </span>
      </p>
      <h2 className="text-center text-[39.6px] font-bold mb-4">
        Language Courses
      </h2>
      <p className="text-center text-[15px] text-gray-600 p-1">
        Language Academy Courses?
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map(({ imgSrc, title, icon, programs, link }, index) => (
          <motion.div 
            key={index} 
            className="relative group bg-white rounded-xl shadow-md border border-gray-200 w-80 overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image with Padding & Hover Effect */}
            <motion.div className="relative">
              <motion.img 
                src={imgSrc} 
                alt={title} 
                className="w-full h-auto p-4 rounded-xl"
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Centered Hover Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <a 
                  href={link} 
                  className="bg-white text-[#192335] px-3 py-1 rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            {/* Card Content */}
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <ArrowRight className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex gap-2 text-gray-600 text-sm">
                <img src={icon} alt={title} className="w-5 h-5 rounded-full" />
                <p>{programs}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LanguageNews;

