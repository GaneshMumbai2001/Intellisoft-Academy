// import { useState } from "react";


//  export const LoginForm= () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
//         <h2 className="text-2xl font-semibold text-gray-900 text-center">Login</h2>
//         <form className="mt-6" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Username or Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <label className="flex items-center text-gray-600">
//               <input
//                 type="checkbox"
//                 name="rememberMe"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               Remember me
//             </label>
//             <a href="#" className="text-blue-500 hover:underline">Lost your password?</a>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90"
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { motion } from "framer-motion";

export const LoginForm = () => {
<<<<<<< HEAD
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [error, setError] = useState(""); // State for error messages
    const [success, setSuccess] = useState(""); // State for success messages
    const [loading, setLoading] = useState(false); // State for loading

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setError(""); // Clear error on input change
        setSuccess(""); // Clear success on input change
    };
=======
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
>>>>>>> main

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        // Basic client-side validation
        if (!formData.email) {
            setError("Email is required");
            setLoading(false);
            return;
        }
        if (!formData.password) {
            setError("Password is required");
            setLoading(false);
            return;
        }

<<<<<<< HEAD
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Login successful!");
                console.log("Login Successful");
                // Example: Redirecting the user
                // window.location.href = "/dashboard";
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("A network error occurred. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 text-center">Login</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error */}
                {success && <div className="text-green-500 mb-4">{success}</div>} {/* Display success */}
                <form className="mt-6" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        className={`w-full py-2 text-white rounded-lg hover:opacity-90 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-blue-500"}`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Log in"}
                    </button>
                </form>
            </div>
        </div>
    );
=======
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-semibold text-gray-900 text-center"
        >
          Login
        </motion.h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username or Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Lost your password?
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all"
          >
            Log in
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
>>>>>>> main
};
