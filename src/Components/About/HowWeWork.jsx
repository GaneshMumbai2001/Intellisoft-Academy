import React, { useState } from "react";
import { motion } from "framer-motion";

const HowWeWork = ({
  title = "How Our Process Works",
  description = "We guide you step-by-step through the process of achieving your dreams..",
  buttonText = "Start Today",
  imageYou = "/public/about/about-video.png",
  videoUrl = "/about/video.mp4",
  buttonLink = "/about",
}) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="flex flex-wrap justify-center items-center w-8/9 rounded-lg overflow-hidden">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-lg p-10"
        >
          <a 
            href={buttonLink}
            className="text-[10.42px] inline-block px-4 py-2 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-5 hover:bg-blue-300 transition"
          >
            HOW WE WORK
          </a>
          <h1 className="text-[32.1px] font-bold mb-4">{title}</h1>
          <p className="text-[13.5px] text-gray-600 text-sm mb-6">{description}</p>
          <a href={buttonLink} className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
            {buttonText}
          </a>
        </motion.div>

        {/* Right Side Video Thumbnail */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            {!playVideo ? (
              <div className="relative cursor-pointer" onClick={() => setPlayVideo(true)}>
                <img 
                  src={imageYou} 
                  alt="How We Work" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <svg 
                    className="w-16 h-16 text-white opacity-80" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.469-3.75A1 1 0 007 8v8a1 1 0 001.283.958l6.469-3.75a1 1 0 000-1.708z" />
                  </svg>
                </div>
              </div>
            ) : (
              <video className="w-full h-full rounded-lg" controls autoPlay>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowWeWork;
