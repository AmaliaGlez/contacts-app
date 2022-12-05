import { z } from 'zod';
import { Form, Logs } from '../../../components';
import { useUpdateContact } from '../../../hooks/api';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { getContactWithLogs } from '../../../service/index';
import { Contact } from '../../../types';

const Contact = ({ contact }: { contact: Contact }) => {
  const schema = z.object({
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    email: z.string().email().optional(),
    phoneNumber: z.string().trim().optional(),
  });

  const mutation = useUpdateContact(contact._id);

  const handleSubmit = async (data: any) => {
    Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);
    if (!Object.keys(data).length) return;
    mutation.mutate(data);
  };

  return (
    <ContactLayout headerTitle={contact.firstName}>
      <Form
        submitHandler={handleSubmit}
        contact={contact}
        error={mutation?.error?.response?.data.error}
        schema={schema}
      />
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
