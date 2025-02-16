import React, { useState } from "react";
import BitcoinHeader from "../Components/CourseDetails/BitcoinHeader"; // Correct import path
import BitGridView from "../Components/CourseDetails/BitGridview"; // Correct import path
import BitListView from "../Components/CourseDetails/BitListview"; // Correct import path
import { motion } from "framer-motion";

const BitcoinPage = () => {
  const [view, setView] = useState("grid"); // Default view is grid
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  const courses = [
    {
      id: 1,
      imageLink: "/courses/app.png",
      reviews: 5,
      courseName: "App Development",
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
    {
      id: 2,
      imageLink: "/courses/eng.png",
      reviews: 4.8,
      courseName: "English Popular Course",
      totalLessons: 10,
      enrolledStudents: 45,
      description:
        "Intellisoft is elegant theme.",
     price: "Free",
      curPrice: "",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "John Doe",
        field: "Web Development",
      },
    },
    {
      id: 3,
      imageLink: "/courses/ref.png",
      reviews: 4.9,
      courseName: "React Front To Back",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "Learn React from basics to advanced, mastering UI building, state…",
      price: "Free",
      curPrice: "",
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
      <BitcoinHeader view={view} setView={setView} setSearchQuery={setSearchQuery} />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       {view === "grid" ? (
         <BitGridView courses={filteredCourses} />
         ) : (
        <BitListView courses={filteredCourses} />
      )}

      </motion.div>

    </div>
  );
};

export default BitcoinPage;