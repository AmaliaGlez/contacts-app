import { MdArrowRight } from 'react-icons/md';
import { Contact, ContactLog } from '../../types';

interface Props {
  keyValue: string;
  beforeValue?: string;
  afterValue: string;
}

const LogChange = ({ keyValue, beforeValue, afterValue }: Props) => {
  return (
    <>
      <p>
        <MdArrowRight />
        {beforeValue
          ? `Updated ${keyValue} '${beforeValue}' to '${afterValue}'.`
          : `Set ${keyValue} to '${afterValue}'.`}
      </p>
      <style jsx>{`
        p {
          display: flex;
          align-items: center;
          color: #7c7c7c;
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};

export const Logs = ({ logs }: { logs?: ContactLog[] }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
  };

  let contactFields: Contact;

  const logsDiff =
    logs
      ?.map((log, idx) => {
        const contact = { ...contactFields };
        // Update contactFields with log
        contactFields = { ...contactFields, ...log };
        if (idx === 0) return { current: null, log };
        return { current: contact, log };
      })
      .reverse() || [];

  return (
    <>
      <h3>Edit history</h3>
      {logsDiff.length ? (
        logsDiff?.map(({ current, log }, idx) => (
          <div className='log' key={idx}>
            <p>On {formatDate(log.updatedAt)}:</p>
            <div>
              {log.firstName ? (
                <LogChange
                  keyValue='first name'
                  beforeValue={current?.firstName}
                  afterValue={log.firstName}
                />
              ) : null}
              {log.lastName ? (
                <LogChange
                  keyValue={'last name'}
                  beforeValue={current?.lastName}
                  afterValue={log.lastName}
                />
              ) : null}
              {log.email ? (
                <LogChange keyValue={'email'} beforeValue={current?.email} afterValue={log.email} />
              ) : null}
              {log.phoneNumber ? (
                <LogChange
                  keyValue={'phone number'}
                  beforeValue={current?.phoneNumber}
                  afterValue={log.phoneNumber}
                />
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <p>This contact has never been edited.</p>
      )}
      <style jsx>{`
        h3 {
          color: #ffffff;
          text-align: start;
        }

        p {
          text-align: start;
          font-size: 0.8rem;
        }

        .log {
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-align: start;
        }
      `}</style>
    </>
  );
};
