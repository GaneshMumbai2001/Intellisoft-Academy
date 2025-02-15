import React from 'react';
import CoursePage from '../Components/LanguageCourse/Japanese/CoursePage'
import ReactHeader from '../Components/LanguageCourse/Japanese/ReactHeader'
import CourseInfo from '../Components/LanguageCourse/Japanese/CourseInfo';
import MoreCourses from '../Components/LanguageCourse/Japanese/MoreCourses'
import RelatedCourses from '../Components/LanguageCourse/Japanese/RelatedCourses'
function JapaneseCourses({ children }) {
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

export default JapaneseCourses;