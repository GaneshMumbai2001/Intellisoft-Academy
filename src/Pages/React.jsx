import React from 'react';
import CoursePage from '../Components/React/CoursePage'
import ReactHeader from '../Components/React/ReactHeader'
// import CourseInfo from '../Components/React/CourseInfo';
// import PurchaseCard from '../Components/React/PurchaseCard';
// import CourseBenefits from '../Components/React/CourseBenefits';
// import CourseContent from '../Components/React/CourseContent';
// import InstructorCard from '../Components/React/InstructorCard'
import MoreCourses from '../Components/React/MoreCourses'
import RelatedCourses from '../Components/React/RelatedCourses'
function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
   
      <main className="py-8 px-4 sm:px-6 md:px-8 lg:px-12">{children}</main>
      <ReactHeader/>
     <CoursePage/>
     {/* <CourseInfo/> */}
     <MoreCourses/>
     <RelatedCourses/>
    </div>
  );
}

export default MainLayout;