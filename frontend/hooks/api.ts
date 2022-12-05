import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Contact } from '../types';
import {
  createContact,
  deleteContact,
  getContact,
  getContactLogs,
  getContacts,
  updateContact,
} from '../service';

export const useGetContacts = () => {
  return useQuery(['contactsList'], getContacts);
};

export const useGetContact = (id: string) => {
  return useQuery(['contact', id], () => getContact(id));
};

export const useGetContactWithLogs = (id: string) => {
  const { data: contact } = useQuery(['contact', id], () => getContact(id));
  const { data: logs } = useQuery(['contactLogs', id], () => getContactLogs(id));
  return { ...contact, logs };
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (body: Omit<Contact, '_id' | 'logs'>) => createContact(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactsList'] });
      router.push('/');
    },
    onError: (error: AxiosError<{ error: string }>) => {},
  });
};

export const useUpdateContact = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: Partial<Contact>) => updateContact(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactsList'] });
      queryClient.invalidateQueries({ queryKey: ['contact', id] });
      queryClient.invalidateQueries({ queryKey: ['contactLogs', id] });
    },
    onError: (error: AxiosError<{ error: string }>) => {},
  });
};

export const useDeleteContact = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteContact(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['contactsList'] }),
  });
};
