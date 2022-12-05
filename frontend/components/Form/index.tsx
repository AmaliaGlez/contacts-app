import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Contact } from '../../types';
import { DeleteButton } from '../DeleteButton';
import { formStyles } from './form.styles';

interface Props {
  submitHandler: (e: any) => void;
  contact?: Contact;
  error: any;
  schema: z.AnyZodObject;
}

export const Form = ({ submitHandler, contact, error, schema }: Props) => {
  const submitText = contact ? 'Edit' : 'Create';

  const { register, handleSubmit, formState } = useForm({
    defaultValues: contact,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (formValues: any) => {
    submitHandler(formValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSave)}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input {...register('firstName')} />
          <p>{errors?.firstName?.message}</p>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input {...register('lastName')} />
          <p>{errors?.lastName?.message}</p>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input {...register('email')} />
          <p>{errors?.email?.message}</p>
        </div>
        <div>
          <label htmlFor='phoneNumber'>Mobile</label>
          <input {...register('phoneNumber')} />
          <p>{errors?.phoneNumber?.message}</p>
        </div>
        {error ? <p className='error'>{error}</p> : null}
        <div className='buttons'>
          <button type='submit'>{submitText}</button>
          {contact ? <DeleteButton contactId={contact._id} /> : null}
        </div>
      </form>
      <style jsx>{formStyles}</style>
    </>
  );
};
