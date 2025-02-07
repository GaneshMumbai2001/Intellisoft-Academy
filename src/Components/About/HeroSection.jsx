import React from "react";
import '/about/bg-org.png'
function HeroSection() {
    return (
      <div className="bg-cover bg-center h-screen flex items-center justify-center text-white text-center px-4" style={{ backgroundImage: "url('Image (1).png')" }}>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Take Challenge for Build Your Life.</h1>
          <p className="text-lg mt-4">The World Most Lessons for Back to Your Life.</p>
          <button className="mt-6 bg-purple-600 px-6 py-3 rounded-lg">More About Us</button>
        </div>
      </div>
    );
  }
  export default HeroSection;
