import Link from 'next/link';
import { FaUserPlus } from 'react-icons/fa';
import { ListItem, Search } from '../components';
import { getContacts } from '../service/index';
import { useFilterContacts } from '../hooks/useFilterContacts';
import { MainLayout } from '../layouts/MainLayout';

interface Contact {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
}

const Home = ({ contacts }: any) => {
  const { filterContacts, filteredContacts } = useFilterContacts(contacts);

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
          return <ListItem contact={contact} />;
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

export const getServerSideProps = async () => {
  const contacts = await getContacts();
  return {
    props: { contacts },
  };
};

export default Home;
