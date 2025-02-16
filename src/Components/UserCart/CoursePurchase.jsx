import { useState } from "react";

const initialCourses = [
  {
    id: 1,
    name: "React Mastery",
    price: 4999,
    description: "Learn React from scratch to advanced.",
    thumbnail: "",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Tailwind CSS Guide",
    price: 2999,
    description: "Master Tailwind CSS for modern UIs.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.6,
  },
  {
    id: 3,
    name: "JavaScript Essentials",
    price: 3999,
    description: "Deep dive into JavaScript fundamentals.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Node.js Backend Development",
    price: 5999,
    description: "Learn backend development with Node.js.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Python for Beginners",
    price: 3500,
    description: "Start your coding journey with Python.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.5,
  },
  {
    id: 6,
    name: "UX/UI Design Basics",
    price: 2700,
    description: "Design great user experiences.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.3,
  },
  {
    id: 7,
    name: "Web Animation with GSAP",
    price: 4500,
    description: "Create stunning animations for the web.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.6,
  },
  {
    id: 8,
    name: "AI & Machine Learning Basics",
    price: 6999,
    description: "Understand AI & ML concepts.",
    thumbnail: "https://via.placeholder.com/150",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.9,
  },
];

export default function CoursePurchase() {
  const [courses, setCourses] = useState(initialCourses);

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Course Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="shadow-lg rounded-lg p-4 relative bg-white">
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-40 object-cover rounded"
            />
            <div className="p-3">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">{course.name}</h2>
                <img
                  src={course.companyLogo}
                  alt="Company Logo"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-500">{course.description}</p>
              <p className="text-yellow-500 font-bold">⭐ {course.rating}</p>
              <p className="text-lg font-semibold mt-2">₹{course.price}</p>
              <button
                className="w-full mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeCourse(course.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right shadow-md">
        <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Purchase Now
        </button>
      </div>
    </div>
  );
}
