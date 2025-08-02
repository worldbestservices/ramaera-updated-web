import React, { useEffect, useState } from 'react';
import { useSubscriptionStore } from '../../../store/SubscriptionsStore';
import { CalendarDays, CreditCard, EyeIcon, Mail, MapPin, Package, Phone, User, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const SpicesSubscribers = () => {
  const { subscriptions, fetchAllSubscriptions, loading, error } = useSubscriptionStore();
  const [selectedSub, setSelectedSub] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAllSubscriptions();
  }, []);

  const openModal = (sub: any) => {
    setSelectedSub(sub);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSub(null);
    setIsModalOpen(false);
  };

  const total = subscriptions.length;
  const upiCount = subscriptions.filter((s) => s.paymentMethod === 'upi').length;
  const codCount = subscriptions.filter((s) => s.paymentMethod === 'cod').length;
  const razorpayCount = subscriptions.filter((s) => s.paymentMethod === 'razorpay').length;

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Monthly Spice Subscriptions</h1>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Subscriptions</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">UPI</p>
          <p className="text-2xl font-bold text-blue-400">{upiCount}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Razorpay</p>
          <p className="text-2xl font-bold text-purple-400">{razorpayCount}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Cash on Delivery</p>
          <p className="text-2xl font-bold text-yellow-400">{codCount}</p>
        </div>
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Table */}
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-xl overflow-hidden">
        <div className="max-h-[70vh] overflow-y-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-800/50 border-b border-gray-700/50 sticky top-0 z-10">
              <tr>
                {['Name', 'Email', 'Combo', 'Qty', 'Payment', 'Date', 'Action'].map((header) => (
                  <th
                    key={header}
                    className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap bg-gray-800/70 backdrop-blur"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {subscriptions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-400">
                    No subscriptions found.
                  </td>
                </tr>
              ) : (
                subscriptions.map((sub) => (
                  <tr key={sub._id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 sm:px-6 py-4">{sub.name}</td>
                    <td className="px-4 sm:px-6 py-4">{sub.email}</td>
                    <td className="px-4 sm:px-6 py-4">{sub.combo}</td>
                    <td className="px-4 sm:px-6 py-4">{sub.quantity}</td>
                    <td className="px-4 sm:px-6 py-4 capitalize">{sub.paymentMethod}</td>
                    <td className="px-4 sm:px-6 py-4">
                      {new Date(sub.createdAt || '').toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <button
                        onClick={() => openModal(sub)}
                        className="text-gray-400 hover:text-white transition"
                        title="View Details"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>


      {/* Modal */}
      {/* {isModalOpen && selectedSub && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-bold">{selectedSub.name}'s Subscription</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="text-sm space-y-2 text-gray-300">
                <p><span className="text-gray-400">Level:</span> {selectedSub.level}</p>
                <p><span className="text-gray-400">Email:</span> {selectedSub.email}</p>
                <p><span className="text-gray-400">Mobile:</span> {selectedSub.mobile}</p>
                {selectedSub.altMobile && (
                  <p><span className="text-gray-400">Alt Mobile:</span> {selectedSub.altMobile}</p>
                )}
                <p><span className="text-gray-400">Address:</span> {selectedSub.address}</p>
                <p><span className="text-gray-400">Pin Code:</span> {selectedSub.pin}</p>
                <p><span className="text-gray-400">Combo:</span> {selectedSub.combo}</p>
                <p><span className="text-gray-400">Quantity:</span> {selectedSub.quantity}</p>
                <p><span className="text-gray-400">Payment Method:</span> {selectedSub.paymentMethod}</p>
                {selectedSub.upiId && (
                  <p><span className="text-gray-400">UPI ID:</span> {selectedSub.upiId}</p>
                )}
                {selectedSub.total && (
                  <p><span className="text-gray-400">Total:</span> ₹{selectedSub.total}</p>
                )}
                <p><span className="text-gray-400">Created At:</span> {new Date(selectedSub.createdAt || '').toLocaleString()}</p>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}



      {isModalOpen && selectedSub && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto text-white"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-pink-400" />
                    <h2 className="text-lg font-semibold">
                      {selectedSub.name || 'Share Holder'}'s Subscription
                    </h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Subscription Details */}
                <div className="grid grid-cols-1 gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-gray-400">Email:</span> {selectedSub.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="font-medium text-gray-400">Mobile:</span> {selectedSub.mobile}
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-400">Address:</span>{' '}
                      {selectedSub.address}, Pin - {selectedSub.pin}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-purple-400" />
                    <span className="font-medium text-gray-400">Combo:</span> {selectedSub.combo}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-400">Quantity:</span> {selectedSub.quantity}
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-orange-400" />
                    <span className="font-medium text-gray-400">Payment:</span> {selectedSub.paymentMethod.toUpperCase()}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-400">Total:</span> ₹{selectedSub.total}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-cyan-400" />
                    <span className="font-medium text-gray-400">Created At:</span>{' '}
                    {new Date(selectedSub.createdAt || '').toLocaleString()}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={closeModal}
                    className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

    </div>
  );
};
