// import React from 'react';
// import { motion } from 'framer-motion';
// import co1 from '/home/co1.png';
// import co2 from '/home/co2.png';
// import co3 from '/home/co3.png';
// import co4 from '/home/co4.png';

// // Courses Data
// const courses = [
//   { id: 1, image: co1, title: "Web Design", description: "Web App Application", link: "" },
//   { id: 2, image: co2, title: "Personal Development", description: "Mindset improvement", link: "" },
//   { id: 3, image: co3, title: "IT and Software", description: "Software development services", link: "" },
//   { id: 4, image: co4, title: "Graphic Design", description: "Own Creativity", link: "" }
// ];

// const Courses = () => {
//   return (
//     <div className="flex justify-center bg-[#F9F9FF] p-8">
//       <div className="w-full md:w-[82%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {courses.map((course, index) => (
//           <motion.div 
//             key={course.id} 
//             className="course-card w-full max-w-full md:max-w-xs p-4 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group relative"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <div className="relative">
//               <motion.img 
//                 src={course.image} 
//                 alt={course.title} 
//                 className="w-full h-38 rounded-md mb-4 transition-all duration-300"
//                 whileHover={{ opacity: 0.8 }}
//               />
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <a href={course.link} className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-full shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300 text-sm border-none">
//                   Course {course.id}
//                 </a>
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
//             <p className="text-sm font-medium text-gray-600">{course.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;


import React from 'react';
import { Link } from 'react-router-dom';
import co1 from '/home/co1.png';
import co2 from '/home/co2.png';
import co3 from '/home/co3.png';
import co4 from '/home/co4.png';

// Courses Data
const courses = [
  {
     id: 1, image: co1,
      title: "Web Design",
      description: "Creating stunning UI/UX designs for websites." 
      
  },
  { id: 2, image: co2, title: "Personal Development", description: "Mindset improvement." },
  { id: 3, image: co3, title: "IT and Software", description: "Software development services." },
  { id: 4, image: co4, title: "Graphic Design", description: "Own Creativity." }
];

const Courses = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center bg-[#F9F9FF] p-10 w-full">
      {courses.map((course) => (
        <div key={course.id} className="course-card w-64 h-60 p-4 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 group relative">
          <div className="relative">
            <img src={course.image} alt={course.title} className="w-full h-32 rounded-md mb-4 transition-all duration-300 sm:w-full" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to={`/course/${course.id}`} className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-full shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300 text-sm border-none">
                View Course
              </Link>
            </div>
          </div>
          <h3 className="text-[14.53px] font-bold text-gray-800 mb-2">{course.title}</h3>
          <p className="text-[12px] font-medium text-gray-600">{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
