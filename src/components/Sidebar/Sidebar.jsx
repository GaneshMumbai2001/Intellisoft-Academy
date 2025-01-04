import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="course-details">
        <h3>Course Details</h3>
        <p><strong>Instructor:</strong> John Doe</p>
        <p><strong>Duration:</strong> 6 weeks</p>
        <p><strong>Category:</strong> Programming</p>
      </div>
      <button className="enroll-button">Enroll Now</button>
    </aside>
  );
};

export default Sidebar;
