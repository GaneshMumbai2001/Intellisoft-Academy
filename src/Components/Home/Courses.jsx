import React from 'react';
import { motion } from 'framer-motion';
import co1 from '/home/co1.png';
import co2 from '/home/co2.png';
import co3 from '/home/co3.png';
import co4 from '/home/co4.png';

// Courses Data
const courses = [
  { id: 1, image: co1, title: "Art & Humanities", description: "Courses that help beginner designers become true unicorns..", link: "artpage" },
  { id: 2, image: co2, title: "Bitcoin Forums", description: "Mindset improvement.", link: "bitcoinpage" },
  { id: 3, image: co3, title: "Core Functions", description: "Courses that help beginner designers become true unicorns...", link: "corepage" },
  { id: 4, image: co4, title: "All Courses", description: "Software development services.", link: "courses" }
];

const Courses = () => {
  return (
    <div className="flex justify-center bg-[#F9F9FF] p-8">
      <div className="w-full md:w-[82%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <motion.div 
            key={course.id} 
            className="course-card w-full max-w-full md:max-w-xs p-4 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative">
              <motion.img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-38 rounded-md mb-4 transition-all duration-300"
                whileHover={{ opacity: 0.8 }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={course.link} className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-full shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300 text-sm border-none">
                  Course {course.id}
                </a>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-sm font-medium text-gray-600">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
