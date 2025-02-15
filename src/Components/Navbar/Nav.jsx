import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 1, label: "Demos" },
    { id: 2, label: "Courses" },
    { id: 3, label: "Pages" },
    { id: 4, label: "Elements" },
    { id: 5, label: "Help" },
    { id: 6, label: "Blog" },
  ];

  function NavigationItem({ label }) {
    return (
      <div className="hover:text-blue-600 hover:cursor-pointer" role="menuitem" tabIndex="0">
        {label}
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-xs flex justify-between items-center px-6 py-2">
        <span className="bg-blue-600 text-white px-2 py-1 rounded text-[10px]">Hot</span>
        <p className="flex-1 text-center">👋 Intro price. Get Intellisoft for Big Sale -95% off.</p>
        <div className="flex gap-3 items-center">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <span className="ml-2">English</span>
          <span>INR</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <img src="/public/navbar/intellisoft.png" alt="Logo" className="w-[115px] hover:cursor-pointer" />
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-gray-800">
            <MdGridView /> Category
          </button>
        </div>

        {/* Search, Cart, and Admin */}
        <div className="flex items-center gap-4">
          <FaSearch className="text-gray-800" />
          <div className="relative">
            <FaShoppingCart className="text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 rounded-full">0</span>
          </div>
          <span className="flex items-center gap-1 text-gray-800">
            <FaUser /> Admin
          </span>
          <button className="px-6 py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
