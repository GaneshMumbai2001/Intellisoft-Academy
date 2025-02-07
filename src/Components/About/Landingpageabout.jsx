import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import bgImage from "/about/bg-org.png"; // Importing the image dynamically

function Landingpageabout() {
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-cover h-screen flex items-center justify-center text-white text-center px-4 transition-all duration-500 ease-in-out"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: `${bgPosition}% center`
      }}
    >
      <div className="w-full md:w-3/4">
        <div className="flex justify-center items-center">
          <Link to="#" className="text-[10.42px] bg-orange-400/10 text-orange-400 px-4 py-2 m-1 rounded-[40px] font-semibold shadow-md hover:bg-orange-500/30 hover:text-white transition">
            HOW WE WORK
          </Link>
        </div>

        <h1 className="text-[37.55px] md:text-[37.55px] font-bold m-4">
          Take Challenge for Build Your Life.
          The World Most Lessons for Back to Your Life.
        </h1>
        <div className="m-10">
        <Link
            to="#"
             className="text-[11.72px] bg-gradient-to-r from-[#2F57EF]  via-[#B966E7] via-[#ba66e7c1] to-[#4B89FF] 
             text-white px-4 py-2 mt-8 rounded-md text-lg shadow-md 
             transition-all duration-500 ease-in-out
             hover:bg-gradient-to-r hover:from-[#E766A3] hover:via-[#B966E7] hover:via-[#4B89FF] hover:to-[#2F57EF]"
        >
          More About Us
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpageabout;
