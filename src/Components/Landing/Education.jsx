// import React, { useEffect, useRef } from "react";
// import scrollProfile1 from "/landing/scrollProfile1.png";
// import scrollProfile2 from "/landing/scrollProfile2.png";
// import faceBookLogo from "/landing/facebookLogo.png";
// import pLogo from "/landing/pLogo.png";
// import oLogo from "/landing/oLogo.png";

// const testimonials = [
//   {
//     image: faceBookLogo,
//     text: "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem.",
//     profileImage: scrollProfile2,
//     author: "Marketing",
//     gradient: false,
//   },
//   {
//     image: pLogo,
//     text: "Histudy education, vulputate at sapien sit amet, auctor iaculis lorem.",
//     profileImage: scrollProfile1,
//     author: "Marketing",
//     gradient: true,
//   },
//   {
//     image: oLogo,
//     text: "Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem.",
//     profileImage: scrollProfile1,
//     author: "Marketing",
//     gradient: true,
//   },
// ];

// const AutoScrollContainer = ({ children }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const scroll = () => {
//       if (containerRef.current) {
//         containerRef.current.scrollLeft += 370;
//         if (
//           containerRef.current.scrollLeft >=
//           containerRef.current.scrollWidth - containerRef.current.clientWidth
//         ) {
//           containerRef.current.scrollLeft = 0;
//         }
//       }
//     };
    
//     const scrollInterval = setInterval(scroll, 3000);
//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div ref={containerRef} className="mt-12 w-full flex justify-center overflow-x-auto scroll-smooth">
//       <div className="flex flex-nowrap">{children}</div>
//     </div>
//   );
// };

// const Education = () => {
//   return (
//     <div className="w-full flex flex-col items-center py-12">
//       <div className="text-xs font-semibold rounded-xl bg-[#e4e9fd] text-[#2f56ef] px-4 py-1 mt-12">
//         EDUCATION FOR EVERYONE
//       </div>
//       <div className="mt-6 text-center sm:text-4xl lg:text-5xl font-bold text-[#1a2235] tracking-wider px-4">
//         People like HiStudy education. No joking - here's the proof!
//       </div>

//       {/* Top auto-scrolling testimonials */}
//       <AutoScrollContainer>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className={`w-[370px] rounded-lg shadow-md m-4 ${testimonial.gradient ? 'bg-gradient-to-r from-[#4d5aee] to-[#ae65e8]' : 'bg-white'}`}>
//             <div className="w-[90%] m-auto flex flex-col items-center py-6">
//               <img className="w-16 h-16" src={testimonial.image} alt={`testimonial ${index + 1} logo`} />
//               <p className="mt-4 text-sm text-black text-center">{testimonial.text}</p>
//               <div className="flex items-center justify-between mt-4 w-full">
//                 <img className="w-8 h-8 rounded-full" src={testimonial.profileImage} alt={`testimonial ${index + 1} profile`} />
//                 <p className="text-black text-sm">{testimonial.author}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </AutoScrollContainer>

//       {/* Bottom auto-scrolling testimonials */}
//       <AutoScrollContainer>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className={`w-[370px] rounded-lg shadow-md m-4 ${testimonial.gradient ? 'bg-gradient-to-r from-[#4d5aee] to-[#ae65e8]' : 'bg-white'}`}>
//             <div className="w-[90%] m-auto flex flex-col items-center py-6">
//               <img className="w-16 h-16" src={testimonial.image} alt={`testimonial ${index + 1} logo`} />
//               <p className="mt-4 text-sm text-black text-center">{testimonial.text}</p>
//               <div className="flex items-center justify-between mt-4 w-full">
//                 <img className="w-8 h-8 rounded-full" src={testimonial.profileImage} alt={`testimonial ${index + 1} profile`} />
//                 <p className="text-black text-sm">{testimonial.author}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </AutoScrollContainer>
//     </div>
//   );
// };

// export default Education;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import hubspotLogo from "/landing/scrollProfile1.png";
import facebookLogo from "/landing/facebookLogo.png";
import yelpLogo from "/landing/pLogo.png";
import marketingLogo from "/landing/oLogo.png";

const testimonials = [
  {
    id: 1,
    text: "Like this histudy, vulputate at sapien sit amet, auctor iaculis lorem.",
    role: "Marketing",
    logo: marketingLogo,
    author: "John R, CEO",
  },
  {
    id: 2,
    text: "Educational template, vulputate at sapien sit amet, auctor iaculis lorem.",
    role: "Sr Designer",
    logo: hubspotLogo,
    author: "Martha Maldonado, CEO",
  },
  {
    id: 3,
    text: "Online learning, vulputate at sapien sit amet, auctor iaculis lorem.",
    role: "Executive",
    logo: facebookLogo,
    author: "Michael D, CEO",
  },
  {
    id: 4,
    text: "Our educational, vulputate at sapien sit amet, auctor iaculis lorem.",
    role: "CEO",
    logo: yelpLogo,
    author: "Valerie J, CEO",
    bgColor: "bg-gradient-to-r from-blue-500 to-pink-500",
  },
  {
    id: 5,
    text: "New testimonial, demonstrating additional card.",
    role: "Developer",
    logo: marketingLogo,
    author: "Chris P, CTO",
  },
  {
    id: 6,
    text: "Another testimonial, added for variety.",
    role: "Manager",
    logo: hubspotLogo,
    author: "Alex K, COO",
  },
];

const Education = () => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-6">
        People like histudy education. No joking – here’s the proof!
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-[100%] mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="m-2">
            <div className={`p-6 bg-white shadow-lg rounded-xl text-center ${testimonial.bgColor || ''}`}>
              <img src={testimonial.logo} alt="Company Logo" className="w-10 mx-auto mb-4" />
              <p className="text-gray-700 italic">{testimonial.text}</p>
              <h4 className="font-semibold mt-4">{testimonial.role}</h4>
              <p className="text-sm text-gray-500">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-[100%] mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="m-2">
            <div className={`p-6 bg-white shadow-lg rounded-xl text-center ${testimonial.bgColor || ''}`}>
              <img src={testimonial.logo} alt="Company Logo" className="w-10 mx-auto mb-4" />
              <p className="text-gray-700 italic">{testimonial.text}</p>
              <h4 className="font-semibold mt-4">{testimonial.role}</h4>
              <p className="text-sm text-gray-500">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  );
};

export default Education;