import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from "react-icons/fa";
import intellisoftLogo from '/public/navbar/intellisoft.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
 


    const menuItems = [
        { name: "Demos", subItems: [{ label: "Home Page", link: "/" }, { label: "Landing Page", link: "/landing" }, { label: "Courses", link: "/courses" }, { label: "Contact", link: "/contact" }, { label: "Blog", link: "/blog" }, { label: "Course to Buy", link: "/coursebuy" }, { label: "React", link: "/react" }, { label: "Login", link: "/login" }, { label: "Signup", link: "/signup" },] },
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


const demostarted = [
  { name: 'Home Page', link: '/' },
  { name: 'Landing Page', link: '/landing' },
  { name: 'Contact Us', link: '/contact' },
  { name: 'Login', link: '/login' },
];

// pages link
const getStartedLinks = [
  { name: 'Art & Humanities', link: '/artpage' },
  { name: 'Bitcoin Forums', link: '/bitcoinpage' },
  { name: 'Core Functions', link: '/corepage' },
  { name: 'Functional Training', link: '/functionaltraining' },
  { name: 'IT', link: '/IT' },
  { name: 'Quantum Chemistry', link: '/quantumpage' },
];



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

            <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1400px] shadow-md relative ">
                <img onClick={() => setIsOpen(true)} src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer" />

                <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
                    {/* ... (Demos, Courses, Pages, Elements, Blogs, Help dropdowns - same structure as before, but add links as shown below) */}
                    <div className="relative leading-5 hover:cursor-pointer group  hover:text-blue-600">
                  
                    Demos
                  
                        <div className="px-5 py-2  absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[100px] p-4 z-50">
                            <div className="">
                                <div className="max-w-3xl mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-white p-5 rounded-lg shadow-lg">
                                       
                                            <ul className="space-y-2 text-[13px] text-gray-900">
                                                {demostarted.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.link} className="hover:text-indigo-600">{link.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                     

                                        
                                        
                                        
                                   </div>
                                   </div>
                                </div>
                            </div>
</div>

                  <div className="relative leading-5 hover:cursor-pointer hover:text-blue-600  group">
                    
                      <Link to="/courses">
                        Courses
                     </Link>
                    </div>

                    <div className="relative leading-5 hover:cursor-pointer  hover:text-blue-600 group">
                        Pages
                        <div className="px-5 py-2  absolute left-1/2 top-full transform -translate-x-1/2 flex items-center justify-center hidden group-hover:flex w-[100px] p-4 z-50">
                            <div className="">
                                <div className="max-w-3xl mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 bg-white p-5 rounded-lg shadow-lg">
                                       
                                            <ul className="space-y-2 text-[13px] text-gray-900">
                                                {getStartedLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.link} className="hover:text-indigo-600">{link.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                     

                                        
                                        
                                        
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
<div className="relative leading-5 hover:cursor-pointer  hover:text-blue-600 group">

<Link to="/">
  Elements
</Link>
   
</div>


<div className="relative leading-5 hover:cursor-pointer hover:text-blue-600 group">
<Link to="/blog">
Blogs
</Link>
    
    
</div>

                   
<div className="relative leading-5 hover:cursor-pointer  hover:text-blue-600 group">
<Link to="/">
Help
</Link> 
   
</div>


</nav>


                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FaShoppingCart className="text-gray-800" />
                    </div>
                    <Link to="/admin/login" className="flex items-center gap-1 text-gray-800">
                        <FaUser /> Admin
                    </Link>
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


