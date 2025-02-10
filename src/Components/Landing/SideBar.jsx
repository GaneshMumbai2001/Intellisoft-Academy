import React from "react";

const SideBar = ({ menu, setMenu }) => {
  return (
    menu && (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex"
        onClick={() => setMenu(false)}
      >
        <div
          className="w-[20%] h-full bg-white flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMenu(false)}
            className="text-black text-2xl self-end m-4"
          >
            ✖
          </button>

          <h1 className="font-semibold rounded-xl hover:bg-gray-500 hover:text-[white] flex item justify-center my-2  text-[#1a2334] mx-6">Demos</h1>
          <h1 className="font-semibold rounded-xl hover:bg-gray-500 hover:text-[white]  flex item justify-center my-2 text-[#1a2334] mx-6">Courses</h1>
          <h1 className="font-semibold rounded-xl hover:bg-gray-500 hover:text-[white]  flex item justify-center my-2 text-[#1a2334] mx-6">Pages</h1>
          <h1 className="font-semibold rounded-xl hover:bg-gray-500 hover:text-[white]  flex item justify-center my-2 text-[#1a2334] mx-6">Elements</h1>
          <h1 className="font-semibold rounded-xl hover:bg-gray-500 hover:text-[white]  flex item justify-center my-2 text-[#1a2334] mx-6">Help</h1>
          <h1 className="font-semibold rounded-xl hover:bg-gray-500 hover:text-[white]  flex item justify-center my-2 text-[#1a2334] mx-6">Blog</h1>
        </div>
      </div>
    )
  );
};

export default SideBar;