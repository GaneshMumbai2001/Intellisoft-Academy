import React from 'react';
import ProgressBar from '../components/ProgressBar';
export default function Dashboard() {
  const enrolledCourses = [
    {
      id: 1,
      title: "React.js for Beginners",
      progress: 75,
      nextLesson: "Components and Props",
      instructor: "John Doe"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals", 
      progress: 30,
      nextLesson: "Functions and Scope",
      instructor: "Jane Smith"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-10 pb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                <span className="text-sm text-gray-500">Instructor: {course.instructor}</span>
              </div>

              <div className="mb-6">
                <ProgressBar progress={course.progress} />
              </div>

              <div className="mt-4">
                <p className="text-gray-600">
                  <span className="font-medium">Next Lesson:</span> {course.nextLesson}
                </p>
                <div className="mt-4 flex gap-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Continue Learning
                  </button>
                  <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Courses</p>
              <p className="text-2xl font-bold text-blue-600">2</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Completed Courses</p>
              <p className="text-2xl font-bold text-green-600">0</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Hours Spent</p>
              <p className="text-2xl font-bold text-yellow-600">24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
