import { useState } from 'react';
import { Form, Logs } from '../../../components';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { updateContact, getContactWithLogs } from '../../../service/index';
import { Contact } from '../../../types';

const Contact = ({ contact }: { contact: Contact }) => {
  const [error, setError] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(false);

    const data: any = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };

    Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);

    if (!Object.keys(data).length) return;

    // const response = await updateContact(contact._id, data);
    // if (response.error) setError(true);
    await updateContact(contact._id, data);
  };

  return (
    <ContactLayout headerTitle={contact.firstName}>
      <Form handleSubmit={handleSubmit} contact={contact} error={error} />
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
