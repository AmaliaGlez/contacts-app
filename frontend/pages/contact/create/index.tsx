import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form } from '../../../components';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { createContact } from '../../../service';

const Create = () => {
  const [error, setError] = useState<Boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(false);

    const data: any = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };

    // TODO: handle error
    await createContact(data);
    router.push('/');
  };

  return (
    <ContactLayout headerTitle={'New contact'}>
      <Form handleSubmit={handleSubmit} error={error} />
    </ContactLayout>
  );
};

export default Create;
