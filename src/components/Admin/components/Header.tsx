import React, { useEffect } from 'react';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { useAdminStore } from '../../../store/adminStore';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isCollapsed: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isCollapsed }) => {

  const {logout,getAdminProfile,profile} = useAdminStore();
  const navigate = useNavigate()

  useEffect(()=>{
    getAdminProfile();
  },[getAdminProfile])

  const handleLogout = () =>{
    logout();
    navigate('/')
  }

  return (
    <header className={`
      fixed top-0 right-0 h-16 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 
      transition-all duration-300 z-20
      ${isCollapsed ? 'left-16' : 'left-64'}
    `}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-800/50 rounded-lg">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">{profile?.email?.slice(0, 5)}</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>

          {/* Logout */}
          <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200 hover:bg-gray-800/50 rounded-lg">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};