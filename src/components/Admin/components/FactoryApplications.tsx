
import React, { useEffect, useState } from 'react';
import { useFactoryApplicationStore } from '../../../store/factoryApplicationStore';
import { EyeIcon } from 'lucide-react';


export const FactoryApplications = () => {
  const { applications, fetchAll, loading, error } = useFactoryApplicationStore();
  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);

  const openModal = (app: any) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApp(null);
    setIsModalOpen(false);
  };
  const API_BASE_URL = 'http://localhost:5000';
  const total = applications.length;
  const approved = applications.filter((a) => a.status === 'approved').length;
  const pending = applications.filter((a) => a.status === 'pending').length;
  const rejected = applications.filter((a) => a.status === 'rejected').length;

  const latestDate =
    applications.length > 0
      ? new Date(
          Math.max(...applications.map((a) => new Date(a.createdAt || '').getTime()))
        ).toLocaleString()
      : 'N/A';

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Factory Applications</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Applications</p>
          <p className="text-2xl font-bold text-white">{total}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Approved</p>
          <p className="text-2xl font-bold text-green-400">{approved}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Pending</p>
          <p className="text-2xl font-bold text-yellow-400">{pending}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-sm text-gray-400">Rejected</p>
          <p className="text-2xl font-bold text-red-400">{rejected}</p>
        </div>
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Table */}
      <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-800/50 border-b border-gray-700/50">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">Name</th>
                <th className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">Location</th>
                <th className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">Amount</th>
                <th className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">Status</th>
                <th className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">Date</th>
                <th className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-800/30 transition-colors duration-200">
                    <td className="px-4 sm:px-6 py-4">{app.name}</td>
                    <td className="px-4 sm:px-6 py-4">{app.location}</td>
                    <td className="px-4 sm:px-6 py-4">₹{app.required_amount}</td>
                    <td className="px-4 sm:px-6 py-4 capitalize">
                      <span
                        className={`${
                          app.status === 'approved'
                            ? 'text-green-400'
                            : app.status === 'pending'
                            ? 'text-yellow-400'
                            : 'text-red-400'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      {new Date(app.createdAt || '').toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <button
                        onClick={() => openModal(app)}
                        className="text-gray-400 hover:text-white transition-colors"
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
      {isModalOpen && selectedApp && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 h-screen">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Application from {selectedApp.name}</h2>
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

              <div className="space-y-4 text-sm text-gray-300">
                <p><span className="text-gray-400">Business Idea:</span> {selectedApp.business_idea}</p>
                <p><span className="text-gray-400">Location:</span> {selectedApp.location}</p>
                <p><span className="text-gray-400">Required Amount:</span> ₹{selectedApp.required_amount}</p>
                {selectedApp.past_experience && (
                  <p><span className="text-gray-400">Past Experience:</span> {selectedApp.past_experience}</p>
                )}
                {selectedApp.supporting_document && (
                  <p>
                    <span className="text-gray-400">Supporting Document:</span>{' '}
                    <a
                      
                      href={`${API_BASE_URL}${selectedApp.supporting_document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      View Document
                    </a>
                  </p>
                )}
                <p><span className="text-gray-400">Status:</span> {selectedApp.status}</p>
                <p><span className="text-gray-400">Created At:</span> {new Date(selectedApp.createdAt || '').toLocaleString()}</p>
              </div>

              <div className="flex justify-end pt-6">
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
      )}
    </div>
  );
};
