
// import React, { useState, useEffect, useRef } from 'react';
// import w1Image1 from '/home/w1.png';
// import w1Image2 from '/home/w2.png';
// import w1Image3 from '/home/w-hat.png';
// import w1Image4 from '/home/w4.png';

// const WhyChoose = () => {
//   const [meter, setMeter] = useState(0);
//   const intervalRef = useRef(null); // Use ref to track the interval

//   // Data for each box
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
//     let start = 0;
//     const end = 800;
//     const duration = 2000; // 2 seconds
//     const stepTime = duration / end;

//     const animateMeter = () => {
//       intervalRef.current = setInterval(() => {
//         setMeter(prev => {
//           if (prev >= end) {
//             clearInterval(intervalRef.current);
//             setTimeout(animateMeter, 5000); // Restart animation after 5s pause
//             return end;
//           }
//           return prev + 1;
//         });
//       }, stepTime);
//     };

//     animateMeter();

//     return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="choose-box mx-auto my-24 px-4">
//       <div className="choose-why text-center">
//         <p className="text-[10.34px] font-normal py-2">
//           <span className="bg-pink-400/20 px-3 py-2 rounded-full">Why Choose Us</span>
//         </p>
//         <h2 className="text-[31.97px] font-bold mb-4">Why Choose Histudy</h2>
//         <p className="text-[15px] text-gray-600">Language Academic?</p>
//       </div>

//       <div className="flex justify-center items-center flex-wrap gap-8">
//         <div className="flex justify-center my-4 w-full">
//           <div className="relative top-10 w-[80%] sm:w-[910px] h-[4px] rounded-full bg-gradient-to-r from-[#2F57EF] to-white"></div>
//         </div>

//         <div className="flex justify-center items-center flex-wrap relative bottom-4 gap-6 w-full">
//           {whyChooseData.map((item) => (
//             <div key={item.id} className="w-[250px] sm:w-[240px] md:w-[270px]">
//               <div className="flex justify-center">
//                 <div className={`w-[15px] h-[15px] rounded-full bg-white border-3 border-[#2F57EF] relative ${item.circleBottom}`}></div>
//               </div>
//               <div className="flex justify-center">
//                 <div className={`w-[3px] ${item.lineHeight} rounded-full bg-[#2F57EF] relative ${item.lineBottom}`}></div>
//               </div>
//               <div className="bg-white relative bottom-7 w-full h-full flex flex-col items-center justify-center text-center rounded-lg shadow-lg border-b-5 border-b-[#637FEA] hover:translate-y-[-10px] transform transition-all duration-300">
//                 <div className="w-full h-[120px]">
//                   <img className="object-contain w-full h-full" src={item.imageSrc} alt="Courses"/>
//                 </div>
//                 <h2 className="text-[36.91px] font-bold text-[#192335] my-5">{meter}+ h</h2>
//                 <p className="text-[13.39px] text-[#6B7385] text-base font-medium my-10">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import w1Image1 from '/home/w1.png';
import w1Image2 from '/home/w2.png';
import w1Image3 from '/home/w-hat.png';
import w1Image4 from '/home/w4.png';

const WhyChoose = () => {
  const [meter, setMeter] = useState(0);
  const intervalRef = useRef(null);

  const whyChooseData = [
    { id: 1, imageSrc: w1Image1, title: "+800h", description: "Courses & Video", lineHeight: "h-[35px]", circleBottom: "bottom-6", lineBottom: "bottom-7" },
    { id: 2, imageSrc: w1Image2, title: "+800h", description: "Courses & Video", lineHeight: "h-[80px]", circleBottom: "bottom-1", lineBottom: "bottom-1" },
    { id: 3, imageSrc: w1Image3, title: "+800h", description: "Courses & Video", lineHeight: "h-[30px]", circleBottom: "bottom-7", lineBottom: "bottom-7" },
    { id: 4, imageSrc: w1Image4, title: "+800h", description: "Courses & Video", lineHeight: "h-[80px]", circleBottom: "bottom-0", lineBottom: "bottom-0" },
  ];

  useEffect(() => {
    let start = 0;
    const end = 800;
    const duration = 2000;
    const stepTime = duration / end;

    const animateMeter = () => {
      intervalRef.current = setInterval(() => {
        setMeter(prev => {
          if (prev >= end) {
            clearInterval(intervalRef.current);
            setTimeout(animateMeter, 5000);
            return end;
          }
          return prev + 1;
        });
      }, stepTime);
    };

    animateMeter();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <motion.div 
      className="choose-box mx-auto my-24 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="choose-why text-center">
        <p className="text-[10.34px] font-normal py-2">
          <span className="bg-pink-400/20 px-3 py-2 rounded-full">Why Choose Us</span>
        </p>
        <h2 className="text-[31.97px] font-bold mb-4">Why Choose Histudy</h2>
        <p className="text-[15px] text-gray-600">Language Academic?</p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8">
        <motion.div 
          className="relative top-6 w-[80%] sm:w-[910px] h-[4px] rounded-full bg-gradient-to-r from-[#2F57EF] to-white"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        <div className="flex justify-center items-center flex-wrap relative bottom-4 gap-6 w-full">
          {whyChooseData.map((item) => (
            <motion.div 
              key={item.id} 
              className="w-[250px] sm:w-[240px] md:w-[270px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.id * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">
                <div className={`w-[15px] h-[15px] rounded-full bg-white border-3 border-[#2F57EF] relative ${item.circleBottom}`}></div>
              </div>
              <div className="flex justify-center">
                <div className={`w-[3px] ${item.lineHeight} rounded-full bg-[#2F57EF] relative ${item.lineBottom}`}></div>
              </div>
              <div className="bg-white relative bottom-7 w-full h-full flex flex-col items-center justify-center text-center rounded-lg shadow-lg border-b-5 border-b-[#637FEA] hover:translate-y-[-10px] transform transition-all duration-300">
                <div className="w-full h-[120px]">
                  <img className="object-contain w-full h-full" src={item.imageSrc} alt="Courses"/>
                </div>
                <h2 className="text-[36.91px] font-bold text-[#192335] my-5">{meter}+ h</h2>
                <p className="text-[13.39px] text-[#6B7385] text-base font-medium my-10">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChoose;
