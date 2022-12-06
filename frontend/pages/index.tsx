import Link from 'next/link';
import { FaUserPlus } from 'react-icons/fa';
import { ListItem, Search } from '../components';
import { useFilterContacts } from '../hooks/useFilterContacts';
import { MainLayout } from '../layouts/MainLayout';
import { Contact } from '../types';

const Home = () => {
  const { filterContacts, filteredContacts } = useFilterContacts();

  return (
    <MainLayout headerTitle={'Contacts'}>
      <div className='actions'>
        <Search onChange={filterContacts} />
        <Link href={'/contact/create'}>
          <FaUserPlus fontSize={'2rem'} />
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
          justify-content: end;
          align-items: center;
          margin: 1rem;
        }

        .list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;
