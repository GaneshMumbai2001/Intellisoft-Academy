

import React, { useState } from "react";
import courseVideo from "../React/react/video.mp4";
import courseThumbnail from "../React/react/thumbnail.png"; // Corrected
import coursePreview from "../React/react/thumbnail.png"; // Corrected
import instructorImage from "../React/react/react.png";

const CoursePage = () => {
  const courseDetails = {
    title: "React Front To Back",
    price: "$70.00",
    originalPrice: "$120.00",
    lastUpdated: "December 19, 2024",
    enrolled: 10,
    lectures: 16,
    skillLevel: "Intermediate",
    language: "English",
    duration: "32h 15m",
  };

  const courseContent = [
    {
      title: "Introduction",
      tag: "Intro",
      id: "introContent",
      lessons: [
        "Let's learn React from scratch with projects",
        "How to learn React | A React Roadmap",
      ],
    },
    {
      title: "Understand React",
      tag: "Basic",
      id: "reactBasics",
      lessons: ["React Components and State", "Handling Events in React"],
    },
    {
      title: "Hooks And JSX",
      tag: "Hook",
      id: "hooksJSX",
      lessons: ["Understanding JSX and Virtual DOM", "Using useState and useEffect Hooks"],
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [expandedSections, setExpandedSections] = useState({}); // ✅ Fix: Initialize state

  const toggleShowMore = () => setShowMore(!showMore);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative bottom-30 p-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-3/4">
        <div className="rounded-lg p-4">
          <video controls poster={courseThumbnail} className="bg-white px-3 py-2 w-full rounded-lg">
            <source src={courseVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="bg-white px-2 py-2 rounded-full flex space-x-4 m-2">
            <button className="py-2 px-4 bg-gray-200 rounded-lg">Course Info</button>
            <button className="py-2 px-4 bg-gray-200 rounded-lg">Lessons</button>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">Reviews</button>
          </div>

          {/* About Course */}
          <div className="mb-6 bg-white shadow-lg px-3 py-5 rounded-lg">
            <h2 className="text-xl font-semibold">About Course</h2>
            <p className="text-gray-600 mt-2">
              Embark on a comprehensive React journey with our React Front To Back course.
            </p>
            {showMore && (
              <ul className="mt-2 text-gray-700">
                <li>Develop a strong understanding of JavaScript basics.</li>
                <li>Dive into modern JavaScript with ES6+ features.</li>
                <li>Build real-world projects to solidify your skills.</li>
                <li>Learn state management with Redux.</li>
              </ul>
            )}
            <button onClick={toggleShowMore} className="text-blue-500 mt-2">
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
          
        {/* Course Content */}
        <div className="bg-white shadow-lg px-2 py-3 rounded-lg">
          <h2 className="text-xl font-semibold">Course Content</h2>
          {courseContent.map((section) => (
            <div key={section.id} className="mt-4">
              <h3
                className="text-blue-500 font-medium cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                {section.title} <span className="text-xs bg-gray-200 px-2 py-1 rounded">{section.tag}</span>
              </h3>
              {expandedSections[section.id] && (
                <ul className="text-gray-700 mt-2">
                  {section.lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Instructor */}
        <div className="relative top-5 bg-white shadow-lg rounded-lg p-6 w-full">
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
          <p className="mt-4 text-gray-700 text-sm">
            I'm the Front-End Developer for <span className="font-bold">#Rainbow IT</span> in Bangladesh.
            I have a passion for UI effects, animations, and dynamic user experiences.
           </p>
          </div>
          </div>
        </div>


      {/* Sidebar */}
      <div className="w-full lg:w-1/4 top-6">
  <div className="bg-white shadow-lg lg:sticky rounded-lg p-6">
    <img src={coursePreview} alt="Course Preview" className="w-full rounded-lg object-cover mb-4" />
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-500 line-through mr-2">${courseDetails.originalPrice}</span>
      <span className="text-xl font-bold text-blue-600">${courseDetails.price}</span>
    </div>
    <button className="w-full py-3 px-4 bg-purple-500 text-white rounded-lg text-lg font-medium hover:bg-purple-600 transition duration-300 mb-2">Add to cart</button>
    <button className="w-full py-3 px-4 border border-gray-300 rounded-lg text-lg font-medium hover:bg-gray-100 transition duration-300">Buy</button>
    <p className="mt-4 text-sm text-gray-600">30-Day Money-Back Guarantee</p>
    <div className="mt-4">
      <p className="text-gray-700"><strong>Update:</strong> {courseDetails.lastUpdated}</p>
      <p className="text-gray-700"><strong>Enrolled:</strong> {courseDetails.enrolled}</p>
      <p className="text-gray-700"><strong>Lectures:</strong> {courseDetails.lectures}</p>
      <p className="text-gray-700"><strong>Skill Level:</strong> {courseDetails.skillLevel}</p>
      <p className="text-gray-700"><strong>Language:</strong> {courseDetails.language}</p>
      <p className="text-gray-700"><strong>Course Duration:</strong> {courseDetails.duration}</p>
    </div>
    <div className="mt-6 text-center">
      <p className="text-gray-700 font-medium">Card contact label</p>
      <p className="text-blue-600 font-bold text-lg">Call Us: 444-568-8777</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CoursePage;

