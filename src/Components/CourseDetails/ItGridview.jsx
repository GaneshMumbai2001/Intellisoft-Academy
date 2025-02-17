

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Using lucide-react for rating stars
import { Link } from 'react-router-dom';

const ItGridView = ({ courses }) => {
  return (
    <div className="py-10 flex flex-col items-center ">
      <motion.div
        className="w-full lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 transition-transform hover:scale-105 m-5"
            >
              {/* Course Image */}
              <Link to={`/It/${course.id}`} className="text-lg font-semibold text-gray-900">
              <img className="w-full rounded-lg mb-4" src={course.imageLink} alt={course.courseName} />

              {/* Course Name & Rating */}
              <div className="flex justify-between items-center">
                <h3 className="text-gray-900 font-semibold text-lg">{course.courseName}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4" /> <span className="ml-1 text-sm">{course.reviews}</span>
                </div>
              </div>

              {/* Course Description */}
              <p className="text-sm text-gray-600 my-2">{course.description}</p>

              {/* Lessons & Students */}
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>📚 {course.totalLessons} Lessons</span>
                <span>👨‍🎓 {course.enrolledStudents} Students</span>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center mt-3">
                <img className="w-8 h-8 rounded-full mr-3" src={course.instructor.imageLink} alt={course.instructor.name} />
                <span className="text-sm text-gray-700">
                  By {course.instructor.name} <br />
                  <span className="text-xs text-gray-500">{course.instructor.field}</span>
                </span>
              </div>

              {/* Pricing & Cart Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 line-through">${course.price}</span>
                <span className="text-blue-600 font-bold">${course.curPrice}</span>
                <Link to="/coursebuy" className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition">
                  Add to cart
                </Link>
              </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600">No courses found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default ItGridView;
