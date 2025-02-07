import React from "react";
import { motion } from "framer-motion";
import GridView from "../Components/Courses/Gridview";
import { CoursesHeader } from "../Components/Courses/CoursesHeader";

function Course() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <CoursesHeader />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <GridView />
      </motion.div>
    </motion.div>
  );
}

export default Course;
