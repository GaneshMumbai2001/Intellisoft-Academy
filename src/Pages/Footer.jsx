import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Footer = () => {

  const usefulLinks = [
    { name: "About Us", path: "/about" },
    { name: "Landingpage", path: "/landing" },
    { name: "Kindergarden", path: "/kindergarden" },
    { name: "University", path: "/university" },
  ];

  
  const companyLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Instructor", path: "/instructor" },
    { name: "Pricing", path: "/pricing" },
    { name: "Service", path: "/service" },
  ];
  const legalLinks = [
    { name: "Terms of service", path: "" },
    { name: "Privacy Policy", path: "" },
    { name: "Subscription", path: "" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/signup" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap justify-center w-full bg-white py-10 gap-24 p-2"
    >
      {/* Company Info */}
      <div className="flex flex-col items-start max-w-[430px]">
        <img
          src="public/navbar/intellisoft.png"
          alt="Company Logo"
          className="w-[114px] object-contain"
        />
        <p className="mt-4 text-xs text-gray-500">
          We're always in search for talented and motivated people. Don't be shy introduce yourself!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-5 py-2 border-2 border-gray-800 rounded-full shadow-md text-gray-800 bg-white hover:bg-gray-100 transition"
        >
          <Link to="/contact">Contact With Us </Link> 
        </motion.button>
      </div>
      
      {/* Useful Links */}
      <div className="flex flex-col max-w-[217px] text-gray-500">
        <div className="text-lg font-bold text-gray-800">Useful Links</div>
        <div className="mt-4 text-base space-y-3">
          {usefulLinks.map((link, index) => (
            <p key={index} className="text-sm font-semibold">
              <a href={link.path} className="text-gray-700 hover:text-blue-600 transition">
                {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Our Company */}
      <div className="flex flex-col max-w-[217px] text-gray-500">
        <div className="text-lg font-bold text-gray-800">Our Company</div>
        <div className="mt-4 text-base space-y-3">
          {companyLinks.map((link, index) => (
            <p key={index} className="text-sm font-semibold">
              <a href={link.path} className="text-gray-700 hover:text-blue-600 transition">
                {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Legal Links */}
      <div className="flex flex-col max-w-[217px] text-gray-500">
        <div className="text-lg font-bold text-gray-800">Legal</div>
        <div className="mt-4 text-base space-y-3">
          {legalLinks.map((link, index) => (
            <p key={index} className="text-sm font-semibold">
              <a href={link.path} className="text-gray-700 hover:text-blue-600 transition">
                {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
