import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from "react-icons/fa";
import intellisoftLogo from '/public/navbar/intellisoft.png';
import { Link } from 'react-router-dom';
import demoImage from "/public/navbar/b1.png";
import demoImage2 from "/public/navbar/b2.png";
import demoImage3 from "/public/navbar/b3.png";
import demoImage4 from "/public/navbar/b4.png";
import demoImage5 from "/public/navbar/b5.png";
import c1Image from "/public/navbar/c1.png";
import growImage from '/public/navbar/grow.png';
import comImage from '/public/navbar/com.png';
import reactpage from '/public/Navbar/react.png';
import coursebuy from '/public/Navbar/coursebuy.png';
import loginpage from '/public/Navbar/login.png';
import signuppage from '/public/Navbar/signup.png';

const Navbar = () => {
    const demoData = [
        [{ title: 'Kinder Garden →', image: demoImage, link: '/landing' },
        { title: 'Home Elegant →', image: demoImage2, link: '/' },
        { title: 'Gym Coaching →', image: demoImage3, link: '/courses' },
        { title: 'Demo Start →', image: demoImage4, link: '/contact' },],
        [{ title: 'Demo Start →', image: demoImage5, link: '/blog' },
        { title: 'Course to Buy →', image: coursebuy, link: '/coursebuy' },
        { title: 'React →', image: reactpage, link: '/react' },
        { title: 'Login →', image: loginpage, link: '/login' },],
        [{ title: 'Signup →', image: signuppage, link: '/signup' },
        { title: 'Demo Start →', image: demoImage5, link: '/demo-start-7' },
        { title: 'Demo Start →', image: demoImage, link: '/demo-start-8' },
        { title: 'Demo Start →', image: demoImage5, link: '/demo-start-9' },]
    ];

    const menuItems = [
        { name: "Demos", subItems: [{ label: "Landing", link: "/landing" }, { label: "Home", link: "/" }, { label: "Courses", link: "/courses" }, { label: "Contact", link: "/contact" }, { label: "Blog", link: "/blog" }, { label: "Course to Buy", link: "/coursebuy" }, { label: "React", link: "/react" }, { label: "Login", link: "/login" }, { label: "Signup", link: "/signup" },] },
        { name: "Courses", subItems: [{ label: "Art & Humanities", link: "/artpage" }, { label: "Bitcoin Forums", link: "/bitcoinpage" }, { label: "Core Functions", link: "/corepage" },] },
        { name: "Pages", subItems: [{ label: "About Us", link: "/about" }, { label: "Contact", link: "/contact" }, { label: "FAQ", link: "/faq" },] },
        { name: "Elements", subItems: [{ label: "Buttons", link: "/buttons" }, { label: "Cards", link: "/cards" }, { label: "Forms", link: "/forms" },] },
        { name: "Blog", subItems: [{ label: "Latest Posts", link: "/latest-posts" }, { label: "Categories", link: "/categories" },] },
        { name: "Help", subItems: [{ label: "Support", link: "/support" }, { label: "Feedback", link: "/feedback" },] },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 769); // Initialize isMobile

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 769);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  
   
    const chunkArray = (arr, chunkSize) => {
      const result = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
          result.push(arr.slice(i, i + chunkSize));
      }
      return result;
  };
  
  // help button`
  const helpItems = [
      { label: "Documentation", link: "/" },
      { label: "Submit a Ticket", link: "/" },
      { label: "Customization", link: "https://example.com/customization" },
      { label: "What’s New", link: "https://example.com/whats-new" },
      { label: "Intro Video", link: "https://example.com/intro-video" },
      { label: "Pre-sale Question", link: "https://example.com/pre-sale-question" },
  ];
  
  // Call `chunkArray`
  const chunkedHelpItems = chunkArray(helpItems, 2);
   // help button end

  

   const courseLayoutLeft = [
    { name: 'Filter One Toggle', link: '/courses' },
    { name: 'Filter One Open', link: '/courses/filter-one-open' },
    { name: 'Filter Two Toggle', link: '/courses/filter-two-toggle' },
    { name: 'Filter Two Open', link: '/courses/filter-two-open' },
    { name: 'Course With Tab', link: '/courses/course-with-tab' },
    { name: 'Course With Tab Two', link: '/courses/course-with-tab-two' },
    { name: 'Course Tab Two Open', link: '/courses/course-tab-two-open' },
];

const courseLayoutRight = [
    { name: 'Course Masonry', link: '/courses/course-masonry' },
    { name: 'Course Left Sidebar', link: '/courses/course-left-sidebar' },
    { name: 'Course Right Sidebar', link: '/courses/course-right-sidebar' },
    { name: 'Course Details', link: '/courses/course-details' },
    { name: 'Course Details Two', link: '/courses/course-details-two', new: true },
    { name: 'Course Lesson', link: '/courses/course-lesson', new: true },
    { name: 'Course Details Three', link: '/courses/course-details-three', new: true },
];

// pages link
const getStartedLinks = [
  { name: 'About', link: '/about' },
  { name: 'About Us 02', link: '/pages/about-us-02' },
  { name: 'Event Grid', link: '/pages/event-grid' },
  { name: 'Event List', link: '/pages/event-list' },
  { name: 'Event Sidebar', link: '/pages/event-sidebar' },
  { name: 'Event Details', link: '/pages/event-details' },
  { name: 'Academy Gallery', link: '/pages/academy-gallery' },
  { name: 'Admission Guide', link: '/pages/admission-guide' },
];

const exploreLinks = [
  { name: 'Profile', link: '/pages/profile' },
  { name: 'Contact Us', link: '/pages/contact-us' },
  { name: 'Instructor', link: '/pages/instructor' },
  { name: 'FAQs', link: '/pages/faqs' },
  { name: 'Privacy Policy', link: '/pages/privacy-policy' },
  { name: '404 Page', link: '/pages/404' },
  { name: 'Maintenance', link: '/pages/maintenance' },
];

const shopLinks = [
  { name: 'Shop', link: '/shop', badge: 'Sale Anything' },
  { name: 'Single Product', link: '/shop/single-product' },
  { name: 'Cart Page', link: '/shop/cart' },
  { name: 'Checkout', link: '/shop/checkout' },
  { name: 'Wishlist Page', link: '/shop/wishlist', badge: 'Coming Soon' },
  { name: 'My Account', link: '/shop/my-account' },
  { name: 'Login & Register', link: '/shop/login-register' },
  { name: 'Subscription', link: '/shop/subscription' },
];

// elements link

const elements = [
  {
    title: "Typography",
    items: [
      { name: "Headings", link: "/headings" },
      { name: "Paragraphs", link: "/paragraphs" },
      { name: "Lists", link: "/lists" }
    ]
  },
  {
    title: "Buttons",
    items: [
      { name: "Primary Button", link: "/primary-button" },
      { name: "Secondary Button", link: "/secondary-button" }
    ]
  },
  {
    title: "Forms",
    items: [
      { name: "Input Fields", link: "/input-fields" },
      { name: "Checkboxes", link: "/checkboxes" },
      { name: "Radio Buttons", link: "/radio-buttons" }
    ]
  }
];

// blog link

const blog1 = [
  { name: "Modern", link: "/about" },
  { name: "Classic", link: "/blog/classic" },
  { name: "Minimal", link: "/blog/minimal" }
];

const blog2 = [
  { name: "Introduction", link: "/pages/introduction" },
  { name: "Setup Guide", link: "/pages/setup-guide" },
  { name: "Tutorials", link: "/pages/tutorials", coming: true }
];

const actionButtons = [
  { name: "Get Started", link: "/get-started", icon: comImage }
];

const filteredCourses = courseLayoutLeft.map(item => item.name.toLowerCase());

console.log(filteredCourses);


    // const courseLayoutLeft = ['Filter One Toggle', 'Filter One Open', 'Filter Two Toggle', 'Filter Two Open', 'Course With Tab', 'Course With Tab Two', 'Course Tab Two Open',];
    // const courseLayoutRight = ['Course Masonry', 'Course Left Sidebar', 'Course Right Sidebar', 'Course Details', { name: 'Course Details Two', new: true }, { name: 'Course Lesson', new: true }, { name: 'Course Details Three', new: true },];

    // pages link
   

    const blogStyles = ['Blog List', 'Blog Grid', 'Blog Grid Minimal', 'Blog With Sidebar', 'Blog Details', 'Post Format Standard', 'Post Format Gallery',];

    return (
        <div className="w-full">
            <div className="bg-gray-900 text-white text-xs flex justify-between items-center px-6 py-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-[10px]">Hot</span>
                <p className="flex-1 text-center">👋 Intro price. Big Sale -95% off.</p>
                <div className="flex gap-3 items-center">
                    <FaFacebook /> <FaInstagram /> <FaLinkedin />
                    <span className="ml-2">English</span>
                    <span>INR</span>
                </div>
            </div>

            <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1400px] shadow-md relative">
                <img onClick={() => setIsOpen(true)} src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer" />

                <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
                    {/* ... (Demos, Courses, Pages, Elements, Blogs, Help dropdowns - same structure as before, but add links as shown below) */}
                    <div className="relative leading-5 hover:cursor-pointer group">
  Demos
  <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[680px] z-50">
    <div className="flex items-center justify-center">
      <div className="bg-[#192335] w-full p-4 rounded-lg">
        {demoData.map((row, rowIndex) => ( // Changed to demoData and added outer div
          <div key={rowIndex} className="bg-[#192335] w-full p-4 rounded-lg"> {/* Added key and bg/padding */}
            <div className="grid grid-cols-4 gap-4">
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
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

                    <div className="relative leading-5 hover:cursor-pointer group">
                        Courses
                        <div className="absolute left-1/2 w-[680px] top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex z-50">
                            <div className="mx-auto">
                                <div className="bg-gray-900 text-white p-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${c1Image})` }}>
                                    <h1 className="text-2xl font-bold">Developer Hub</h1>
                                    <p className="mt-2 text-white-300">Start building fast, with code samples, key resources and more.</p>
                                </div>

                                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-lg p-4">
                                    <div>
                                        <h2 className="text-gray-500 uppercase text-sm font-semibold mb-4">Course Layout</h2>
                                        <ul className="space-y-3">
                                        {courseLayoutLeft.map((item, index) => (
                                <li key={index} className="text-gray-700 hover:text-indigo-500 cursor-pointer">
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}

                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-gray-500 uppercase text-sm font-semibold mb-4">Course Layout</h2>
                                        <ul className="space-y-3">
                                        {courseLayoutRight.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-700 hover:text-indigo-500 cursor-pointer">
                                    <a href={item.link}>{item.name}</a>
                                    {item.new && (
                                        <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">New</span>
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
                            <div className="">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-white p-8 rounded-lg shadow-lg">
                                        <div>
                                            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">Get Started</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                {getStartedLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.link} className="hover:text-indigo-600">{link.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">Explore</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                {exploreLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.link} className="hover:text-indigo-600">{link.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">Shop Pages</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                {shopLinks.map((link, index) => (
                                                    <li key={index}>
                                                       <a href={link.link} className="hover:text-indigo-600">{link.name}
                                                            {link.name || link}
                                                            {link.badge && (<span className="ml-2 bg-purple-200 text-purple-700 text-xs px-2 py-1 rounded-full">{link.badge}</span>)}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div><h3 className="text-gray-500 font-semibold uppercase text-sm mb-4"></h3></div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
<div className="relative leading-5 hover:cursor-pointer group">
  Elements
    <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[590px] z-50">
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto py-8 px-4">
          <div className="grid grid-cols-3 gap-6 text-gray-700">
            {elements.map((column, index) => (
              <div key={index} className="py-4">
                {column.title && (
                  <p className="mb-2">{column.title}</p>
                )}
                {column.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="">
                    <a href={item.link}>
                      <button className=" text-black  rounded-md">
                        {item.name}
                      </button>
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 py-2">
            <a href="#" className="w-full text-white py-2.5 px-5 rounded-lg">Visit Histudy Template</a>
          </div>
        </div>
      </div>
    </div>
</div>


<div className="relative leading-5 hover:cursor-pointer group">
    Blogs
    <div className="absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[480px] z-50">
      <div className="bg-gray-100 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          <div>
            <h2 className="p-2 text-gray-500 font-semibold uppercase text-sm">Blog Styles</h2>
            <ul className="space-y-2 text-gray-700">
              {blog1.map((style, index) => (
                <li key={index} className="p-2">
                  <a href={style.link} className="hover:text-indigo-600">{style.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="p-2 text-gray-500 font-semibold uppercase text-sm">Get Started</h2>
            <ul className="space-y-2 text-gray-700">
              {blog2.map((link, index) => (
                <li key={index} className="p-2 flex items-center">
                  <a href={link.link} className="hover:text-indigo-600 flex items-center">
                    {link.name}
                    {link.coming && (
                      <span className="ml-2 bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">Coming</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-blue-100 rounded-lg p-5 text-center">
            <img src={growImage} alt="Grow Skill" className="w-full mt-0 rounded-lg" />
            {actionButtons.map((button, index) => (
              <a key={index} href={button.link}>
                <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md font-semibold flex items-center justify-center mx-auto">
                  <img src={button.icon} alt="{button.name} Icon" className="w-5 h-5 mr-2" />
                  {button.name}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

                   
<div className="relative leading-5 hover:cursor-pointer group">
    Help
    <div className="absolute hidden group-hover:block w-[200px] z-50 bg-white shadow-lg p-2">
        {chunkedHelpItems.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="flex flex-col">
                {chunk.map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        target={item.link.startsWith("http") ? "_blank" : "_self"} 
                        rel="noopener noreferrer"
                        className="p-2 block hover:text-indigo-600"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        ))}
    </div>
</div>


                </nav>


                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FaShoppingCart className="text-gray-800" />
                    </div>
                    <span className="flex items-center gap-1 text-gray-800">
                        <FaUser /> Admin
                    </span>
                    <button className="relative px-3 py-1 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white">Purchase Now</button>
                </div>


                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
                    <div className="p-5 flex justify-between items-center border-b">
                        <img src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 max-w-full w-[115px] hover:cursor-pointer" />
                        <button onClick={() => setIsOpen(false)}> <X size={24} /> </button>
                    </div>

                    <p className="px-5 py-2 text-gray-600">We're always in search for talented and motivated people. Don't be shy, introduce yourself!</p>
                    <div className="px-5">
                        <a href="mailto:contact@intellisoft.in" className="flex items-center gap-2 text-gray-700"> 📧 contact@intellisoft.in </a>
                        <a href="tel:+919705134869" className="flex items-center gap-2 text-gray-700 mt-2"> 📞 +91 97051 34869 </a>
                    </div>

                    <ul className="mt-5">
                        {menuItems.map((menu) => (
                            <li key={menu.name} className="border-b">
                                <button className="w-full text-left px-5 py-3 text-gray-700 flex justify-between items-center hover:bg-gray-100" onClick={() => toggleMenu(menu.name)}>
                                    {menu.name} <span>{activeMenu === menu.name ? "−" : "+"}</span>
                                </button>
                                {activeMenu === menu.name && (
                                    <ul className="bg-gray-50">
                                        {menu.subItems.map((item, index) => (
                                            <li key={index} className="px-8 py-2 text-gray-700 hover:bg-gray-200">
                                                <a href={item.link}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {isOpen && (<div className="fixed inset-0 bg-red opacity-50 z-[999] md:hidden" onClick={() => setIsOpen(false)}></div>)}
            </div>
        </div>
    );
};

export default Navbar;