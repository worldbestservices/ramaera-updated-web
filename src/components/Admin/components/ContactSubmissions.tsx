import React, { useEffect, useState } from 'react';
import { ContactMessage, useContactStore } from '../../../store/contactStore';
import { EyeIcon } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Contact Submissions</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Messages</p>
          <p className="text-2xl font-bold text-white">{totalMessages}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Unread Messages</p>
          <p className="text-2xl font-bold text-blue-400">{unreadMessages}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Read Messages</p>
          <p className="text-2xl font-bold text-green-400">{readMessages}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Latest Message</p>
          <p className="text-base font-medium text-white">{latestDate}</p>
        </div>
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-800/50 border-b border-gray-700/50">
              <tr>
                {['Name', 'Email', 'Subject', 'Message', 'Date'].map((header) => (
                  <th
                    key={header}
                    className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">
                    No messages found.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-gray-800/30 transition-colors duration-200">
                    <td className="px-4 sm:px-6 py-4">{msg.name}</td>
                    <td className="px-4 sm:px-6 py-4">{msg.email}</td>
                    <td className="px-4 sm:px-6 py-4">{msg.subject}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <button
                        onClick={() => openMessageModal(msg)}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="View full message"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {new Date(msg.createdAt || '').toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMessage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 h-screen">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg sm:text-xl font-bold">{selectedMessage.subject}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">From</p>
                    <p className="break-words">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="break-words">{selectedMessage.email}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p>{new Date(selectedMessage.createdAt || '').toLocaleString()}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">Message</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg whitespace-pre-wrap text-sm text-gray-300 leading-relaxed break-words overflow-auto">
                    {selectedMessage.message}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
