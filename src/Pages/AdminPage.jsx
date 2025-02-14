import React from "react";
import { motion } from "framer-motion";

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Welcome to Admin Dashboard
        </h2>
      </motion.div>
    </div>
  );
};

export { AdminPage };
