import { create } from 'zustand';
import api from '../utils/axios'; // Update this path based on your structure

interface Permission {
  [key: string]: boolean;
}

interface Admin {
  _id: string;
  email: string;
}

interface AdminProfile {
  _id: string;
  email: string;
  createdAt: string;
  // Add more profile fields if needed
}

interface User {
  _id: string;
  email: string;
  permission?: {
    _id: string;
    grantedBy: {
      _id: string;
      email: string;
    };
    permissions: Permission;
  };
}

interface AdminStore {
  admin: Admin | null;
  users: User[];
  profile: AdminProfile | null;
  loading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchAdminInfoAndUsers: () => Promise<void>;
  getAdminProfile: () => Promise<void>;
  assignPermission: (adminId: string, userId: string, permissions: Permission) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

export const useAdminStore = create<AdminStore>((set, get) => ({
  admin: null,
  users: [],
  profile: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const res = await api.post('/api/admin/login', { email, password });
      const { token, userId } = res.data;
      localStorage.setItem('admin-token', token);
      set({ admin: { _id: userId, email }, loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Login failed', loading: false });
    }
  },

  register: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const res = await api.post('/api/admin/register', { email, password });
      const { token } = res.data;
      localStorage.setItem('admin-token', token);
      set({ admin: { _id: '', email }, loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || 'Register failed', loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('admin-token');
    set({ admin: null, users: [], profile: null, error: null });
  },

  fetchAdminInfoAndUsers: async () => {
    try {
      set({ loading: true, error: null });
      const token = localStorage.getItem('admin-token');
      const res = await api.get('/api/admin/info', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { adminInfo, users } = res.data;
      set({ admin: adminInfo, users, loading: false });
    } catch (err: any) {
      set({ error: 'Failed to fetch admin info & users', loading: false });
    }
  },

  getAdminProfile: async () => {
    try {
      set({ loading: true, error: null });
      const token = localStorage.getItem('admin-token');
      const res = await api.get('/api/admin/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ profile: res.data.admin, loading: false });
    } catch (err: any) {
      set({ error: 'Failed to fetch admin profile', loading: false });
    }
  },

  assignPermission: async (adminId, userId, permissions) => {
    try {
      set({ loading: true, error: null });
      const res = await api.post('/api/admin/assign-permission', {
        adminId,
        userId,
        permissions,
      });
      const updatedUser = res.data.user;
      set((state) => ({
        users: state.users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        ),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: 'Failed to assign permissions', loading: false });
    }
  },

  forgotPassword: async (email) => {
    try {
      set({ loading: true, error: null });
      await api.post('/api/admin/forgot-password', { email });
      set({ loading: false });
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || 'Something went wrong';
      set({ error: errorMsg, loading: false });
      
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      set({ loading: true, error: null });
      await api.post(`/api/admin/reset-password/${token}`, { newPassword });
      set({ loading: false });
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || 'Something went wrong';
      set({ error: errorMsg , loading: false });
    }
  },
}));
