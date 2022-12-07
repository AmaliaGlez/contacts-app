import { useEffect, useState } from 'react';
import { Contact } from '../types';
import { useGetContacts } from './useApi';

export const useFilterContacts = () => {
  const { data: contacts = [], isLoading, isSuccess } = useGetContacts();

  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const checkIncludes = (value: string, filter: string) => {
    return value.toLowerCase().includes(filter.toLowerCase());
  };

  const filterContacts = (e: any) => {
    const value = e.target.value;
    if (!value) return setFilteredContacts(contacts);
    const search = contacts?.filter(
      (contact) => checkIncludes(contact.firstName, value) || checkIncludes(contact.lastName, value)
    );
    setFilteredContacts(search);
  };

  useEffect(() => {
    if (!isLoading && isSuccess) setFilteredContacts(contacts);
  }, [isLoading, isSuccess]);

  return { filterContacts, filteredContacts };
};
