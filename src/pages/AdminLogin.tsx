import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAdminStore } from "../store/adminStore";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Shield, Sparkles, ArrowRight } from "lucide-react";
import EnhLogo from "../components/EnhLogo";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, forgotPassword, loading, error } = useAdminStore();

  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLocalError(""); // Clear error when user types
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setLocalError("Please fill in both fields.");
      return;
    }

    setLocalError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate('/admin');
    } catch {
      // Error is handled via Zustand state
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) {
      setForgotMessage("Please enter your email.");
      return;
    }

    setIsSubmitting(true);
    try {
      await forgotPassword(forgotEmail);
      setForgotMessage("If an account exists, a reset link has been sent.");
      setTimeout(() => {
        setIsForgotPassword(false);
        setForgotEmail("");
        setForgotMessage("");
      }, 2500);
    } catch {
      setForgotMessage("Failed to send reset link. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Admin Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-primary-600/10 to-black"></div>
      </div>
      <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>

      <motion.div 
        className="w-full max-w-md cyber-card overflow-hidden relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-primary-600/20 to-accent-500/20 p-8 text-center border-b border-white/20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-4"
            >
              <EnhLogo size="md" variant="floating" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2 font-['Orbitron'] holographic">
              RAMAERA INDUSTRIES
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4 text-accent-400" />
              <p className="text-accent-400 text-sm font-medium">ADMIN PORTAL</p>
            </div>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {!isForgotPassword ? (
              <motion.form 
                key="login"
                onSubmit={handleLoginSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {(localError || error) && (
                  <motion.div 
                    className="cyber-card p-4 border-red-500/50 bg-red-500/10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <p className="text-red-400 text-sm">{localError || error}</p>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-accent-400" />
                      <span>Email address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/80 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 hover:border-white/50 relative z-10"
                      placeholder="admin@ramaera.in"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-accent-400" />
                      <span>Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/80 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 hover:border-white/50 pr-12 relative z-10"
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                      />
                      <motion.button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 rounded z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </motion.button>
                    </div>
                  </div>

                  <div className="flex justify-end text-sm">
                    <motion.button
                      type="button"
                      onClick={() => setIsForgotPassword(true)}
                      className="text-accent-400 hover:text-accent-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Forgot password?
                    </motion.button>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || isSubmitting}
                    className="w-full bg-gradient-to-r from-white to-accent-500 text-black py-3 px-4 rounded-xl hover:from-gray-200 hover:to-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 font-bold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading || isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Logging in...</span>
                      </>
                    ) : (
                      <>
                        <Shield className="h-5 w-5" />
                        <span>ACCESS ADMIN PORTAL</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.form 
                key="forgot"
                onSubmit={handleForgotPasswordSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {forgotMessage && (
                  <motion.div 
                    className="cyber-card p-4 border-accent-500/50 bg-accent-500/10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <p className="text-accent-400 text-sm">{forgotMessage}</p>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-accent-400" />
                    <span>Enter your registered email</span>
                  </label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 hover:border-white/50 relative z-10"
                    placeholder="admin@ramaera.in"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <motion.button
                    type="button"
                    onClick={() => {
                      setIsForgotPassword(false);
                      setForgotEmail("");
                      setForgotMessage("");
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    <span>Back to login</span>
                  </motion.button>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-600 to-accent-500 text-white py-3 px-4 rounded-xl hover:from-accent-700 hover:to-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 font-bold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      <span>SEND RESET LINK</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Footer */}
        <div className="p-6 bg-gradient-to-r from-primary-600/10 to-accent-500/10 border-t border-white/20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="h-4 w-4 text-accent-400" />
            <p className="text-sm text-gray-400">Secure Admin Access</p>
          </div>
          <p className="text-xs text-gray-500">
            Managing India's Industrial Revolution
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;