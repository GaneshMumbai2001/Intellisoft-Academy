// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";

// // Keyframe animation
// const upDownAnimation = keyframes`
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
//   100% {
//     transform: translateY(20px);
//   }
// `;

// // Styled component for animated images
// const AnimatedImage = styled(motion.img)`
//   animation: ${upDownAnimation} 2s infinite ease-in-out;
// `;

// // Image Data
// const images = [
//   { src: "/home/a1.png", alt: "Person 1", className: "w-60 md:w-40 lg:w-48 xl:w-60 rounded-lg" },
//   { src: "/home/a2.png", alt: "Person 2", className: "w-50 md:w-40 lg:w-48 xl:w-50 rounded-lg", animated: true },
//   { src: "/home/a3.png", alt: "Person 3", className: "w-65 md:w-56 lg:w-60 xl:w-65", animated: true }
// ];

// // Features Data
// const features = [
//   { title: "Flexible Classes", description: "A long established fact that a reader will be distracted...", color: "bg-red-400" },
//   { title: "Learn From Anywhere", description: "Sed distinctio repudiandae eos recusandae...", color: "bg-blue-400" }
// ];

// const AboutUs = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="flex justify-center items-center"
//     >
//       <div className="flex flex-wrap bg-white rounded-lg w-full max-w-6xl sm:max-w-8xl">
//         {/* Left Side: Images */}
//         <div className="box-three w-full md:w-1/2 flex flex-col items-center">
//           <div className="women_men flex flex-wrap justify-center">
//             {images.slice(0, 2).map((img, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="inline-block m-2"
//               >
//                 {img.animated ? (
//                   <AnimatedImage className={img.className} src={img.src} alt={img.alt} />
//                 ) : (
//                   <img className={img.className} src={img.src} alt={img.alt} />
//                 )}
//               </motion.div>
//             ))}
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="girl_pen flex justify-center mt-[-50px]"
//           >
//             <AnimatedImage className={images[2].className} src={images[2].src} alt={images[2].alt} />
//           </motion.div>
//         </div>

//         {/* Right Side: Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2 p-5"
//         >
//           <p className="text-[10.25px] text-center text-pink-500 text-sm bg-pink-200 inline-block px-4 py-1 rounded-full">
//             Know About Us
//           </p>
//           <h2 className="text-[32.1px] font-bold text-gray-900 my-2">
//             Know About Histudy Learning Platform
//           </h2>
//           <p className="text-[13.5px] text-gray-600 text-base">
//             Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
//           </p>

//           {/* Features List */}
//           <div className="mt-5 space-y-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="flex items-center"
//               >
//                 <div className={`w-8 h-8 ${feature.color} rounded-full`}></div>
//                 <div className="ml-3">
//                   <div className="text-[14.77px] font-semibold text-gray-700">{feature.title}</div>
//                   <p className="text-[12px] text-gray-600">{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Button */}
//           <motion.a
//             href="#"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="text-[11.72px] inline-block mt-5 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md"
//           >
//             More About Us
//           </motion.a>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default AboutUs;

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

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center m-10">
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
            Know About Intellisoft Learning Platform
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

export default AboutUs;
