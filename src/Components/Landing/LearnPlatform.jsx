
// import React from "react";
// import spectsBoy from "/landing/spectsBoy.png";
// import walkingGirl from "/landing/walkingGirl.png";
// import explainingGirl from "/landing/explainingGirl.png";
// // import container from "/landing/Container.png";
// import videoImg from "/landing/videoImg.png";
// import playButton from "/landing/playButton.png";
// import w1Image1 from "/landing/w1Image1.png";
// import w1Image2 from "/landing/w1Image2.png";
// import w1Image3 from "/landing/w1Image3.png";
// import w1Image4 from "/landing/w1Image4.png";
// import { useState, useEffect } from "react";

// const LearnPlatform = () => {
//   const [meter, setMeter] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(true); 

  
//   const whyChooseData = [
//     {
//       id: 1,
//       imageSrc: w1Image1,
//       title: "+800h",
//       description: "Courses & Video",
//       lineHeight: "h-[35px]", 
//       circleBottom: "bottom-6", 
//       lineBottom: "bottom-7", 
//     },
//     {
//       id: 2,
//       imageSrc: w1Image2,
//       title: "+800h",
//       description: "Courses & Video",
//       lineHeight: "h-[80px]", 
//       circleBottom: "bottom-1", 
//       lineBottom: "bottom-1", 
//     },
//     {
//       id: 3,
//       imageSrc: w1Image3,
//       title: "+800h",
//       description: "Courses & Video",
//       lineHeight: "h-[30px]", 
//       circleBottom: "bottom-7", 
//       lineBottom: "bottom-7", 
//     },
//     {
//       id: 4,
//       imageSrc: w1Image4,
//       title: "+800h",
//       description: "Courses & Video",
//       lineHeight: "h-[80px]", 
//       circleBottom: "bottom-0", 
//       lineBottom: "bottom-0",  
//     },
//   ];

//   useEffect(() => {
//     const animateMeter = () => {
//       let start = 0;
//       const end = 800;
//       const duration = 2000; 
//       const stepTime = duration / end;

//       const interval = setInterval(() => {
//         start += 1;
//         setMeter(start);

//         if (start >= end) {
//           clearInterval(interval);
//           setTimeout(() => {
//             animateMeter(); 
//           }, 5000);
//         }
//       }, stepTime);
//     };

//     animateMeter(); 

    
//     return () => clearInterval();
//   }, []);

//   return (
//     <div className="w-full  relative flex flex-col items-center justify-center">
//       <div className="w-[90%] flex flex-col items-center relative pt-[65px] pb-[65px] ">


//         <div className="w-full pt-[65px] pb-[65px] flex items-center justify-center relative">
//           <div className="w-[80%] flex flex-wrap items-center justify-center mt-[25px] mb-[65px]">
//             <div className="w-[550px] flex relative items-center justify-center h-[700px] overflow-hidden">
//               <img
//                 className="absolute w-[47.5%] h-[367.5px] top-0 left-0"
//                 src={walkingGirl}
//                 alt="walkingGirlImg"
//               />
//               <img
//                 className="animate-bounce absolute w-[33%] h-[187.5px] top-[100px] left-[340px]"
//                 src={spectsBoy}
//                 alt="spectsBoyImg"
//               />
//               <img
//                 className="animate-bounce w-[57%] h-[375px] absolute top-[325px] left-[185px]"
//                 src={explainingGirl}
//                 alt="explainingGirlImg"
//               />
//             </div>

//             <div className="sm:w-[550px]  md:w-[550px] lg:w-[400px]  ml-[35px] lg:mt-[30px] sm:mt-[65px]">
//               <button
//                 type="button"
//                 className="w-[118.14px] h-[26.25px]  rounded-xl text-[11px] text-[#e49c82] bg-[#fcf1ef] "
//               >
//                 KNOW ABOUT US
//               </button>
//               <h2 className="mt-[5px] text-[30px] font-bold text-[#1a2235]">
//                 know About Histudy Learning Platform
//               </h2>
//               <p className="text-[13.5px] mt-[18px] text-[#6c7384]">
//                 Far far away, behind the word mountains, far from the countries
//                 Vokalia and Consonantia, there live the blind texts. Separated
//                 they live in Bookmarksgrove right at the coast of the Semantics,
//                 a large language ocean.
//               </p>

//               <div className="mt-[35px]  flex items-start justify-normal">
//                 <div className=" w-[13%] flex items-start justify-center">
//                   <div className=" w-[40px] bg-[#fcf1ef] rounded-[50%] h-[40px]"></div>
//                 </div>
//                 <div className="w-[87%]  flex">
//                   <div>
//                     <h3 className="text-[14.5px] font-medium text-[#6B7385]">
//                       Flexible Classes
//                     </h3>
//                     <p className="text-[11.5px] text-[#6B7385] mt-[8px] font-semibold">
//                       It is a long established fact that a reader will be
//                       distracted by this on readable content of when looking at
//                       its layout.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-[35px]  flex items-start justify-normal">
//                 <div className=" w-[13%] flex items-start justify-center">
//                   <div className="w-[40px] bg-[#e4e9fd] rounded-[50%] h-[40px]"></div>
//                 </div>
//                 <div className="w-[87%] flex">
//                   <div>
//                     <h3 className="text-[14.5px] font-medium text-[#6B7385]">
//                       Learn From Anywhere
//                     </h3>
//                     <p className="text-[11.5px] text-[#6B7385] mt-[8px] font-semibold">
//                       Sed distinctio repudiandae eos recusandae laborum eaque
//                       non eius iure suscipit laborum eaque non eius iure
//                       suscipit.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 className="bg-blue-600 mt-[65px] w-[145.79px] text-[#fffdff] h-[45px] border-red-400 rounded-xl"
//                 type="button"
//               >
//                 More About Us
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="choose-box w-full mx-auto my-24 px-4">
//           <div className="choose-why text-center">
//             <p className="text-center text-[10.34px] font-normal py-2">
//               <span className=" bg-pink-400/20 px-3 py-2 rounded-full">
//                 Why Choose Us
//               </span>
//             </p>
//             <h2 className="text-center text-[31.97px] font-bold mb-4">
//               Why Choose Histudy
//             </h2>
//             <p className="text-center text-[15px] text-gray-600">
//               Language Academic?
//             </p>
//           </div>

//           <div className="total-why-width flex justify-center items-center flex-wrap gap-8">
//             <div className="line-why flex justify-center my-4 w-full">
//               <div className="line-width relative top-10 w-[80%] sm:w-[910px] h-[4px] rounded-full bg-gradient-to-r from-[#2F57EF] to-white"></div>
//             </div>

//             <div className="box-big-why flex justify-center items-center flex-wrap relative bottom-4 gap-6 w-full">
              
//               {whyChooseData.map((item) => (
//                 <div
//                   key={item.id}
//                   className="box-card-why w-[250px] sm:w-[240px] md:w-[270px]"
//                 >
//                   <div className="center-box flex justify-center">
//                     <div
//                       className={`circle-why w-[15px] h-[15px] rounded-full bg-white border-3 border-[#2F57EF] relative ${item.circleBottom}`}
//                     ></div>
//                   </div>
//                   <div className="center-box flex justify-center">
//                     <div
//                       className={`vert-line w-[3px] ${item.lineHeight} rounded-full bg-[#2F57EF] relative ${item.lineBottom}`}
//                     ></div>
//                   </div>
//                   <div className="box-color-why bg-white relative bottom-7 w-full h-full flex flex-col items-center justify-center text-center rounded-lg shadow-lg border-b-5 border-b-[#637FEA]  hover:translate-y-[-10px] transform transition-all duration-300">
//                     <div className="why-choose-icon w-full h-[120px]">
//                       <img
//                         className="object-contain w-full h-full"
//                         src={item.imageSrc}
//                         alt="Courses"
//                       />
//                     </div>
//                     <h2 className="text-[36.91px] font-bold text-[#192335] my-5">
//                       {meter}+ h
//                     </h2>
//                     <p className="text-[13.39px] text-[#6B7385] text-base font-medium my-10">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-[70%] border-2 border-green-500 absolute z-10 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-evenly  mt-[10%]">
//         <div className="w-[450px] rounded-xl bg-white shadow-lg flex flex-col md:flex-row items-center justify-evenly p-6">
//           <div className="w-[40%]">
//             <button className="w-[120px] h-[20px] text-[11px] rounded-xl border-2 text-[#727787] border-[#eae9f1] mb-4">
//               New Collection
//             </button>
//             <h1 className="text-[18px] text-[#1a2334] font-bold">
//               Online Courses from Histudy
//             </h1>
//             <p className="mt-[8px] text-[#727787] text-[13.7px]">
//               Top instructors from around the world
//             </p>
//           </div>

//           <div className="relative w-[40%] h-[140px] flex items-center justify-center">
//             <img
//               className="w-full h-full absolute"
//               src={videoImg}
//               alt="videoImg"
//             />
//             <img
//               className="absolute w-[40px]"
//               src={playButton}
//               alt="playButtonImg"
//             />
//           </div>
//         </div>

//         <div className="w-[450px] rounded-xl bg-white shadow-lg flex flex-col md:flex-row items-center justify-evenly p-6">
//           <div className="w-[95%]">
//             <button className="w-[120px] h-[20px] text-[11px] rounded-xl border-2 text-[#727787] border-[#eae9f1]">
//               New Collection
//             </button>
//             <h1 className="text-[18px] text-[#1a2334] font-bold">
//               Free Online Courses from Histudy
//             </h1>
//             <p className="mt-[8px] text-[#727787] text-[13.7px]">
//               Top instructors from around the world
//             </p>
//             <button className="bg-gradient-to-r from-[#4e5aed] via-[#b967e7] to-[#4e5aed] h-[40px] rounded-xl w-[125px] flex items-center justify-center text-white">
//               Join Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearnPlatform;



import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation
const upDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(20px);
  }
`;

// Styled component for animated images
const AnimatedImage = styled.img`
  animation: ${upDownAnimation} 2s infinite ease-in-out;
`;

// Image Data
const images = [
  { src: "/home/a1.png", alt: "Person 1", className: "w-60 md:w-40 lg:w-48 xl:w-60 rounded-lg" },
  { src: "/home/a2.png", alt: "Person 2", className: "w-50 md:w-40 lg:w-48 xl:w-50 rounded-lg", animated: true },
  { src: "/home/a3.png", alt: "Person 3", className: "w-65 md:w-56 lg:w-60 xl:w-65", animated: true }
];

// Features Data
const features = [
  { title: "Flexible Classes", description: "A long established fact that a reader will be distracted...", color: "bg-red-400" },
  { title: "Learn From Anywhere", description: "Sed distinctio repudiandae eos recusandae...", color: "bg-blue-400" }
];

const  LearnPlatform = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap bg-white rounded-lg w-full max-w-6xl sm:max-w-8xl">
        {/* Left Side: Images */}
        <div className="box-three w-full md:w-1/2 flex flex-col items-center">
          <div className="women_men flex flex-wrap justify-center">
            {images.slice(0, 2).map((img, index) => (
              <div key={index} className="inline-block m-2">
                {img.animated ? (
                  <AnimatedImage className={img.className} src={img.src} alt={img.alt} />
                ) : (
                  <img className={img.className} src={img.src} alt={img.alt} />
                )}
              </div>
            ))}
          </div>
          <div className="girl_pen flex justify-center mt-[-50px]">
            <AnimatedImage className={images[2].className} src={images[2].src} alt={images[2].alt} />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 p-5">
          <p className="text-[10.25px] text-center text-pink-500 text-sm bg-pink-200 inline-block px-4 py-1 rounded-full">
            Know About Us
          </p>
          <h2 className="text-[32.1px] font-bold text-gray-900 my-2">
            Know About Histudy Learning Platform
          </h2>
          <p className="text-[13.5px] text-gray-600 text-base">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </p>

          {/* Features List */}
          <div className="mt-5 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 ${feature.color} rounded-full`}></div>
                <div className="ml-3">
                  <div className="text-[14.77px] font-semibold text-gray-700">{feature.title}</div>
                  <p className="text-[12px] text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="#"
            className="text-[11.72px] inline-block mt-5 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md"
          >
            More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default  LearnPlatform;
