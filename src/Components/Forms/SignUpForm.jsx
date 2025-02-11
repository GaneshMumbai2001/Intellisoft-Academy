// import { useState } from "react";


// export const SignUpForm= () => {
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
//         <h2 className="text-2xl font-semibold text-gray-900 text-center">SignUp</h2>
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
//             SignUp
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SignUpForm = () => {
<<<<<<< HEAD
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        // Client-side validation
        if (!formData.email) {
            setError("Email is required");
            setLoading(false);
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError("Invalid email format");
            setLoading(false);
            return;
        }
        if (!formData.password) {
            setError("Password is required");
            setLoading(false);
            return;
        }
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.message === "Email already exists") {
                setError("Email already exists. Please login.");
            } else if (data.message === "Signup successful") {
                setSuccess("Signup successful!");
                setFormData({ email: "", password: "", rememberMe: false });
                // window.location.href = "/login"; // Uncomment for redirection
            } else {
                setError(data.message || "Unexpected error occurred.");
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError("A network error occurred. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 text-center">Sign Up</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {success && <div className="text-green-500 mb-4">{success}</div>}
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
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
                            className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 text-white rounded-lg hover:opacity-90 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-blue-500"}`}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
=======
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState("");

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address",
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value)
          ? ""
          : "Must have 8+ chars, 1 uppercase, 1 number, & 1 special character",
      }));
    }

    if (name === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: value === formData.password ? "" : "Passwords do not match",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.password && !errors.confirmPassword) {
      setShowOtpModal(true);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (value !== "" && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = () => {
    if (otp.join("").length === 4) {
      console.log("OTP Verified:", otp.join(""));
      setShowOtpModal(false);
    } else {
      setOtpError("Invalid OTP. Please enter all 4 digits.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center drop-shadow-lg"
        >
          Sign Up
        </motion.h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="mr-2" />
            <label className="text-gray-600">Remember me</label>
          </div>

          {/* Submit Button */}
          <motion.button type="submit" whileHover={{ scale: 1.05 }} className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90">
            Sign Up
          </motion.button>
        </form>
      </motion.div>

      {/* OTP Modal */}
      <AnimatePresence>
        {showOtpModal && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-700 text-center">Enter OTP</h3>
              <div className="flex justify-center my-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-12 text-center text-xl border rounded-lg mx-1 focus:ring-2 focus:ring-blue-400"
                  />
                ))}
              </div>
              {otpError && <p className="text-red-500 text-sm text-center">{otpError}</p>}
              <button onClick={handleVerifyOtp} className="w-full mt-3 py-2 text-white bg-blue-500 rounded-lg hover:opacity-90">
                Verify OTP
              </button>
              <button onClick={() => setShowOtpModal(false)} className="w-full mt-2 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300">
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
>>>>>>> main
};
