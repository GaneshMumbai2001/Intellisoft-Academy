import React, { useState } from "react";
import { motion } from "framer-motion";

const  MoreCourses = () => {
  const initialCourses = [
    {
      imageLink: "/courses/c1.png",
      reviews: 5,
      courseName: "React Mastery",
      totalLessons: 12,
      enrolledStudents: 50,
      description: "Master React from basics to advanced concepts with hands-on projects.",
      price: "120.00",
      curPrice: "70.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "/courses/c2.png",
      reviews: 4.8,
      courseName: "JavaScript Essentials",
      totalLessons: 10,
      enrolledStudents: 45,
      description: "Learn the fundamentals of JavaScript with practical coding exercises.",
      price: "100.00",
      curPrice: "60.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "John Doe",
        field: "Web Development",
      },
    },
    {
      imageLink: "/courses/c3.png",
      reviews: 4.5,
      courseName: "Python for Beginners",
      totalLessons: 15,
      enrolledStudents: 60,
      description: "A comprehensive introduction to Python programming.",
      price: "110.00",
      curPrice: "65.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Jane Smith",
        field: "Data Science",
      },
    },
  ];

  const additionalCourses = [
    {
      imageLink: "/courses/c4.png",
      reviews: 4.2,
      courseName: "Web Design Fundamentals",
      totalLessons: 8,
      enrolledStudents: 35,
      description: "Learn the basics of web design and create stunning websites.",
      price: "90.00",
      curPrice: "50.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alice Johnson",
        field: "Design",
      },
    },
    {
      imageLink: "/courses/c5.png",
      reviews: 4.9,
      courseName: "Advanced React Patterns",
      totalLessons: 12,
      enrolledStudents: 40,
      description: "Explore advanced React patterns and best practices.",
      price: "130.00",
      curPrice: "80.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Bob Williams",
        field: "IT",
      },
    },
    {
      imageLink: "/courses/c6.png",
      reviews: 4.7,
      courseName: "Data Science with Python",
      totalLessons: 18,
      enrolledStudents: 70,
      description: "Learn data science techniques using Python.",
      price: "140.00",
      curPrice: "90.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Eva Davis",
        field: "Data Science",
      },
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setCourses([...initialCourses, ...additionalCourses]);
    setShowMore(true);
  };

  const handleShowLess = () => {
    setCourses(initialCourses);
    setShowMore(false);
  };

  return (
    <div className="py-10 flex flex-col items-center relative">
        <div className="">
        <p className=" text-sm font-normal py-2">
          <span className="text-[10.01px] bg-pink-400/20 px-3 py-2 rounded-full">
          TOP COURSE
           </span>
         </p>
        </div>
      
      <div className="mb-8 flex justify-between w-full max-w-6xl items-center">
        
        <motion.h2
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         More Course By <span className="text-blue-800">Rainbow Themes</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {!showMore ? (
            <button
              className="text-sm px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md"
              onClick={handleShowMore}
            >
              More Courses By Rainbow Themes
            </button>
          ) : (
            <button
              className="text-sm px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-md"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </motion.div>
      </div>

      <motion.div
        className="w-full lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img className="w-full rounded-lg mb-4" src={course.imageLink} alt={course.courseName} />
            <div className="text-gray-900 font-semibold text-lg">{course.courseName}</div>
            <p className="text-sm text-gray-600 my-2">{course.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{course.totalLessons} Lessons</span>
              <span>{course.enrolledStudents} Students</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MoreCourses;