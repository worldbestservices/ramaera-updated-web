import { create } from 'zustand';
import api from '../utils/axios'; // Custom Axios instance

// Possible status values for an application
export type ApplicationStatus = 'pending' | 'reviewed' | 'approved' | 'rejected';

// Application model type
export interface FactoryApplication {
  _id?: string;
  name: string;
  business_idea: string;
  location: string;
  required_amount: string;
  past_experience?: string;
  supporting_document?: string;
  status?: ApplicationStatus;
  createdAt?: string;
  updatedAt?: string;
}

// Zustand store interface
interface FactoryApplicationStore {
  applications: FactoryApplication[];
  loading: boolean;
  error: string | null;
  success: boolean;
  message: string | null;
  selectedApplication: FactoryApplication | null;

  // Form state
  form: Omit<FactoryApplication, '_id' | 'createdAt' | 'updatedAt' | 'status'> & {
    file: File | null;
  };

  setFormField: (field: string, value: string | File | null) => void;
  resetForm: () => void;
  resetState: () => void;

  // Backend operations
  fetchAll: () => Promise<void>;
  fetchById: (id: string) => Promise<void>;
  submit: () => Promise<void>;
  updateStatus: (id: string, status: ApplicationStatus) => Promise<void>;
}

export const useFactoryApplicationStore = create<FactoryApplicationStore>((set, get) => ({
  applications: [],
  loading: false,
  error: null,
  success: false,
  message: null,
  selectedApplication: null,

  form: {
    name: '',
    business_idea: '',
    location: '',
    required_amount: '',
    past_experience: '',
    supporting_document: '',
    file: null,
  },

  setFormField: (field, value) => {
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    }));
  },

  resetForm: () => {
    set({
      form: {
        name: '',
        business_idea: '',
        location: '',
        required_amount: '',
        past_experience: '',
        supporting_document: '',
        file: null,
      },
    });
  },

  resetState: () => {
    set({
      loading: false,
      error: null,
      success: false,
      message: null,
    });
  },

  fetchAll: async () => {
    try {
      set({ loading: true, error: null });
      const res = await api.get<FactoryApplication[]>('/api/apply-factory');
      set({ applications: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch applications', loading: false });
    }
  },

  fetchById: async (id) => {
    try {
      set({ loading: true, error: null });
      const res = await api.get<FactoryApplication>(`/api/apply-factory/${id}`);
      set({ selectedApplication: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch application', loading: false });
    }
  },

  submit: async () => {
    try {
      set({ loading: true, error: null, success: false, message: null });
      const { form } = get();

      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('business_idea', form.business_idea);
      formData.append('location', form.location);
      formData.append('required_amount', form.required_amount);
      if (form.past_experience) formData.append('past_experience', form.past_experience);
      if (form.file) formData.append('supporting_document', form.file);

      await api.post('/api/apply-factory', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      await get().fetchAll();
      get().resetForm();
      set({
        loading: false,
        success: true,
        message: 'Application submitted successfully',
      });
    } catch (err: any) {
      const errMsz = err.response?.data?.message;
      set({
        error: errMsz || 'Submission failed',
        message: null,
        loading: false,
        success: false,
      });
    }
  },

  updateStatus: async (id, status) => {
    try {
      set({ loading: true, error: null, success: false });
      await api.patch(`/api/apply-factory/${id}/status`, { status });
      await get().fetchAll();
      set({ loading: false, success: true });
    } catch (err: any) {
      set({ error: err.message || 'Status update failed', loading: false, success: false });
    }
  },
}));
