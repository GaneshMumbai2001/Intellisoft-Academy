import React from "react";
import { motion } from "framer-motion";

export const CoursesHeader = () => {
  const totalCourses = 21;
  const loadedCourses = 6;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 w-full h-100 flex justify-center bg-gradient-to-b from-blue-400 to-purple-400"
    >
      <section className="w-full lg:max-w-6xl text-white">
        <nav className="text-sm text-gray-200">Home . All Courses</nav>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 my-4"
        >
          <h1 className="text-3xl font-bold">All Courses</h1>
          <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full">
            {totalCourses} Courses
          </span>
        </motion.div>
        
        <p className="text-gray-100 text-lg">Courses that help beginner designers become true unicorns.</p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mt-6"
        >
          <div className="flex items-center gap-4">
          <div className="bg-[#ffffff7f] px-5 py-2 rounded-full">
            <button className="px-5 py-1 bg-white text-gray-800 rounded-full">Grid</button>
            <button className="px-5 py-1 text-white border border-white rounded-full">List</button>
          </div>
            <span className="text-sm text-gray-100">
              Showing 1-{loadedCourses} of {totalCourses} results
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="bg-white/20 text-white px-4 py-2 border border-white rounded-full placeholder-white outline-none"
              placeholder="Search Your Course..."
            />
            <button className="px-4 py-2 bg-white text-gray-800 font-bold rounded-full">Filter</button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

