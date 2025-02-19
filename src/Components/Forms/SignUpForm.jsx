import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [userId, setUserId] = useState(null);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "firstname" || name === "lastname") {
      const regex = /^[A-Za-z]+$/;
      setErrors((prev) => ({
        ...prev,
        [name]: value === "" || regex.test(value) ? "" : "Only alphabets are allowed",
      }));
    }

    if (name === "mobile") {
      setErrors((prev) => ({
        ...prev,
        mobile: /^\d{10}$/.test(value) ? "" : "Mobile number must be 10 digits",
      }));
    }

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value) ? "" : "Email must be a valid Gmail address (alphanumeric@gmail.com)",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data Before Validation:", formData); 

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.mobile ||
      errors.firstname ||
      errors.lastname ||
      errors.mobile ||
      errors.email ||
      errors.password ||
      errors.confirmPassword
    ) {
      setErrors((prev) => ({
        ...prev,
        firstname: formData.firstname ? prev.firstname : "First name is required",
        lastname: formData.lastname ? prev.lastname : "Last name is required",
        mobile: formData.mobile ? prev.mobile : "Mobile number is required",
      }));
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging line

      if (response.ok) {
        setShowOtpModal(true);
        setUserId(data.userId); // Store userId for OTP verification
      } else {
        alert(data.message); // Show error message from backend
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.join("").length !== 6) {
      setOtpError("Invalid OTP. Please enter all 6 digits.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, otp: otp.join("") }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("OTP Verified! Redirecting to login...");
        setShowOtpModal(false);
        navigate("/login");
      } else {
        setOtpError(data.message);
      }
    } catch (error) {
      console.error("OTP verification error:", error);
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
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center"
        >
          Sign Up
        </motion.h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              maxLength="10"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              required
              className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          {/* Sign Up Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>

      {/* OTP Modal */}
      <AnimatePresence>
        {showOtpModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg"
            >
              <h3 className="text-xl font-bold text-center">Enter OTP</h3>
              <div className="flex justify-between my-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength="1"
                    className="w-10 h-10 text-center border rounded-lg"
                    id={`otp-${index}`}
                  />
                ))}
              </div>
              {otpError && <p className="text-red-500 text-sm text-center">{otpError}</p>}
              <motion.button
                onClick={handleVerifyOtp}
                className="w-full py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90"
              >
                Verify OTP
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};