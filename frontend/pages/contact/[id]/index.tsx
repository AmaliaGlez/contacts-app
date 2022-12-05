import { useState } from 'react';
import { z } from 'zod';
import { Form, Logs } from '../../../components';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { updateContact, getContactWithLogs } from '../../../service/index';
import { Contact } from '../../../types';

const Contact = ({ contact }: { contact: Contact }) => {
  const [error, setError] = useState(false);

  const schema = z.object({
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    email: z.string().email().optional(),
    phoneNumber: z.string().trim().optional(),
  });

  const handleSubmit = async (data: any) => {
    setError(false);

    Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);
    if (!Object.keys(data).length) return;

    // const response = await updateContact(contact._id, data);
    // if (response.error) setError(true);
    await updateContact(contact._id, data);
  };

  return (
    <ContactLayout headerTitle={contact.firstName}>
      <Form submitHandler={handleSubmit} contact={contact} error={error} schema={schema} />
      <Logs contact={contact} />
    </ContactLayout>
  );
};

export const getServerSideProps = async ({ query }: any) => {
  const contact = await getContactWithLogs(query.id);

  return {
    props: { contact },
  };
};

export default Contact;
