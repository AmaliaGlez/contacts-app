import Link from 'next/link';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Form, Logs } from '../../../components';
import { MainLayout } from '../../../layouts/MainLayout';
import { updateContact, getContact, getContactLogs } from '../../../service';

const Contact = ({ contact, logs }: any) => {
  const [error, setError] = useState<Boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(false);

    const data: any = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };

    Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);

    if (!Object.keys(data).length) return;

    // TODO: handle error
    await updateContact(contact._id, data);
  };

  return (
    <MainLayout headerTitle={contact.firstName}>
      <span>
        <Link href={'/'}>
          <IoIosArrowRoundBack fontSize={'2rem'} />
        </Link>
      </span>
      <div>
        <FaRegUser fontSize={'3rem'} />
        <Form handleSubmit={handleSubmit} contact={contact} error={error} />
        <Logs logs={logs} />
      </div>
      <style jsx>{`
        span {
          margin-left: 1rem;
        }

        div {
          color: #7c7c7c;
          text-align: center;
          margin: 0.5rem 1.5rem;
        }
      `}</style>
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx;
  const contact = await getContact(query.id);
  const logs = await getContactLogs(query.id);
  return {
    props: { contact, logs },
  };
};

export default Contact;
