// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa6";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navigationItems = [
//     { id: 1, label: "Demos" },
//     { id: 2, label: "Courses" },
//     { id: 3, label: "Pages" },
//     { id: 4, label: "Elements" },
//     { id: 5, label: "Blog" },
//     { id: 6, label: "Help" },
//   ];

//   function NavigationItem({ label }) {
//     return (
//       <div
//         className="leading-5 hover:cursor-pointer"
//         role="menuitem"
//         tabIndex="0"
//       >
//         {label}
//       </div>
//     );
//   }

//   return (
//     <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1000px] shadow-md relative">
//       <img
//         src="public/navbar/intellisoft.png"
//         alt="Logo"
//         className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer"
//       />

//       {/* Hamburger Menu for Small Screens */}
//       <div className="md:hidden relative">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-purple-500">
//           <FaBars size={28} />
//         </button>
//         {isOpen && (
//           <div className="absolute w-40 bg-white shadow-md rounded-md p-2 flex flex-col gap-2 mt-2 z-50">
//             {navigationItems.map((item) => (
//               <NavigationItem key={item.id} label={item.label} />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Navigation Items for Medium and Large Screens */}
//       <nav
//         className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap"
//         role="menubar"
//       >
//         {navigationItems.map((item) => (
//           <NavigationItem key={item.id} label={item.label} />
//         ))}
//       </nav>

//       <button className="px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:cursor-pointer">
//         Join Now
//       </button>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import intellisoftLogo from '/public/navbar/intellisoft.png'; // Import the logo
import demoImage from "/public/navbar/b1.png"; 
import demoImage2 from "/public/navbar/b2.png"; 
import demoImage3 from "/public/navbar/b3.png"; 
import demoImage4 from "/public/navbar/b4.png"; 
import demoImage5 from "/public/navbar/b5.png"; 
import c1Image from "/public/navbar/c1.png";
import growImage from '/public/navbar/grow.png'; // Import your images
import comImage from '/public/navbar/com.png';
import reactpage from '/public/Navbar/react.png';

const Navbar = () => {
  const demoData = [
    [
      { title: 'Kinder Garden →', image: demoImage, link: '/landing' },
      { title: 'Home Elegant →', image: demoImage2, link: '/' },
      { title: 'Gym Coaching →', image: demoImage3, link: '/courses' },
      { title: 'Demo Start →', image: demoImage4, link: '/contact' },
    ],
    [
      { title: 'Demo Start →', image: demoImage5, link: '/blog' },
      { title: 'Demo Start →', image: demoImage2, link: '/home' },
      { title: 'Demo Start →', image: reactpage, link: '/react' },
      { title: 'Demo Start →', image: demoImage3, link: '/courses' },
    ],
    [
      { title: 'Demo Start →', image: demoImage4, link: '/demo-start-6' },
      { title: 'Demo Start →', image: demoImage5, link: '/demo-start-7' },
      { title: 'Demo Start →', image: demoImage, link: '/demo-start-8' },
      { title: 'Demo Start →', image: demoImage5, link: '/demo-start-9' },
    ]
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  

  // Detect screen width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const helpItems = [
    "Documentation",
    "Submit a Ticket",
    "Customization",
    "What’s New",
    "Intro Video",
    "Pre-sale Question",
  ];

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };


 // course button


  const courseLayoutLeft = [
    'Filter One Toggle',
    'Filter One Open',
    'Filter Two Toggle',
    'Filter Two Open',
    'Course With Tab',
    'Course With Tab Two',
    'Course Tab Two Open',
  ];

  const courseLayoutRight = [
    'Course Masonry',
    'Course Left Sidebar',
    'Course Right Sidebar',
    'Course Details',
    { name: 'Course Details Two', new: true },
    { name: 'Course Lesson', new: true },
    { name: 'Course Details Three', new: true },
  ];

  // pages button
  const getStartedLinks = [
    'About Us',
    'About Us 02',
    'Event Grid',
    'Event List',
    'Event Sidebar',
    'Event Details',
    'Academy Gallery',
    'Admission Guide',
  ];

  const exploreLinks = [
    'Profile',
    'Contact Us',
    'Instructor',
    'FAQs',
    'Privacy Policy',
    '404 Page',
    'Maintenance',
  ];

  const shopLinks = [
    { name: 'Shop', badge: 'Sale Anything' },
    'Single Product',
    'Cart Page',
    'Checkout',
    { name: 'Wishlist Page', badge: 'Coming Soon' },
    'My Account',
    'Login & Register',
    'Subscription',
  ];

  const featuredItems = [
    { title: 'Online Education', image: 'https://via.placeholder.com/100x50' },
    { title: 'Language Club', image: 'https://via.placeholder.com/100x50' },
    { title: 'University Status', image: 'https://via.placeholder.com/100x50' },
    { title: 'Course School', image: 'https://via.placeholder.com/100x50' },
    { title: 'Academy', image: 'https://via.placeholder.com/100x50', special: true },
  ];

  
  // elements button
  
  const demoRows = chunkArray(demoData, 4);

  const components = [
    {
      title: 'Style Guide',
      comingSoon: true,
      items: ['Accordion', 'Advance Tab', 'Brand', 'Button', 'Badge', 'Card', 'Call To Action'],
    },
    {
      title: null, // No title for this column
      comingSoon: false,
      items: ['Counter', 'Categories', 'Header Style', 'Newsletter', 'Team', 'Social', 'List Style', 'Gallery'],
    },
    {
      title: null, // No title for this column
      comingSoon: false,
      items: ['Pricing', 'Progressbar', 'Testimonial', 'Service', 'Split Area', 'Instagram Style', 'Search Style', '& More Coming'],
      searchStyleComingSoon: true, // Specific flag for Search Style
    },
  ];

  // blog button
  const blogStyles = [
    'Blog List',
    'Blog Grid',
    'Blog Grid Minimal',
    'Blog With Sidebar',
    'Blog Details',
    'Post Format Standard',
    'Post Format Gallery',
  ];

  // const getStartedLinks = [
  //   'Post Format Quote',
  //   'Post Format Audio',
  //   'Post Format Video',
  //   { name: 'Media Under Title', coming: true },
  //   { name: 'Sticky Sidebar', coming: true },
  //   { name: 'Auto Masonry', coming: true },
  //   { name: 'Meta Overlaid', coming: true },
  // ];

  
  return (
    <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1000px] shadow-md relative">
      <img src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer" />

      <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
      <div className="relative leading-5 hover:cursor-pointer group">
  Demos
  <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[680px] z-50">
    <div className="flex items-center justify-center">
    <div className="bg-[#192335] w-full p-4 rounded-lg">
    {demoRows.map((row, rowIndex) => (
       <div className="bg-[#192335] w-full p-4 rounded-lg">
       {demoData.map((row, rowIndex) => (
         <div key={rowIndex} className="grid grid-cols-4 gap-4">
           {row.map((demo, index) => (
             <div key={index} className="relative group overflow-hidden py-4 px-4">
               <a href={demo.link}>
                 <img 
                   src={demo.image} 
                   alt={demo.title} 
                   className="shadow-lg w-full rounded-lg object-cover transform transition-transform duration-300 hover:scale-110" 
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <strong>{demo.title}</strong>
                 </div>
               </a>
             </div>
           ))}
         </div>
       ))}
     </div>
    ))}
  </div>
    </div>
  </div>
</div>

        <div className="relative leading-5 hover:cursor-pointer group">
          Courses
          <div className="absolute left-1/2 w-[680px] top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex  z-50">
            {/* courses-dropbox */}
            <div className=" mx-auto">
      <div
        className="bg-gray-900 text-white p-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${c1Image})` }} // Use imported image
      >
        <h1 className="text-2xl font-bold">Developer Hub</h1>
        <p className="mt-2 text-white-300">
          Start building fast, with code samples, key resources and more.
        </p>
      </div>

      <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-lg p-4"> {/* Added margin top */}
        {/* Left Column */}
        <div>
          <h2 className="text-gray-500 uppercase text-sm font-semibold mb-4">
            Course Layout
          </h2>
          <ul className="space-y-3">
            {courseLayoutLeft.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 hover:text-indigo-500 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-gray-500 uppercase text-sm font-semibold mb-4">
            Course Layout
          </h2>
          <ul className="space-y-3">
            {courseLayoutRight.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 text-gray-700 hover:text-indigo-500 cursor-pointer ${item.new ? '' : ''}`} // Conditional class
              >
                {item.name || item} {/* Display name if it exists, otherwise the item itself */}
                {item.new && ( // Conditionally render the "New" badge
                  <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>        
       
          </div>
        </div>

        <div className="relative leading-5 hover:cursor-pointer group">
          Pages
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[650px] p-4 z-50">
            {/* pages-dropbox */}
            <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-white p-8 rounded-lg shadow-lg">
          {/* Get Started Column */}
          <div>
            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">
              Get Started
            </h3>
            <ul className="space-y-2 text-gray-700">
              {getStartedLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-gray-700">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Pages Column */}
          <div>
            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">
              Shop Pages
            </h3>
            <ul className="space-y-2 text-gray-700">
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-600 flex items-center">
                    {link.name || link} {/* Display name if available */}
                    {link.badge && (
                      <span className="ml-2 bg-purple-200 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Column */}
          <div>
            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">
              {/* Featured */}
            </h3>
            
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>

        <div className="relative leading-5 hover:cursor-pointer group">
          Elements
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[590px] z-50">
            {/* elements-dropbox */}
            <div className="bg-gray-100">
  <div className="max-w-5xl mx-auto py-8 px-4">
    <div className="grid grid-cols-3 gap-6 text-gray-700">
      {components.map((column, index) => (
        <div key={index} className="py-4"> {/* Added padding top/bottom to each column */}
          {column.title && (
            <p className="mb-2"> {/* Added margin bottom for spacing */}
              {column.title}{' '}
              {column.comingSoon && (
                <span className="bg-purple-300 text-white px-2 py-1 rounded-full ml-2"> {/* Added margin left for spacing */}
                  Coming Soon
                </span>
              )}
            </p>
          )}
          {column.items.map((item, itemIndex) => (
            <p key={itemIndex} className="py-1"> {/* Added padding top/bottom to each item */}
              {item}{' '}
              {column.searchStyleComingSoon && item === 'Search Style' && (
                <span className="bg-purple-300 text-white px-2 py-1 rounded-full ml-2"> {/* Added margin left for spacing */}
                  Coming Soon
                </span>
              )}
            </p>
          ))}
        </div>
      ))}
    </div>

    <div className="mt-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 py-2"> {/* Added padding top/bottom to the button container */}
      <a
        href="#"
        className="w-full text-white py-2.5 px-5 rounded-lg"
      >
        Visit Intellisoft Template
      </a>
    </div>
  </div>
</div>
          </div>
        </div>

        <div className="relative leading-5 hover:cursor-pointer group">
          Blogs
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[480px] z-50">
            {/* blogs-dropbox */}
            <div className="bg-gray-100 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {/* Blog Styles */}
        <div>
          <h2 className="p-2 text-gray-500 font-semibold uppercase text-sm ">
            Blog Styles
          </h2>
          <ul className="space-y-2 text-gray-700">
            {blogStyles.map((style, index) => (
              <li key={index} className="p-2">
                {style}
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h2 className="p-2 text-gray-500 font-semibold uppercase text-sm ">
            Get Started
          </h2>
          <ul className="space-y-2 text-gray-700">
            {getStartedLinks.map((link, index) => (
              <li key={index} className="p-2 flex items-center">
                {link.name || link} {/* Display name if available */}
                {link.coming && (
                  <span className="ml-2 bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                    Coming
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Promotional Banner */}
        <div className="relative bg-blue-100 rounded-lg p-5 text-center">
          <img src={growImage} alt="Grow Skill" className="w-full mt-0 rounded-lg" />
          <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md font-semibold flex items-center justify-center mx-auto">
            <img src={comImage} alt="Get Started Icon" className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="relative leading-5 hover:cursor-pointer group">
          Help
          <div className="absolute hidden group-hover:block w-[200px] z-50">
            <div className="">
              {helpItems.map((item, index) => (
                <div key={index} className="p-2 bg-gray-100">{item}</div>
              ))}
            </div>
          </div>
        </div>


        
        
      </nav>
       
  
    
      
   

      {/* "Join Now" button - Visible only on screens 769px and above */}
      <button className="hidden md:block px-6 py-3 text-white font-medium rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Join Now
      </button>

       {/* Menu button */}
       <button
        className="top-5 right-5 z-50 text-blue-950 p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <img
            src="intellisoftLogo.png"
            alt="Logo"
            className="object-contain shrink-0 max-w-full w-[115px] hover:cursor-pointer"
          />
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Contact Info */}
        <p className="px-5 py-2 text-gray-600">
          We're always in search for talented and motivated people. Don't be shy, introduce yourself!
        </p>
        <div className="px-5">
          <a href="mailto:contact@intellisoft.in" className="flex items-center gap-2 text-gray-700">
            📧 contact@intellisoft.in
          </a>
          <a href="tel:+919705134869" className="flex items-center gap-2 text-gray-700 mt-2">
            📞 +91 97051 34869
          </a>
        </div>

        {/* Menu Items */}
        <ul className="mt-5">
          {[
            { name: "Demos", subItems: ["Home Demo", "Marketplace", "Kindergarten", "University Classic", "Home Elegant", "Gym Coaching", "Online School", "University Status", "Home Technology", "Instructor Portfolio"] },
            { name: "Courses", subItems: ["Course 1", "Course 2", "Course 3"] },
            { name: "Pages", subItems: ["About Us", "Contact", "FAQ"] },
            { name: "Elements", subItems: ["Buttons", "Cards", "Forms"] },
            { name: "Blog", subItems: ["Latest Posts", "Categories"] },
            { name: "Help", subItems: ["Support", "Feedback"] }
          ].map((menu) => (
            <li key={menu.name} className="border-b">
              <button
                className="w-full text-left px-5 py-3 text-gray-700 flex justify-between items-center hover:bg-gray-100"
                onClick={() => toggleMenu(menu.name)}
              >
                {menu.name}
                <span>{activeMenu === menu.name ? "−" : "+"}</span>
              </button>
              {/* Sub-items */}
              {activeMenu === menu.name && (
                <ul className="bg-gray-50">
                  {menu.subItems.map((item, index) => (
                    <li key={index} className="px-8 py-2 text-gray-700 hover:bg-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Join Now Button */}
        <div className="px-5 mt-5">
          <button className="w-full py-3 text-white font-medium rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            Join Now
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-[999] md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    
    </div>
  );
};

export default Navbar;