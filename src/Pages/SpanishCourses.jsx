import React from 'react';
import CoursePage from '../Components/Cart/Spanish/CoursePage'
import ReactHeader from '../Components/Cart/Spanish/ReactHeader'
import CourseInfo from '../Components/Cart/Spanish/CourseInfo';
import MoreCourses from '../Components/Cart/Spanish/MoreCourses'
import RelatedCourses from '../Components/Cart/Spanish/RelatedCourses'
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