import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  
  const navigationItems = [
    { id: 1, label: "Demos", subItems: ["Demo 1", "Demo 2", "Demo 3"] },
    { id: 2, label: "Courses", subItems: ["Course 1", "Course 2"] },
    { id: 3, label: "Pages", subItems: ["About", "Contact"] },
    { id: 4, label: "Elements", subItems: ["Buttons", "Forms"] },
    { id: 5, label: "Blog", subItems: ["Latest Posts", "Categories"] },
    { id: 6, label: "Help", subItems: ["FAQ", "Support"] },
  ];

  function NavigationItem({ label, subItems }) {
    return (
      <div
        className="relative group leading-5 hover:cursor-pointer"
        onMouseEnter={() => setDropdownOpen(label)}
        onMouseLeave={() => setDropdownOpen(null)}
      >
        {label}
        {subItems && dropdownOpen === label && (
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md p-2 flex flex-col gap-2 z-50">
            {subItems.map((sub, index) => (
              <div key={index} className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                {sub}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1000px] shadow-md relative">
      {/* Logo - Click to Open Sidebar */}
      <img onClick={() => setIsOpen(true)}
        src="/navbar/intellisoft.png"
        alt="Logo"
        className="d:hidden object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer"
      />

      {/* Hamburger Menu Button */}
   

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <img
            src="/navbar/intellisoft.png"
            alt="Logo"
            className="object-contain shrink-0 max-w-full w-[115px] hover:cursor-pointer"
          />
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

                 <p className="px-5 py-2 text-gray-600">We're always in search for talented and motivated people. Don't be shy, introduce yourself!</p>
                    <div className="px-5">
                        <a href="mailto:contact@intellisoft.in" className="flex items-center gap-2 text-gray-700"> 📧 contact@intellisoft.in </a>
                        <a href="tel:+919705134869" className="flex items-center gap-2 text-gray-700 mt-2"> 📞 +91 97051 34869 </a>
                    </div>

        {/* Menu Items */}
        <ul className="mt-5">
          {navigationItems.map((menu) => (
            <li key={menu.id} className="border-b">
              <button
                className="w-full text-left px-5 py-3 text-gray-700 flex justify-between items-center hover:bg-gray-100"
                onClick={() => setDropdownOpen(dropdownOpen === menu.label ? null : menu.label)}
              >
                {menu.label}
                <span>{dropdownOpen === menu.label ? "−" : "+"}</span>
              </button>
              {dropdownOpen === menu.label && (
                <ul className="bg-gray-50">
                  {menu.subItems.map((sub, index) => (
                    <li key={index} className="px-8 py-2 text-gray-700 hover:bg-gray-200">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-[999] md:hidden" onClick={() => setIsOpen(false)}></div>}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
        {navigationItems.map((item) => (
          <NavigationItem key={item.id} label={item.label} subItems={item.subItems} />
        ))}
      </nav>

      {/* Join Now Button */}
      <button className="px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:cursor-pointer">
        Join Now
      </button>
    </div>
  );
}

export default Navbar;
