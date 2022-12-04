export const Search = ({ onChange }: { onChange: (e: any) => void }) => {
  return (
    <>
      <input type='search' placeholder='Search contact' onChange={onChange} />
      <style jsx>{`
        input {
          background: #7c7c7c;
          border: 1px solid #7c7c7c;
          border-radius: 6px;
          color: #ffffff;
          padding: 1rem;
          margin-right: 1rem;
          width: 60%;
        }

        input::placeholder {
          color: #ffffff;
        }

        input:focus,
        input:active {
          outline: none;
          border-radius: 6px 6px 0 0;
          border-bottom: 1px solid #ffffff;
        }
      `}</style>
    </>
  );
};
