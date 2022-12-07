import { Form } from '../../../components';
import { useCreateContact } from '../../../hooks/useApi';
import { ContactLayout } from '../../../layouts/ContactLayout';
import { Contact } from '../../../types';

const Create = () => {
  const mutation = useCreateContact();

  const handleSubmit = async (data: Contact) => mutation.mutate(data);

  return (
    <ContactLayout>
      <h1>New contact</h1>
      <Form submitHandler={handleSubmit} error={mutation?.error?.response?.data.error} />
    </ContactLayout>
  );
};

export default Create;
