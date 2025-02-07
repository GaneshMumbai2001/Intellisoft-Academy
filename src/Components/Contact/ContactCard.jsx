import React from "react";

export function ContactCard({ title, items }) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center px-3 pt-6 basis-0 max-w-[1001px] min-w-[240px]">
      <div className="flex overflow-hidden flex-col px-8 py-9 w-full bg-white rounded shadow-lg min-h-[189px] max-md:px-5">
        <div className="text-3xl leading-none text-blue-600"></div>
        <div className="flex flex-col mt-4 w-full text-base leading-7 text-gray-500">
          <div className="text-base font-semibold tracking-wider leading-none text-gray-800">
            {title}
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start py-0.5 mt-4 w-full"
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
