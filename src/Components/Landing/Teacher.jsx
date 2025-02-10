// import React from "react";

// // Import images correctly if they are static assets
// import mainTeacher from "/landing/MainTeacher.png";
// import teacher1 from "/landing/Teacher1.png";
// import teacher2 from "/landing/Teacher2.png";
// import teacher3 from "/landing/Teacher3.png";
// import teacher4 from "/landing/Teacher4.png";
// import teacher5 from "/landing/Teacher5.png";

// const teachersData = [
//   {
//     id: 1,
//     name: "Alexendra Scott",
//     role: "Creative Developer",
//     location: "USA",
//     image: mainTeacher,
//     description:
//       "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
//     phone: "+1-202-555-0174",
//     email: "alexendra@gmail.com",
//   },
//   { id: 2, image: teacher1 },
//   { id: 3, image: teacher2 },
//   { id: 4, image: teacher3 },
//   { id: 5, image: teacher4 },
//   { id: 6, image: teacher5 },
// ];

// const Teacher = ({ teachers = teachersData }) => {
//   return (
//     <div className="w-full flex flex-col items-center justify-center">
//       {/* Heading */}
//       <div className="w-[210px] h-[38px] text-[14px] font-semibold flex items-center justify-center rounded-2xl bg-[#b0a5e9] text-[#fefeff] mt-[80px]">
//         OUR TEACHER
//       </div>
//       <h1 className="tracking-wider text-[27px] sm:text-[30px] mt-[20px] md:text-[38px] lg:text-[45px] font-bold text-[#192235]">
//         Whose Inspiration You
//       </h1>

//       <div className="w-[88%] mt-[45px] flex-wrap flex items-center justify-center mb-[60px]">
//         {/* Main Teacher Card */}
//         <div className="w-[650px] flex flex-col m-[20px] bg-[#ffffff] md:flex-row items-center md:justify-evenly rounded-xl shadow-[0px_0px_6px_#bfbfbf] py-[25px]">
//           <img
//             className="w-[75%] rounded-xl md:w-[35%] h-[350px]"
//             src={teachers[0]?.image}
//             alt="MainTeacherImg"
//           />
//           <div className="mt-[-20px] w-[50%]">
//             <h1 className="font-bold text-[28px] text-[#192338] mt-[20px]">
//               {teachers[0]?.name}
//             </h1>
//             <h4 className="mt-[2px] text-[18px] font-semibold text-[#6167d6]">
//               {teachers[0]?.role}
//             </h4>
//             <div className="flex items-center w-[40px] mt-[10px] text-[13px] text-[#707581]">
//               📍
//               <span className="ml-[4px] text-[16px]">{teachers[0]?.location}</span>
//             </div>
//             <p className="mt-[20px] text-[#858492] text-[19px]">
//               {teachers[0]?.description}
//             </p>
//           </div>
//         </div>

//         {/* Other Teachers (Desktop View) */}
//         <div className="hidden md:flex flex-wrap w-[450px] m-[20px] bg-[#ffffff] items-center justify-center py-[22px]">
//           {teachers.slice(1).map((teacher) => (
//             <img
//               key={teacher.id}
//               className="m-[15px] border-4 border-[white] w-[110px] rounded-xl shadow-[0px_0px_6px_#bfbfbf]"
//               src={teacher.image}
//               alt={`teacher-${teacher.id}`}
//             />
//           ))}
//         </div>

//         {/* Other Teachers (Mobile View) */}
//         <div className="md:hidden w-full overflow-x-auto whitespace-nowrap flex gap-4 py-3 px-5">
//           {teachers.slice(1).map((teacher) => (
//             <img
//               key={teacher.id}
//               className="border-4 border-[white] w-[110px] rounded-xl shadow-[0px_0px_6px_#bfbfbf]"
//               src={teacher.image}
//               alt={`teacher-${teacher.id}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Teacher;

import React, { useState } from "react";

// Import images correctly if they are static assets
import mainTeacher from "/landing/MainTeacher.png";
import teacher1 from "/landing/Teacher1.png";
import teacher2 from "/landing/Teacher2.png";
import teacher3 from "/landing/Teacher3.png";
import teacher4 from "/landing/Teacher4.png";
import teacher5 from "/landing/Teacher5.png";

const teachersData = [
  {
    id: 1,
    name: "Alexendra Scott",
    role: "Creative Developer",
    location: "USA",
    image: mainTeacher,
    description:
      "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    phone: "+1-202-555-0174",
    email: "alexendra@gmail.com",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Math Teacher",
    location: "UK",
    image: teacher1,
    description: "Passionate about teaching mathematics in a fun way.",
    phone: "+44-789-555-1234",
    email: "johndoe@gmail.com",
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "Science Teacher",
    location: "Canada",
    image: teacher2,
    description: "Dedicated to making science enjoyable and engaging.",
    phone: "+1-416-555-5678",
    email: "sarahlee@gmail.com",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "History Teacher",
    location: "Australia",
    image: teacher3,
    description: "Bringing history to life with exciting storytelling.",
    phone: "+61-403-555-9876",
    email: "michaelbrown@gmail.com",
  },
  {
    id: 5,
    name: "Lisa Carter",
    role: "English Teacher",
    location: "India",
    image: teacher4,
    description: "Helping students master English with confidence.",
    phone: "+91-98765-43210",
    email: "lisacarter@gmail.com",
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Physics Teacher",
    location: "Germany",
    image: teacher5,
    description: "Exploring the wonders of physics through experiments.",
    phone: "+49-172-555-7890",
    email: "davidwilson@gmail.com",
  },
];

const Teacher = ({ teachers = teachersData }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="w-[210px] h-[38px] text-[14px] font-semibold flex items-center justify-center rounded-2xl bg-[#b0a5e9] text-[#fefeff] mt-[80px]">
        OUR TEACHER
      </div>
      <h1 className="tracking-wider text-[27px] sm:text-[30px] mt-[20px] md:text-[38px] lg:text-[45px] font-bold text-[#192235]">
        Whose Inspiration You
      </h1>

      <div className="w-[88%] mt-[45px] flex-wrap flex items-center justify-center mb-[60px]">
        {/* Main Teacher Card */}
        <div className="w-[650px] flex flex-col m-[20px] bg-[#ffffff] md:flex-row items-center md:justify-evenly rounded-xl shadow-[0px_0px_6px_#bfbfbf] py-[25px]">
          <img
            className="w-[75%] rounded-xl md:w-[35%] h-[350px] cursor-pointer"
            src={selectedTeacher.image}
            alt="MainTeacherImg"
          />
          <div className="mt-[-20px] w-[50%]">
            <h1 className="font-bold text-[28px] text-[#192338] mt-[20px]">
              {selectedTeacher.name}
            </h1>
            <h4 className="mt-[2px] text-[18px] font-semibold text-[#6167d6]">
              {selectedTeacher.role}
            </h4>
            <div className="flex items-center w-[40px] mt-[10px] text-[13px] text-[#707581]">
              📍
              <span className="ml-[4px] text-[16px]">{selectedTeacher.location}</span>
            </div>
            <p className="mt-[20px] text-[#858492] text-[19px]">
              {selectedTeacher.description}
            </p>
            <p className="text-[#6167d6] mt-[10px] text-[16px] font-semibold">
              📞 {selectedTeacher.phone}
            </p>
            <p className="text-[#6167d6] text-[16px] font-semibold">
              ✉️ {selectedTeacher.email}
            </p>
          </div>
        </div>

        {/* Other Teachers (Desktop View) */}
        <div className="hidden md:flex flex-wrap w-[450px] m-[20px] bg-[#ffffff] items-center justify-center py-[22px]">
          {teachers.slice(1).map((teacher) => (
            <img
              key={teacher.id}
              className="m-[15px] border-4 border-[white] w-[110px] rounded-xl shadow-[0px_0px_6px_#bfbfbf] cursor-pointer transition-transform transform hover:scale-110"
              src={teacher.image}
              alt={`teacher-${teacher.id}`}
              onClick={() => setSelectedTeacher(teacher)}
            />
          ))}
        </div>

        {/* Other Teachers (Mobile View) */}
        <div className="md:hidden w-full overflow-x-auto whitespace-nowrap flex gap-4 py-3 px-5">
          {teachers.slice(1).map((teacher) => (
            <img
              key={teacher.id}
              className="border-4 border-[white] w-[110px] rounded-xl shadow-[0px_0px_6px_#bfbfbf] cursor-pointer transition-transform transform hover:scale-110"
              src={teacher.image}
              alt={`teacher-${teacher.id}`}
              onClick={() => setSelectedTeacher(teacher)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
