import React, { useState } from "react";
import ArtHeader from "../Components/CourseDetails/ArtHeader"; // Correct import path
import ArtGridView from "../Components/CourseDetails/ArtGridview"; // Correct import path
import ArtListView from "../Components/CourseDetails/ArtListview"; // Correct import path
import { motion } from "framer-motion";

const ArtPage = () => {
  const [view, setView] = useState("grid"); // Default view is grid
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query

  const courses = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      imageLink: "/courses/c3.png",
      reviews: 4.9,
      courseName: "Data Science & ML",
      totalLessons: 15,
      enrolledStudents: 60,
      description:
        "Elevate your skills with real-world project building.",
      price: "Free",
      curPrice: "",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "By Rainbow Themes ",
        field: "In Finance & Accounting",
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
      <ArtHeader view={view} setView={setView} setSearchQuery={setSearchQuery} />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       {view === "grid" ? (
         <ArtGridView courses={filteredCourses} />
         ) : (
        <ArtListView courses={filteredCourses} />
      )}

      </motion.div>

    </div>
  );
};

export default ArtPage;