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
      "Intellisoft The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
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
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f9ff] to-[#eef1fa] py-10">
  {/* Heading */}
  <div className="w-[170px] h-[38px] text-[14px] font-semibold flex items-center justify-center rounded-2xl bg-[#6c5ce7] text-white shadow-lg">
    OUR TEACHER
  </div>
  <h1 className="text-center tracking-wider text-[30px] sm:text-[35px] md:text-[42px] font-extrabold text-[#2c3e50] mt-5">
    Whose Inspiration You
  </h1>

  <div className="w-full mt-10 flex flex-wrap items-center justify-center">
    {/* Main Teacher Card */}
    <div className="w-[700px] flex flex-col md:flex-row bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 m-4 p-6">
      <img
        className="w-full md:w-[40%] h-[350px] rounded-xl object-cover shadow-md"
        src={selectedTeacher.image}
        alt="MainTeacherImg"
      />
      <div className="w-full md:w-[60%] px-5">
        <h1 className="text-[28px] font-bold text-[#2c3e50]">{selectedTeacher.name}</h1>
        <h4 className="mt-2 text-[18px] font-semibold text-[#6c5ce7]">
          {selectedTeacher.role}
        </h4>
        <div className="flex items-center text-[16px] text-[#7f8c8d] mt-2">
          📍 {selectedTeacher.location}
        </div>
        <p className="mt-4 text-[17px] text-[#576574] leading-relaxed">{selectedTeacher.description}</p>
        <p className="text-[#6c5ce7] mt-3 text-[16px] font-medium">📞 {selectedTeacher.phone}</p>
        <p className="text-[#6c5ce7] text-[16px] font-medium">✉️ {selectedTeacher.email}</p>
      </div>
    </div>

    {/* Teacher Selection Grid */}
    <div className="hidden md:grid grid-cols-3 gap-4 m-4">
      {teachers.slice(1).map((teacher) => (
        <img
          key={teacher.id}
          className="w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-lg transition-transform transform hover:scale-110 cursor-pointer"
          src={teacher.image}
          alt={teacher.name}
          onClick={() => setSelectedTeacher(teacher)}
        />
      ))}
    </div>

    {/* Mobile Scrollable List */}
    <div className="md:hidden w-full flex overflow-x-auto gap-4 py-4 px-5">
      {teachers.slice(1).map((teacher) => (
        <img
          key={teacher.id}
          className="w-[100px] h-[100px] rounded-xl object-cover border-4 border-white shadow-md transition-transform transform hover:scale-110 cursor-pointer"
          src={teacher.image}
          alt={teacher.name}
          onClick={() => setSelectedTeacher(teacher)}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default Teacher;
