import Head from 'next/head';
import { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name='contacts-app' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
      <style jsx>{`
        main {
          color: var(--secondary-color);
          background: var(--primary-background-color);
          border-radius: 30px;
          padding: 2rem 3rem;
          width: min(100vw, 500px);
          height: 760px;
          box-shadow: rgb(0 0 0 / 20%) -4px 5px 15px 0px, rgb(0 0 0 / 15%) 0px 4px 6px -2px;
          overflow: auto;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 30px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--secondary-color-light);
          border-radius: 30px;
        }
      `}</style>
    </>
  );
};
