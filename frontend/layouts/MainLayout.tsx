import Head from 'next/head';
import { ReactNode } from 'react';
import { Header } from '../components/Header';

interface Props {
  headerTitle: String;
  children: ReactNode;
}

export const MainLayout = ({ headerTitle, children }: Props) => {
  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name='contacts-app' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header title={headerTitle} />
      <main>{children}</main>
      <style jsx>{`
        main {
          color: #ffffff;
          background: #000000;
          border-radius: 0 0 6px 6px;
          margin: 0 auto;
          height: max(50vh, 600px);
          max-width: 400px;
          overflow: auto;
        }
      `}</style>
    </>
  );
};
