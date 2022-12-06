import { useRouter } from 'next/router';
import { z } from 'zod';
import { Form, Logs } from '../../../components';
import { useGetContactWithLogs, useUpdateContact } from '../../../hooks/useApi';
import { ContactLayout } from '../../../layouts/ContactLayout';

const Contact = () => {
  const { query } = useRouter();
  const { contact, logs } = useGetContactWithLogs(query.id as string);

  const schema = z.object({
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    email: z.string().email().optional(),
    phoneNumber: z.string().trim().optional(),
  });

  const mutation = useUpdateContact(contact?._id);

  const handleSubmit = async (data: any) => {
    Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);
    if (!Object.keys(data).length) return;
    mutation.mutate(data);
  };

  if (!contact) return null;

  return (
    <ContactLayout headerTitle={contact?.firstName}>
      <Form
        submitHandler={handleSubmit}
        contact={contact}
        error={mutation?.error?.response?.data.error}
        schema={schema}
      />
      <Logs logs={logs} />
    </ContactLayout>
  );
};

export default Contact;
