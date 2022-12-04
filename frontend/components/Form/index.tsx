import { Contact } from '../../types';
import { DeleteButton } from '../DeleteButton';

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
            type='text'
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
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 1.5rem 0;
        }

        div {
          margin-bottom: 1rem;
        }

        label {
          color: #ffffff;
          margin-right: 0.5rem;
        }

        input {
          background: #7c7c7c;
          border: 1px solid #7c7c7c;
          border-radius: 6px;
          color: #ffffff;
          padding: 0.5rem;
        }

        input::placeholder {
          color: #ffffff;
        }

        input:focus,
        input:active {
          outline: none;
          border-radius: 6px 6px 0 0;
          border-bottom: 1px solid #ffffff;
        }

        button {
          background: #7c7c7c;
          color: #ffffff;
          cursor: pointer;
          border-radius: 6px;
          border: 1px solid #7c7c7c;
          padding: 0.5rem;
          margin-right: 1rem;
          width: inherit;
          text-transform: uppercase;
          font-weight: bold;
        }

        .buttons {
          display: flex;
          margin-top: 1rem;
          width: 150px;
        }

        p {
          color: #d52b2b;
        }
      `}</style>
    </>
  );
};
