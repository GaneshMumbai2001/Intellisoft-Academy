import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const eventsData = [
  {
    id: 1,
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/event-2-1.webp",
    location: "Paris",
    time: "10:00 am - 6:00 pm",
    title: "Elegant Light Box Paper Cut Dioramas",
  },
  {
    id: 2,
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/conversion.webp",
    location: "London, UK",
    time: "10:00 am - 1:00 pm",
    title: "Painting Art Contest 2020 for Intellisoft Club",
  },
  {
    id: 3,
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/girl.jpg",
    location: "Hakia, Ukraine",
    time: "9:00 am - 3:00 pm",
    title: "International Education Fair 2023",
  },
  {
    id: 4,
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/conversion.webp",
    location: "New York",
    time: "9:00 am - 7:00 am",
    title: "Most Effective Ways for Education's",
  },
  {
    id: 5,
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/girl.jpg",
    location: "Tokyo, Japan",
    time: "8:30 am - 5:00 pm",
    title: "Creative Learning Techniques in 2024",
  },
  {
    id: 6,
    image: "https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/03/event-2-1.webp",
    location: "Berlin, Germany",
    time: "7:00 am - 4:00 pm",
    title: "Next-Gen AI in Education Conference",
  },
];

const Events = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#ac92dd] py-[100px] relative">
      {/* Heading */}
      <div className="w-[210px] h-[38px] text-[12.5px] font-semibold flex items-center justify-center rounded-2xl bg-[#b0a5e9] text-[#fefeff]">
        STIMULATED TO TAKE PART IN?
      </div>
      <h1 className="text-[36px] font-bold text-white mt-4">Upcoming Events</h1>

      {/* Swiper for Event Cards */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full px-5 mt-5 max-w-[1200px]"
      >
        {eventsData.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="w-full bg-white rounded-xl shadow-lg p-7">
              <img className="w-full h-[250px] rounded-lg object-cover" src={event.image} alt={event.title} />
              <div className="mt-4 text-gray-600 text-sm">{event.location} • {event.time}</div>
              <h2 className="font-bold text-xl mt-2">{event.title}</h2>
              <button className="text-sm mt-4 py-2 px-5 border rounded-lg border-gray-300 text-gray-800">
                Get Ticket
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;