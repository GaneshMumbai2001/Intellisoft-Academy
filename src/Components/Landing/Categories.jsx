import React from "react";
import paint from "/landing/paint-palette-150x150.webp.png";
import cupBresh from "/landing/cupBresh.png";
import circleImg from "/landing/circleImg.png";
import smartPhone from "/landing/smartPhone.png";
import server from "/landing/server.png";

const categories = [
  { name: "Web Design", courses: 3, icon: paint },
  { name: "Sales Marketing", courses: 1, icon: circleImg },
  { name: "Personal Development", courses: 1, icon: cupBresh },
  { name: "Mobile Application", courses: 1, icon: smartPhone },
  { name: "IT and Software", courses: 1, icon: server },
  { name: "Graphic Design", courses: 1, icon: paint },
  { name: "Finance & Accounting", courses: 1, icon: circleImg },
  { name: "Art & Humanities", courses: 2, icon: cupBresh },
];



const Categories = () => {
  return (
    <div className="w-full mb-10 flex items-center justify-center">
      <div className="w-[90%] flex flex-col items-center">
        <div className="px-4 py-1 text-xs font-semibold rounded-xl bg-[#e4e9fd] text-[#2f56ef]">
          CATEGORIES
        </div>

        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1a2235] text-center mt-2 leading-tight">
          Explore Top Courses <span className="text-[#1a2235]">Categories</span>
          <br /> That Change Yourself
        </h2>

        <div className="w-[80%] flex flex-wrap justify-center md:justify-between mt-10 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center w-[250px] transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-14 h-14"
              />
              <p className="text-lg font-bold mt-4 text-[#1a2335]">
                {category.name}
              </p>
              <h4 className="font-medium text-gray-600 mt-2  border-b border-transparent hover:border-b-2 hover:border-[#2f56ef]">
                {category.courses} Courses{" "}
                <i className="fa-solid fa-arrow-right text-sm text-[#2f56ef]"></i>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;