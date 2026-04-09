import { useState, useEffect } from 'react';
import api from '../../services/api';
import { TableSkeleton } from '../../components/ui/Skeleton';

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, amount: 0 });

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const response = await api.get('/donation/all');
      const data = response.data;
      setDonations(data);
      const totalAmount = data.reduce((sum, d) => sum + (d.amount || 0), 0);
      setStats({ total: data.length, amount: totalAmount });
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendReceipt = async (donationId) => {
    try {
      await api.post('/donation/resend-receipt', { donationId });
      alert('Receipt sent successfully!');
    } catch (error) {
      console.error('Error sending receipt:', error);
      alert('Failed to send receipt');
    }
  };

  const statusColors = {
    SUCCESS: 'bg-green-100 text-green-700',
    PENDING: 'bg-yellow-100 text-yellow-700',
    FAILED: 'bg-red-100 text-red-700',
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Donations</h1>
        <p className="text-slate-500 mt-1">Manage all donation transactions</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-slate-500 text-sm font-medium">Total Donations</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-slate-500 text-sm font-medium">Total Amount</p>
          <p className="text-3xl font-bold text-green-600 mt-1">₹{stats.amount.toLocaleString()}</p>
        </div>
      </div>

      {loading ? (
        <TableSkeleton rows={5} />
      ) : donations.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-slate-500">No donations yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Donor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Payment ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {donations.map((donation) => (
                  <tr key={donation._id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">{donation.name}</td>
                    <td className="px-6 py-4 text-slate-600">{donation.email}</td>
                    <td className="px-6 py-4 text-slate-600">{donation.phone}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">₹{donation.amount}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{donation.paymentId || '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${statusColors[donation.status] || statusColors.PENDING}`}>
                        {donation.status || 'PENDING'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {new Date(donation.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleResendReceipt(donation._id)}
                        className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                      >
                        Resend Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;

