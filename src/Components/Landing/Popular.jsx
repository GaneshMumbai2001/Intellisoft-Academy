import React, { useState } from "react";
import popularImg1 from "/landing/popularImg1.png";
import popularImg2 from "/landing/popularImg2.png";
import popularImg3 from "/landing/popularImg3.png";
import miniPopular from "/landing/miniPopularImg.png";

// Course data
const initialCourses = [
  {
    id: 1,
    name: "React",
    lessons: 10,
    students: 1,
    price: "$70.00",
    originalPrice: "$120.00",
    description: "Master React from basics to advanced concept with React front to back.",
    image: popularImg1,
    author: "Rainbow Themes",
    category: "IT"
  },
  {
    id: 2,
    name: "Basics of HiStudy Theme",
    lessons: 14,
    students: 4,
    price: "Free",
    originalPrice: null,
    description: "HiStudy Education Theme by Rainbow-Themes is a user-friendly WordPress Tool designed for.",
    image: popularImg2,
    author: "Rainbow Themes",
    category: "Core Function"
  },
  {
    id: 3,
    name: "React Front To Back",
    lessons: 11,
    students: 11,
    price: "Free",
    originalPrice: null,
    description: "Master React from basics to advanced concept with React front to back.",
    image: popularImg3,
    author: "Rainbow Themes",
    category: "Outline"
  }
];

const Popular = () => {
  const [courses, setCourses] = useState(initialCourses);

  const loadMoreCourses = () => {
    const additionalCourses = [
      {
        id: 4,
        name: "Advanced React",
        lessons: 20,
        students: 10,
        price: "$120.00",
        originalPrice: "$200.00",
        description: "Dive deep into React and build scalable applications.",
        image: popularImg1,
        author: "Rainbow Themes",
        category: "Advanced"
      }
    ];
    setCourses([...courses, ...additionalCourses]);
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#faf9ff] py-10">
      


      <div className="w-[157px] h-[38px] text-[12.5px] font-semibold flex items-center justify-center rounded-2xl bg-[#f2e6fc] text-[#b76adf] mt-[120px]">
        TOP POPULAR COURSE
      </div>

      <div className="mt-[20px] sm:w-[50%] sm:text-[42px] lg:text-[42px] md:w-[60%] lg:w-[40%] font-bold flex flex-col items-center">
        <p className="text-[#1a2235] tracking-wider">
          Histudy Course students{" "}
          <span className="text-[#1a2235]">can join with us</span>
        </p>
      </div>

      <div className="w-[80%] mt-[35px] flex overflow-x-auto sm:overflow-visible justify-center sm:flex-wrap gap-6 hide-scrollbar">
        {courses.map((course) => (
          <div
            key={course.id}
            className="min-w-[300px] sm:w-[330px] rounded-xl shadow-lg py-5  transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-[90%] rounded-xl m-auto">
              <img className="w-full" src={course.image} alt={course.name} />
              <div className="ml-[50px] mt-[15px]">
                <p className="text-[#6d7384] text-[11px] font-semibold">(0 Review)</p>
              </div>
              <h1 className="mt-[6px] font-bold text-[#1c1e23] text-[17px]">
                {course.name}
              </h1>
              <div className="mt-[4px] flex">
                <h1 className="ml-[16px] text-[12px] text-[#9ba0ad]">{course.lessons} Lessons</h1>
                <h1 className="ml-[16px] text-[12px] text-[#9ba0ad]">{course.students} Students</h1>
              </div>
              <p className="text-[#6c7383] mt-[11px] text-[13.5px]">
                {course.description}
              </p>
              <div className="flex items-center mt-[10px]">
                <img src={miniPopular} alt="miniPopularImg" />
                <p className="text-[12px] text-[#1a2333]">
                  <span className="text-[#737783]">By</span> {course.author}{" "}
                  <span className="text-[#737783]">In</span> {course.category}
                </p>
              </div>
              <div className="flex mt-[10px] items-center justify-between">
                <div className="flex items-center">
                  {course.originalPrice && (
                    <s className="text-[#bdbdbd] text-[12px] font-semibold">
                      {course.originalPrice}
                    </s>
                  )}
                  <h3 className="text-[#868a9c] ml-[5px] font-semibold">
                    {course.price}
                  </h3>
                </div>
                <button className="text-[#1c2433] font-semibold text-[11px]">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <button
        onClick={loadMoreCourses}
        className="mb-[100px] bg-gradient-to-r from-[#4e5aed] via-[#b967e7] to-[#4e5aed] ml-[20px] mt-[45px] h-[45px] rounded-lg w-[190px] flex items-center justify-center text-white"
      >
        Load More Course (40)
      </button>
    </div>
  );
};

export default Popular;