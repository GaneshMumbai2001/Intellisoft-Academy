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

export const SignUpForm = () => {
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
};
