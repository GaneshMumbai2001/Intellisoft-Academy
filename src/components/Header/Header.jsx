import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-logo">
        <h1>Intellisoft Academy</h1>
      </div>
      <div className="header-right">
        <ul className="menu">
          <li>Home</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
        <div className="search">
          <input type="text" placeholder='Search' />
        </div>
      </div>
    </div>
  );
};

export default Header;
