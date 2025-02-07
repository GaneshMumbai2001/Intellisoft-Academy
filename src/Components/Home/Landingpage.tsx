// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import joinImage1 from '/home/ov1.png';
// import joinImage2 from '/home/ov4.png';
// import joinImage3 from '/home/ov3.png';
// import landImg from '/home/land-img.png';
// import hilleryImg from '/home/hillery.png';

// const imageData = [
//   {
//     id: 1,
//     images: [
//       { src: joinImage1, name: "Riya" },
//       { src: joinImage2, name: "John" },
//       { src: joinImage3, name: "Jeni" }
//     ],
//     altText: "Join",
//     description: "Join Over 3000+ Students",
//     subDescription: "Have a new idea every week."
//   },
//   {
//     id: 2,
//     imgSrc: landImg,
//     altText: "Landing",
//     description: "Innovative Language Academic Platform for Your Career",
//   },
//   {
//     id: 3,
//     imgSrc: hilleryImg,
//     altText: "Hillery",
//     profileName: "Hillery",
//     profileLocation: "/ USA",
//     rating: "★★★★★",
//     reviewText: "(Google Review)",
//   }
// ];

// const LandingPage = () => {
//   return (
//     <div className="relative min-h-screen bg-[#EFF1FF]">
//       <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
//         <div className="flex flex-col-reverse md:flex-row w-[1100px] p-4 relative">
//           <div className="absolute top-48 left-[-200px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-[80px] opacity-80"></div>
//           <div className="absolute top-[-120px] right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-[80px] opacity-80"></div>
          
//           {/* Text Section */}
//           <div className="text-white p-10 w-full h-auto md:w-1/2">
//             <button className="tagline text-[10.42px] text-[#2F57EF] rounded-md bg-[#2f55ef5b] py-1 px-2">
//               EDUCATION FOR EVERYONE
//             </button>
//             <h1 className="font-bold text-[39.67px] text-[#192335] my-0 w-8/7 md:w-8/7 sm:w-full">
//               Innovative <span className="highlight text-transparent bg-clip-text bg-gradient-to-r from-[#2F57EF] to-[#B966E7] text-[46px]">Language Academic</span> Platform for Your Career.
//             </h1>
//             <div className="join-over flex flex-wrap items-center my-6">
//               {imageData.filter(item => item.id === 1).map((item) => (
//                 <React.Fragment key={item.id}>
//                   {item.images.map((image, index) => (
//                     <div className="relative group" key={index}>
//                       <img src={image.src} alt={`${item.altText} ${index}`} className="h-[50px] w-[50px]  rounded-full border-3 border-[#ffffff] hover:scale-110 md:flex" />
//                       <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-[#2F57EF] to-[#B966E7]  text-white text-sm p-2 rounded-md">
//                         {image.name}
//                       </div>
//                     </div>
//                   ))}
//                   <span className="join-content text-left p-2">
//                     <h6 className="font-bold text-[#192335] text-[12.87px]">{item.description}</h6>
//                     <p className="text-[#6B7385] font-light text-[11.72px]">{item.subDescription}</p>
//                   </span>
//                 </React.Fragment>
//               ))}
//             </div>
//             <div className="button-container">
//               <Link to="#content" className="text-[11.81px] inline-block m-1">
//                 <button className="signup cursor-pointer py-3 px-5 rounded-md bg-gradient-to-r from-[#2F57EF] to-[#B966E7] text-white w-full text-center block sm:w-auto hover:bg-gradient-to-r hover:from-[#2F57EF] hover:via-[#BA66E7BD] hover:to-[#2F57EF] transition-all duration-1000">
//                   Sign Up Now
//                 </button>
//               </Link>
//               <Link to="#content" className="text-[11.72px] inline-block m-1">
//                 <button className="find-courses cursor-pointer bg-[#E6E3F1] text-[#192335] border-2 border-[#1923352c] py-3 px-5 rounded-md w-full sm:w-auto hover:text-[#E6E3F1] hover:bg-gradient-to-r hover:from-[#18191e] hover:to-[#040406] transition-all duration-500">
//                   Find Courses
//                 </button>
//               </Link>
//             </div>
//           </div>
          
//           {/* Image Section */}
//           <div className="text-white p-10 w-full h-auto md:w-1/2">
//             {imageData.filter(item => item.id === 2).map((item, index) => (
//               <div className="img-lan-4 w-full h-auto" key={index}>
//                 <img src={item.imgSrc} alt={item.altText} className="w-full rounded-lg h-[400px] object-cover p-5" />
//               </div>
//             ))}
//             {imageData.filter(item => item.id === 3).map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="card-hillery relative bottom-[80px] right-[70px] flex items-start"
//                 animate={{ y: [0, 20, 0] }}
//                 transition={{ repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" }}
//               >
//                 <div className="img-p relative bottom-[30px] left-[30px]">
//                   <img src={item.imgSrc} alt={item.altText} className="profile-img rounded-full w-[70px] h-[70px]" />
//                 </div>
//                 <div className="card bg-white p-5 rounded-lg shadow-md w-[250px]">
//                   <div className="profile-info">
//                     <h3 className="font-bold text-[#192335] text-[13.5px]">{item.profileName}<span className="text-[#6B7385] text-[10.5px]">{item.profileLocation}</span></h3>
//                   </div>
//                   <div className="rating mt-2 text-[#FFA41B] text-[9.75px]">
//                     <span>{item.rating}</span>
//                     <span className="text-[#6B7385]">{item.reviewText}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import joinImage1 from "/home/ov1.png";
import joinImage2 from "/home/ov4.png";
import joinImage3 from "/home/ov3.png";
import landImg from "/home/land-img.png";
import hilleryImg from "/home/hillery.png";

const imageData = [
  {
    id: 1,
    images: [
      { src: joinImage1, name: "Riya" },
      { src: joinImage2, name: "John" },
      { src: joinImage3, name: "Jeni" },
    ],
    altText: "Join",
    description: "Join Over 3000+ Students",
    subDescription: "Have a new idea every week.",
  },
  {
    id: 2,
    imgSrc: landImg,
    altText: "Landing",
    description: "Innovative Language Academic Platform for Your Career",
  },
  {
    id: 3,
    imgSrc: hilleryImg,
    altText: "Hillery",
    profileName: "Hillery",
    profileLocation: "/ USA",
    rating: "★★★★★",
    reviewText: "(Google Review)",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div className="relative min-h-screen bg-[#EFF1FF]">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-col-reverse md:flex-row w-[1100px] p-4 relative"
        >
          <div className="absolute top-48 left-[-200px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-[80px] opacity-80"></div>
          <div className="absolute top-[-120px] right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-[80px] opacity-80"></div>

          {/* Text Section */}
          <motion.div
            className="text-white p-10 w-full h-auto md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <motion.button
              className="tagline text-[10.42px] text-[#2F57EF] rounded-md bg-[#2f55ef5b] py-1 px-2"
              whileHover={{ scale: 1.1 }}
            >
              EDUCATION FOR EVERYONE
            </motion.button>
            <h1 className="font-bold text-[39.67px] text-[#192335] my-0 w-8/7 md:w-8/7 sm:w-full">
              Innovative{" "}
              <span className="highlight text-transparent bg-clip-text bg-gradient-to-r from-[#2F57EF] to-[#B966E7] text-[46px]">
                Language Academic
              </span>{" "}
              Platform for Your Career.
            </h1>

            <div className="join-over flex flex-wrap items-center my-6">
              {imageData
                .filter((item) => item.id === 1)
                .map((item) => (
                  <React.Fragment key={item.id}>
                    {item.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          src={image.src}
                          alt={`${item.altText} ${index}`}
                          className="h-[50px] w-[50px] rounded-full border-3 border-[#ffffff] md:flex"
                        />
                        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-[#2F57EF] to-[#B966E7] text-white text-sm p-2 rounded-md">
                          {image.name}
                        </div>
                      </motion.div>
                    ))}
                    <span className="join-content text-left p-2">
                      <h6 className="font-bold text-[#192335] text-[12.87px]">
                        {item.description}
                      </h6>
                      <p className="text-[#6B7385] font-light text-[11.72px]">
                        {item.subDescription}
                      </p>
                    </span>
                  </React.Fragment>
                ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="text-white p-10 w-full h-auto md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
          >
            {imageData
              .filter((item) => item.id === 2)
              .map((item, index) => (
                <motion.div
                  className="img-lan-4 w-full h-auto"
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.altText}
                    className="w-full rounded-lg h-[400px] object-cover p-5"
                  />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
