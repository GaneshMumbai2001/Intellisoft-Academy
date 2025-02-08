import React from "react";
import GridView from "../Components/Courses/Gridview";
import  CoursesHeader  from "../Components/Courses/CoursesHeader";

function Course() {
  return (
    <div>
      <CoursesHeader/>
      <GridView />
    </div>
  );
}

export default Course;
