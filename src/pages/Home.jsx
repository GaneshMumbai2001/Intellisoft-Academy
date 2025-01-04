import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [discussion, setDiscussion] = useState("");

  const handlePost = () => {
    alert(discussion);
  };

  return (
    <div className="flex p-10 pb-32 bg-[#F5F5F5] min-h-screen gap-10">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4 bg-white flex flex-col gap-5 rounded-md shadow-md p-5">
        <h1 className="text-2xl font-bold">Welcome to JavaScript Course</h1>
        <p className="text-base text-[#374151]">
          This course provides an in-depth introduction to JavaScript, covering
          the fundamentals and advanced topics.
        </p>
        <p className="text-2xl font-bold mt-5">Progress Tracking</p>

        <div className="flex mt-3 justify-between items-center">
          <p className="text-base text-[#374151]">
            Lesson 1: Introduction to JavaScript
          </p>
          <p className="text-base text-[#374151]">Completed</p>
          <p className="text-base text-[#374151]">10/10</p>
        </div>
        <ProgressBar progress={100} />

    
        <div className="flex mt-3 justify-between items-center">
          <p className="text-base text-[#374151]">
            Lesson 2: Variables and Data Types
          </p>
          <p className="text-base text-[#374151]">Completed</p>
          <p className="text-base text-[#374151]">5/10</p>
        </div>
        <ProgressBar progress={50} />
        <div className=" mt-3 flex flex-col gap-5">
          <p className="text-2xl font-bold text-[#374151]">Discussion Forum</p>
          <textarea value={discussion} onChange={(e) => setDiscussion(e.target.value)} className="w-full h-40 border border-gray-300 rounded-lg p-2"></textarea>
          <div className="flex justify-end">
            <button onClick={handlePost} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Post
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
}
