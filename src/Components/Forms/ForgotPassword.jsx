import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ message: null, error: null, loading: false });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, message: null, error: null }); // Clear previous messages

    if (!email) {
      setStatus({ message: null, error: "Please enter an email address.", loading: false });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.headers.get("content-type")?.includes("application/json")) {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error sending reset link");
        setStatus({ message: "Password reset link sent!", error: null, loading: false });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      setStatus({ message: null, error: err.message, loading: false });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        {status.message && <p className="text-green-600 text-center mb-2">{status.message}</p>}
        {status.error && <p className="text-red-600 text-center mb-2">{status.error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.97 }} 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send Reset Link"}
          </motion.button>
          <button type="button" onClick={() => navigate('/login')} className="text-sm text-blue-500 hover:underline text-center block">
            Back to Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};
