import React, { useEffect } from 'react';
import { Users, MessageSquare, Building2, TrendingUp, Eye, CheckCircle, XCircle, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { DashboardStats } from '../../../types/index';
import { useContactStore } from '../../../store/contactStore';
import { useSubscriptionStore } from '../../../store/SubscriptionsStore';

interface DashboardProps {
  stats: DashboardStats;
}

export const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const { fetchAllMessages, messages } = useContactStore();
  const { fetchAllSubscriptions, subscriptions } = useSubscriptionStore();
  const totalContacts = messages.length;
  const totalSubscribers = subscriptions.length;

  useEffect(() => {
    fetchAllMessages();
    fetchAllSubscriptions();
  }, [fetchAllMessages, fetchAllSubscriptions]);

  const statCards = [
    {
      title: 'Total Contacts',
      value: totalContacts,
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/20',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Pending Applications',
      value: stats.pendingApplications,
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'shadow-purple-500/20',
      bgImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Total Subscribers',
      value: totalSubscribers,
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/20',
      bgImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Recent Activity',
      value: stats.recentActivity,
      icon: TrendingUp,
      color: 'from-orange-500 to-yellow-500',
      glowColor: 'shadow-orange-500/20',
      bgImage: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const recentActivity = [
    { type: 'contact', message: 'New contact from Sarah Johnson', time: '2 minutes ago', icon: MessageSquare },
    { type: 'application', message: 'Factory application approved', time: '1 hour ago', icon: CheckCircle },
    { type: 'subscriber', message: 'New subscriber joined', time: '3 hours ago', icon: Users },
    { type: 'application', message: 'Application rejected', time: '5 hours ago', icon: XCircle }
  ];

  return (
    <div className="space-y-6">
      {/* Enhanced Welcome Header */}
      <motion.div 
        className="cyber-card p-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Admin Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-white to-accent-500 rounded-xl">
            <Sparkles className="h-8 w-8 text-black" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 font-['Orbitron'] holographic">
              Welcome back, Admin
            </h1>
            <p className="text-gray-400">Managing India's Industrial Future</p>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className={`
                cyber-card p-6 relative overflow-hidden h-full
                hover:border-white/40 transition-all duration-300 ${card.glowColor}
                group cursor-pointer
              `}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <img 
                    src={card.bgImage}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-2">{card.title}</p>
                      <motion.p 
                        className="text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-200 font-['Orbitron'] golden-accent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        {card.value}
                      </motion.p>
                    </div>
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform duration-200 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enhanced Recent Activity */}
        <motion.div 
          className="cyber-card p-6 relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Activity Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-['Orbitron']">
              <TrendingUp size={20} className="text-accent-400" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-black/30 rounded-xl hover:bg-white/10 transition-colors duration-200 border border-white/10 hover:border-white/20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-2 bg-gradient-to-r from-white/20 to-accent-500/20 rounded-lg border border-white/20">
                      <Icon size={16} className="text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{activity.message}</p>
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Quick Actions */}
        <motion.div 
          className="cyber-card p-6 relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Actions Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-['Orbitron']">
              <Rocket size={20} className="text-accent-400" />
              Quick Actions
            </h2>
            <div className="space-y-3">
              {[
                { label: 'View New Contacts', icon: MessageSquare, gradient: 'from-blue-600/20 to-cyan-500/20', border: 'border-blue-500/30' },
                { label: 'Review Applications', icon: Building2, gradient: 'from-purple-600/20 to-pink-500/20', border: 'border-purple-500/30' },
                { label: 'Manage Subscribers', icon: Users, gradient: 'from-green-600/20 to-emerald-500/20', border: 'border-green-500/30' }
              ].map((action, index) => (
                <motion.button 
                  key={index}
                  className={`w-full p-4 bg-gradient-to-r ${action.gradient} border ${action.border} rounded-xl text-white hover:bg-opacity-80 transition-all duration-200 hover:shadow-lg group`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Orbitron']">{action.label}</span>
                    <action.icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};