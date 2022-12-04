import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export const ListItem = ({ contact }: any) => {
  return (
    <>
      <div>
        <Link href={`/contact/${contact._id}`}>
          <span>
            <FaUser fontSize={'1.5rem'} />
          </span>
          {contact.firstName} {contact.lastName}
        </Link>
      </div>
      <style jsx>{`
        div {
          margin: 0.5rem 0;
        }

        span {
          color: #7c7c7c;
          margin: 1rem;
        }
      `}</style>
    </>
  );
};
