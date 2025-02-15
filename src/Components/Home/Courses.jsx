import React from 'react';
import { motion } from 'framer-motion';
import co1 from '/home/co1.png';
import co2 from '/home/co2.png';
import co3 from '/home/co3.png';
import co4 from '/home/co4.png';

// Courses Data
const courses = [
  { id: 1, image: co1, title: "Web Design", description: "Web App Application", link: "coursebuy1" },
  { id: 2, image: co2, title: "Personal Development", description: "Mindset improvement.", link: "coursebuy2" },
  { id: 3, image: co3, title: "IT and Software", description: "Software development services", link: "coursebuy3" },
  { id: 4, image: co4, title: "Graphic Design", description: "Own Creativity", link: "coursebuy4" }
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


// import React from 'react';
// import { Routes, Route, Link, useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import co1 from '/home/co1.png';
// import co2 from '/home/co2.png';
// import co3 from '/home/co3.png';
// import co4 from '/home/co4.png';

// // Courses Data
// const courses = [
//   { id: 1, image: co1, title: "Web Design", description: "Web App Application", details: "Learn web design fundamentals including HTML, CSS, and JavaScript." },
//   { id: 2, image: co2, title: "Personal Development", description: "Mindset improvement.", details: "Develop a growth mindset and improve your personal skills." },
//   { id: 3, image: co3, title: "IT and Software", description: "Software development services", details: "Master software development techniques and best practices." },
//   { id: 4, image: co4, title: "Graphic Design", description: "Own Creativity", details: "Enhance your creativity with design tools and principles." }
// ];

// const HomePage = () => {
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
//                 <Link to={`/courses/${course.id}`} className="bg-blue-600 text-white font-semibold py-1 px-4 rounded-full shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300 text-sm border-none">
//                   View Course
//                 </Link>
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

// const CourseDetail = () => {
//   const { id } = useParams();
//   const course = courses.find(c => c.id === Number(id));
//   if (!course) return <div className="text-center text-red-500">Course Not Found</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold">{course.title}</h1>
//       <img src={course.image} alt={course.title} className="w-full h-60 object-cover mt-4 rounded" />
//       <p className="mt-4 text-lg">{course.details}</p>
//       <Link to="/courses" className="mt-4 inline-block text-blue-500 hover:underline">Back to Courses</Link>
//     </div>
//   );
// };

// const CoursesPage = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       {/* <Route path=":id" element={<CourseDetail />} /> */}
//       <Route path=":id" element={<Courses />} />
//     </Routes>
//   );
// };

// export default CoursesPage;
