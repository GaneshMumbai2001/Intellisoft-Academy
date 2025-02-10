import React, { useState } from "react";

const images = [
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
  "./img/demo.png",
];

function Demo() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-blue-400 max-w-6xl w-full p-4">
        {/* Dropdown Navigation */}
        <div
          className="relative inline-block text-left mb-4"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="px-4 py-2 bg-white text-blue-600 font-medium rounded-md shadow-md">Demos</button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 flex flex-col gap-2 z-50">
              <a href="#" className="px-4 py-2 hover:bg-gray-200">Demo 1</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-200">Demo 2</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-200">Demo 3</a>
            </div>
          )}
        </div>

        <div className="grid grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden py-4 px-4">
              <img
                src={src}
                alt={`Design Preview ${index + 1}`}
                className="shadow-lg w-full rounded-lg object-cover transform transition-transform duration-300 group-hover:-translate-y-2"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <strong>Demo Start →</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Demo;