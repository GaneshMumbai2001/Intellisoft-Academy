import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from "react-icons/fa";
import intellisoftLogo from '/public/navbar/intellisoft.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        { name: "Demos", subItems: [{ label: "Home Page", link: "/" }, { label: "Landing Page", link: "/landing" }, { label: "ContactUs", link: "/courses" }, { label: "Contact", link: "/contact" }, { label: "Blog", link: "/blog" }, { label: "Course to Buy", link: "/coursebuy" }, { label: "React", link: "/react" }, { label: "Login", link: "/login" }, { label: "Signup", link: "/signup" }] },
        { name: "Courses", subItems: [{ label: "Art & Humanities", link: "/artpage" }, { label: "Bitcoin Forums", link: "/bitcoinpage" }, { label: "Core Functions", link: "/corepage" }] },
        { name: "Pages", subItems: [{ label: "About Us", link: "/about" }, { label: "Contact", link: "/contact" }, { label: "FAQ", link: "/faq" }] },
        { name: "Elements", subItems: [{ label: "Buttons", link: "/buttons" }, { label: "Cards", link: "/cards" }, { label: "Forms", link: "/forms" }] },
        { name: "Blog", subItems: [{ label: "Latest Posts", link: "/latest-posts" }, { label: "Categories", link: "/categories" }] },
        { name: "Help", subItems: [{ label: "Support", link: "/support" }, { label: "Feedback", link: "/feedback" }] },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
    const [userDropdown, setUserDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
    };

    const handleLogout = () => {
        // Clear user data from local storage or state
        localStorage.removeItem('userToken'); // Example: Remove token
        localStorage.removeItem('userData'); // Example: Remove user data

        // Redirect to login page
        navigate('/login');

        // Close the dropdown
        setUserDropdown(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 769);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  

    const demostarted = [
        { name: 'Home Page', link: '/' },
        { name: 'Landing Page', link: '/landing' },
        // { name: 'Contact Us', link: '/contact' },
        { name: 'Login', link: '/login' },
    ];

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
            {/* Top Bar */}
            <div className="bg-gray-900 text-white text-xs flex justify-end px-6 py-2">
                <div className="flex gap-3 items-center">
                    <FaFacebook /> <FaInstagram /> <FaLinkedin />
                    <span className="ml-2">English</span>
                    <span>INR</span>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1400px] shadow-md relative">
                <img onClick={() => setIsOpen(true)} src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer" />

                <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
                    {/* Demos Dropdown */}
                    <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
                        Demos
                        <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
                            <ul className="space-y-2 text-[13px] text-gray-900">
                                {demostarted.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.link} className="hover:text-indigo-600">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Other Nav Items (using Link) */}
                    <Link to="/courses" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Courses</Link>
                    <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
                        Pages
                        <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
                            <ul className="space-y-2 text-[13px] text-gray-900">
                                {getStartedLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.link} className="hover:text-indigo-600">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Link to="/" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Elements</Link>
                    <Link to="/blog" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Blogs</Link>
                    <Link to="/contact" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Contact Us</Link>
                </nav>

                {/* Right Side Icons */}
                <div className="flex items-center gap-4">
                    {/* Shopping Cart */}
                    <div className="relative">
                        <Link to="/user/cart">
                             <FaShoppingCart className="text-gray-800  " />
                              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full">0</span>
                         </Link>
                    </div>

                    {/* User Dropdown */}
                    <div className="relative inline-block text-left">
                        <div className="flex items-center gap-1 text-gray-800 cursor-pointer" onClick={toggleUserDropdown}>
                            <FaUser /> User
                        </div>
                        {userDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                                <div className="py-1">
                                    
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Purchase Now Button */}
                    <button className="relative px-3 py-1 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white max-[600px]:hidden">
                        Purchase Now
                    </button>
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

