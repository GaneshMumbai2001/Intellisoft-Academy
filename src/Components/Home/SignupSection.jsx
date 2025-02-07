// import React, { useState } from "react";
// import resourceImage from '/home/resource1.png';

// const SignupSection = () => {
//   // State for form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   // Countdown data state (you can update these values dynamically as needed)
//   const [countdownData, setCountdownData] = useState([
//     { label: "Days", value: 5 },
//     { label: "Hours", value: 55 },
//     { label: "Minutes", value: 30 },
//     { label: "Seconds", value: 10 },
//   ]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform form submission logic (e.g., send data to server)
//     console.log("Form submitted:", formData);
//   };

//   return (
// <div className="flex flex-wrap justify-center bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${resourceImage})` }}>
//     <div className="flex flex-wrap justify-center bg-cover bg-fixed bg-center p-15 w-6/7 md:w-6/7 sm:w-full">
//       <div className="flex-1 flex flex-col justify-center text-white">
//         <div className="bg-[#ffffff32] bg-opacity-10 rounded-[20px] p-1 w-max">
//           <div className="text-[10.34px] text-[#ffffff]">WHY CHOOSE US</div>
//         </div>
//         <h1 className="text-[32.1px] font-bold mt-4">Free Resources Learning English for Beginner</h1>
//         <p className="text-[14.88px] mt-2">
//           Learning new technology, data science, university, communicate to the global world and build a bright future with our histudy.
//         </p>
//         <div className="flex flex-wrap mt-6 ">
//           {/* Dynamically render the countdown */}
//           {countdownData.map((item, index) => (
//             <div
//               key={index}
//               className={`text-center ${index === 0 ? 'bg-[#19233574]' : 'bg-[#19233574] bg-opacity-25'} p-4 rounded-lg m-2 shadow-md w-20`}
//             >
//               <span className="block text-[28.48px] font-bold">{item.value}</span>
//               <span className="block text-[13.5px] font-medium">{item.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center">
//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
//           <div className="text-[10.42px] bg-gray-200 bg-opacity-20 rounded-xl p-2 w-max text-blue-600 font-semibold">EDUCATION FOR EVERYONE</div>
//           <div className="text-[24.6px] font-bold text-gray-800 mt-4">Sign Up for Free Resources</div>

//           {/* Dynamic form fields */}
//           {['name', 'email', 'phone'].map((field, index) => (
//             <input
//               key={index}
//               type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
//               name={field}
//               value={formData[field]}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               required
//               onChange={handleChange}
//               className="w-full mt-6 border-b border-blue-500 focus:border-blue-700 focus:outline-none text-[13.5px] p-2"
//             />
//           ))}

//           <button
//             type="submit"
//             className="mt-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg text-[11.72px] font-semibold w-full hover:opacity-90"
//           >
//             Get It Now
//           </button>
//         </form>
//       </div>
//     </div>
// </div>
//   );
// };

// export default SignupSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import resourceImage from "/home/resource1.png";

const SignupSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [countdownData] = useState([
    { label: "Days", value: 5 },
    { label: "Hours", value: 55 },
    { label: "Minutes", value: 30 },
    { label: "Seconds", value: 10 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${resourceImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap justify-center bg-cover bg-fixed bg-center p-15 w-6/7 md:w-6/7 sm:w-full">
        <motion.div 
          className="flex-1 flex flex-col justify-center text-white"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#ffffff32] bg-opacity-10 rounded-[20px] p-1 w-max">
            <div className="text-[10.34px] text-[#ffffff]">WHY CHOOSE US</div>
          </div>
          <h1 className="text-[32.1px] font-bold mt-4">Free Resources Learning English for Beginner</h1>
          <p className="text-[14.88px] mt-2">
            Learning new technology, data science, university, communicate to the global world and build a bright future with our histudy.
          </p>
          <div className="flex flex-wrap mt-6">
            {countdownData.map((item, index) => (
              <div key={index} className="text-center bg-[#19233574] p-4 rounded-lg m-2 shadow-md w-20">
                <span className="block text-[28.48px] font-bold">{item.value}</span>
                <span className="block text-[13.5px] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
            <div className="text-[10.42px] bg-gray-200 bg-opacity-20 rounded-xl p-2 w-max text-blue-600 font-semibold">EDUCATION FOR EVERYONE</div>
            <div className="text-[24.6px] font-bold text-gray-800 mt-4">Sign Up for Free Resources</div>
            {['name', 'email', 'phone'].map((field, index) => (
              <input
                key={index}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                value={formData[field]}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                required
                onChange={handleChange}
                className="w-full mt-6 border-b border-blue-500 focus:border-blue-700 focus:outline-none text-[13.5px] p-2"
              />
            ))}
            <button type="submit" className="mt-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg text-[11.72px] font-semibold w-full hover:opacity-90">
              Get It Now
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignupSection;
