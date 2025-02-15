import React from 'react';
import CoursePage from '../Components/LanguageCourse/Spanish/CoursePage'
import ReactHeader from '../Components/LanguageCourse/Spanish/ReactHeader'
import CourseInfo from '../Components/LanguageCourse/Spanish/CourseInfo';
import MoreCourses from '../Components/LanguageCourse/Spanish/MoreCourses'
import RelatedCourses from '../Components/LanguageCourse/Spanish/RelatedCourses'
function SpanishCourses({ children }) {
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

export default  SpanishCourses;