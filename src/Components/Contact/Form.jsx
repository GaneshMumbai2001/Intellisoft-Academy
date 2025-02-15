// import React from "react";

// export function Form() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const FormInput = ({ label, type = "text", minHeight = "38px" }) => {
//     return (
//       <div className="flex relative flex-col mt-6 w-full">
//         <label
//           htmlFor={`${label.toLowerCase()}-input`}
//           className="absolute left-0 z-0 text-sm text-white tracking-wide leading-loose text- h-[21px] top-[7px]"
//         >
//           {label}
//         </label>
//         <div className="flex z-0 justify-center items-start w-full">
//           <input
//             type={type}
//             id={`${label.toLowerCase()}-input`}
//             className="flex flex-1 shrink w-full border-solid shadow-sm basis-0 bg-white bg-opacity-0 border-b-[1.5px] border-b-slate-200 max-w-[396px] min-w-[240px]"
//             style={{ minHeight: minHeight }}
//             aria-label={label}
//             placeholder={label}
//           />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col py-10 pr-9 pl-11 w-full bg-white rounded shadow-lg max-w-[501px] max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-col items-start pb-3 w-full text-xs font-medium leading-none text-blue-600 uppercase">
//         <div className="px-4 py-2 bg-blue-600/10 bg-opacity-10 rounded-[75px]">
//           EDUCATION FOR EVERYONE
//         </div>
//       </div>
//       <h2 className="w-full text-2xl font-bold leading-7 text-gray-800">
//         Get a Free Course You Can
//         <br />
//         Contact With Me
//       </h2>
//       <form onSubmit={handleSubmit} className="flex flex-col pb-10 w-full">
//         <FormInput label="Name" />
//         <FormInput label="Email" type="email" />
//         <FormInput label="Your Subject" />
//         <FormInput label="Message" minHeight="100px" />
//         <button
//           type="submit"
//           className="flex justify-center items-center px-40 py-px mt-6 w-full tracking-wide text-center bg-gradient-to-r from-[#2F57EF] via-[#B966E7] to-[#2F57EF] text-white rounded-md min-h-[38px] max-md:px-5"
//           aria-label="Submit form"
//         >
//           GET IT NOW
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Form() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="flex flex-col p-6 sm:p-10 w-full bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="text-xs font-semibold text-blue-600 uppercase text-center">
        <div className="px-4 py-2 bg-blue-100 rounded-full inline-block">
          Education for Everyone
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mt-4">
        Get a Free Course <br className="hidden sm:block" /> Contact With Me
      </h2>

      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <FormInput label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <FormInput label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
        <FormInput label="Message" name="message" minHeight="100px" value={formData.message} onChange={handleChange} required />

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hover:opacity-90 transition duration-300"
        >
          GET IT NOW
        </button>
      </form>
    </div>
  );
}

const FormInput = ({ label, type = "text", minHeight = "38px", ...props }) => {
  return (
    <div className="relative w-full">
      <label htmlFor={props.name} className="text-gray-600 text-sm">
        {label}
      </label>
      <input
        type={type}
        id={props.name}
        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        style={{ minHeight }}
        {...props}
      />
    </div>
  );
};
