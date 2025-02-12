import React from "react";

const CourseCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 p-20">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-5 max-w-lg flex items-center justify-between">
  {/* Left Content */}
  <div className="flex-1 p-4">
    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">New Collection</span>
    <h3 className="text-lg font-semibold mt-3">Online Courses from Histudy</h3>
    <p className="text-gray-500 text-sm">Top instructors from around the world</p>
  </div>

  {/* Right Image */}
  <div className="w-40 h-40">
    <img
      src="/public/courses/vc.png"
      alt="Online Courses"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>


      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-5 max-w-sm">
        <div className="flex gap-2">
          <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Top</span>
          <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">Teacher</span>
        </div>
        <h3 className="text-lg font-semibold mt-3">
          Free Online Courses from Histudy School To Education
        </h3>
        <p className="text-gray-500 text-sm">Top instructors from around the world</p>
        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default CourseCards;
