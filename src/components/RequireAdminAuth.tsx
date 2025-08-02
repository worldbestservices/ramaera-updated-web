// components/RequireAdminAuth.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAdminStore } from '../store/adminStore';
import { useEffect } from 'react';

const RequireAdminAuth = () => {
  const { admin, fetchAdminInfoAndUsers } = useAdminStore();
  const token = localStorage.getItem('admin-token');

  useEffect(() => {
    if (!admin && token) {
      fetchAdminInfoAndUsers(); // Restore admin info if page refreshed
    }
  }, [admin, token, fetchAdminInfoAndUsers]);

  if (!token && !admin) {
    return <Navigate to="/admin-login" replace />;
  }

  return <Outlet />;
};

export default RequireAdminAuth;
