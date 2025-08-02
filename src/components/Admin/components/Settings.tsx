import React, { useState } from 'react';
import { 
  Bell, 
  Shield, 
  Palette, 
  Database, 
  Mail, 
  Users, 
  Save,
  AlertCircle
} from 'lucide-react';

export const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    newContacts: true,
    applicationUpdates: true,
    subscriberAlerts: false,
    systemAlerts: true
  });

  const [emailSettings, setEmailSettings] = useState({
    autoResponse: true,
    weeklyReports: true,
    criticalAlerts: true
  });

  const handleSave = () => {
    // Simulate saving settings
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Configure your admin panel preferences and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <Bell size={20} className="text-blue-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">New Contact Submissions</p>
                <p className="text-sm text-gray-400">Get notified when new contacts arrive</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.newContacts}
                  onChange={(e) => setNotifications(prev => ({ ...prev, newContacts: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Application Updates</p>
                <p className="text-sm text-gray-400">Alerts for factory application changes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.applicationUpdates}
                  onChange={(e) => setNotifications(prev => ({ ...prev, applicationUpdates: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Subscriber Alerts</p>
                <p className="text-sm text-gray-400">New subscriber notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.subscriberAlerts}
                  onChange={(e) => setNotifications(prev => ({ ...prev, subscriberAlerts: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-600/20 rounded-lg">
              <Mail size={20} className="text-green-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">Email Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Auto Response</p>
                <p className="text-sm text-gray-400">Automatic replies to contacts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailSettings.autoResponse}
                  onChange={(e) => setEmailSettings(prev => ({ ...prev, autoResponse: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Weekly Reports</p>
                <p className="text-sm text-gray-400">Summary reports via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailSettings.weeklyReports}
                  onChange={(e) => setEmailSettings(prev => ({ ...prev, weeklyReports: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Critical Alerts</p>
                <p className="text-sm text-gray-400">Important system notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailSettings.criticalAlerts}
                  onChange={(e) => setEmailSettings(prev => ({ ...prev, criticalAlerts: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-600/20 rounded-lg">
              <Shield size={20} className="text-purple-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">Security</h2>
          </div>
          
          <div className="space-y-4">
            <button className="w-full p-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg text-left transition-all duration-200">
              <p className="text-white font-medium">Change Password</p>
              <p className="text-sm text-gray-400">Update your admin password</p>
            </button>
            
            <button className="w-full p-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg text-left transition-all duration-200">
              <p className="text-white font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-400">Enable 2FA for enhanced security</p>
            </button>
            
            <button className="w-full p-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg text-left transition-all duration-200">
              <p className="text-white font-medium">Session Management</p>
              <p className="text-sm text-gray-400">Manage active sessions</p>
            </button>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-600/20 rounded-lg">
              <Database size={20} className="text-orange-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">System</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle size={16} className="text-yellow-400" />
                <p className="text-white font-medium">Database Status</p>
              </div>
              <p className="text-sm text-green-400 mt-1">Connected and healthy</p>
            </div>
            
            <button className="w-full p-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg text-left transition-all duration-200">
              <p className="text-white font-medium">Export Data</p>
              <p className="text-sm text-gray-400">Download system data backup</p>
            </button>
            
            <button className="w-full p-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg text-left transition-all duration-200">
              <p className="text-white font-medium">System Logs</p>
              <p className="text-sm text-gray-400">View recent system activity</p>
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-blue-500/20"
        >
          <Save size={18} />
          Save Settings
        </button>
      </div>
    </div>
  );
};