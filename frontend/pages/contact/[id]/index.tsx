import { useState } from 'react';
import { Form, Logs } from '../../../components';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { updateContact, getContact, getContactLogs } from '../../../service';

const Contact = ({ contact, logs }: any) => {
  const [error, setError] = useState<Boolean>(false);

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

    // TODO: handle error
    await updateContact(contact._id, data);
  };

  return (
    <ContactLayout headerTitle={contact.firstName}>
      <Form handleSubmit={handleSubmit} contact={contact} error={error} />
      <Logs logs={logs} />
    </ContactLayout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx;
  const contact = await getContact(query.id);
  const logs = await getContactLogs(query.id);
  return {
    props: { contact, logs },
  };
};

export default Contact;
