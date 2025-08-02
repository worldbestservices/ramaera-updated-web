import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, Shield, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import api from "../utils/axios";
import EnhLogo from "./EnhLogo";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!password || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await api.post(`/api/admin/reset-password/${token}`, {
        password,
      });
      setMessage("Password reset successfully! Redirecting...");
      setTimeout(() => navigate("/admin-login"), 2000);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Reset failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Reset Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-primary-600/10 to-black"></div>
      </div>
      <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>

      <motion.div 
        className="max-w-md w-full cyber-card relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-r from-primary-600/20 to-accent-500/20 p-8 text-center overflow-hidden border-b border-white/20">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Reset Header"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-4"
            >
              <EnhLogo size="md" variant="floating" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2 font-['Orbitron'] holographic">
              RESET PASSWORD
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4 text-accent-400" />
              <p className="text-accent-400 text-sm font-medium">SECURE ACCESS</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {error && (
            <motion.div 
              className="cyber-card p-4 border-red-500/50 bg-red-500/10 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            </motion.div>
          )}

          {message && (
            <motion.div 
              className="cyber-card p-4 border-green-500/50 bg-green-500/10 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-green-400 text-sm">{message}</p>
              </div>
            </motion.div>
          )}

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                <Lock className="h-4 w-4 text-accent-400" />
                <span>New Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40 pr-12"
                  placeholder="Enter new password"
                  required
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 rounded"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </motion.button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                <Lock className="h-4 w-4 text-accent-400" />
                <span>Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40 pr-12"
                  placeholder="Confirm new password"
                  required
                />
                <motion.button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 rounded"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </motion.button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-white to-accent-500 text-black py-3 px-4 rounded-xl hover:from-gray-200 hover:to-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 font-bold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Resetting...</span>
                </>
              ) : (
                <>
                  <Shield className="h-5 w-5" />
                  <span>RESET PASSWORD</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;