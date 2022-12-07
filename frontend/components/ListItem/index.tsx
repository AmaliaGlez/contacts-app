import Image from 'next/image';
import Link from 'next/link';
import { Contact } from '../../types';

export const ListItem = ({ contact }: { contact: Contact }) => {
  return (
    <>
      <Link href={`/contact/${contact._id}`}>
        <div>
          <span>
            <Image src='/mindful.svg' alt='mindful' width='50' height='50' />
          </span>
          {contact.firstName} {contact.lastName}
        </div>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: background 0.2s ease-in-out;
          border-radius: 1rem;
        }

        div:hover {
          background: var(--secondary-background-color);
        }

        span {
          border-radius: 50%;
          background: var(--secondary-background-color);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};
