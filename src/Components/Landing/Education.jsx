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
    text: "Like this Intellisoft, vulputate at sapien sit amet, auctor iaculis lorem.",
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
        People like Intellisoft education. No joking – here’s the proof!
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