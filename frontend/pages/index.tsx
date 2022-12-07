import Link from 'next/link';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { ListItem, Search } from '../components';
import { useFilterContacts } from '../hooks/useFilterContacts';
import { MainLayout } from '../layouts/MainLayout';
import { Contact } from '../types';

const Home = () => {
  const { filterContacts, filteredContacts } = useFilterContacts();

  return (
    <MainLayout>
      <h1>Contacts</h1>
      <div className='actions'>
        <Search onChange={filterContacts} />
        <Link href={'/contact/create'}>
          <AiOutlineUserAdd size={'2rem'} color={'var(--primary-color)'} />
        </Link>
      </div>
      <div className='list'>
        {filteredContacts?.map((contact: Contact) => {
          return <ListItem contact={contact} key={contact._id} />;
        })}
      </div>
      <style jsx>{`
        .actions {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem 0;
          gap: 1rem;
        }

        .list {
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;
