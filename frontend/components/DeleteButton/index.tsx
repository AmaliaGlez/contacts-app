import { useRouter } from 'next/router';
import { FaUserTimes } from 'react-icons/fa';
import { deleteContact } from '../../service/index';

export const DeleteButton = ({ contactId }: { contactId: string }) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteContact(contactId);
    router.push('/');
  };

  return (
    <>
      <button onClick={handleDelete}>
        <FaUserTimes fontSize={'2rem'} />
      </button>
      <style jsx>{`
        button {
          background: transparent;
          color: #d52b2b;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};
