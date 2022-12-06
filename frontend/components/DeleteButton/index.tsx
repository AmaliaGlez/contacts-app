import { useState } from 'react';
import { FaUserTimes } from 'react-icons/fa';
import { Modal } from '../Modal';
import { useDeleteContact } from '../../hooks/useApi';

export const DeleteButton = ({ contactId }: { contactId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useDeleteContact(contactId);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const handleDelete = () => mutation.mutate();

  return (
    <>
      <button onClick={handleOpen}>
        <FaUserTimes fontSize={'2rem'} />
      </button>
      {isModalOpen && (
        <Modal title='Delete' handleClose={handleClose}>
          <p>Are you sure you want to delete this contact?</p>
          <div className='buttons'>
            <button className='cancel-button' onClick={handleClose}>
              Cancel
            </button>
            <button className='delete-button' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </Modal>
      )}
      <style jsx>{`
        button {
          background: transparent;
          color: #d52b2b;
          cursor: pointer;
          border: none;
        }

        .buttons {
          display: flex;
          justify-content: end;
          margin-top: 2rem;
        }

        .cancel-button {
          color: #7c7c7c;
        }
      `}</style>
    </>
  );
};
