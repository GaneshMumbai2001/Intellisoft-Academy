import React from 'react';
import CoursePage from '../Components/Language/CoursePage'
import ReactHeader from '../Components/Language/ReactHeader'
import CourseInfo from '../Components/Language/CourseInfo';
import MoreCourses from '../Components/Language/MoreCourses'
import RelatedCourses from '../Components/Language/RelatedCourses'
function LanguageCourse({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
   
      <main className=" sm:px-6 md:px-8 lg:px-12">{children}</main>
      <ReactHeader/>
     <CoursePage/>
     <CourseInfo/>
     <MoreCourses/>
     <RelatedCourses/>
    </div>
  );
}

export default LanguageCourse;