import React from 'react';
import CoursePage from '../Components/LanguageCourse/German/CoursePage'
import ReactHeader from '../Components/LanguageCourse/German/ReactHeader'
import CourseInfo from '../Components/LanguageCourse/German/CourseInfo';
import MoreCourses from '../Components/LanguageCourse/German/MoreCourses'
import RelatedCourses from '../Components/LanguageCourse/German/RelatedCourses'
function  GermanCourses({ children }) {
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

export default GermanCourses;