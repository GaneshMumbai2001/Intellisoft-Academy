import React from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "React.js for Beginners",
      description: "Learn the fundamentals of React.js including components, state management, and hooks.",
      duration: "8 weeks",
      price: "$99",
      image: "https://placehold.co/600x400"
    },
    {
      id: 2, 
      title: "JavaScript Fundamentals",
      description: "Master JavaScript basics including variables, functions, and modern ES6+ features.",
      duration: "6 weeks",
      price: "$79",
      image: "https://placehold.co/600x400"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js and Express.",
      duration: "10 weeks",
      price: "$129",
      image: "https://placehold.co/600x400"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description: "Comprehensive course covering both frontend and backend development.",
      duration: "12 weeks",
      price: "$199",
      image: "https://placehold.co/600x400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Courses</h1>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    <i className="far fa-clock mr-2"></i>
                    {course.duration}
                  </span>
                  <span className="text-lg font-bold text-blue-600">{course.price}</span>
                </div>
                <Link to={`/course/${course.id}`}>
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
