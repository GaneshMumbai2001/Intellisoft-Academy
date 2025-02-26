import React, { useState } from "react";
import courseVideo from "../React/react/video.mp4";
import courseThumbnail from "../React/react/thumbnail.png";
import coursePreview from "../React/react/thumbnail.png";
import { useCart } from '../Cart/CartContex'; // Import the useCart hook



const CoursePage = () => {
  // Course details
  const course = {
    id: 1, // Unique ID for the course
    title: "React Front To Back",
    price: "$70.00",
    originalPrice: "$120.00",
    lastUpdated: "December 19, 2024",
    enrolled: 10,
    lectures: 16,
    skillLevel: "Intermediate",
    language: "English",
    duration: "32h 15m",
    image: coursePreview, // Add an image for the course
    description: "Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics.",
  };

  const AboutCourse = {
    Description: course.description,
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
  const [expandedSections, setExpandedSections] = useState({});
  const { addToCart } = useCart(); // Access the addToCart function from the context

  const toggleShowMore = () => setShowMore(!showMore);
  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(course); // Add the course to the cart
    alert(`${course.title} has been added to your cart!`);
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      {/* Main Content */}
      <div className="w-full lg:w-3/4">
        <div className="rounded-lg p-4">
          <video controls poster={courseThumbnail} className="w-full rounded-lg">
            <source src={courseVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center space-x-2 mt-4">
            {["Course Info", "Lessons", "Reviews"].map((tab) => (
              <button key={tab} className="py-2 px-4 bg-gray-200 rounded-lg">
                {tab}
              </button>
            ))}
          </div>

          {/* About Course */}
          <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold">About Course</h2>
            <p className="text-gray-600 mt-2">{AboutCourse.Description}</p>
            {showMore && (
              <ul className="mt-2 text-gray-700">
                {[
                  "Develop a strong understanding of JavaScript basics.",
                  "Dive into modern JavaScript with ES6+ features.",
                  "Build real-world projects to solidify your skills.",
                  "Learn state management with Redux.",
                ].map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
            <button onClick={toggleShowMore} className="text-blue-500 mt-2">
              {showMore ? "Show Less" : "Show More"}
            </button>
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
                  <ul className="mt-2 text-gray-700">
                    {section.lessons.map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src={coursePreview} alt="Course Preview" className="w-full rounded-lg object-cover mb-4" />
          <div className="flex flex-wrap justify-between mb-4">
            <span className="text-gray-500 line-through">{course.originalPrice}</span>
            <span className="text-xl font-bold text-blue-600">{course.price}</span>
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart} // Add the course to the cart
            className="w-full py-3 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 mb-2 cursor-pointer"
          >
            Add to Cart
          </button>
          <button className="w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100">Buy</button>
          <p className="mt-4 text-sm text-gray-600">30-Day Money-Back Guarantee</p>
          <div className="mt-4 text-sm text-gray-700">
            {Object.entries(course).map(
              ([key, value]) =>
                key !== "title" &&
                key !== "image" &&
                key !== "description" && (
                  <p key={key}>
                    <strong>{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:</strong> {value}
                  </p>
                )
            )}
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
