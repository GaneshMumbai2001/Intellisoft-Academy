import React from "react";

export function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const FormInput = ({ label, type = "text", minHeight = "38px" }) => {
    return (
      <div className="flex relative flex-col mt-6 w-full">
        <label
          htmlFor={`${label.toLowerCase()}-input`}
          className="absolute left-0 z-0 text-sm text-white tracking-wide leading-loose text- h-[21px] top-[7px]"
        >
          {label}
        </label>
        <div className="flex z-0 justify-center items-start w-full">
          <input
            type={type}
            id={`${label.toLowerCase()}-input`}
            className="flex flex-1 shrink w-full border-solid shadow-sm basis-0 bg-white bg-opacity-0 border-b-[1.5px] border-b-slate-200 max-w-[396px] min-w-[240px]"
            style={{ minHeight: minHeight }}
            aria-label={label}
            placeholder={label}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col py-10 pr-9 pl-11 w-full bg-white rounded shadow-lg max-w-[501px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start pb-3 w-full text-xs font-medium leading-none text-blue-600 uppercase">
        <div className="px-4 py-2 bg-blue-600/10 bg-opacity-10 rounded-[75px]">
          EDUCATION FOR EVERYONE
        </div>
      </div>
      <h2 className="w-full text-2xl font-bold leading-7 text-gray-800">
        Get a Free Course You Can
        <br />
        Contact With Me
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col pb-10 w-full">
        <FormInput label="Name" />
        <FormInput label="Email" type="email" />
        <FormInput label="Your Subject" />
        <FormInput label="Message" minHeight="100px" />
        <button
          type="submit"
          className="flex justify-center items-center px-40 py-px mt-6 w-full tracking-wide text-center bg-gradient-to-r from-[#2F57EF] via-[#B966E7] to-[#2F57EF] text-white rounded-md min-h-[38px] max-md:px-5"
          aria-label="Submit form"
        >
          GET IT NOW
        </button>
      </form>
    </div>
  );
}
