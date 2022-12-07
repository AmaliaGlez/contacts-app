import { useState } from 'react';
import { Modal } from '../Modal';
import { useDeleteContact } from '../../hooks/useApi';

export const Delete = ({ contactId }: { contactId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useDeleteContact(contactId);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const handleDelete = () => mutation.mutate();

  return (
    <>
      <button className='delete-button' onClick={handleOpen}>
        Delete
      </button>
      {isModalOpen && (
        <Modal title='Delete contact' handleClose={handleClose}>
          <p>Are you sure you want to delete this contact?</p>
          {mutation.error ? <p className='error'>An error occurred</p> : null}
          <div className='buttons'>
            <button className='primary-button' onClick={handleClose}>
              Cancel
            </button>
            <button className='delete-button' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </Modal>
      )}
      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: space-evenly;
          margin-top: 2rem;
        }

        .error {
          color: var(--tertiary-color-light);
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  );
};
