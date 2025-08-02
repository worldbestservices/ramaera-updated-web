import { create } from "zustand";
import api from "../utils/axios";


export interface Subscription {
  _id?: string;
  level: string;
  rmPwId?: string;
  name: string;
  email: string;
  address: string;
  pin: string;
  mobile: string;
  altMobile?: string;
  combo: string;
  quantity: number;
  paymentMethod: "upi" | "razorpay" | "cod";
  upiId?: string;
  total?: number;
  createdAt?: string;
}

interface RazorpayOrder {
  orderId: string;
  amount: number;
  currency: string;
  razorpayKey: string;
  message: string;
}

interface SubscriptionStore {
  subscriptions: Subscription[];
  selectedSubscription: Subscription | null;
  razorpayOrder: RazorpayOrder | null;
  loading: boolean;
  error: string | null;
  success: string | null;

  createSubscription: (data: Subscription) => Promise<void>;
  fetchAllSubscriptions: () => Promise<void>;
  fetchSubscriptionById: (id: string) => Promise<void>;
  resetState: () => void;
}

export const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  subscriptions: [],
  selectedSubscription: null,
  razorpayOrder: null,
  loading: false,
  error: null,
  success: null,

  createSubscription: async (data) => {
    try {
      set({ loading: true, error: null, success: null, razorpayOrder: null });

      const response = await api.post("/api/subscription", data);

      if (response.data.razorpayKey) {
        set({ razorpayOrder: response.data });
      } else {
        set({ success: response.data.message });
      }
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Subscription failed";
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },

  fetchAllSubscriptions: async () => {
    try {
      set({ loading: true, error: null });
      const res = await api.get("/api/subscription");
      set({ subscriptions: res.data });
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Failed to load subscriptions";
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },

  fetchSubscriptionById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await api.get(`/api/subscription/${id}`);
      set({ selectedSubscription: res.data });
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Failed to load subscription";
      set({ error: msg });
    } finally {
      set({ loading: false });
    }
  },

  resetState: () => {
    set({
      subscriptions: [],
      selectedSubscription: null,
      razorpayOrder: null,
      loading: false,
      error: null,
      success: null,
    });
  },
}));
