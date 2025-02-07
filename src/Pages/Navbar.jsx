import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 1, label: "Demos" },
    { id: 2, label: "Courses" },
    { id: 3, label: "Pages" },
    { id: 4, label: "Elements" },
    { id: 5, label: "Blog" },
    { id: 6, label: "Help" },
  ];

  function NavigationItem({ label }) {
    return (
      <div
        className="leading-5 hover:cursor-pointer"
        role="menuitem"
        tabIndex="0"
      >
        {label}
      </div>
    );
  }

  return (
    <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1000px] shadow-md relative">
      <img
        src="public/navbar/intellisoft.png"
        alt="Logo"
        className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer"
      />

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-purple-500">
          <FaBars size={28} />
        </button>
        {isOpen && (
          <div className="absolute w-40 bg-white shadow-md rounded-md p-2 flex flex-col gap-2 mt-2 z-50">
            {navigationItems.map((item) => (
              <NavigationItem key={item.id} label={item.label} />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Items for Medium and Large Screens */}
      <nav
        className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap"
        role="menubar"
      >
        {navigationItems.map((item) => (
          <NavigationItem key={item.id} label={item.label} />
        ))}
      </nav>

      <button className="px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:cursor-pointer">
        Join Now
      </button>
    </div>
  );
}

export default Navbar;
