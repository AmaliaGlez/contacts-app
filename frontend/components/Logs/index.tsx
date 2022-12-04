import { MdArrowRight } from 'react-icons/md';

export const Logs = ({ logs }: any) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
  };

  return (
    <>
      <h2>Edit history</h2>
      {logs.length ? (
        logs.map((log: any) => {
          return (
            <div className='log' key={log._id}>
              <p>On {formatDate(log.updatedAt)}:</p>
              <div>
                {log.firstName ? (
                  <p>
                    <MdArrowRight /> First Name: {log.firstName}
                  </p>
                ) : null}
                {log.lastName ? (
                  <p>
                    <MdArrowRight /> Last Name: {log.lastName}
                  </p>
                ) : null}
                {log.email ? (
                  <p>
                    <MdArrowRight /> Email: {log.email}
                  </p>
                ) : null}
                {log.phoneNumber ? (
                  <p>
                    <MdArrowRight /> Mobile: {log.phoneNumber}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })
      ) : (
        <p>This contact has never been edited.</p>
      )}
      <style jsx>{`
        h2 {
          color: #ffffff;
          text-align: start;
        }

        p {
          text-align: start;
        }

        .log {
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-align: start;
        }

        .log > div > p {
          display: flex;
          align-items: center;
          color: #7c7c7c;
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  );
};
