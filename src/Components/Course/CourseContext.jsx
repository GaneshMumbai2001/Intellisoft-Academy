// // CourseContext.jsx
// import React, { createContext, useContext, useState } from 'react';

// // Create the CourseContext
// const CourseContext = createContext();

// // Create a CourseProvider component
// export const CourseProvider = ({ children }) => {
//   const [courses, setCourses] = useState([]);

//   // Function to add a course to the cart
//   const addToCart = (course) => {
//     setCourses((prevCourses) => {
//       // Check if the course is already in the cart
//       const isCourseInCart = prevCourses.some((item) => item.id === course.id);
//       if (!isCourseInCart) {
//         return [...prevCourses, course]; // Add the course if it's not already in the cart
//       }
//       return prevCourses; // Return the existing cart if the course is already added
//     });
//   };

//   // Function to remove a course from the cart
//   const removeFromCart = (courseId) => {
//     setCourses((prevCourses) => prevCourses.filter((item) => item.id !== courseId));
//   };

//   // Provide the cart state and functions to the context
//   return (
//     <CourseContext.Provider value={{ courses, addToCart, removeFromCart }}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// // Custom hook to use the CourseContext
// export const useCourse = () => {
//   const context = useContext(CourseContext);
//   if (!context) {
//     throw new Error('useCourse must be used within a CourseProvider');
//   }
//   return context;
// };

// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create the CourseContext
// const CourseContext = createContext();

// // Create a CourseProvider component
// export const CourseProvider = ({ children }) => {
//   const [courses, setCourses] = useState(() => {
//     // Load courses from localStorage (if any)
//     const savedCourses = localStorage.getItem('courses');
//     return savedCourses ? JSON.parse(savedCourses) : [];
//   });

//   // Save courses to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('courses', JSON.stringify(courses));
//   }, [courses]);

//   // Function to add a new course
//   const addCourse = (course) => {
//     if (!course.id) return; // Ensure the course has a valid ID
//     setCourses((prevCourses) => {
//       const isCourseInList = prevCourses.some((item) => item.id === course.id);
//       return isCourseInList ? prevCourses : [...prevCourses, course];
//     });
//   };

//   // Function to remove a course
//   const removeCourse = (courseId) => {
//     setCourses((prevCourses) => prevCourses.filter((item) => item.id !== courseId));
//   };

//   // Function to clear all courses
//   const clearCourses = () => {
//     setCourses([]);
//   };

//   // Provide state & functions through context
//   return (
//     <CourseContext.Provider value={{ courses, addCourse, removeCourse, clearCourses }}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// // Custom hook to use the CourseContext
// export const useCourse = () => {
//   const context = useContext(CourseContext);
//   if (!context) {
//     throw new Error('useCourse must be used within a CourseProvider');
//   }
//   return context;
// };
