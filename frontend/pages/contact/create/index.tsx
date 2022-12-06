import { z } from 'zod';
import { Form } from '../../../components';
import { useCreateContact } from '../../../hooks/useApi';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { Contact } from '../../../types';

const Create = () => {
  const schema = z.object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: 'Required field' })
      .regex(/^[A-Za-z0-9 ]+$/, { message: 'Special characters not allowed' }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: 'Required field' })
      .regex(/^[A-Za-z0-9 ]+$/, { message: 'Special characters not allowed' }),
    email: z.string().email(),
    phoneNumber: z
      .string()
      .trim()
      .min(1, { message: 'Required field' })
      .regex(/^[0-9]+$/, { message: 'Should be a number' }),
  });

  const mutation = useCreateContact();

  const handleSubmit = async (data: Contact) => {
    mutation.mutate(data);
  };

  return (
    <ContactLayout headerTitle={'New contact'}>
      <Form
        submitHandler={handleSubmit}
        error={mutation?.error?.response?.data.error}
        schema={schema}
      />
    </ContactLayout>
  );
};

export default Create;
