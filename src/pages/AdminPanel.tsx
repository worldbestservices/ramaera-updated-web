import React, { useState } from 'react';
import { Sidebar } from '../components/Admin/components/Sidebar';
import { Header } from '../components/Admin/components/Header';
import { Dashboard } from '../components/Admin/components/Dashboard';
import { ContactSubmissions } from '../components/Admin/components/ContactSubmissions';
import { FactoryApplications } from '../components/Admin/components/FactoryApplications';
import { SpicesSubscribers } from '../components/Admin/components/SpicesSubscribers';
import { Settings } from '../components/Admin/components/Settings';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={{ totalContacts: 0, pendingApplications: 0, totalSubscribers: 0, recentActivity: 0 }} />;
      case 'contacts':
        return <ContactSubmissions  />;
      case 'applications':
        return <FactoryApplications/>;
      case 'subscribers':
        return <SpicesSubscribers/>;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard stats={{ totalContacts: 0, pendingApplications: 0, totalSubscribers: 0, recentActivity: 0 }} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <Header isCollapsed={isCollapsed} />

      <main className={`
        transition-all duration-300 pt-16
        ${isCollapsed ? 'ml-16' : 'ml-64'}
      `}>
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;
