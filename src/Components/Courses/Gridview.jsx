import React from "react";

const GridView = () => {
  const courses = [
    {
      imageLink: "/courses/c1.png",
      reviews: 5,
      courseName: "React Mastery",
      totalLessons: 12,
      enrolledStudents: 50,
      description:
        "Master React from basics to advanced concepts with hands-on projects.",
      price: "120.00",
      curPrice: "70.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "/courses/c2.png",
      reviews: 10,
      courseName: "Full Stack Web Development",
      totalLessons: 20,
      enrolledStudents: 100,
      description:
        "Learn Full Stack Development with React, Node.js, and MongoDB.",
      price: "249.00",
      curPrice: "120.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Daniel",
        field: "Software Engineering",
      },
    },
    {
      imageLink: "/courses/c3.png",
      reviews: 7,
      courseName: "App Development",
      totalLessons: 15,
      enrolledStudents: 80,
      description:
        "Build 100 projects in 100 days and master mobile app development.",
      price: "99.00",
      curPrice: "49.99",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Sophie",
        field: "Mobile Development",
      },
    },
    {
      imageLink: "/courses/c4.png",
      reviews: 6,
      courseName: "UI/UX Design",
      totalLessons: 18,
      enrolledStudents: 70,
      description:
        "Learn how to design user-friendly and modern UI/UX experiences.",
      price: "150.00",
      curPrice: "85.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Alex",
        field: "Design",
      },
    },
    {
      imageLink: "/courses/c5.png",
      reviews: 8,
      courseName: "Cyber Security Basics",
      totalLessons: 14,
      enrolledStudents: 90,
      description:
        "Understand the fundamentals of cybersecurity and ethical hacking.",
      price: "200.00",
      curPrice: "99.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Olivia",
        field: "Cyber Security",
      },
    },
    {
      imageLink: "/courses/c6.png",
      reviews: 9,
      courseName: "Data Science with Python",
      totalLessons: 22,
      enrolledStudents: 120,
      description:
        "Master Data Science using Python with real-world applications.",
      price: "299.00",
      curPrice: "150.00",
      instructor: {
        imageLink: "/courses/r1.png",
        name: "Ethan",
        field: "Data Science",
      },
    },
  ];

  return (
    <div className="py-10 flex flex-col items-center relative bottom-30">
      <div className="w-full lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-5 transition-transform hover:scale-105">
            {/* Course Image */}
            <img className="w-full rounded-lg mb-4" src={course.imageLink} alt={course.courseName} />
            
            {/* Course Info */}
            <div className="text-gray-900 font-semibold text-lg">{course.courseName}</div>
            <p className="text-sm text-gray-600 my-2">{course.description}</p>

            {/* Lessons & Students */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>{course.totalLessons} Lessons</span>
              <span>{course.enrolledStudents} Students</span>
            </div>

            {/* Instructor Info */}
            <div className="flex items-center mt-3">
              <img className="h-10 w-10 rounded-full mr-3" src={course.instructor.imageLink} alt={course.instructor.name} />
              <span className="text-sm text-gray-700">By {course.instructor.name} in {course.instructor.field}</span>
            </div>

            {/* Price & Button */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-lg font-bold text-blue-600">
                <s className="text-gray-400 text-sm">${course.price}</s> ${course.curPrice}
              </div>
              <button className="bg-white-600 text-black px-4 py-2 shadow rounded-lg text-sm hover:bg-black-100">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <a href="#" className="text-[11.72px] px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md">
          More About Us
        </a>
      </div>
    </div>
  );
};

export default GridView;
