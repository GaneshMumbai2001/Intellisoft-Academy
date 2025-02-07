// import React, { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";
// import { Link } from 'react-router-dom';

// // Keyframe animation for image movement
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

// // Styled component for the animated images
// const AnimatedImage = styled.img`
//   animation: ${upDownAnimation} 2s infinite ease-in-out;
// `;

// const KnowAboutUs = ({
//   title = "Know About Histudy",
//   description = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
//   buttonText = "More About Us",
//   personImages = {
//     person1: "/about/lp1.png",
//     person2: "/about/lp2.png",
//     person3: "/about/lp3.png",
//   },
//   features = [
//     {
//       icon: "red", 
//       title: "Flexible Classes", 
//       description: "A long established fact that a reader will be distracted..."
//     },
//     {
//       icon: "blue", 
//       title: "Learn From Anywhere", 
//       description: "Sed distinctio repudiandae eos recusandae..."
//     },
//     {
//       icon: "red", 
//       title: "Interactive Sessions", 
//       description: "Engage with experts in real-time..."
//     }
//   ]
// }) => {
//   const [typedText, setTypedText] = useState("");
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const words = ["Learning", "Explore", "Discover", "Understand", "Know"];

//   useEffect(() => {
//     const typingEffect = setInterval(() => {
//       const currentWord = words[currentWordIndex];
//       if (typedText.length < currentWord.length) {
//         // Typing each letter of the current word
//         setTypedText((prev) => prev + currentWord[prev.length]);
//       } else {
//         // After typing a full word, wait a moment before moving to the next
//         setTimeout(() => {
//           setTypedText(""); // Clear the text
//           setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop to the first word if all words are typed
//         }, 500); // Pause after finishing the word
//       }
//     }, 400); // Slow down typing speed by increasing the interval to 400ms

//     return () => clearInterval(typingEffect);
//   }, [typedText, currentWordIndex, words]);

//   return (
//     <div className="flex justify-center items-center  w-full">
//       <div className="flex flex-wrap bg-white  rounded-lg w-full max-w-6xl sm:max-w-8xl">
//         {/* Left Side: Images */}
//         <div className="box-three w-full md:w-1/2 flex flex-col items-center">
//           <div className="women_men">
//             <div className="inline-block">
//               <img className="women_pink w-60 rounded-lg" src={personImages.person1} alt="Person 1" />
//             </div>
//             <div className="inline-block">
//               <AnimatedImage
//                 className="menimg w-50 relative bottom-30 rounded-lg"
//                 src={personImages.person2}
//                 alt="Person 2"
//               />
//             </div>
//           </div>
//           <div className="girl_pen flex justify-center mt-[-50px]">
//             <AnimatedImage className="w-65" src={personImages.person3} alt="Person 3" />
//           </div>
//         </div>

//         {/* Right Side: Text Content */}
//         <div className="w-full sm:w-1/2 p-5">
//           <p className="text-center text-pink-500 text-sm bg-pink-200 inline-block px-4 py-1 rounded-full">
//             Know About Us
//           </p>
//           <h2 className="text-5xl font-bold text-gray-900 my-2">
//             Know About Histudy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:">
//                {typedText} </span> Platform
//           </h2>
//           <p className="text-gray-600 text-base">{description}</p>

//           {/* Features List */}
//           <div className="mt-5 space-y-4">
//             {features.map((feature, index) => (
//               <div className="flex items-center" key={index}>
//                 <div className={`w-8 h-8 bg-${feature.icon}-400 rounded-full`}></div>
//                 <div className="ml-3">
//                   <div className="text-2xl font-semibold text-gray-700">{feature.title}</div>
//                   <p className="text-sm text-gray-600">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Button */}
//           <Link
//             href="#"
//             className="inline-block mt-5 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:py-3">
//             {buttonText}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KnowAboutUs;

