import React from "react";
import postMain from "/blog/blog1.png";
import post1 from "/blog/blog2.png";
import post2 from "/blog/blog3.png";
import post3 from "/blog/blog4.png";

const Posts = () => {
  return (
    <div className="w-full flex items-center bg-[#faf9ff] justify-center py-12">
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full flex flex-wrap items-center justify-between mb-10">
          <div className="flex flex-col">
            <button className="px-4 py-1 bg-[#f4e7f1] text-[#cd94aa] w-30 rounded-xl text-xs font-semibold">BLOG POST</button>
            <h1 className="text-4xl font-bold mt-3 text-[#1a2235]">Most Popular Post.</h1>
          </div>
          <button className="px-6 py-3 text-white bg-gradient-to-r from-[#4e5aed] via-[#b967e7] to-[#4e5aed] rounded-xl text-lg font-medium shadow-md hover:opacity-90 transition">See All Articles</button>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Main Post */}
          <div className="w-full md:w-[650px] bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-[280px] object-cover" src={postMain} alt="Main Post" />
            <div className="p-6">
              <h1 className="text-2xl font-extrabold text-[#1a2235] mb-3">Difficult Things About Education.</h1>
              <p className="text-[#6b7280] mb-4">There are many variations of passages of Lorem Ipsum available,</p>
              <button className="text-[#4e5aed] font-medium hover:underline">Learn More →</button>
            </div>
          </div>

          {/* Side Posts */}
          <div className="w-full md:w-[400px] flex flex-col gap-4">
            {[{ img: post1, title: "React" }, { img: post2, title: "Why Is Education So Famous?" }, { img: post3, title: "Education Is So Famous, But Why?" }].map((post, index) => (
              <div key={index} className="flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src={post.img} alt={post.title} className="w-32 h-28 object-cover" />
                <div className="p-4 flex flex-col justify-center">
                  <h1 className="text-lg font-bold text-[#1a2235]">{post.title}</h1>
                  <button className="text-[#4e5aed] text-sm mt-1 hover:underline">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;