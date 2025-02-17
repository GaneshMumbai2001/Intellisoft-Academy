

import { useParams } from "react-router-dom";
import { useState } from "react";
// import { motion } from "framer-motion";
import co1 from '/home/cb.png';
import co2 from '/home/zm.png';
import co3 from '/home/php.png';
import co4 from '/home/app.png';
import co5 from '/home/english.png';
import co6 from '/home/think.png';
import instructorImage from "/home/co2.png"; 
import coursePreview from "/home/co4.png"; 
const courses = [
  {
    id: 1,
    image: co1,
    title: "The Ultimate Course Bundle",
    description2: "Creating stunning UI/UX designs for websites. Web App Application on a comprehensive React journey with our React Front To Back course.",
    description: "Unlock the full potential of web development with our comprehensive…",
    lessons: [
      "Let's learn Web App Application from scratch with projects",
      "How to learn React | A React Roadmap",
    ],
    benefits: [
      "Master UI/UX design principles",
      "Build interactive web applications",
      "Gain hands-on project experience",
    ],
    originalPrice: "$199",
    price: "$500",
    updateDate: "Feb 2025",
    enrolled: "1,200 students",
    lectures: "30",
    skillLevel: "Beginner to Advanced",
    language: "English",
    duration: "10 hours",
    contact: "123-456-7890",
    instructor: {
      name: "Rainbow Themes",
      role: "WordPress Developer",
      rating: "4.89",
      reviews: "9 Ratings",
      image: instructorImage,
    },
  },
  {
    id: 2,
    image: co2,
    title: "JS Zero to Mastery",
    description2: "Creating stunning UI/UX designs for websites. Web App Application on a comprehensive React journey with our React Front To Back course.",
    description: "JS Zero to Mastery - Full Stack Project in Next.js….",
    lessons: ["Developing a growth mindset", "Time management techniques"],
    benefits: [
      "Improve self-confidence",
      "Enhance productivity",
      "Develop leadership skills",
    ],
    originalPrice: "$149",
    price: "$65",
    updateDate: "Jan 2025",
    enrolled: "900 students",
    lectures: "25",
    skillLevel: "All Levels",
    language: "English",
    duration: "8 hours",
    contact: "123-456-7890",
    instructor: {
      name: "John Doe",
      role: "Life Coach",
      rating: "4.75",
      reviews: "12 Ratings",
      image: coursePreview,
    },
  },
  {
    id: 3,
    image: co3,
    title: "PHP Beginner Advanced",
    description2: "Creating stunning UI/UX designs for websites. Web App Application on a comprehensive React journey with our React Front To Back course.",
    description: "It is a long established fact that a reader will…",
    lessons: ["Intro to software engineering", "Version control with Git"],
    benefits: [
      "Understand software development lifecycle",
      "Master version control techniques",
      "Enhance coding skills",
    ],
    originalPrice: "$179",
    price: "$60",
    updateDate: "Mar 2025",
    enrolled: "1,500 students",
    lectures: "35",
    skillLevel: "Intermediate to Advanced",
    language: "English",
    duration: "12 hours",
    contact: "123-456-7890",
    instructor: {
      name: "Jane Smith",
      role: "Software Engineer",
      rating: "4.80",
      reviews: "15 Ratings",
      image: instructorImage,
    },
  },
  {
       id: 4,
       image: co4,
       title: "App Development",
       description2: "Creating stunning UI/UX designs for websites. Web App Application on a comprehensive React journey with our React Front To Back course.",
       description: "Unlock the full potential of web development with our comprehensive…",
       lessons: [
         "Let's learn Web App Application from scratch with projects",
         "How to learn React | A React Roadmap",
       ],
       benefits: [
         "Master UI/UX design principles",
         "Build interactive web applications",
         "Gain hands-on project experience",
       ],
       originalPrice: "$199",
       price: "$500",
       updateDate: "Feb 2025",
       enrolled: "1,200 students",
       lectures: "30",
       skillLevel: "Beginner to Advanced",
       language: "English",
       duration: "10 hours",
       contact: "123-456-7890",
       instructor: {
         name: "Rainbow Themes",
         role: "WordPress Developer",
         rating: "4.89",
         reviews: "9 Ratings",
         image: instructorImage,
       },
     },
     {
       id: 5,
       image: co5,
       title: "English Popular Course",
       description2: "Creating stunning UI/UX designs for websites. Web App Application on a comprehensive React journey with our React Front To Back course.",
       description: "App Development by building 100 projects in 100 days. Learn…",
       lessons: ["Developing a growth mindset", "Time management techniques"],
       benefits: [
         "Improve self-confidence",
         "Enhance productivity",
         "Develop leadership skills",
       ],
       originalPrice: "$149",
       price: "$65",
       updateDate: "Jan 2025",
       enrolled: "900 students",
       lectures: "25",
       skillLevel: "All Levels",
       language: "English",
       duration: "8 hours",
       contact: "123-456-7890",
       instructor: {
         name: "John Doe",
         role: "Life Coach",
         rating: "4.75",
         reviews: "12 Ratings",
         image: coursePreview,
       },
     },
     {
       id: 6,
       image: co6,
       title: "React Front To Back",
       description2: "Creating stunning UI/UX designs for websites. Web App Application on a comprehensive React journey with our React Front To Back course.",
       description: "Intellisoft is elegant theme.",
       lessons: ["Intro to software engineering", "Version control with Git"],
       benefits: [
         "Understand software development lifecycle",
         "Master version control techniques",
         "Enhance coding skills",
       ],
       originalPrice: "$179",
       price: "$60",
       updateDate: "Mar 2025",
       enrolled: "1,500 students",
       lectures: "35",
       skillLevel: "Intermediate to Advanced",
       language: "English",
       duration: "12 hours",
       contact: "123-456-7890",
       instructor: {
         name: "Jane Smith",
         role: "Software Engineer",
         rating: "4.80",
         reviews: "15 Ratings",
         image: instructorImage,
       },
    },
];

function CourseImage({ image = "/default-course.jpg", alt = "Course Image" }) {
  return <img src={image} alt={alt} className="w-full" />;
}

function  AllCourses() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <h2 className="text-center text-red-500 font-bold mt-10">Course not found!</h2>;
  }

  const courseDetails = {
    title: "Web Design",
    price: "$70.00",
    originalPrice: "$120.00",
    lastUpdated: "December 19, 2024",
    enrolled: 10,
    lectures: 16,
    skillLevel: "Intermediate",
    language: "English",
    duration: "32h 15m",
  };

  const [expandedSections, setExpandedSections] = useState({});
  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row p-6 max-w-6xl mx-auto gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-gray-600 mt-2">By <span className="font-semibold">Rainbow Themes</span></p>
          <p className="text-gray-500 mt-1">Enroll now and master React with real-world projects.</p>
          <div className="mt-4">
            <CourseImage image={course.image} alt={course.title} />
          </div>
          <div className="mt-4 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">About Course</h2>
            <p className="mt-2 text-gray-600">{course.description2}</p>
          </div>
          <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Course Content</h2>
            {courses.map((course) => (
              <div key={course.id} className="mt-4">
                <button onClick={() => toggleSection(course.id)} className="w-full text-left font-semibold text-blue-600">
                  {course.title}
                </button>
                {expandedSections[course.id] && (
                  <ul className="mt-2 text-gray-700 list-disc pl-5">
                    {course.lessons.map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="">
   
        <div className="flex-1">
         

          {/* Benefits */}
          <div className="bg-white shadow-lg px-4 py-5 rounded-lg mt-4">
            <h2 className="text-lg font-semibold">Benefits of the Course</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {course.benefits.map((benefit, index) => (
                <p key={index} className="text-gray-600">{benefit}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative top-5 bg-white shadow-lg rounded-lg p-6 w-full mt-6">
  <h2 className="text-lg font-semibold mb-4">Instructor</h2>
  <hr className="mb-4" />
  {[...Array(1)].map((_, index) => (
    <div key={index} className="flex items-center space-x-4 mb-4">
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
  ))}
</div>
        
    </div>
          
        </div>
        <div className="w-full md:w-96 md:sticky top-10 self-start">
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <CourseImage image={course.image} alt="" className="w-full rounded-lg object-cover mb-4" />
            {/* Pricing Section */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 line-through text-lg">{course.originalPrice}</span>
          <span className="text-xl font-bold text-blue-500">{course.price}</span>
        </div>

        {/* Buttons */}
        <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
          Add to cart
        </button>
        <button className="mt-2 w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold">
          Buy
        </button>

        {/* Money-Back Guarantee */}
        <p className="text-center text-gray-500 text-sm mt-2">30-Day Money-Back Guarantee</p>

        {/* Course Details Section */}
        <div className="mt-6 space-y-4">
          <p className="text-gray-500 text-sm flex justify-between">
            <span>Update:</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 text-xs">{course.updateDate}</span>
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Enrolled</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{course.enrolled}</span>
            </div>

            <div className="flex justify-between">
              <span>Lectures</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{course.lectures}</span>
            </div>

            <div className="flex justify-between">
              <span>Skill Level</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{course.skillLevel}</span>
            </div>

            <div className="flex justify-between">
              <span>Language</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{course.language}</span>
            </div>

            <div className="flex justify-between">
              <span>Course Duration:</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{course.duration}</span>
            </div>
          </div>

          <button className="text-blue-500 font-medium text-sm">Show More</button>
        </div>

        {/* Contact Section */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg text-center shadow-sm">
          <p className="text-gray-500 text-sm">Card contact label</p>
          <a href={`tel:${course.contact}`} className="mt-2 block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
            Call Us: {course.contact}
          </a>
        </div>

      </div>
    </div>
    </div>
    </div>
  );
}

export default AllCourses;


