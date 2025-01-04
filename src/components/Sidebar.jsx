import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white rounded-md shadow-md w-full h-full p-5">
      <div className="flex flex-col gap-2">
        <p className='text-xl font-bold'>Course Details</p>
        <p><strong>Instructor:</strong> John Doe</p>
        <p><strong>Duration:</strong> 6 weeks</p>
        <p><strong>Category:</strong> Programming</p>
        <button className="w-full bg-blue-500 mt-5 text-white px-4 py-1.5 rounded-md">Enroll Now</button>

      </div>
    </div>
  );
};

export default Sidebar;
