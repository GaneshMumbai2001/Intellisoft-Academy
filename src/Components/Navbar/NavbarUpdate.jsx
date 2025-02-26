// import React, { useState, useEffect } from 'react';
// import { X } from "lucide-react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from "react-icons/fa";
// import intellisoftLogo from '/public/navbar/intellisoft.png';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const menuItems = [
//         { name: "Demos", subItems: [{ label: "Home Page", link: "/" }, { label: "Landing Page", link: "/landing" }, { label: "ContactUs", link: "/courses" }, { label: "Contact", link: "/contact" }, { label: "Blog", link: "/blog" }, { label: "Course to Buy", link: "/coursebuy" }, { label: "React", link: "/react" }, { label: "Login", link: "/login" }, { label: "Signup", link: "/signup" }] },
//         { name: "Courses", subItems: [{ label: "Art & Humanities", link: "/artpage" }, { label: "Bitcoin Forums", link: "/bitcoinpage" }, { label: "Core Functions", link: "/corepage" }] },
//         { name: "Pages", subItems: [{ label: "About Us", link: "/about" }, { label: "Contact", link: "/contact" }, { label: "FAQ", link: "/faq" }] },
//         { name: "Elements", subItems: [{ label: "Buttons", link: "/buttons" }, { label: "Cards", link: "/cards" }, { label: "Forms", link: "/forms" }] },
//         { name: "Blog", subItems: [{ label: "Latest Posts", link: "/latest-posts" }, { label: "Categories", link: "/categories" }] },
//         { name: "Help", subItems: [{ label: "Support", link: "/support" }, { label: "Feedback", link: "/feedback" }] },
//     ];

//     const [isOpen, setIsOpen] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
//     const [userDropdown, setUserDropdown] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleMenu = (menu) => {
//         setActiveMenu(activeMenu === menu ? null : menu);
//     };

//     const toggleUserDropdown = () => {
//         setUserDropdown(!userDropdown);
//     };

//     const toggleCart = () => {
//         setIsCartOpen(!isCartOpen);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('userToken');
//         localStorage.removeItem('userData');
//         navigate('/login');
//         setUserDropdown(false);
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 769);
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const demostarted = [
//         { name: 'Home Page', link: '/' },
//         { name: 'Landing Page', link: '/landing' },
//         { name: 'Login', link: '/login' },
//     ];

//     const getStartedLinks = [
//         { name: 'Art & Humanities', link: '/artpage' },
//         { name: 'Bitcoin Forums', link: '/bitcoinpage' },
//         { name: 'Core Functions', link: '/corepage' },
//         { name: 'Functional Training', link: '/functionaltraining' },
//         { name: 'IT', link: '/IT' },
//         { name: 'Quantum Chemistry', link: '/quantumpage' },
//     ];

//     const [cart, setCart] = useState([
//         {
//           id: 1,
//           name: "The Ultimate Course Bundle",
//           price: 500.0,
//           quantity: 1,
//           image: "/home/co1.png", // Placeholder image
//         },
//         {
//             id: 2,
//             name: "The Ultimate Course Bundle",
//             price: 500.0,
//             quantity: 1,
//             image: "/home/co2.png", // Placeholder image
//           },
//           {
//             id: 3,
//             name: "The Ultimate Course Bundle",
//             price: 500.0,
//             quantity: 1,
//             image: "/home/co3.png", // Placeholder image
//           },
//       ]);
    
//       const removeItem = (id) => {
//         setCart(cart.filter((item) => item.id !== id));
//       };
    
//       const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//     return (
//         <div className="w-full">
//             {/* Top Bar */}
//             <div className="bg-gray-900 text-white text-xs flex justify-end px-6 py-2">
//                 <div className="flex gap-3 items-center">
//                     <FaFacebook /> <FaInstagram /> <FaLinkedin />
//                     <span className="ml-2">English</span>
//                     <span>INR</span>
//                 </div>
//             </div>

//             {/* Main Navbar */}
//             <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1400px] shadow-md relative">
//                 <img onClick={() => setIsOpen(true)} src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer" />

//                 <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
//                     {/* Demos Dropdown */}
//                     <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
//                         Demos
//                         <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
//                             <ul className="space-y-2 text-[13px] text-gray-900">
//                                 {demostarted.map((link, index) => (
//                                     <li key={index}>
//                                         <Link to={link.link} className="hover:text-indigo-600">{link.name}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Other Nav Items (using Link) */}
//                     <Link to="/courses" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Courses</Link>
//                     <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
//                         Pages
//                         <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
//                             <ul className="space-y-2 text-[13px] text-gray-900">
//                                 {getStartedLinks.map((link, index) => (
//                                     <li key={index}>
//                                         <Link to={link.link} className="hover:text-indigo-600">{link.name}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                     <Link to="/" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Elements</Link>
//                     <Link to="/blog" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Blogs</Link>
//                     <Link to="/contact" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">Contact Us</Link>
//                 </nav>

//                 {/* Right Side Icons */}
//                 <div className="flex items-center gap-4">
//                     {/* Shopping Cart */}
//                     <div className="relative">
//                         <button onClick={toggleCart}>
//                             <FaShoppingCart className="text-gray-800" />
//                             <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full">0</span>
//                         </button>
//                     </div>

//                     {/* User Dropdown */}
//                     <div className="relative inline-block text-left">
//                         <div className="flex items-center gap-1 text-gray-800 cursor-pointer" onClick={toggleUserDropdown}>
//                             <FaUser /> User
//                         </div>
//                         {userDropdown && (
//                             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
//                                 <div className="py-1">
//                                     <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Purchase Now Button */}
//                     <button className="relative px-3 py-1 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white max-[600px]:hidden">
//                         Purchase Now
//                     </button>
//                 </div>

//                 {/* Sidebar */}
//                 <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
//                     <div className="p-5 flex justify-between items-center border-b">
//                         <img src={intellisoftLogo} alt="Logo" className="object-contain shrink-0 max-w-full w-[115px] hover:cursor-pointer" />
//                         <button onClick={() => setIsOpen(false)}> <X size={24} /> </button>
//                     </div>

//                     <p className="px-5 py-2 text-gray-600">We're always in search for talented and motivated people. Don't be shy, introduce yourself!</p>
//                     <div className="px-5">
//                         <a href="mailto:contact@intellisoft.in" className="flex items-center gap-2 text-gray-700"> 📧 contact@intellisoft.in </a>
//                         <a href="tel:+919705134869" className="flex items-center gap-2 text-gray-700 mt-2"> 📞 +91 97051 34869 </a>
//                     </div>

//                     <ul className="mt-5">
//                         {menuItems.map((menu) => (
//                             <li key={menu.name} className="border-b">
//                                 <button className="w-full text-left px-5 py-3 text-gray-700 flex justify-between items-center hover:bg-gray-100" onClick={() => toggleMenu(menu.name)}>
//                                     {menu.name} <span>{activeMenu === menu.name ? "−" : "+"}</span>
//                                 </button>
//                                 {activeMenu === menu.name && (
//                                     <ul className="bg-gray-50">
//                                         {menu.subItems.map((item, index) => (
//                                             <li key={index} className="px-8 py-2 text-gray-700 hover:bg-gray-200">
//                                                 <a href={item.link}>{item.label}</a>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Shopping Cart Sidebar */}
//                 <div className={`fixed top-0 right-0 h-full w-104 bg-white shadow-lg z-[1000] transform ${isCartOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
//                     <div className="p-5 flex justify-between items-center border-b">
//                         <h2 className="text-lg font-semibold">Shopping Cart</h2>
//                         <button onClick={toggleCart}> <X size={24} /> </button>
//                     </div>
//                     <div className="p-5">
//                     <div className="mt-4">
//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
//               <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
//               <div className="flex-1 ml-4">
//                 <p className="text-sm font-medium">{item.name}</p>
//                 <p className="text-sm text-gray-500">{item.quantity} × ${item.price.toFixed(2)}</p>
//               </div>
//               <X className="text-red-500 cursor-pointer" onClick={() => removeItem(item.id)} />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center">Your cart is empty.</p>
//         )}
//       </div>
//       <div className="border-t pt-4 mt-4 flex justify-between text-lg font-semibold">
//         <span>Subtotal:</span>
//         <span>${subtotal.toFixed(2)}</span>
//       </div>
//       <div className="mt-4 flex flex-col gap-2">
//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">View cart</button>
//         <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">Checkout</button>
//       </div>
//                         {/* Add cart items here */}
//                     </div>
//                 </div>

//                 {isOpen && (<div className="fixed inset-0 bg-red opacity-50 z-[999] md:hidden" onClick={() => setIsOpen(false)}></div>)}
//                 {isCartOpen && (<div className="fixed inset-0 bg-black opacity-50 z-[999]" onClick={toggleCart}></div>)}
//             </div>
//         </div>
//     );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from 'react-icons/fa';
// import intellisoftLogo from '/public/navbar/intellisoft.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../Course/CartContex'; // Import the useCart hook

// const Navbar = () => {
//   const menuItems = [
//     {
//       name: 'Demos',
//       subItems: [
//         { label: 'Home Page', link: '/' },
//         { label: 'Landing Page', link: '/landing' },
//         { label: 'ContactUs', link: '/courses' },
//         { label: 'Contact', link: '/contact' },
//         { label: 'Blog', link: '/blog' },
//         { label: 'Course to Buy', link: '/coursebuy' },
//         { label: 'React', link: '/react' },
//         { label: 'Login', link: '/login' },
//         { label: 'Signup', link: '/signup' },
//       ],
//     },
//     {
//       name: 'Courses',
//       subItems: [
//         { label: 'Art & Humanities', link: '/artpage' },
//         { label: 'Bitcoin Forums', link: '/bitcoinpage' },
//         { label: 'Core Functions', link: '/corepage' },
//       ],
//     },
//     {
//       name: 'Pages',
//       subItems: [
//         { label: 'About Us', link: '/about' },
//         { label: 'Contact', link: '/contact' },
//         { label: 'FAQ', link: '/faq' },
//       ],
//     },
//     {
//       name: 'Elements',
//       subItems: [
//         { label: 'Buttons', link: '/buttons' },
//         { label: 'Cards', link: '/cards' },
//         { label: 'Forms', link: '/forms' },
//       ],
//     },
//     {
//       name: 'Blog',
//       subItems: [
//         { label: 'Latest Posts', link: '/latest-posts' },
//         { label: 'Categories', link: '/categories' },
//       ],
//     },
//     {
//       name: 'Help',
//       subItems: [
//         { label: 'Support', link: '/support' },
//         { label: 'Feedback', link: '/feedback' },
//       ],
//     },
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
//   const [userDropdown, setUserDropdown] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const navigate = useNavigate();
//   const { cart, removeItem } = useCart(); // Use the cart state and removeItem function from the context

//   const toggleMenu = (menu) => {
//     setActiveMenu(activeMenu === menu ? null : menu);
//   };

//   const toggleUserDropdown = () => {
//     setUserDropdown(!userDropdown);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('userData');
//     navigate('/login');
//     setUserDropdown(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 769);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const demostarted = [
//     { name: 'Home Page', link: '/' },
//     { name: 'Landing Page', link: '/landing' },
//     { name: 'Login', link: '/login' },
//   ];

//   const getStartedLinks = [
//     { name: 'Art & Humanities', link: '/artpage' },
//     { name: 'Bitcoin Forums', link: '/bitcoinpage' },
//     { name: 'Core Functions', link: '/corepage' },
//     { name: 'Functional Training', link: '/functionaltraining' },
//     { name: 'IT', link: '/IT' },
//     { name: 'Quantum Chemistry', link: '/quantumpage' },
//   ];

//   const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

//   return (
//     <div className="w-full">
//       {/* Top Bar */}
//       <div className="bg-gray-900 text-white text-xs flex justify-end px-6 py-2">
//         <div className="flex gap-3 items-center">
//           <FaFacebook /> <FaInstagram /> <FaLinkedin />
//           <span className="ml-2">English</span>
//           <span>INR</span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="flex mx-auto mt-4 justify-between items-center px-5 py-3 text-xs font-medium bg-white rounded-md max-w-[1400px] shadow-md relative">
//         <img
//           onClick={() => setIsOpen(true)}
//           src={intellisoftLogo}
//           alt="Logo"
//           className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer"
//         />

//         <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
//           {/* Demos Dropdown */}
//           <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
//             Demos
//             <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
//               <ul className="space-y-2 text-[13px] text-gray-900">
//                 {demostarted.map((link, index) => (
//                   <li key={index}>
//                     <Link to={link.link} className="hover:text-indigo-600">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Other Nav Items (using Link) */}
//           <Link to="/courses" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
//             Courses
//           </Link>
//           <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
//             Pages
//             <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
//               <ul className="space-y-2 text-[13px] text-gray-900">
//                 {getStartedLinks.map((link, index) => (
//                   <li key={index}>
//                     <Link to={link.link} className="hover:text-indigo-600">
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <Link to="/" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
//             Elements
//           </Link>
//           <Link to="/blog" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
//             Blogs
//           </Link>
//           <Link to="/contact" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
//             Contact Us
//           </Link>
//         </nav>

//         {/* Right Side Icons */}
//         <div className="flex items-center gap-4">
//           {/* Shopping Cart */}
//           <div className="relative">
//             <button onClick={toggleCart}>
//               <FaShoppingCart className="text-gray-800" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cart.length}
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* User Dropdown */}
//           <div className="relative inline-block text-left">
//             <div className="flex items-center gap-1 text-gray-800 cursor-pointer" onClick={toggleUserDropdown}>
//               <FaUser /> User
//             </div>
//             {userDropdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
//                 <div className="py-1">
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Purchase Now Button */}
//           <button className="relative px-3 py-1 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white max-[600px]:hidden">
//             Purchase Now
//           </button>
//         </div>

//         {/* Sidebar */}
//         <div
//           className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${
//             isOpen ? 'translate-x-0' : '-translate-x-full'
//           } transition-transform duration-300 ease-in-out md:hidden`}
//         >
//           <div className="p-5 flex justify-between items-center border-b">
//             <img
//               src={intellisoftLogo}
//               alt="Logo"
//               className="object-contain shrink-0 max-w-full w-[115px] hover:cursor-pointer"
//             />
//             <button onClick={() => setIsOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           <p className="px-5 py-2 text-gray-600">
//             We're always in search for talented and motivated people. Don't be shy, introduce yourself!
//           </p>
//           <div className="px-5">
//             <a href="mailto:contact@intellisoft.in" className="flex items-center gap-2 text-gray-700">
//               📧 contact@intellisoft.in
//             </a>
//             <a href="tel:+919705134869" className="flex items-center gap-2 text-gray-700 mt-2">
//               📞 +91 97051 34869
//             </a>
//           </div>

//           <ul className="mt-5">
//             {menuItems.map((menu) => (
//               <li key={menu.name} className="border-b">
//                 <button
//                   className="w-full text-left px-5 py-3 text-gray-700 flex justify-between items-center hover:bg-gray-100"
//                   onClick={() => toggleMenu(menu.name)}
//                 >
//                   {menu.name} <span>{activeMenu === menu.name ? '−' : '+'}</span>
//                 </button>
//                 {activeMenu === menu.name && (
//                   <ul className="bg-gray-50">
//                     {menu.subItems.map((item, index) => (
//                       <li key={index} className="px-8 py-2 text-gray-700 hover:bg-gray-200">
//                         <a href={item.link}>{item.label}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Shopping Cart Sidebar */}
//         <div
//           className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-[1000] transform ${
//             isCartOpen ? 'translate-x-0' : 'translate-x-full'
//           } transition-transform duration-300 ease-in-out`}
//         >
//           <div className="p-5 flex justify-between items-center border-b">
//             <h2 className="text-lg font-semibold">Shopping Cart</h2>
//             <button onClick={toggleCart}>
//               <X size={24} />
//             </button>
//           </div>
//           <div className="p-5">
//             <div className="mt-4">
//               {cart.length > 0 ? (
//                 cart.map((item) => (
//                   <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
//                     <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
//                     <div className="flex-1 ml-4">
//                       <p className="text-sm font-medium">{item.name}</p>
//                       <p className="text-sm text-gray-500">{item.description}</p>
//                       <p className="text-sm text-gray-500">
//                         {item.quantity} × ${item.price}
//                       </p>
//                     </div>
//                     <X className="text-red-500 cursor-pointer" onClick={() => removeItem(item.id)} />
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-center">Your cart is empty.</p>
//               )}
//             </div>
//             <div className="border-t pt-4 mt-4 flex justify-between text-lg font-semibold">
//               <span>Subtotal:</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="mt-4 flex flex-col gap-2">
//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
//                 View cart
//               </button>
//               <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="fixed inset-0 bg-black opacity-50 z-[999] md:hidden" onClick={() => setIsOpen(false)}></div>
//         )}
//         {isCartOpen && (
//           <div className="fixed inset-0 bg-black opacity-50 z-[999]" onClick={toggleCart}></div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaShoppingCart, FaUser } from 'react-icons/fa';
import intellisoftLogo from '/public/navbar/intellisoft.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContex'; // Import the useCart hook


const Navbar = () => {
  const menuItems = [
    {
      name: 'Demos',
      subItems: [
        { label: 'Home Page', link: '/' },
        { label: 'Landing Page', link: '/landing' },
        { label: 'ContactUs', link: '/courses' },
        { label: 'Contact', link: '/contact' },
        { label: 'Blog', link: '/blog' },
        { label: 'Course to Buy', link: '/coursebuy' },
        { label: 'React', link: '/react' },
        { label: 'Login', link: '/login' },
        { label: 'Signup', link: '/signup' },
      ],
    },
    {
      name: 'Courses',
      subItems: [
        { label: 'Art & Humanities', link: '/artpage' },
        { label: 'Bitcoin Forums', link: '/bitcoinpage' },
        { label: 'Core Functions', link: '/corepage' },
      ],
    },
    {
      name: 'Pages',
      subItems: [
        { label: 'About Us', link: '/about' },
        { label: 'Contact', link: '/contact' },
        { label: 'FAQ', link: '/faq' },
      ],
    },
    {
      name: 'Elements',
      subItems: [
        { label: 'Buttons', link: '/buttons' },
        { label: 'Cards', link: '/cards' },
        { label: 'Forms', link: '/forms' },
      ],
    },
    {
      name: 'Blog',
      subItems: [
        { label: 'Latest Posts', link: '/latest-posts' },
        { label: 'Categories', link: '/categories' },
      ],
    },
    {
      name: 'Help',
      subItems: [
        { label: 'Support', link: '/support' },
        { label: 'Feedback', link: '/feedback' },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
  const [userDropdown, setUserDropdown] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { cart, removeItem } = useCart(); // Use the cart state and removeItem function from the context

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    navigate('/login');
    setUserDropdown(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const demostarted = [
    { name: 'Home Page', link: '/' },
    { name: 'Landing Page', link: '/landing' },
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

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

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
        <img
          onClick={() => setIsOpen(true)}
          src={intellisoftLogo}
          alt="Logo"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[3.03] w-[115px] hover:cursor-pointer"
        />

        <nav className="hidden md:flex gap-5 lg:gap-10 self-stretch my-auto leading-5 text-gray-800 whitespace-nowrap">
          {/* Demos Dropdown */}
          <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
            Demos
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
              <ul className="space-y-2 text-[13px] text-gray-900">
                {demostarted.map((link, index) => (
                  <li key={index}>
                    <Link to={link.link} className="hover:text-indigo-600">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Nav Items (using Link) */}
          <Link to="/courses" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
            Courses
          </Link>
          <div className="relative leading-5 hover:cursor-pointer group hover:text-blue-600">
            Pages
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 hidden group-hover:flex w-[auto] p-4 z-50 bg-white rounded-lg shadow-lg">
              <ul className="space-y-2 text-[13px] text-gray-900">
                {getStartedLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.link} className="hover:text-indigo-600">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
            Elements
          </Link>
          <Link to="/blog" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
            Blogs
          </Link>
          <Link to="/contact" className="relative leading-5 hover:cursor-pointer hover:text-blue-600">
            Contact Us
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Shopping Cart */}
          <div className="relative">
            <button onClick={toggleCart}>
              <FaShoppingCart className="text-gray-800" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* User Dropdown */}
          <div className="relative inline-block text-left">
            <div className="flex items-center gap-1 text-gray-800 cursor-pointer" onClick={toggleUserDropdown}>
              <FaUser /> User
            </div>
            {userDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
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
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[1000] transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-5 flex justify-between items-center border-b">
            <img
              src={intellisoftLogo}
              alt="Logo"
              className="object-contain shrink-0 max-w-full w-[115px] hover:cursor-pointer"
            />
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

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

          <ul className="mt-5">
            {menuItems.map((menu) => (
              <li key={menu.name} className="border-b">
                <button
                  className="w-full text-left px-5 py-3 text-gray-700 flex justify-between items-center hover:bg-gray-100"
                  onClick={() => toggleMenu(menu.name)}
                >
                  {menu.name} <span>{activeMenu === menu.name ? '−' : '+'}</span>
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

        {/* Shopping Cart Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-[1000] transform ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-5 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={toggleCart}>
              <X size={24} />
            </button>
          </div>
          <div className="p-5">
            <div className="mt-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                    <div className="flex-1 ml-4">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.price}
                      </p>
                    </div>
                    <X
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
              )}
            </div>
            <div className="border-t pt-4 mt-4 flex justify-between text-lg font-semibold">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {/* <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
                View cart
              </button> */}
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-[999] md:hidden" onClick={() => setIsOpen(false)}></div>
        )}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-[999]" onClick={toggleCart}></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;