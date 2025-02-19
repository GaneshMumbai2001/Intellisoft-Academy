import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export const AdminHeader = () => {
  return (
    <motion.div
  
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-gradient-to-b from-white to-gray-100 py-6 text-center shadow-md mt-6"
  >
  
      {/* Title - "My account" */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-extrabold text-gray-800"
      >
        Admin Page
      </motion.h1>

      {/* Breadcrumb - "Home  My account" with added spacing */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 space-x-3"
      >
        <Link to="/" className="text-blue-600 font-semibold cursor-pointer hover:underline">
          Home
        </Link>
        <span className="text-gray-400">  </span>
        <span className="text-gray-500 font-medium">Admin</span>
      </motion.p>
    </motion.div>
  );
};

