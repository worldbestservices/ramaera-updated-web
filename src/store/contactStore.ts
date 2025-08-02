import { create } from 'zustand';
import api from '../utils/axios'; // adjust to your Axios instance path

export interface ContactMessage {
  status: string;
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

interface ContactStore {
  messages: ContactMessage[];
  selectedMessage: ContactMessage | null;
  loading: boolean;
  error: string | null;
  success: string | null;

  submitMessage: (data: ContactMessage) => Promise<void>;
  fetchAllMessages: () => Promise<void>;
  fetchMessageById: (id: string) => Promise<void>;
  resetState: () => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  messages: [],
  selectedMessage: null,
  loading: false,
  error: null,
  success: null,

  submitMessage: async (data) => {
    try {
      set({ loading: true, error: null, success: null });
      const res = await api.post('/api/contact', data);
      set({ success: res.data.message });
    } catch (err: any) {
      const msg = err?.response?.data?.error || 'Failed to send message';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },

  fetchAllMessages: async () => {
    try {
      set({ loading: true, error: null });
      const res = await api.get('/api/contact');
      set({ messages: res.data });
    } catch (err: any) {
      const msg = err?.response?.data?.error || 'Failed to load messages';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },

  fetchMessageById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await api.get(`/api/contact/${id}`);
      set({ selectedMessage: res.data });
    } catch (err: any) {
      const msg = err?.response?.data?.error || 'Failed to load message';
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },

  resetState: () => {
    set({
      messages: [],
      selectedMessage: null,
      loading: false,
      error: null,
      success: null,
    });
  },
}));
