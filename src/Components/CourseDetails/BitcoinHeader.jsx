import React from "react";
import { motion } from "framer-motion";

const BitcoinHeader = ({ setView, view, setSearchQuery }) => {
  const totalCourses = 21;
  const loadedCourses = 6;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-10 md:py-20 w-full flex justify-center bg-gradient-to-b from-[#c2bacb]  to-[#2F57EF]"
    >
      <section className="w-full max-w-6xl px-4  text-black">
        <nav className="text-xs md:text-sm text-black">Home .Bitcoin Forums</nav>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 my-4"
        >
          <h1 className="text-2xl md:text-3xl font-bold  text-black">Bitcoin Forums</h1>
          <span className="text-xs md:text-sm bg-white/20 text-black px-3 py-1 rounded-full">
            {totalCourses} Courses
          </span>
        </motion.div>

        <p className="text-black-100 text-sm md:text-lg">
          Courses that help beginner designers become true unicorns.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4"
        >
          {/* Toggle Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 w-full md:w-auto">
            <div className="bg-[#ffffff7f] px-4 py-2 rounded-full flex space-x-2">
              <button
                className={`px-4 py-1 rounded-full text-sm md:text-base ${view === "grid" ? "bg-white text-gray-800" : "text-white border border-white"}`}
                onClick={() => setView("grid")}
              >
                Grid
              </button>
              <button
                className={`px-4 py-1 rounded-full text-sm md:text-base ${view === "list" ? "bg-white text-gray-800" : "text-white border border-white"}`}
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
            <span className="text-xs md:text-sm text-black-100 ">
              Showing 1-{loadedCourses} of {totalCourses} results
            </span>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              className="bg-white/20 text-white px-4 py-2 border border-white rounded-full placeholder-white outline-none w-full md:w-auto"
              placeholder="Search Your Course..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-4 py-2 bg-white text-gray-800 font-bold rounded-full w-full md:w-auto">
              Filter
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default BitcoinHeader;