import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactMessage, useContactStore } from '../../../store/contactStore';
import { EyeIcon, X, Mail, User, Calendar, MessageSquare } from 'lucide-react';

export const ContactSubmissions = () => {
  const { fetchAllMessages, loading, error, messages } = useContactStore();
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const openMessageModal = (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  const totalMessages = messages.length;
  const unreadMessages = messages.filter((msg) => msg.status === 'new').length;
  const readMessages = messages.filter((msg) => msg.status === 'read').length;
  const latestDate =
    messages.length > 0
      ? new Date(
          Math.max(...messages.map((msg) => new Date(msg.createdAt || '').getTime()))
        ).toLocaleString()
      : 'N/A';

  const summaryCards = [
    { title: 'Total Messages', value: totalMessages, color: 'from-blue-500 to-cyan-500', icon: MessageSquare },
    { title: 'Unread Messages', value: unreadMessages, color: 'from-orange-500 to-yellow-500', icon: Mail },
    { title: 'Read Messages', value: readMessages, color: 'from-green-500 to-emerald-500', icon: EyeIcon },
    { title: 'Latest Message', value: latestDate, color: 'from-purple-500 to-pink-500', icon: Calendar, isDate: true }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-['Orbitron'] holographic">
          Contact Submissions
        </h1>

        {/* Enhanced Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {summaryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="cyber-card p-4 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{card.title}</p>
                    <p className="text-2xl font-bold text-white golden-accent font-['Orbitron']">
                      {card.isDate ? (
                        <span className="text-sm">{card.value}</span>
                      ) : (
                        card.value
                      )}
                    </p>
                  </div>
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform duration-200`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {loading && (
          <motion.div 
            className="flex items-center justify-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-400">Loading messages...</p>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div 
            className="cyber-card p-4 border-red-500/50 bg-red-500/10 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-red-400">Error: {error}</p>
          </motion.div>
        )}

        {/* Enhanced Table */}
        <motion.div 
          className="cyber-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gradient-to-r from-white/10 to-accent-500/10 border-b border-white/20">
                <tr>
                  {['Name', 'Email', 'Subject', 'Message', 'Date'].map((header, index) => (
                    <motion.th
                      key={header}
                      className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap font-['Orbitron']"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.4 }}
                    >
                      {header}
                    </motion.th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-gray-400">
                      <div className="flex flex-col items-center space-y-2">
                        <MessageSquare className="h-12 w-12 text-gray-600" />
                        <p>No messages found.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  messages.map((msg, index) => (
                    <motion.tr 
                      key={msg._id} 
                      className="hover:bg-white/5 transition-colors duration-200 border-b border-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.5 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <td className="px-4 sm:px-6 py-4 text-white">{msg.name}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300">{msg.email}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-300">{msg.subject}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <motion.button
                          onClick={() => openMessageModal(msg)}
                          className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 border border-white/20 hover:border-white/40"
                          title="View full message"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <EyeIcon className="h-5 w-5" />
                        </motion.button>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-400">
                        {new Date(msg.createdAt || '').toLocaleString()}
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {isModalOpen && selectedMessage && (
            <motion.div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="cyber-card max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-white to-accent-500 rounded-lg">
                        <MessageSquare className="h-6 w-6 text-black" />
                      </div>
                      <h2 className="text-xl font-bold text-white font-['Orbitron']">
                        {selectedMessage.subject}
                      </h2>
                    </div>
                    <motion.button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 border border-white/20 hover:border-white/40"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.button>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="cyber-card p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="h-4 w-4 text-accent-400" />
                          <p className="text-sm text-gray-400">From</p>
                        </div>
                        <p className="text-white font-medium">{selectedMessage.name}</p>
                      </div>
                      <div className="cyber-card p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Mail className="h-4 w-4 text-accent-400" />
                          <p className="text-sm text-gray-400">Email</p>
                        </div>
                        <p className="text-white font-medium break-words">{selectedMessage.email}</p>
                      </div>
                    </div>

                    <div className="cyber-card p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-accent-400" />
                        <p className="text-sm text-gray-400">Date</p>
                      </div>
                      <p className="text-white">{new Date(selectedMessage.createdAt || '').toLocaleString()}</p>
                    </div>

                    <div className="cyber-card p-4">
                      <p className="text-sm text-gray-400 mb-3">Message</p>
                      <div className="bg-black/50 p-4 rounded-lg whitespace-pre-wrap text-sm text-gray-300 leading-relaxed break-words overflow-auto border border-white/10">
                        {selectedMessage.message}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <motion.button
                        onClick={closeModal}
                        className="px-6 py-2 bg-gradient-to-r from-white to-accent-500 text-black rounded-lg transition-colors text-sm font-bold hover:from-gray-200 hover:to-accent-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};