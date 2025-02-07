// import React from 'react';
// import news1 from '/home/news1.png';
// import news2 from '/home/news2.png';
// import news3 from '/home/news3.png';

// const HistudyNews = () => {
//   // Data for the news articles
//   const newsData = [
//     {
//       id: 1,
//       imageSrc: news1,
//       title: "Learn How More Money With University.",
//       description: "It is a long established fact that a reader.",
//       link: "#"
//     },
//     {
//       id: 2,
//       imageSrc: news2,
//       title: "Is University The Most Trending Thing Now?",
//       description: "It is a long established fact that a reader.",
//       link: "#"
//     },
//     {
//       id: 3,
//       imageSrc: news3,
//       title: "Understand The Background Of University Now.",
//       description: "It is a long established fact that a reader.",
//       link: "#"
//     },
//   ];

//   return (
//     <div className="histudy mt-12 bg-gradient-to-b from-white to-indigo-50 ">
//       <p className="text-center text-sm font-normal py-2">
//         <span className="text-[10.01px] bg-pink-400/20 px-3 py-2 rounded-full">OUR POSTS</span>
//       </p>
//       <h2 className="text-center text-[32.1px] font-bold mb-4">Histudy News</h2>
//       <p className="text-center text-[15px] text-gray-600">Language Academy Blog.</p>

//       <div className="histudy-news-container flex flex-wrap gap-5 justify-center bg-[#F9F9FF] max-w-8xl p-12">
//         {/* Map through the newsData array to generate news cards dynamically */}
//         {newsData.map((news) => (
//           <div key={news.id} className="histudy-news-card rounded-xl w-[325px] h-[350px] bg-white shadow-lg">
//             <img src={news.imageSrc} alt={`news${news.id}`} className="w-full h-[180px] object-cover rounded-t-xl" />
//             <div className="con-his p-4">
//               <h3 className="text-[18.97px] font-bold text-gray-900 mb-2">{news.title}</h3>
//               <p className="text-[13.5px] text-sm font-medium text-gray-600">{news.description}</p>
//               <a className="readmore-link text-[10.5px] font-medium text-gray-500 my-[30px]" href={news.link}>
//                 Readmore  →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HistudyNews;

import React from "react";
import { motion } from "framer-motion";
import news1 from "/home/news1.png";
import news2 from "/home/news2.png";
import news3 from "/home/news3.png";

const HistudyNews = () => {
  // Data for the news articles
  const newsData = [
    {
      id: 1,
      imageSrc: news1,
      title: "Learn How More Money With University.",
      description: "It is a long established fact that a reader.",
      link: "#",
    },
    {
      id: 2,
      imageSrc: news2,
      title: "Is University The Most Trending Thing Now?",
      description: "It is a long established fact that a reader.",
      link: "#",
    },
    {
      id: 3,
      imageSrc: news3,
      title: "Understand The Background Of University Now.",
      description: "It is a long established fact that a reader.",
      link: "#",
    },
  ];

  return (
    <motion.div
      className="histudy mt-12 bg-gradient-to-b from-white to-indigo-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-center text-sm font-normal py-2">
        <span className="text-[10.01px] bg-pink-400/20 px-3 py-2 rounded-full">
          OUR POSTS
        </span>
      </p>
      <h2 className="text-center text-[32.1px] font-bold mb-4">
        Histudy News
      </h2>
      <p className="text-center text-[15px] text-gray-600">
        Language Academy Blog.
      </p>

      <div className="histudy-news-container flex flex-wrap gap-5 justify-center bg-[#F9F9FF] max-w-8xl p-12">
        {/* Map through the newsData array to generate news cards dynamically */}
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className="histudy-news-card rounded-xl w-[325px] h-[350px] bg-white shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={news.imageSrc}
              alt={`news${news.id}`}
              className="w-full h-[180px] object-cover rounded-t-xl"
              whileHover={{ opacity: 0.9 }}
            />
            <div className="con-his p-4">
              <h3 className="text-[18.97px] font-bold text-gray-900 mb-2">
                {news.title}
              </h3>
              <p className="text-[13.5px] text-sm font-medium text-gray-600">
                {news.description}
              </p>
              <a
                className="readmore-link text-[10.5px] font-medium text-gray-500 my-[30px] block"
                href={news.link}
              >
                Readmore →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HistudyNews;
