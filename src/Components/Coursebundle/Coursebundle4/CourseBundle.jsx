import React, { useState, useEffect } from "react";
import instructorImage from "../Coursebundle1/cbimage/co4.png";
import coursePreview from "../Coursebundle1/cbimage/co4.png";

const courseDetails = {
  title: "Graphic Design",
  price: "$70.00",
  originalPrice: "$120.00",
  lastUpdated: "December 19, 2024",
  enrolled: 10,
  lectures: 16,
  skillLevel: "Intermediate",
  language: "English",
  duration: "32h 15m",
};

const AboutCourse = {
  Description:
    "Graphic Design on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics."
};

const courseContent = [
  {
    title: "Introduction",
    id: "introContent",
    lessons: [
      "Let's learn Graphic design from scratch with projects",
      "How to learn Graphic design | A React Roadmap"
    ]
  },
  {
    title: "Understand Graphic design",
    id: "reactBasics",
    lessons: ["React Components and State", "Handling Events in React"]
  },
  {
    title: "Own Creativity",
    id: "hooksJSX",
    lessons: ["Understanding JSX and Virtual DOM", "Using useState and useEffect Hooks"]
  }
];

const CourseBundle = () => {
  const [showMore, setShowMore] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleShowMore = () => setShowMore(!showMore);
  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const benefits = [
    "Grasp the core concepts and principles of the React JavaScript library.",
    "Understand the importance of component-based architecture in building scalable applications.",
    "Master the handling of state and props, fundamental to React component development.",
    "Implement routing and navigation in single-page applications using React Router.",
    "Dive into React hooks and functional components for modern and efficient development.",
    "Learn how to connect React applications to external APIs and manage asynchronous data.",
  ];

  return (
    <div className="flex flex-col md:flex-row p-6 max-w-6xl mx-auto gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{courseDetails.title}</h1>
        <p className="text-gray-600 mt-2">By <span className="font-semibold">Rainbow Themes</span></p>
        <p className="text-gray-500 mt-1">Enroll now and master React with real-world projects.</p>
        
        {/* Dynamic Image */}
        <div className="mt-4">
          <img
            src={coursePreview}
            alt="Course Bundle"
            className="w-full h-auto md:h-64 lg:h-96 rounded-lg transition-all duration-300"
          />
        </div>

        {/* About Course */}
        <div className="mt-4 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">About Course</h2>
          <p className="mt-2 text-gray-600">{AboutCourse.Description}</p>
        </div>
        
        {/* Course Content */}
        <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Course Content</h2>
          {courseContent.map((section) => (
            <div key={section.id} className="mt-4">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left font-semibold text-blue-600"
              >
                {section.title}
              </button>
              {expandedSections[section.id] && (
                <ul className="mt-2 text-gray-700 list-disc pl-5">
                  {section.lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Benefits of the Course */}
        <div className="bg-white shadow-lg px-4 py-5 rounded-lg mt-6">
          <h2 className="text-xl font-semibold">Benefits of the course</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {benefits.map((benefit, index) => (
              <p key={index} className="text-gray-600">{benefit}</p>
            ))}
          </div>
        </div>
         
        {/* Instructor Section */}
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

      {/* Sidebar */}
      <div className="w-full md:w-96 md:sticky top-10 self-start">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <img src={coursePreview} alt="Course Preview" className="w-full rounded-lg object-cover mb-4" />
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-400">{courseDetails.price}</span>
            <span className="text-gray-500 line-through">{courseDetails.originalPrice}</span>
          </div>
          <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:opacity-90">
            Add to Cart
          </button>

        <button className="mt-2 w-full bg-white-800 text-black px-4 py-2 rounded-lg transition-all duration-300 transform hover:bg-gradient-to-r from-blue-200 to-blue-500 hover:text-white">
           Buy Now
         </button>


          {/* Student Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Student Reviews</h3>
            <div className="flex items-center gap-1 mt-2">
              ⭐⭐⭐⭐⭐ <span className="text-gray-500">(4.8/5)</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Based on 1,245 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBundle;
