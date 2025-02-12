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
      imageLink: "/courses/c3.png",
      reviews: 5,
      courseName: "Basics of HiStudy Theme",
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
    // {
    //   imageLink: "/courses/eng.png",
    //   reviews: 4.8,
    //   courseName: "English Popular Course",
    //   totalLessons: 10,
    //   enrolledStudents: 45,
    //   description:
    //     "Histudy is elegant theme.",
    //  price: "Free",
    //   curPrice: "",
    //   instructor: {
    //     imageLink: "/courses/r1.png",
    //     name: "John Doe",
    //     field: "Web Development",
    //   },
    // },
    // {
    //   imageLink: "/courses/ref.png",
    //   reviews: 4.9,
    //   courseName: "React Front To Back",
    //   totalLessons: 15,
    //   enrolledStudents: 60,
    //   description:
    //     "Learn React from basics to advanced, mastering UI building, state…",
    //   price: "Free",
    //   curPrice: "",
    //   instructor: {
    //     imageLink: "/courses/r1.png",
    //     name: "Alice Smith",
    //     field: "Data Science",
    //   },
      
    // },
   
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