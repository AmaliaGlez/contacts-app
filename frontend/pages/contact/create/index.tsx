import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form } from '../../../components';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { createContact } from '../../../service/index';

const Create = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(false);

    const contact = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };

    // const response = await createContact(contact);
    // console.log(response)
    // if (response.error) {
    //   setError(true);
    // } else {
    //   router.push('/');
    // }
    await createContact(contact);
    router.push('/');
  };

  return (
    <ContactLayout headerTitle={'New contact'}>
      <Form handleSubmit={handleSubmit} error={error} />
    </ContactLayout>
  );
};

export default Create;
