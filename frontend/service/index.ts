import axios from 'axios';
import { Contact, ContactLog } from '../types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
});

export const getContacts = (): Promise<Contact[]> => api.get('/contacts').then(({ data }) => data);

export const getContact = (id: string): Promise<Contact> =>
  api.get(`/contacts/${id}`).then(({ data }) => data);

export const getContactLogs = async (id: string): Promise<ContactLog[]> =>
  api.get(`/contacts/${id}/logs`).then(({ data }) => data);

export const getContactWithLogs = async (id: string): Promise<Contact> => {
  const contact = await getContact(id);
  const logs = await getContactLogs(id);
  return { ...contact, logs };
};

export const createContact = (body: Omit<Contact, '_id' | 'logs'>): Promise<Contact> =>
  api.post('/contacts', { ...body }).then(({ data }) => data);

export const updateContact = (id: string, body: Partial<Contact>): Promise<Contact> =>
  api.patch(`/contacts/${id}`, { ...body }).then(({ data }) => data);

export const deleteContact = (id: string): Promise<{ message: string }> =>
  api.delete(`/contacts/${id}`).then(({ data }) => data);
