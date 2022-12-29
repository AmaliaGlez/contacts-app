import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Contact } from '../../types';
import { formStyles } from './form.styles';
import { Delete } from '../Delete';

interface Props {
  submitHandler: (e: any) => void;
  contact?: Contact;
  error: any;
}

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
    .regex(/^[0-9]+$/, { message: 'Should be numbers' }),
});

export const Form = ({ submitHandler, contact, error }: Props) => {
  const submitText = contact ? 'Edit' : 'Create';

  const { register, handleSubmit, formState } = useForm({
    defaultValues: contact,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (formValues: any) => submitHandler(formValues);

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
        <button className='primary-button' type='submit'>
          {submitText}
        </button>
        {contact ? <Delete contactId={contact._id} /> : null}
      </form>
      <style jsx>{formStyles}</style>
    </>
  );
};
