
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const HowWeWork = ({
    title = 'How Our Process Works',
    description = 'We guide you step-by-step through the process of achieving your dreams..',
    buttonText = 'Start Today',
    videoUrl = '/about/video.mp4',  // Default example URL
    buttonLink = '#',
  }) => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center items-center w-8/9 rounded-lg overflow-hidden">
          {/* Left Side Content */}
          <div className="flex-1 w-[1400px] p-10">
            <a 
              href={buttonLink}
              className="text-[10.42px] inline-block px-4 py-2 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-5 hover:bg-blue-300 transition"
            >
              HOW WE WORK
            </a>
            <h1 className="text-[32.1px] font-bold mb-4">{title}</h1>
            <p className="text-[13.5px] text-gray-600 text-sm mb-6">{description}</p>
  
            <div className=" flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 opacity-50 hover:w-[100px] hover:bg-blue-600 flex items-center justify-center text-white"></div>
              <Link
                href={buttonLink} 
                className="text-[13.5px] text-blue-500 text-base font-medium hover:underline relative left-[-20px]"
              >
                {buttonText}
              </Link>
            </div>
          </div>
  
          {/* Right Side Video */}
          <div className="flex-1 min-w-[300px] p-5">
            <iframe 
              className="w-full h-64 md:h-80 rounded-lg"
              src={videoUrl}
              allowFullScreen
              title="How We Work Video"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowWeWork;
  