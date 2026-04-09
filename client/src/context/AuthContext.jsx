import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      fetchCurrentAdmin();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCurrentAdmin = async () => {
    try {
      const response = await api.get('/admin/me');
      if (response.data.success) {
        setAdmin(response.data.data);
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const response = await api.post('/admin/login', { email, password });
    if (response.data.success) {
      localStorage.setItem('adminToken', response.data.token);
      setAdmin(response.data.admin);
      return { success: true };
    }
    return { success: false, message: response.data.message };
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setAdmin(null);
  };

  const value = {
    admin,
    loading,
    login,
    logout,
    isAuthenticated: !!admin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

