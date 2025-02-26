import React from 'react';
import CoursePage from '../Components/Cart/French/CoursePage'
import ReactHeader from '../Components/Cart/French/ReactHeader'
import CourseInfo from '../Components/Cart/French/CourseInfo';
import MoreCourses from '../Components/Cart/French/MoreCourses'
import RelatedCourses from '../Components/Cart/French/RelatedCourses'
function LangC1({ children }) {
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

export default LangC1;