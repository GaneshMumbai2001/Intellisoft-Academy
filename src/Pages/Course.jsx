// import React, { useState } from "react";
// import CoursesHeader from "../Components/Courses/CoursesHeader.jsx"; // Fixed import
// import GridView from "../Components/Courses/GridView"; // Fixed case
// import ListView from "../Components/Courses/ListView"; // Fixed case
// import { motion } from "framer-motion";

// const Course = () => {
//   const [view, setView] = useState("grid");

//   return (
//     <div>
//       <CoursesHeader setView={setView} view={view} />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {view === "grid" ? <GridView /> : <ListView />}
//       </motion.div>
//     </div>
//   );
// };

// export default Course;
import React, { useState } from "react";
import CoursesHeader from "../Components/Courses/CoursesHeader"; // Correct import path
import GridView from "../Components/Courses/GridView"; // Correct import path
import ListView from "../Components/Courses/ListView"; // Correct import path
import { motion } from "framer-motion";

const Course = () => {
  const [view, setView] = useState("grid"); // Default view is grid
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  const courses = [
    {
      imageLink: "/courses/c1.png",
      reviews: 5,
      courseName: "React Mastery",
      totalLessons: 12,
      enrolledStudents: 50,
      description:
        "Master React from basics to advanced concepts with hands-on projects.",
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
      description:
        "Learn the fundamentals of JavaScript with practical coding exercises.",
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
      reviews: 4.9,
      courseName: "Python for Beginners",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "A complete guide to learning Python from scratch with real-world projects.",
      price: "110.00",
      curPrice: "65.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alice Smith",
        field: "Data Science",
      },
    },
    // Add more courses as needed...
    {
      imageLink: "/courses/c4.png",
      reviews: 4.9,
      courseName: "Python for Beginners",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "A complete guide to learning Python from scratch with real-world projects.",
      price: "110.00",
      curPrice: "65.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alice Smith",
        field: "Data Science",
      },
    },
    {
      imageLink: "/courses/c5.png",
      reviews: 4.9,
      courseName: "Python for Beginners",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "A complete guide to learning Python from scratch with real-world projects.",
      price: "110.00",
      curPrice: "65.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alice Smith",
        field: "Data Science",
      },
    },
    {
      imageLink: "/courses/c6.png",
      reviews: 4.9,
      courseName: "Python for Beginners",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "A complete guide to learning Python from scratch with real-world projects.",
      price: "110.00",
      curPrice: "65.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alice Smith",
        field: "Data Science",
      },
    },
  ];

  // Filter the courses based on the search query
  const filteredCourses = courses.filter(course =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Pass view and setView to CoursesHeader */}
      <CoursesHeader view={view} setView={setView} setSearchQuery={setSearchQuery} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {view === "grid" ? (
          <GridView courses={filteredCourses} />
        ) : (
          <ListView courses={filteredCourses} />
        )}
      </motion.div>
    </div>
  );
};

export default Course;
