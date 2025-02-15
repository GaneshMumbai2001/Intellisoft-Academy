import React from 'react';
import CoursePage from '../Components/LanguageCourse/Italian/CoursePage'
import ReactHeader from '../Components/LanguageCourse/Italian/ReactHeader'
import CourseInfo from '../Components/LanguageCourse/Italian/CourseInfo';
import MoreCourses from '../Components/LanguageCourse/Italian/MoreCourses'
import RelatedCourses from '../Components/LanguageCourse/Italian/RelatedCourses'
function ItalianCourses({ children }) {
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

export default ItalianCourses;