import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MainLayout } from './MainLayout';

export const ContactLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <Link href={'/'}>
        <IoIosArrowRoundBack fontSize={'2rem'} />
      </Link>
      <div>
        <span>
          <Image src='/mindful.svg' alt='mindful' width='120' height='120' />
        </span>
        {children}
      </div>
      <style jsx>{`
        div {
          color: #7c7c7c;
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        span {
          align-self: center;
          color: #7c7c7c;
          border-radius: 50%;
          background: var(--secondary-background-color);
          width: 120px;
          height: 120px;
        }
      `}</style>
    </MainLayout>
  );
};
