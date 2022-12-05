import { Contact } from '../../types';
import { DeleteButton } from '../DeleteButton';
import { formStyles } from './form.styles';

interface Props {
  handleSubmit: (e: any) => void;
  contact?: Contact;
  error: boolean;
}

export const Form = ({ handleSubmit, contact, error }: Props) => {
  const required = contact ? false : true;
  const submitText = contact ? 'Edit' : 'Create';

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            required={required}
            defaultValue={contact?.firstName}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            required={required}
            defaultValue={contact?.lastName}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required={required}
            defaultValue={contact?.email}
          />
        </div>
        <div>
          <label htmlFor='phoneNumber'>Mobile</label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            required={required}
            defaultValue={contact?.phoneNumber}
          />
        </div>
        {error ? <p className='error'>An error ocurred. Please, try again.</p> : null}
        <div className='buttons'>
          <button type='submit'>{submitText}</button>
          {contact ? <DeleteButton contactId={contact._id} /> : null}
        </div>
      </form>
      <style jsx>{formStyles}</style>
    </>
  );
};
