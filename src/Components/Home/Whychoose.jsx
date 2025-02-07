import React, { useState, useEffect } from 'react';
import w1Image1 from '/home/w1.png';
import w1Image2 from '/home/w2.png';
import w1Image3 from '/home/w-hat.png';
import w1Image4 from '/home/w4.png';

const WhyChoose = () => {
  const [meter, setMeter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Track animation state

  // Array holding the data for each box
  const whyChooseData = [
    {
      id: 1,
      imageSrc: w1Image1,
      title: "+800h",
      description: "Courses & Video",
      lineHeight: "h-[35px]", // Specific height for the line
      circleBottom: "bottom-6", // Position for the circle
      lineBottom: "bottom-7", // Position for the line
    },
    {
      id: 2,
      imageSrc: w1Image2,
      title: "+800h",
      description: "Courses & Video",
      lineHeight: "h-[80px]", // Specific height for the line
      circleBottom: "bottom-1", // Position for the circle
      lineBottom: "bottom-1", // Position for the line (touches the top line)
    },
    {
      id: 3,
      imageSrc: w1Image3,
      title: "+800h",
      description: "Courses & Video",
      lineHeight: "h-[30px]", // Specific height for the line
      circleBottom: "bottom-7", // Position for the circle
      lineBottom: "bottom-7", // Position for the line
    },
    {
      id: 4,
      imageSrc: w1Image4,
      title: "+800h",
      description: "Courses & Video",
      lineHeight: "h-[80px]", // Specific height for the line
      circleBottom: "bottom-0", // Position for the circle
      lineBottom: "bottom-0", // Position for the line (touches the top line)
    },
  ];

  useEffect(() => {
    const animateMeter = () => {
      let start = 0;
      const end = 800;
      const duration = 2000; // 2 seconds for full animation
      const stepTime = duration / end;

      const interval = setInterval(() => {
        start += 1;
        setMeter(start);

        if (start >= end) {
          clearInterval(interval);
          // Pause for 2 seconds before starting the next animation cycle
          setTimeout(() => {
            animateMeter(); // Restart the animation after pause
          }, 5000);
        }
      }, stepTime);
    };

    animateMeter(); // Start the initial animation cycle

    // Cleanup function to clear intervals if the component unmounts
    return () => clearInterval();
  }, []);

  return (
    <div className="choose-box mx-auto my-24 px-4">
      <div className="choose-why text-center">
        <p className="text-center text-[10.34px] font-normal py-2">
          <span className=" bg-pink-400/20 px-3 py-2 rounded-full">Why Choose Us</span>
        </p>
        <h2 className="text-center text-[31.97px] font-bold mb-4">Why Choose Histudy</h2>
        <p className="text-center text-[15px] text-gray-600">Language Academic?</p>
      </div>

      <div className="total-why-width flex justify-center items-center flex-wrap gap-8">
        <div className="line-why flex justify-center my-4 w-full">
          <div className="line-width relative top-10 w-[80%] sm:w-[910px] h-[4px] rounded-full bg-gradient-to-r from-[#2F57EF] to-white"></div>
        </div>

        <div className="box-big-why flex justify-center items-center flex-wrap relative bottom-4 gap-6 w-full">
          {/* Dynamically render the boxes based on the data array */}
          {whyChooseData.map((item) => (
            <div
              key={item.id}
              className="box-card-why w-[250px] sm:w-[240px] md:w-[270px]"
            >
              <div className="center-box flex justify-center">
                <div className={`circle-why w-[15px] h-[15px] rounded-full bg-white border-3 border-[#2F57EF] relative ${item.circleBottom}`}></div>
              </div>
              <div className="center-box flex justify-center">
                <div className={`vert-line w-[3px] ${item.lineHeight} rounded-full bg-[#2F57EF] relative ${item.lineBottom}`}></div>
              </div>
              <div className="box-color-why bg-white relative bottom-7 w-full h-full flex flex-col items-center justify-center text-center rounded-lg shadow-lg border-b-5 border-b-[#637FEA]  hover:translate-y-[-10px] transform transition-all duration-300">
                <div className="why-choose-icon w-full h-[120px]">
                  <img className="object-contain w-full h-full" src={item.imageSrc} alt="Courses"/>
                </div>
                <h2 className="text-[36.91px] font-bold text-[#192335] my-5">{meter}+ h</h2>
                <p className="text-[13.39px] text-[#6B7385] text-base font-medium my-10">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
