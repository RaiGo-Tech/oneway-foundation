import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { StatsCardSkeleton } from '../../components/ui/Skeleton';

const AnimatedNumber = ({ value, prefix = '', suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatCard = ({ title, value, icon, color, prefix, suffix, link }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
  };

  const iconBgClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
  };

  return (
    <Link
      to={link}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold text-slate-800`}>
            <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
          </p>
        </div>
        <div className={`p-3 rounded-xl ${iconBgClasses[color]} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState({
    donations: { total: 0, amount: 0 },
    members: { total: 0, verified: 0, pending: 0 },
    partners: { total: 0, pending: 0 },
    messages: { total: 0, unread: 0 },
    gallery: { total: 0 },
    programs: { total: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [donationsRes, membersRes, partnersRes, messagesRes, galleryRes, programsRes] = await Promise.allSettled([
        api.get('/donation/all'),
        api.get('/members/stats'),
        api.get('/partners/stats'),
        api.get('/contact/unread'),
        api.get('/gallery'),
        api.get('/programs'),
      ]);

      setStats({
        donations: {
          total: donationsRes.status === 'fulfilled' ? donationsRes.value.data.length : 0,
          amount: donationsRes.status === 'fulfilled' 
            ? donationsRes.value.data.reduce((sum, d) => sum + (d.amount || 0), 0) 
            : 0,
        },
        members: {
          total: membersRes.status === 'fulfilled' ? membersRes.value.data.total : 0,
          verified: membersRes.status === 'fulfilled' ? membersRes.value.data.verified : 0,
          pending: membersRes.status === 'fulfilled' ? membersRes.value.data.pending : 0,
        },
        partners: {
          total: partnersRes.status === 'fulfilled' ? partnersRes.value.data.data.total : 0,
          pending: partnersRes.status === 'fulfilled' ? partnersRes.value.data.data.pending : 0,
        },
        messages: {
          total: messagesRes.status === 'fulfilled' ? messagesRes.value.data.data.unreadCount : 0,
          unread: messagesRes.status === 'fulfilled' ? messagesRes.value.data.data.unreadCount : 0,
        },
        gallery: {
          total: galleryRes.status === 'fulfilled' ? galleryRes.value.data.length : 0,
        },
        programs: {
          total: programsRes.status === 'fulfilled' ? programsRes.value.data.length : 0,
        },
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Donations',
      value: stats.donations.total,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'green',
      prefix: '₹',
      link: '/admin/donations',
    },
    {
      title: 'Total Members',
      value: stats.members.total,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: 'blue',
      link: '/admin/members',
    },
    {
      title: 'Pending Members',
      value: stats.members.pending,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'orange',
      link: '/admin/members',
    },
    {
      title: 'Partner Inquiries',
      value: stats.partners.total,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'purple',
      link: '/admin/partners',
    },
    {
      title: 'Unread Messages',
      value: stats.messages.unread,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'red',
      link: '/admin/messages',
    },
    {
      title: 'Gallery Images',
      value: stats.gallery.total,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'blue',
      link: '/admin/gallery',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <StatsCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link
            to="/admin/members"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium text-slate-700">Verify Members</span>
          </Link>
          <Link
            to="/admin/donations"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-medium text-slate-700">View Donations</span>
          </Link>
          <Link
            to="/admin/messages"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-2 bg-red-100 rounded-lg text-red-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="font-medium text-slate-700">Check Messages</span>
          </Link>
          <Link
            to="/admin/gallery"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <span className="font-medium text-slate-700">Upload Images</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
