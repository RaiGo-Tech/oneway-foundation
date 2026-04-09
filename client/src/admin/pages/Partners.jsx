import { useState, useEffect } from 'react';
import api from '../../services/api';
import { TableSkeleton } from '../../components/ui/Skeleton';

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, [filter]);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const query = filter !== 'all' ? `?status=${filter}` : '';
      const response = await api.get(`/partners${query}`);
      setPartners(response.data.data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await api.put(`/partners/${id}/status`, { status });
      fetchPartners();
      setSelectedPartner(null);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    reviewed: 'bg-blue-100 text-blue-700',
    approved: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Partners</h1>
          <p className="text-slate-500 mt-1">Manage partner inquiries</p>
        </div>
        <div className="flex gap-2">
          {['all', 'pending', 'reviewed', 'approved', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === status
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <TableSkeleton rows={5} />
      ) : partners.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-slate-500">No partner inquiries found</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Contact Person</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {partners.map((partner) => (
                  <tr key={partner._id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">{partner.companyName}</td>
                    <td className="px-6 py-4 text-slate-600">{partner.contactPerson}</td>
                    <td className="px-6 py-4 text-slate-600">{partner.email}</td>
                    <td className="px-6 py-4 text-slate-600">{partner.phone}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm font-medium">
                        {partner.promotionType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${statusColors[partner.status]}`}>
                        {partner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {new Date(partner.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedPartner(partner)}
                        className="text-orange-500 hover:text-orange-600 font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Partner Details Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Partner Details</h2>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Company Name</p>
                  <p className="font-medium">{selectedPartner.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Contact Person</p>
                  <p className="font-medium">{selectedPartner.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">{selectedPartner.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">{selectedPartner.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Website</p>
                  <p className="font-medium">{selectedPartner.website || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Promotion Type</p>
                  <p className="font-medium">{selectedPartner.promotionType}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-slate-500">Message</p>
                  <p className="font-medium">{selectedPartner.message || 'No message'}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${statusColors[selectedPartner.status]}`}>
                    {selectedPartner.status}
                  </span>
                </div>
              </div>

              {selectedPartner.status === 'pending' && (
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => handleStatusUpdate(selectedPartner._id, 'approved')}
                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedPartner._id, 'rejected')}
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;

