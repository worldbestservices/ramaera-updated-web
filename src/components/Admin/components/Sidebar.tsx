import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Building2, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import EnhLogo from '../../EnhLogo';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'contacts', label: 'Contact Submissions', icon: MessageSquare },
  { id: 'applications', label: 'Factory Applications', icon: Building2 },
  { id: 'subscribers', label: 'Spices Subscribers', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  isCollapsed, 
  setIsCollapsed 
}) => {
  return (
    <motion.div 
      className={`
        fixed left-0 top-0 h-full bg-black/90 backdrop-blur-xl border-r border-white/20 
        transition-all duration-300 ease-in-out z-30 cyber-card
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/20 bg-gradient-to-r from-primary-600/10 to-accent-500/10">
        {!isCollapsed && (
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <EnhLogo size="sm" variant="floating" />
            <div>
              <h1 className="text-lg font-bold text-white bg-gradient-to-r from-white to-accent-400 bg-clip-text text-transparent font-['Orbitron']">
                RAMAERA
              </h1>
              <p className="text-xs text-gray-400">ADMIN PORTAL</p>
            </div>
          </motion.div>
        )}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-black/50 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200 border border-white/20 hover:border-white/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </motion.button>
      </div>

      {/* Enhanced Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden
                ${isActive 
                  ? 'bg-gradient-to-r from-white/20 to-accent-500/20 text-white border border-white/30 shadow-neon' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background glow effect */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-accent-500/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <Icon size={20} className={`${isActive ? 'text-accent-400' : 'text-current'} relative z-10`} />
              {!isCollapsed && (
                <span className="font-medium relative z-10 font-['Orbitron']">{item.label}</span>
              )}
              
              {/* Active indicator */}
              {isActive && !isCollapsed && (
                <motion.div
                  className="absolute right-2 w-2 h-2 bg-accent-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Enhanced Footer */}
      {!isCollapsed && (
        <motion.div 
          className="absolute bottom-4 left-4 right-4 p-3 bg-gradient-to-r from-primary-600/10 to-accent-500/10 rounded-xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span className="text-sm font-bold text-white font-['Orbitron']">ADMIN PORTAL</span>
          </div>
          <p className="text-xs text-gray-400">
            Managing India's Industrial Future
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};