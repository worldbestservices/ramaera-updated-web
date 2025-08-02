import React, { useEffect } from 'react';
import { Users, MessageSquare, Building2, TrendingUp, Eye, CheckCircle, XCircle } from 'lucide-react';
import { DashboardStats } from '../../../types/index';
import { useContactStore } from '../../../store/contactStore';
import { useSubscriptionStore } from '../../../store/SubscriptionsStore';

interface DashboardProps {
  stats: DashboardStats;
}

export const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const {fetchAllMessages,messages} = useContactStore();
  const {fetchAllSubscriptions,subscriptions} = useSubscriptionStore()
  const totalContacts = messages.length;
  const totalSubscribers = subscriptions.length;

  useEffect(()=>{
    fetchAllMessages();
    fetchAllSubscriptions();
  },[fetchAllMessages,fetchAllSubscriptions])

  const statCards = [
    {
      title: 'Total Contacts',
      value: totalContacts,
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      glowColor: 'shadow-blue-500/20'
    },
    {
      title: 'Pending Applications',
      value: stats.pendingApplications,
      icon: Building2,
      color: 'from-purple-500 to-purple-600',
      glowColor: 'shadow-purple-500/20'
    },
    {
      title: 'Total Subscribers',
      value:totalSubscribers,
      icon: Users,
      color: 'from-green-500 to-green-600',
      glowColor: 'shadow-green-500/20'
    },
    {
      title: 'Recent Activity',
      value: stats.recentActivity,
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      glowColor: 'shadow-orange-500/20'
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
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-800/50 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Admin</h1>
        <p className="text-gray-400">Here's what's happening with your platform today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`
                bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 
                hover:border-gray-700/50 transition-all duration-300 hover:shadow-xl ${card.glowColor}
                group cursor-pointer
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{card.title}</p>
                  <p className="text-3xl font-bold text-white mt-2 group-hover:scale-105 transition-transform duration-200">
                    {card.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-400" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
                  <div className="p-2 bg-gray-700/50 rounded-lg">
                    <Icon size={16} className="text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{activity.message}</p>
                    <p className="text-gray-400 text-xs">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Eye size={20} className="text-purple-400" />
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full p-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-lg text-white hover:from-blue-600/30 hover:to-blue-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center justify-between">
                <span>View New Contacts</span>
                <MessageSquare size={18} />
              </div>
            </button>
            <button className="w-full p-4 bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 rounded-lg text-white hover:from-purple-600/30 hover:to-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center justify-between">
                <span>Review Applications</span>
                <Building2 size={18} />
              </div>
            </button>
            <button className="w-full p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/30 rounded-lg text-white hover:from-green-600/30 hover:to-green-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20">
              <div className="flex items-center justify-between">
                <span>Manage Subscribers</span>
                <Users size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};