// import "./App.css";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Pages/Navbar.jsx";
// import NavbarUpdate from "../src/Components/Navbar/NavbarUpdate.jsx";
// import Footer from "./Pages/Footer.jsx";
// // import Demo from "../src/Components/Navbar/Demo.jsx";
// import Nav from "../src/Components/Navbar/Nav.jsx";
// import BackToTop from "./Components/UpwardArrow/BackToTop.jsx";
// function App() {
//   return (
//     <>
//       {/* <Demo/> */}
//       {/* <Navbar /> */}
//       <NavbarUpdate/>
//       {/* <Nav/> */}
//       <BackToTop/>
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import "./App.css";
import NavbarUpdate from "../src/Components/Navbar/NavbarUpdate.jsx";
import Footer from "./Pages/Footer.jsx";
// import Demo from "../src/Components/Navbar/Demo.jsx";
// import Nav from "../src/Components/Navbar/Nav.jsx";
import BackToTop from "./Components/UpwardArrow/BackToTop.jsx";
import { Outlet, useNavigate, Route, Routes } from "react-router-dom"; // Updated import for useNavigate and Routes
import ResetPassword from "./Components/Forms/ResetPassword.jsx"; // Ensure you import ResetPassword correctly
import { CartProvider } from './Components/Course/CartContex.jsx';

const API_BASE_URL = "http://localhost:5000/api";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requiresOTP, setRequiresOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const [emailForOTP, setEmailForOTP] = useState("");
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/test`)
      .then((res) => res.json())
      .then((data) => console.log("Backend Response:", data))
      .catch((err) => console.error("Error connecting to backend:", err));
  }, []);
  
  // Check if User is Logged In
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Signup API Call
  const handleSignup = async (email, password) => {
    email = email.toLowerCase();

    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Signup successful:", data);
        setEmailForOTP(email);
        setRequiresOTP(true);
      } else {
        console.error("❌ Signup failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  // OTP Verification API Call
  const handleVerifyOTP = async () => {
    if (!otp || !emailForOTP) {
      console.error("❌ Email or OTP missing. Cannot verify OTP.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailForOTP, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ OTP Verified:", data);
        setRequiresOTP(false);
        navigate("/login");
      } else {
        console.error("❌ OTP Verification Failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  // Forgot Password API Call
  const handleForgotPassword = async (email) => {
    email = email.toLowerCase();

    try {
      const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Forgot Password Email Sent:", data);
        alert("Password reset link sent to your email.");
      } else {
        console.error("❌ Forgot Password Request Failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  // Reset Password API Call
  const handleResetPassword = async (token, newPassword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Password Reset Successful:", data);
        alert("Password reset successfully. Please login.");
        navigate("/login");
      } else {
        console.error("❌ Password Reset Failed:", data.message);
        alert("Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Login API Call
  const handleLogin = async (email, password) => {
    email = email.toLowerCase();

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        console.log("✅ Login successful:", data);
        navigate("/dashboard");
      } else {
        console.error("❌ Login failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      

      {/* OTP Modal */}
      {requiresOTP && (
        <div className="otp-modal">
          <h2>Verify Your Account</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="border p-2 rounded"
          />
          <button onClick={handleVerifyOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
            Verify OTP
          </button>
        </div>
      )}

      {/* Forgot Password Mode */}
      {forgotPasswordMode && (
        <div className="forgot-password-modal">
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded"
            onChange={(e) => setEmailForOTP(e.target.value)}
          />
          <button
            onClick={() => handleForgotPassword(emailForOTP)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send Reset Link
          </button>
        </div>
      )}

      <Routes>
        <Route path="/reset-password/:token" element={<ResetPassword handleResetPassword={handleResetPassword} />} />
      </Routes>
      <CartProvider>

       {/* <Demo/> */}
      {/* <Navbar /> */}
      <NavbarUpdate/>
      {/* <Nav/> */}
    
      <BackToTop/>
      <Outlet />
      <Footer />
    </CartProvider>
    </>
  );
}

export default App;