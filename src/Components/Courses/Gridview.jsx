// import React from "react";
// import { motion } from "framer-motion";

// const GridView = () => {
//   const courses = [
//     {
//       imageLink: "/courses/c1.png",
//       reviews: 5,
//       courseName: "React Mastery",
//       totalLessons: 12,
//       enrolledStudents: 50,
//       description:
//         "Master React from basics to advanced concepts with hands-on projects.",
//       price: "120.00",
//       curPrice: "70.00",
//       instructor: {
//         imageLink: "/courses/r1.png",
//         name: "Monika",
//         field: "IT",
//       },
//     },
//     {
//       imageLink: "/courses/c2.png",
//       reviews: 4.8,
//       courseName: "JavaScript Essentials",
//       totalLessons: 10,
//       enrolledStudents: 45,
//       description:
//         "Learn the fundamentals of JavaScript with practical coding exercises.",
//       price: "100.00",
//       curPrice: "60.00",
//       instructor: {
//         imageLink: "/courses/r1.png",
//         name: "John Doe",
//         field: "Web Development",
//       },
//     },
//     {
//       imageLink: "/courses/c3.png",
//       reviews: 4.9,
//       courseName: "Python for Beginners",
//       totalLessons: 15,
//       enrolledStudents: 60,
//       description:
//         "A complete guide to learning Python from scratch with real-world projects.",
//       price: "110.00",
//       curPrice: "65.00",
//       instructor: {
//         imageLink: "/courses/r1.png",
//         name: "Alice Smith",
//         field: "Data Science",
//       },
//     },
//     {
//       imageLink: "/courses/c4.png",
//       reviews: 4.7,
//       courseName: "UI/UX Design Basics",
//       totalLessons: 8,
//       enrolledStudents: 40,
//       description:
//         "Understand the principles of UI/UX design and build user-friendly applications.",
//       price: "90.00",
//       curPrice: "55.00",
//       instructor: {
//         imageLink: "/courses/r1.png",
//         name: "David Wilson",
//         field: "Design",
//       },
//     },
//     {
//       imageLink: "/courses/c5.png",
//       reviews: 5,
//       courseName: "Machine Learning A-Z",
//       totalLessons: 20,
//       enrolledStudents: 75,
//       description:
//         "Dive deep into machine learning concepts and build AI models from scratch.",
//       price: "150.00",
//       curPrice: "80.00",
//       instructor: {
//         imageLink: "/courses/r1.png",
//         name: "Sophia Lee",
//         field: "AI & ML",
//       },
//     },
//     {
//       imageLink: "/courses/c6.png",
//       reviews: 4.6,
//       courseName: "Digital Marketing 101",
//       totalLessons: 14,
//       enrolledStudents: 55,
//       description:
//         "Learn the fundamentals of digital marketing and grow your online presence.",
//       price: "95.00",
//       curPrice: "50.00",
//       instructor: {
//         imageLink: "/courses/r1.png",
//         name: "Michael Brown",
//         field: "Marketing",
//       },
//     },
//   ];

//   return (
//     <div className="py-10 flex flex-col items-center relative bottom-30">
//       <motion.div 
//         className="w-full lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         {courses.map((course, index) => (
//           <motion.div 
//             key={index} 
//             className="bg-white shadow-lg rounded-xl p-5 transition-transform hover:scale-105"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <img className="w-full rounded-lg mb-4" src={course.imageLink} alt={course.courseName} />
//             <div className="text-gray-900 font-semibold text-lg">{course.courseName}</div>
//             <p className="text-sm text-gray-600 my-2">{course.description}</p>
//             <div className="flex justify-between text-sm text-gray-500">
//               <span>{course.totalLessons} Lessons</span>
//               <span>{course.enrolledStudents} Students</span>
//             </div>
//             <div className="flex items-center mt-3">
//               <img className="h-10 w-10 rounded-full mr-3" src={course.instructor.imageLink} alt={course.instructor.name} />
//               <span className="text-sm text-gray-700">By {course.instructor.name} in {course.instructor.field}</span>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <div className="text-lg font-bold text-blue-600">
//                 <s className="text-gray-400 text-sm">${course.price}</s> ${course.curPrice}
//               </div>
//               <button className="bg-white-600 text-black px-4 py-2 shadow rounded-lg text-sm hover:bg-black-100 cursor-pointer">
//                 Add to cart
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//       <motion.div 
//         className="flex justify-center mt-10"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <a href="#" className="text-[11.72px] px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md">
//           More About Us
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default GridView;


import React from "react";
import { motion } from "framer-motion";

const GridView = ({ courses }) => {
  return (
    <div className="py-10 flex flex-col items-center">
      <motion.div
        className="relative w-full lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  md:translate-y-[-90px] sm:translate-y-[100px]" // Add relative and translate-y
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GridView;
