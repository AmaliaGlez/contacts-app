import Link from 'next/link';
import { ReactNode } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MainLayout } from './MainLayout';

interface Props {
  headerTitle: string;
  children: ReactNode;
}

export const ContactLayout = ({ headerTitle, children }: Props) => {
  return (
    <MainLayout headerTitle={headerTitle}>
      <span>
        <Link href={'/'}>
          <IoIosArrowRoundBack fontSize={'2rem'} />
        </Link>
      </span>
      <div>
        <FaRegUser fontSize={'3rem'} />
        {children}
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
