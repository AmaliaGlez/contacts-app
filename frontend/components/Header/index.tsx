export const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <h1>{title}</h1>
      <style jsx>{`
        header {
          color: #ffffff;
          background: #000000;
          border-radius: 6px 6px 0 0;
          border-bottom: 1px solid #7c7c7c;
          text-align: center;
          margin: 0 auto;
          padding: 1rem;
          max-width: 400px;
        }
      `}</style>
    </header>
  );
};
