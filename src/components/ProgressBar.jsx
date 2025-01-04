import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Course Progress
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className=" h-2.5 rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor:
              progress < 50 ? "red" : progress < 75 ? "yellow" : "green",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
