import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Form } from '../../../components';
import { MainLayout } from '../../../layouts/MainLayout';
import { createContact } from '../../../service';

const Create = () => {
  const [error, setError] = useState<Boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(false);

    const data: any = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
    };

    // TODO: handle error
    await createContact(data);
    router.push('/');
  };

  return (
    <MainLayout headerTitle={'New contact'}>
      <span>
        <Link href={'/'}>
          <IoIosArrowRoundBack fontSize={'2rem'} />
        </Link>
      </span>
      <div>
        <FaRegUser fontSize={'3rem'} />
        <Form handleSubmit={handleSubmit} error={error} />
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

export default Create;
