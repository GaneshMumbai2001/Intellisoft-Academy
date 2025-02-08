import React from "react";
import GridView from "../Components/Courses/Gridview";
import  CoursesHeader  from "../Components/Courses/CoursesHeader";


function Course() {
  return (
    <div>
      <div>
        <CoursesHeader />
      </div>
      <div>
        <GridView />
      </div>
    </div>
  );
}

export default Course;

