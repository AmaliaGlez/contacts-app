import { useRouter } from 'next/router';
import { DeleteModal, Form, Logs } from '../../../components';
import { useGetContactWithLogs, useUpdateContact } from '../../../hooks/useApi';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { Contact } from '../../../types';

const areArraysEqual = (a: [], b: []) => a.every((value: string, index) => value === b[index]);

const Contact = () => {
  const { query } = useRouter();
  const { contact, logs } = useGetContactWithLogs(query.id as string);

  const mutation = useUpdateContact(contact?._id as string);

  const handleSubmit = async (data: Partial<Contact>) => {
    const dataToArr = Object.values(data);
    const contactToArr = Object.values({
      firstName: contact?.firstName,
      lastName: contact?.lastName,
      email: contact?.email,
      phoneNumber: contact?.phoneNumber,
    });
    const isContactUpdated = !areArraysEqual(dataToArr as [], contactToArr as []);
    if (isContactUpdated) return mutation.mutate(data);
  };

  if (!contact) return null;

  return (
    <ContactLayout>
      <h1>{contact?.firstName}</h1>
      <Form
        submitHandler={handleSubmit}
        contact={contact}
        error={mutation?.error?.response?.data.error}
      />
      <DeleteModal contactId={contact._id} />
      <Logs logs={logs} />
    </ContactLayout>
  );
};

export default Contact;
