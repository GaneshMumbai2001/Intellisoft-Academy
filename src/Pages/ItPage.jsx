import React, { useState } from "react";
import ItHeader from "../Components/CourseDetails/ItHeader"; // Correct import path
import ItGridView from "../Components/CourseDetails/ItGridview"; // Correct import path
import ItListView from "../Components/CourseDetails/ItListview"; // Correct import path
import { motion } from "framer-motion";

const ItPage = () => {
  const [view, setView] = useState("grid"); // Default view is grid
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  const courses = [
    {
      id:1,
      imageLink: "/courses/c1.png",
      reviews: 5,
      courseName: "The Ultimate Course Bundle",
      totalLessons: 12,
      enrolledStudents: 50,
      description:
        "Unlock the full potential of web development with our comprehensive…",
      price: "$2,049.00",
      curPrice: "$500.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "By hemal hemal ",
        field: "In Art & Humanities",
      },
    },
    {
      id:2,
      imageLink: "/courses/c2.png",
      reviews: 4.8,
      courseName: "JS Zero to Mastery",
      totalLessons: 10,
      enrolledStudents: 45,
      description:
        "JS Zero to Mastery - Full Stack Project in Next.js…",
      price: "100.00",
      curPrice: "60.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "John Doe",
        field: "Web Development",
      },
    },
    {
      id:3,
      imageLink: "/courses/c3.png",
      reviews: 4.9,
      courseName: "PHP Beginner Advanced",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "It is a long established fact that a reader will…",
      price: "110.00",
      curPrice: "65.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alice Smith",
        field: "Data Science",
      },
      
    },

    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      <ItHeader view={view} setView={setView} setSearchQuery={setSearchQuery} />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       {view === "grid" ? (
         <ItGridView courses={filteredCourses} />
         ) : (
        <ItListView courses={filteredCourses} />
      )}

      </motion.div>

    </div>
  );
};

export default ItPage;