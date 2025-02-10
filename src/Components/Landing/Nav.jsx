
import React, { useState } from "react";
import HandEmoji from "/landing/HandEmoji.png";
import Flag from "/landing/Flag.png";

const Nav = ({menu,setMenu}) => {

  

  return (
    <div>
      <nav className=" w-full  h-10 bg-[#1a2235] flex items-center">
        <div className="w-[98%] m-auto h-8  flex justify-between">
          <div className="w-[300px] hidden  lg:block"></div>

          <div className="flex h-[32px] w-[50px] sm:w-[376px]  items-center justify-between">
            <div className="w-[41px] h-[29px] text-[#ffffff] flex items-center justify-center rounded-xl bg-[#2f56ef]">
              <h1 className="text-[12.5px] font-semibold">Hot</h1>
            </div>
            <img
              className="hidden sm:block w-[auto] h-[20px]"
              src="https://rainbowit.net/html/histudy/assets/images/icons/hand-emojji.svg"
              alt="HandEmojiImg"
            />
            <p className="hidden sm:block w-[290px] text-[#b6b6b5] font-semibold  text-[13.5px]">
              Intro price. Get Histudy for Big Sale -95% off.
            </p>
          </div>

          <div className="w-[40px]  md:w-[280px]    flex items-center justify-center md:justify-end lg:justify-center">
            <div className="lg:flex hidden md:hidden   w-[95px] items-center  justify-evenly">
              <a href="#" className="text-[#b6b6b5] hover:text-white">
                <i className=" fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#b6b6b5] hover:text-white">
                <i className=" fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-[#b6b6b5] hover:text-white">
                <i className="  fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-[#b6b6b5] hover:text-white">
                <i className="  fa-brands fa-instagram"></i>
              </a>
            </div>

            <div className="hidden md:flex items-center justify-normal">
              <div className="flex    w-[118px] items-center justify-evenly ">
                <img src={Flag} alt="FlagImg" />
                <h3 className="text-[#b6b6b5]">English</h3>
                <i className="text-[#b6b6b5] fa-solid fa-angle-down"></i>
              </div>
              <div className="flex   w-[70px] items-center justify-evenly ">
                <h3 className="text-[#b6b6b5]">INR</h3>
                <i className="text-[#b6b6b5] fa-solid fa-angle-down"></i>
              </div>
            </div>

            <div className="sm:block md:hidden text-white">
              <i className="text-[20px] fa-solid fa-plus text-[#b6b6b5]"></i>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center   w-full">
        <div className="flex justify-between w-[96%]  items-center my-4">
          <img
            className="w-[125.28px] h-[49.99px]"
            src="https://www.intellisoft.in/wp-content/uploads/2024/10/Intellisoft-.svg"
            alt="logoImg"
          />
          <div className=" hidden  lg:flex  lg:items-center  lg:justify-center   w-[60%]">
            <h1 className="font-semibold text-[#1a2334] mx-6">Demos</h1>
            <h1 className="font-semibold text-[#1a2334] mx-6">Courses</h1>
            <h1 className="font-semibold text-[#1a2334] mx-6">Pages</h1>
            <h1 className="font-semibold text-[#1a2334] mx-6">Elements</h1>
            <h1 className="font-semibold text-[#1a2334] mx-6">Help</h1>
            <h1 className="font-semibold text-[#1a2334] mx-6">Blog</h1>
          </div>
          <div className="flex   w-[160px] md:w-[280px] items-center justify-around">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <div className="border-l-[#e3e1ee] w-[0.1px] h-[28px] border-2 "></div>
            <h1 className="font-semibold text-[#1a2334]">Admin</h1>
            <div
              onClick={() => {
                setMenu(true);
              }}
              className=" w-[32px] h-[40px]  sm:block lg:hidden"
            >
              <i className="ml-[5px] mt-[13px]  fa-solid fa-bars"></i>
            </div>
            <button
              type="button"
              className="hidden lg:block border-2 border-blue-700 w-[120px] h-[37px] rounded-3xl"
            >
              <marquee className="font-semibold text-[#1a2334]">
                Enroll Now
              </marquee>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Nav;
