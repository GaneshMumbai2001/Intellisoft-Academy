import React, { useState } from "react";
import CoreHeader from "../Components/CourseDetails/CoreHeader"; // Correct import path
import CoreGridView from "../Components/CourseDetails/CoreGridview"; // Correct import path
import CoreListView from "../Components/CourseDetails/CoreListview"; // Correct import path
import { motion } from "framer-motion";

const CorePage = () => {
  const [view, setView] = useState("grid"); // Default view is grid
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  const courses = [
    {
      id:1,
      imageLink: "/courses/c3.png",
      reviews: 5,
      courseName: "Basics of Intellisoft Theme",
      totalLessons: 12,
      enrolledStudents: 50,
      description:
        "App Development by building 100 projects in 100 days. Learn…",
        price: "Free",
      curPrice: "",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "By hemal hemal ",
        field: "In Art & Humanities",
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
      <CoreHeader view={view} setView={setView} setSearchQuery={setSearchQuery} />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       {view === "grid" ? (
         <CoreGridView courses={filteredCourses} />
         ) : (
        <CoreListView courses={filteredCourses} />
      )}

      </motion.div>

    </div>
  );
};

export default CorePage;