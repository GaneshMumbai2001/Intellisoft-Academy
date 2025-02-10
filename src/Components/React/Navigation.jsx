import React from "react";
import { motion } from "framer-motion";

function Navigation() {
  const navItems = [
    "Category",
    "Demos",
    "Courses",
    "Pages",
    "Elements",
    "Blog",
    "Help",
  ];

  return (
    <motion.nav
      className="hidden md:flex items-center space-x-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {navItems.map((item, index) => (
        <motion.a
          key={item}
          href="#"
          className="relative text-gray-600 hover:text-blue-600 transition-colors font-medium"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {item}
          {/* Animated Underline Effect */}
          <motion.span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            whileHover={{ scaleX: 1, transition: { duration: 0.3 } }}
          />
        </motion.a>
      ))}
    </motion.nav>
  );
}

export default Navigation;
