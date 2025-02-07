// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { Link } from 'react-router-dom';
// import person1 from "/about/lp1.png";
// import person2 from "/about/lp2.png";
// import person3 from "/about/lp3.png";

// // Keyframe animation
// const upDownAnimation = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-20px); /* Moves up 20px */
//   }
//   100% {
//     transform: translateY(20px); /* Moves down 20px */
//   }
// `;

// // Styled components for the images with animation
// const AnimatedImage = styled.img`
//   animation: ${upDownAnimation} 2s infinite ease-in-out;
// `;

// const AboutUsperson= () => {
//   return (
//     <div className="flex justify-center items-center m-10">
//       <div className="flex flex-wrap bg-white rounded-lg w-full max-w-6xl sm:max-w-8xl">
        
//         {/* Left Side: Images */}
//         <div className="box-three w-full md:w-1/2 flex flex-col items-center">
//           <div className="women_men">
//             <div className="inline-block">
//               <img className="women_pink w-60 md:w-40 lg:w-48 xl:w-60 rounded-lg" src={person1} alt="Person 1" />
//             </div>
//             <div className="inline-block">
//               <AnimatedImage
//                 className="menimg w-50 md:w-40 lg:w-48 xl:w-50 relative bottom-30 rounded-lg"
//                 src={person2}
//                 alt="Person 2"
//               />
//             </div>
//           </div>
//           <div className="girl_pen flex justify-center mt-[-50px]">
//             <AnimatedImage className="w-65 md:w-56 lg:w-60 xl:w-65" src={person3} alt="Person 3" />
//           </div>
//         </div>

//         {/* Right Side: Text Content */}
//         <div className="w-full md:w-1/2 p-5">
//           <p className="text-center text-pink-500 text-sm bg-pink-200 inline-block px-4 py-1 rounded-full">
//             Know About Us
//           </p>
//           <h2 className="text-5xl font-bold text-gray-900 my-2">
//             Know About Histudy Learning Platform
//           </h2>
//           <p className="text-gray-600 text-base">
//             Far far away, behind the word mountains, far from the countries
//             Vokalia and Consonantia...
//           </p>

//           {/* Features List */}
//           <div className="mt-5 space-y-4">
//             <div className="flex items-center">
//               <div className="w-8 h-8 bg-red-100 rounded-full"></div>
//               <div className="ml-3">
//                 <div className="text-2xl font-semibold text-gray-700">Flexible Classes</div>
//                 <p className="text-sm text-gray-600">
//                   A long established fact that a reader will be distracted...
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
//               <div className="ml-3">
//                 <div className="text-2xl font-semibold text-gray-700">Learn From Anywhere</div>
//                 <p className="text-sm text-gray-600">
//                   Sed distinctio repudiandae eos recusandae...
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center">
//               <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
//               <div className="ml-3">
//                 <div className="text-2xl font-semibold text-gray-700">Learn From Anywhere</div>
//                 <p className="text-sm text-gray-600">
//                   Sed distinctio repudiandae eos recusandae...
//                 </p>
//               </div>
//             </div>

            
          
//           </div>

//           {/* Button */}
//           <Link
//             href="#"
//             className="inline-block mt-5 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400">
//             More About Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsperson;


import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import person1 from "/about/lp1.png";
import person2 from "/about/lp2.png";
import person3 from "/about/lp3.png";

// Keyframe animation
const upDownAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

// Styled component for animated images
const AnimatedImage = styled.img`
  animation: ${upDownAnimation} 2s infinite ease-in-out;
`;

// Image Data
const images = [
  { src: person1, alt: "Person 1", className: "w-60 md:w-40 lg:w-48 xl:w-60 rounded-lg" },
  { src: person2, alt: "Person 2", className: "w-50 md:w-40 lg:w-48 xl:w-50 rounded-lg", animated: true },
  { src: person3, alt: "Person 3", className: "w-65 md:w-56 lg:w-60 xl:w-65", animated: true }
];

// Features Data
const features = [
  { title: "Flexible Classes", description: "It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.", color: "bg-red-100", width: "w-full" },
  { title: "Learn From Anywhere", description: "Sed distinctio repudiandae eos recusandae laborum eaque non eiusiure suscipit laborum eaque non eius iure suscipit.", color: "bg-blue-100", width: "w-full" },
  { title: "Experienced Teacher's service.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid mollitia Officia Officia, aliquid mollitia Officia, aliquid mollitia.", color: "bg-green-100", width: "w-full" }
];

const AboutUsperson = () => {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="flex flex-wrap bg-white rounded-lg w-full max-w-6xl sm:max-w-8xl">
        {/* Left Side: Images */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
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
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia...
          </p>

          {/* Features List */}
          <div className="mt-5 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-center ${feature.width}` }>
                <div className={`w-11 h-8 ${feature.color} rounded-full`}></div>
                <div className="ml-3">
                  <div className="text-[14.77px] font-semibold text-gray-700">{feature.title}</div>
                  <p className="text-[11.91px] text-gray-600 ">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            to="#"
            className="text-[11.72px] inline-block mt-5 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md transition-all duration-300 transform hover:scale-105">
            More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsperson;
