import React from 'react';
import CoursePage from '../Components/Cart/German/CoursePage'
import ReactHeader from '../Components/Cart/German/ReactHeader'
import CourseInfo from '../Components/Cart/German/CourseInfo';
import MoreCourses from '../Components/Cart/German/MoreCourses'
import RelatedCourses from '../Components/Cart/German/RelatedCourses'
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