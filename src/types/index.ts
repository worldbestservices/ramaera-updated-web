export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submissionDate: string;
  status: 'new' | 'read' | 'responded';
}

export interface FactoryApplication {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  applicationStatus: 'pending' | 'approved' | 'rejected';
  submissionDate: string;
}

export interface SpicesSubscription {
  id: string;
  email: string;
  subscriptionDate: string;
  status: 'active' | 'inactive';
}

export interface DashboardStats {
  totalContacts: number;
  pendingApplications: number;
  totalSubscribers: number;
  recentActivity: number;
}