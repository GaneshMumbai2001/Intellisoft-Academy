
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ListView = ({ courses }) => {
  return (
    <div className="py-10 flex flex-col items-center">
      <motion.div
        className="relative w-full lg:max-w-4xl flex flex-col gap-6  md:translate-y-[-90px] sm:translate-y-[100px]" // Apply relative and translate-y
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className=""
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
             <Link to={`/AllCourses/${course.id}`} className="bg-white shadow-lg rounded-xl p-5 flex flex-wrap gap-6 transition-transform hover:scale-105 m-8">
            <img className="w-40 h-40 rounded-lg md:w-40 sm:w-60 " src={course.imageLink} alt={course.courseName} />
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-gray-900 font-semibold text-lg">{course.courseName}</div>
                <p className="text-sm text-gray-600 my-2">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.totalLessons} Lessons</span>
                  <span>{course.enrolledStudents} Students</span>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <img className="h-10 w-10 rounded-full mr-3" src={course.instructor.imageLink} alt={course.instructor.name} />
                <span className="text-sm text-gray-700">By {course.instructor.name} in {course.instructor.field}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-lg font-bold text-blue-600">
                  <s className="text-gray-400 text-sm">${course.price}</s> ${course.curPrice}
                </div>
                <button className="bg-white-600 text-black px-4 py-2 shadow rounded-lg text-sm hover:bg-black-100 cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ListView;