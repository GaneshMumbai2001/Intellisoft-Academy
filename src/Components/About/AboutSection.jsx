import React from "react";
import '/about/bg-org.png'

 function AboutSection() {
    return (
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <img src="/about.jpg" alt="About" className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Know About Intellisoft Learning Platform</h2>
            <p className="mt-4">Flexible Classes, Learn From Anywhere, Experienced Teacher’s service.</p>
            <button className="mt-6 bg-purple-600 px-6 py-3 rounded-lg">More About Us</button>
          </div>
        </div>
      </div>
    );
  }

  export default AboutSection;



