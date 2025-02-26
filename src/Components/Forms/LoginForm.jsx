// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// export const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loginFailed, setLoginFailed] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
      
//       if (!response.ok) throw new Error(data.message || "Invalid credentials");
//       localStorage.setItem("token", data.token);
//       alert("Login successful!");
//       setFormData({ email: "", password: "", rememberMe: false });

//       setLoginFailed(false);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//       setLoginFailed(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
//         <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
//         {error && <p className="text-red-600 text-center mb-2">{error}</p>}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
//           <div className="relative">
//             <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg pr-12" required />
//             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
//               {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
//             </button>
//           </div>
        //   <div className="flex justify-between items-center">
        //     <label className="flex items-center">
        //       <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="mr-2" />
        //       Remember me
        //     </label>
        //     {loginFailed && (
        //       <button type="button" onClick={() => navigate("/forgot-password")} className="text-blue-600 hover:underline">
        //         Forgot password?
        //       </button>
        //     )}
        //   </div>
//           <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
//             {loading ? "Logging in..." : "Log in"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };



// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";

// export const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Invalid credentials");

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("userEmail", data.user.email);
//       alert("Login successful!");
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
//         <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
//         {error && <p className="text-red-600 text-center mb-2">{error}</p>}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
//           <div className="relative">
//             <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg pr-12" required />
//             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
//               {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
//             </button>
//           </div>
//           <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
//             {loading ? "Logging in..." : "Log in"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Invalid credentials");

      // Store token in localStorage
      localStorage.setItem("token", data.token);

      // Use email from formData instead of API response
      localStorage.setItem("userEmail", formData.email); // Store email from form input

      alert("Login successful!");
      setFormData({ email: "", password: "", rememberMe: false });

      setLoginFailed(false);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setLoginFailed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
        {error && <p className="text-red-600 text-center mb-2">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg pr-12" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="mr-2" />
              Remember me
            </label>
            {loginFailed && (
              <button type="button" onClick={() => navigate("/forgot-password")} className="text-blue-600 hover:underline">
                Forgot password?
              </button>
            )}
          </div>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
            {loading ? "Logging in..." : "Log in"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};