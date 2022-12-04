import { useState } from 'react';
import { Contact } from '../types';

export const useFilterContacts = (contacts: Contact[]) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const checkIncludes = (value: string, filter: string) => {
    return value.toLowerCase().includes(filter.toLowerCase());
  };

  const filterContacts = (e: any) => {
    const value = e.target.value;
    if (!value) return setFilteredContacts(contacts);
    const search = contacts.filter(
      (contact) => checkIncludes(contact.firstName, value) || checkIncludes(contact.lastName, value)
    );
    setFilteredContacts(search);
  };

  return { filterContacts, filteredContacts };
};
