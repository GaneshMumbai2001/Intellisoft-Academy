
import React, { useState } from "react";

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
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = 3; // Show exactly 3 cards

  const handleScroll = (direction) => {
    if (direction === "right") {
      setStartIndex((prev) => Math.min(prev + cardsPerView, eventsData.length - cardsPerView));
    } else if (direction === "left") {
      setStartIndex((prev) => Math.max(prev - cardsPerView, 0));
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#ac92dd] py-[100px] relative">
      
      
      <div className="w-[210px] h-[38px] text-[12.5px] font-semibold flex items-center justify-center rounded-2xl bg-[#b0a5e9] text-[#fefeff]">
        STIMULATED TO TAKE PART IN?
      </div>

      <h1 className="text-[36px] font-bold text-white mt-4">Upcoming Events</h1>

      <div className="relative w-[85%] overflow-hidden mt-5 flex items-center justify-center">
        
        <button
          className="absolute left-0 bg-blue-600 text-white p-3 rounded-full"
          onClick={() => handleScroll("left")}
        >
          <i className="fa-solid fa-arrow-left text-[20px]"></i>
        </button>

        
        <div className="flex space-x-7 transition-transform duration-300 ease-in-out">
          {eventsData.slice(startIndex, startIndex + cardsPerView).map((event) => (
            <div key={event.id} className="w-[380px] bg-white rounded-xl shadow-lg p-7 flex-shrink-0">
              <img className="w-full h-[250px] rounded-lg object-cover" src={event.image} alt={event.title} />
              <div className="mt-4 text-gray-600 text-sm">{event.location} • {event.time}</div>
              <h2 className="font-bold text-xl mt-2">{event.title}</h2>
              <button className="text-sm mt-4 py-2 px-5 border rounded-lg border-gray-300 text-gray-800">Get Ticket</button>
            </div>
          ))}
        </div>


        <button
          className="absolute right-0 bg-blue-600 text-white p-3 rounded-full"
          onClick={() => handleScroll("right")}
        >
          <i className="fa-solid fa-arrow-right text-[20px]"></i>
        </button>
      </div>
    </div>
  );
};

export default Events;
