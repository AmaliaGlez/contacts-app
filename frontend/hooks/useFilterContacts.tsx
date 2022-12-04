import { useState } from 'react';

interface Contact {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
}

export const useFilterContacts = (contacts: Array<Contact>) => {
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const filterContacts = (e: any) => {
    const value = e.target.value;
    if (!value) return setFilteredContacts(contacts);
    const search = contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(value) ||
        contact.lastName.toLowerCase().includes(value)
    );
    setFilteredContacts(search);
  };

  return { filterContacts, filteredContacts };
};
