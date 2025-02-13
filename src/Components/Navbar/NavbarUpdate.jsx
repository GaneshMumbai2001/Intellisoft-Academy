import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from "react-icons/fa";
import intellisoftLogo from '/public/navbar/intellisoft.png';
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

    const helpItems = ["Documentation", "Submit a Ticket", "Customization", "What’s New", "Intro Video", "Pre-sale Question",];
    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };
    const demoRows = chunkArray(demoData, 4);

    const courseLayoutLeft = ['Filter One Toggle', 'Filter One Open', 'Filter Two Toggle', 'Filter Two Open', 'Course With Tab', 'Course With Tab Two', 'Course Tab Two Open',];
    const courseLayoutRight = ['Course Masonry', 'Course Left Sidebar', 'Course Right Sidebar', 'Course Details', { name: 'Course Details Two', new: true }, { name: 'Course Lesson', new: true }, { name: 'Course Details Three', new: true },];

    const getStartedLinks = ['About Us', 'About Us 02', 'Event Grid', 'Event List', 'Event Sidebar', 'Event Details', 'Academy Gallery', 'Admission Guide',];
    const exploreLinks = ['Profile', 'Contact Us', 'Instructor', 'FAQs', 'Privacy Policy', '404 Page', 'Maintenance',];
    const shopLinks = [{ name: 'Shop', badge: 'Sale Anything' }, 'Single Product', 'Cart Page', 'Checkout', { name: 'Wishlist Page', badge: 'Coming Soon' }, 'My Account', 'Login & Register', 'Subscription',];

    const components = [
        { title: 'Style Guide', comingSoon: true, items: ['Accordion', 'Advance Tab', 'Brand', 'Button', 'Badge', 'Card', 'Call To Action'], },
        { title: null, comingSoon: false, items: ['Counter', 'Categories', 'Header Style', 'Newsletter', 'Team', 'Social', 'List Style', 'Gallery'], },
        { title: null, comingSoon: false, items: ['Pricing', 'Progressbar', 'Testimonial', 'Service', 'Split Area', 'Instagram Style', 'Search Style', '& More Coming'], searchStyleComingSoon: true, },
    ];

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
                                                    <a href={`/courses/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</a> {/* Added link here */}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="text-gray-500 uppercase text-sm font-semibold mb-4">Course Layout</h2>
                                        <ul className="space-y-3">
                                            {courseLayoutRight.map((item, index) => (
                                                <li key={index} className={`flex items-center gap-2 text-gray-700 hover:text-indigo-500 cursor-pointer ${item.new ? '' : ''}`}>
                                                    <a href={`/courses/${(item.name || item).toLowerCase().replace(/ /g, '-')}`}>{item.name || item}</a> {/* Added link here */}
                                                    {item.new && (<span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">New</span>)}
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
                                                        <a href={`/pages/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600">{link}</a> {/* Added link here */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">Explore</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                {exploreLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={`/pages/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600">{link}</a> {/* Added link here */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-gray-500 font-semibold uppercase text-sm mb-4">Shop Pages</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                {shopLinks.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={`/shop/${(link.name || link).toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600 flex items-center"> {/* Added link here */}
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
                                        {components.map((column, index) => (
                                            <div key={index} className="py-4">
                                                {column.title && (<p className="mb-2">{column.title} {column.comingSoon && (<span className="bg-purple-300 text-white px-2 py-1 rounded-full ml-2">Coming Soon</span>)}</p>)}
                                                {column.items.map((item, itemIndex) => (
                                                    <p key={itemIndex} className="py-1">
                                                        <a href={`/elements/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600">{item}</a> {/* Added link here */}
                                                        {column.searchStyleComingSoon && item === 'Search Style' && (<span className="bg-purple-300 text-white px-2 py-1 rounded-full ml-2">Coming Soon</span>)}
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
                                        <h2 className="p-2 text-gray-500 font-semibold uppercase text-sm ">Blog Styles</h2>
                                        <ul className="space-y-2 text-gray-700">
                                            {blogStyles.map((style, index) => (
                                                <li key={index} className="p-2">
                                                    <a href={`/blog/${style.toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600">{style}</a> {/* Added link here */}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="p-2 text-gray-500 font-semibold uppercase text-sm ">Get Started</h2>
                                        <ul className="space-y-2 text-gray-700">
                                            {getStartedLinks.map((link, index) => (
                                                <li key={index} className="p-2 flex items-center">
                                                    <a href={`/pages/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600 flex items-center"> {/* Added link here */}
                                                        {link.name || link}
                                                        {link.coming && (<span className="ml-2 bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">Coming</span>)}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

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
                                    <div key={index} className="p-2 bg-gray-100">
                                        <a href={`/help/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-indigo-600">{item}</a> {/* Added link here */}
                                    </div>
                                ))}
                            </div>
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