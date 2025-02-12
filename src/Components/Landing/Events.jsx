
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    title: "Painting Art Contest 2020 for Histudy Club",
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
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 py-[100px] relative">
      <div className="w-[210px] h-[38px] text-[12.5px] font-semibold flex items-center justify-center rounded-2xl bg-white text-gray-800 shadow-md">
        STIMULATED TO TAKE PART IN?
      </div>
      <h1 className="text-[36px] font-bold text-white mt-4">Upcoming Events</h1>
      <div className="w-[100%] mt-5 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
          className="py-5"
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center">
                <img className="w-full h-[250px] rounded-lg object-cover" src={event.image} alt={event.title} />
                <div className="mt-4 text-gray-600 text-sm">{event.location} • {event.time}</div>
                <h2 className="font-bold text-xl mt-2 text-center">{event.title}</h2>
                <button className="text-sm mt-4 py-2 px-5 border rounded-lg border-gray-300 text-gray-800 hover:bg-gray-200">Get Ticket</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
