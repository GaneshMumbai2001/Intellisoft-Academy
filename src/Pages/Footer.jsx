import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const usefulLinks = [
    { name: "About Us", path: "/about" },
    { name: "Landing Page", path: "/landing" },
    { name: "Kindergarten", path: "/kindergarten" },
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
    { name: "Terms of Service", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Subscription", path: "#" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/signup" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap justify-center w-full bg-white py-10 gap-18 p-4"
    >
      {/* Company Info */}
      <div className="flex flex-col items-start max-w-[430px]">
        <img
          src="/navbar/intellisoft.png"
          alt="Company Logo"
          className="w-[120px] object-contain"
        />
        <p className="mt-4 text-sm text-gray-600">
          We're always looking for talented and motivated people. Don’t be shy—introduce yourself!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-5 py-2 border-2 border-gray-800 rounded-full shadow-md text-gray-800 bg-white hover:bg-gray-100 transition"
          aria-label="Contact Us"
        >
          <Link to="/contact">Contact Us</Link>
        </motion.button>
      </div>

      {/* Link Sections */}
      {[{ title: "Useful Links", links: usefulLinks },
        { title: "Our Company", links: companyLinks },
        { title: "Legal", links: legalLinks }].map((section, idx) => (
        <div key={idx} className="flex flex-col max-w-[220px] text-gray-600">
          <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
          <div className="mt-4 space-y-3">
            {section.links.map((link, index) => (
              <p key={index} className="text-sm font-semibold">
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
                >
                  {link.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
      ))}
    </motion.footer>
  );
};

export default Footer;
