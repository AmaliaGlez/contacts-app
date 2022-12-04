import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getContacts = () => api.get('/contacts').then(({ data }) => data);

export const getContact = (id) => api.get(`/contacts/${id}`).then(({ data }) => data);

export const getContactLogs = (id) => api.get(`/contacts/${id}/logs`).then(({ data }) => data);

export const createContact = (body) => api.post('/contacts', { ...body }).then(({ data }) => data);

export const updateContact = (id, body) =>
  api.patch(`/contacts/${id}`, { ...body }).then(({ data }) => data);

export const deleteContact = (id) => api.delete(`/contacts/${id}`).then(({ data }) => data);
