import { useState } from "react";
import instructorImage from "../langimg/react.png";

const CourseInfo = ({ courseDetails = {} }) => {


  const benefits = [
    "Grasp the core concepts and principles of the React JavaScript library.",
    "Understand the importance of component-based architecture in building scalable applications.",
    "Master the handling of state and props, fundamental to React component development.",
    "Implement routing and navigation in single-page applications using React Router.",
    "Dive into React hooks and functional components for modern and efficient development.",
    "Learn how to connect React applications to external APIs and manage asynchronous data.",
  ];

  return (
    <div className="container w-full sm:w-full md:w-[75%] lg:w-[75%] px-4 sm:px-6 lg:px-8 py-6">

      {/* Course Content */}
     

      {/* Benefits of the Course */}
      <div className="bg-white shadow-lg px-4 py-5 rounded-lg mt-6">
        <h2 className="text-xl font-semibold">Benefits of the course</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {benefits.map((benefit, index) => (
            <p key={index} className="text-gray-600">{benefit}</p>
          ))}
        </div>
      </div>

      {/* Instructor */}
      <div className="relative top-5 bg-white shadow-lg rounded-lg p-6 w-full mt-6">
        <h2 className="text-lg font-semibold mb-4">Instructor</h2>
        <hr className="mb-4" />
        <div className="flex items-center space-x-4">
          <img src={instructorImage} alt="Instructor Logo" className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="text-lg font-bold">Rainbow Themes</h3>
            <p className="text-gray-500 text-sm">WordPress Developer</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span className="text-yellow-500 font-semibold">4.89</span>
              <span className="mx-1">⭐</span>
              <span>(9 Ratings)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
