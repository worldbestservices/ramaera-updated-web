import React, { useEffect } from 'react';
import { Bell, Search, User, LogOut, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAdminStore } from '../../../store/adminStore';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isCollapsed: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isCollapsed }) => {
  const { logout, getAdminProfile, profile } = useAdminStore();
  const navigate = useNavigate();

  useEffect(() => {
    getAdminProfile();
  }, [getAdminProfile]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.header 
      className={`
        fixed top-0 right-0 h-16 bg-black/90 backdrop-blur-xl border-b border-white/20 
        transition-all duration-300 z-20 cyber-card
        ${isCollapsed ? 'left-16' : 'left-64'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Enhanced Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search admin panel..."
              className="w-full pl-10 pr-4 py-2 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all duration-200 hover:border-white/40"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Enhanced Notifications */}
          <motion.button 
            className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-xl border border-white/20 hover:border-white/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell size={20} />
            <motion.span 
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>

          {/* Enhanced Profile */}
          <motion.div 
            className="flex items-center gap-3 p-2 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-white to-accent-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-black" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white font-['Orbitron']">
                {profile?.email?.slice(0, 8)}...
              </p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </motion.div>

          {/* Enhanced Logout */}
          <motion.button 
            onClick={handleLogout} 
            className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200 hover:bg-red-500/10 rounded-xl border border-white/20 hover:border-red-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut size={20} />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};