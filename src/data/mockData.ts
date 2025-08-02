import { ContactSubmission, FactoryApplication, SpicesSubscription } from '../types';

export const mockContacts: ContactSubmission[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    subject: 'Product Inquiry',
    message: 'I would like to know more about your organic spice collection and wholesale pricing options.',
    submissionDate: '2024-01-15T10:30:00Z',
    status: 'new'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@restaurant.com',
    subject: 'Bulk Order Request',
    message: 'We are interested in placing a bulk order for our restaurant chain. Please provide pricing details.',
    submissionDate: '2024-01-14T14:22:00Z',
    status: 'read'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.r@email.com',
    subject: 'Quality Complaint',
    message: 'The last batch of turmeric powder had some quality issues. Please contact me to resolve this.',
    submissionDate: '2024-01-13T09:15:00Z',
    status: 'responded'
  },
  {
    id: '4',
    name: 'David Thompson',
    email: 'david.thompson@market.com',
    subject: 'Partnership Opportunity',
    message: 'We would like to discuss a potential partnership for our farmers market locations.',
    submissionDate: '2024-01-12T16:45:00Z',
    status: 'new'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    email: 'lisa.wang@email.com',
    subject: 'Shipping Inquiry',
    message: 'What are your international shipping options and rates?',
    submissionDate: '2024-01-11T11:20:00Z',
    status: 'read'
  }
];

export const mockApplications: FactoryApplication[] = [
  {
    id: '1',
    fullName: 'Robert Smith',
    email: 'robert.smith@spicetech.com',
    phoneNumber: '+1-555-0123',
    companyName: 'SpiceTech Industries',
    applicationStatus: 'pending',
    submissionDate: '2024-01-14T13:30:00Z'
  },
  {
    id: '2',
    fullName: 'Maria Garcia',
    email: 'maria.garcia@globalspices.com',
    phoneNumber: '+1-555-0456',
    companyName: 'Global Spices Ltd',
    applicationStatus: 'approved',
    submissionDate: '2024-01-12T10:15:00Z'
  },
  {
    id: '3',
    fullName: 'James Wilson',
    email: 'james.wilson@aromaworks.com',
    phoneNumber: '+1-555-0789',
    companyName: 'Aroma Works Inc',
    applicationStatus: 'rejected',
    submissionDate: '2024-01-10T15:45:00Z'
  },
  {
    id: '4',
    fullName: 'Anna Kowalski',
    email: 'anna.kowalski@freshspices.com',
    phoneNumber: '+1-555-0321',
    companyName: 'Fresh Spices Co',
    applicationStatus: 'pending',
    submissionDate: '2024-01-09T09:22:00Z'
  },
  {
    id: '5',
    fullName: 'Carlos Mendoza',
    email: 'carlos.mendoza@mexicanspices.com',
    phoneNumber: '+1-555-0654',
    companyName: 'Mexican Spices Trading',
    applicationStatus: 'approved',
    submissionDate: '2024-01-08T12:10:00Z'
  }
];

export const mockSubscriptions: SpicesSubscription[] = [
  {
    id: '1',
    email: 'subscriber1@email.com',
    subscriptionDate: '2024-01-15T08:30:00Z',
    status: 'active'
  },
  {
    id: '2',
    email: 'subscriber2@email.com',
    subscriptionDate: '2024-01-14T16:20:00Z',
    status: 'active'
  },
  {
    id: '3',
    email: 'subscriber3@email.com',
    subscriptionDate: '2024-01-13T11:45:00Z',
    status: 'inactive'
  },
  {
    id: '4',
    email: 'subscriber4@email.com',
    subscriptionDate: '2024-01-12T14:15:00Z',
    status: 'active'
  },
  {
    id: '5',
    email: 'subscriber5@email.com',
    subscriptionDate: '2024-01-11T09:30:00Z',
    status: 'active'
  },
  {
    id: '6',
    email: 'subscriber6@email.com',
    subscriptionDate: '2024-01-10T17:22:00Z',
    status: 'active'
  },
  {
    id: '7',
    email: 'subscriber7@email.com',
    subscriptionDate: '2024-01-09T12:10:00Z',
    status: 'active'
  },
  {
    id: '8',
    email: 'subscriber8@email.com',
    subscriptionDate: '2024-01-08T15:45:00Z',
    status: 'active'
  }
];