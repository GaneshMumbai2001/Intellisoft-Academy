import React from "react";

const courses = [
  {
    title: "JS Zero to Mastery",
    author: "Thomas Dal Graphic Teacher",
    image: "/public/courses/co1.png",
  },
  {
    title: "PHP Beginner Advanced",
    author: "Soseph Sara",
    image: "/public/courses/co3.png",
  },
  {
    title: "React Front To Back",
    author: "Rainbow Themes",
    image: "/public/courses/co4.png",
  },
];

const instructors = [
  {
    name: "Rainbow Themes",
    role: "WordPress Developer",
    image: "/courses/c5.png",
  },
  {
    name: "Soseph Sara",
    role: "Instructor",
    image: "/courses/c4.png",
  },
];

const CourseBundle = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 max-w-6xl mx-auto gap-6">
      {/* Course Details Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold">The Ultimate Course Bundle</h1>
        <p className="text-gray-600 mt-2">By <span className="font-semibold">Hemal Hemal</span></p>
        <p className="text-gray-500 mt-1">
          Categories: <span className="text-blue-600">Art & Humanities, IT, Mobile Application, PHP, Physical Fitness, React, Web Design</span>
        </p>
        
        <div className="mt-4">
          <img src="/courses/c2.png" alt="Course Bundle" className="w-full h-110 rounded-lg" />
        </div>
        
        <div className="mt-4 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">About Course</h2>
          <p className="mt-2 text-gray-600">
            Unlock the full potential of web development with our comprehensive course bundle. Learn everything from foundational HTML and CSS to advanced JavaScript frameworks.
          </p>
        </div>

        <div className="mt-4 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Benefits of the Course</h2>
          <ul className="mt-2 text-gray-600">
            <li>✔ Master UI building, state management, and API integration in React.</li>
          </ul>
        </div>
         {/* Course List */}
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Courses In The Bundle ({courses.length})</h2>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <img src={course.image} alt={course.title} className="w-24 h-16 rounded-md mr-4 object-cover" />
              <div>
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p className="text-gray-600">By {course.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
      
     
      {/* Sidebar Card */}
      <div className="w-full md:w-96 md:sticky top-10 self-start">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <img src="/courses/c2.png" alt="Course Bundle" className="w-full rounded-lg" />
          <div className="mt-4">
            <span className="text-3xl font-bold">$500.00</span>
            <span className="text-gray-400 line-through ml-2">$2,049.00</span>
            <p className="text-green-600 mt-1">29.58% off</p>
          </div>
          <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:from-purple-900 to-blue-700">
            Add to cart
          </button>
          
          {/* Tags Section */}
              <div className="mt-6">
                    <h3 className="text-lg font-semibold">Tags</h3>
                   <div className="flex flex-wrap gap-2 mt-2">
                   {["Javascript", "Next", "PHP", "React", "Web", "Web-Development"].map(tag => (
                   <button
                     key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-all"
                    >
                   {tag}
                    </button>
                 ))}
                </div>
             </div>


          {/* Instructors Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Instructors</h3>
            <div className="mt-3 space-y-4">
              {instructors.map((instructor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={instructor.image} alt={instructor.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{instructor.name}</p>
                    <p className="text-sm text-gray-500">{instructor.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBundle;



