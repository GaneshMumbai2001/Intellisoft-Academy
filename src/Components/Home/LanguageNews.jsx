import React from "react";
import lan1 from '/home/lan1.png';
import lan2 from '/home/lan2.png';
import lan3 from '/home/lan3.png';
import lan4 from '/home/lan4.png';
import lan5 from '/home/lan5.png';
import lan6 from '/home/lan6.png';
import c1 from '/home/c1.png';
import c2 from '/home/c2.png';
import c3 from '/home/c3.png';
import c4 from '/home/c4.png';
import c5 from '/home/c5.png';
import c6 from '/home/c6.png';

const LanguageNews = () => {
  const cardData = [
    {
       imgSrc: lan1,
       title: 'Basics of HiStudy Theme',
       icon: c1, programs: '21 programs',
       link: '#Basics' 
    },
    {
       imgSrc: lan2,
       title: 'French Courses',
       icon: c2, 
       programs: '32 programs', 
       link: '#FrenchCourses' 
    },
    { 
      imgSrc: lan3, 
      title: 'German Courses', 
      icon: c3, programs: '21 programs', 
      link: '#BasicsTheme' 
    },
    { 
      imgSrc: lan4, 
      title: 'Italian Courses', 
      icon: c4, 
      programs: '5 programs', 
      link: '#ItalianCourses' 
    },
    { imgSrc: lan5, 
      title: 'Italian Courses', 
      icon: c5, 
      programs: '5 programs', 
      link: '#ItalianCourses' 
    },
    { imgSrc: lan6, 
      title: 'Italian Courses', 
      icon: c6, 
      programs: '5 programs', 
      link: '#ItalianCourses' }
  ];

  return (
    <div className="box-language text-center">
      <p className="text-center font-normal py-2">
        <span className="text-[13.5px]  bg-pink-400/20 px-3 py-2 rounded-full">OUR LANGUAGE COURSES</span>
      </p>
      <h2 className="text-center text-[39.6px] font-bold mb-4">Language Courses</h2>
      <p className="text-center text-[15px] text-gray-600">Language Academy Courses?</p>

      <div className="language-container flex flex-wrap justify-center items-center gap-[55px] p-[20px]">
        {cardData.map(({ imgSrc, title, icon, programs, link }, index) => (
          <div key={index} className="language-card bg-white rounded-[8px] shadow-md w-[300px] p-[10px] transition-transform hover:translate-y-[-10px]">
            <div className="relative group">
              <img 
                src={imgSrc} 
                alt={`Lan ${index + 1}`} 
                className="language-image w-full rounded-[8px] group-hover:bg-gradient-to-r group-hover:from-[#4facfe] group-hover:to-[#00f2fe] group-hover:opacity-80 transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={link} className="bg-white text-[#192335] px-[15px] py-[8px] rounded-[30px] cursor-pointer">Learn More</a>
              </div>
            </div>
            <div className="box-inline-1 flex justify-between">
              <h3 className="language-heading mt-[10px] text-[19.12px] font-bold">{title}</h3>
              <a className="language-btn text-[#192335] text-[13.29px] mt-[10px]">→</a>
            </div>
            <div className="box-inline-2 flex items-center mt-[10px]">
              <img src={icon} alt={`icon ${index + 1}`} className="w-[20px] h-[20px] rounded-full" />
              <p className="language-name text-[13.08px] text-[#555] ml-[5px]">{programs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageNews;

