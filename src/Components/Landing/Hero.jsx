import React from "react";
import HandEmoji from "/landing/HandEmoji.png";
import Flag from "/landing/Flag.png";
import giftPack from "/landing/giftPack.png";
import boxOne from "/landing/boxOne.png";
import prize from "/landing/prizes.png";
import girlExplaining from "/landing/girlExplaining.png";
import curve from "/landing/curve.png";
import backGround from "/landing/Background+Shadow.png";
import popularImg1 from "/landing/popularImg1.png";
import popularImg2 from "/landing/popularImg2.png";
import popularImg3 from "/landing/popularImg3.png";
import { useState } from "react";
import { motion } from "framer-motion";

const cardsData = [
  {
    id: 0,
    image: popularImg1,
    title: "React Front To Back",
    lessons: "7 Lessons",
    students: "1 Student",
    description:
      "It is a long established fact that a reader will be distracted.",
    originalPrice: "$590.00",
    discountedPrice: "$199.00",
  },
  {
    id: 1,
    image: popularImg2,
    title: "Advanced JavaScript",
    lessons: "10 Lessons",
    students: "5 Students",
    description:
      "Master advanced JS techniques to build scalable applications.",
    originalPrice: "$499.00",
    discountedPrice: "$179.00",
  },
  {
    id: 2,
    image: popularImg3,
    title: "UI/UX Design Mastery",
    lessons: "8 Lessons",
    students: "3 Students",
    description: "Learn design principles to create user-friendly interfaces.",
    originalPrice: "$450.00",
    discountedPrice: "$159.00",
  },
];

const Hero = () => {
  const [cards, setCards] = useState(cardsData);

  const handleClick = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <div className="w-full  flex items-center justify-center bg-gradient-to-r from-[#d1d9fd] to-[#e9d2f6] relative">
      

      <div className="w-[96%]  flex flex-col items-center   lg:flex lg:flex-row lg:items-start lg:justify-normal">
        <div className="w-[90%] sm:w-[60%] lg:w-[40%]">
          
          <div className="relative mt-[50px] flex items-center justify-center  w-[68%] h-[90px] ">
            <img
              className=" absolute h-[45px] w-[90%] z-0"
              src={giftPack}
              alt="giftPackImg"
            />
            <div className="z-2 absolute h-[56px] rounded-sm flex  bg-[#ffffff] w-[80%]"></div>
            <p className="z-10 abolute text-[#16284d] font-bold  lg:font-bold text-[13px] lg:text-[14px]">
              The Leader in Online Learning
            </p>
          </div>
          <h1 className="text-[34px] ml-[20px] mt-[20px] font-bold text-[#1a2235]">
            Build The Skills
          </h1>
          <p className="text-[34px] ml-[20px]  font-bold text-[#1a2235]">
            To Drive Your Career.
          </p>
          <p className="mt-[20px] ml-[20px] text-[#6c7385] text-[19px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolar do amet
            sint.{" "}
            <span className="text-[19px] font-semibold">
              Velit officia consequat.
            </span>
          </p>
          <button className=" bg-gradient-to-r from-[#4e5aed] via-[#b967e7] to-[#4e5aed] ml-[20px] mt-[55px] h-[45px]  rounded-xl w-[145px] flex items-center justify-center text-[white]">
            View Course
          </button>
        </div>

        <div className="  mt-[30px] flex  py-[60px] lg:py-[5px] w-[60%]">
          <div className=" hidden md:block ">
            <img
              className="w-[450.5px] h-[630.75px]"
              src={girlExplaining}
              alt="girlExplainingImg"
            />
          </div>

          
          <div className="w-[400px] flex flex-col items-center justify-center">
                <div className="relative w-64 h-96  flex items-center justify-center">
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      className="absolute w-48 h-[350px] bg-white text-black flex flex-col items-start justify-start rounded-2xl shadow-lg cursor-pointer p-3"
                      style={{
                        transformOrigin: "right center",
                        pointerEvents: index === 0 ? "auto" : "none",
                      }}
                      animate={{
                        rotate: index * 8,
                        rotateZ: index * -5,
                        x: index * 13,
                        y: index * -5,
                        scale: 1 - index * 0.08,
                        zIndex: 5 - index,
                      }}
                      transition={{ type: "spring", stiffness: 150 }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-40 rounded-lg object-cover" // CHANGED: Increased image height
                      />
                      <div className="text-xs text-gray-500 mt-2">
                        {card.lessons} • {card.students}
                      </div>
                      <h3 className="text-bold font-semibold mt-2 text-[#1a2235]">{card.title}</h3>
                      <p className="text-xs mt-2">{card.description}</p>
                      <p className="ml-6 text-[10px] flex text-gray-500 mt-2">(1 reviews)</p>
                      <div className="flex gap-2 mt-2">
                        <div className="flex items-center justify-between  w-[160px] ">
                          <div>
                        <span className="text-gray-400  text-[10px] line-through text-xs">
                          {card.originalPrice}
                        </span>
                        <span className="text-gray-500  text-[10px] font-bold text-sm">
                          {card.discountedPrice}
                        </span>
                          </div>
                          <p className="font-semibold  text-[11px]">Learn More</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="w-[30px] h-[20px] border-2 border-gray-500 hover:border-blue-500 rounded-full flex items-center justify-center"
                    onClick={handleClick}
                  >
                    <i className=" fa-solid fa-arrow-right"></i>
                  </div>
                  {/* <div
                    className="w-[20px] h-[20px] border-2 border-red-500 rounded-full"
                    onClick={handleClick}
                  ></div>
                  <div
                    className="w-[20px] h-[20px] border-2 border-red-500 rounded-full"
                    onClick={handleClick}
                  ></div> */}
                </div>
              </div>
        </div>

        <img
          className="w-full  absolute z-5 left-0 bottom-0"
          src={curve}
          alt="curveImg"
        />
      </div>
    </div>
  );
};

export default Hero;