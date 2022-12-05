import { useRouter } from 'next/router';
import { useState } from 'react';
import { z } from 'zod';
import { Form } from '../../../components';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { createContact } from '../../../service/index';

const Create = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

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

  const handleSubmit = async (data: any) => {
    setError(false);

    // const response = await createContact(data);
    // console.log(response);
    // if (response.error) {
    //   setError(true);
    // } else {
    //   router.push('/');
    // }
    await createContact(data);
    router.push('/');
  };

  return (
    <ContactLayout headerTitle={'New contact'}>
      <Form submitHandler={handleSubmit} error={error} schema={schema} />
    </ContactLayout>
  );
};

export default Create;
