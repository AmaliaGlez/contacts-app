import { MdArrowRight } from 'react-icons/md';
import { Contact } from '../../types';

interface Props {
  keyValue: string;
  beforeValue: string;
  afterValue: string;
}

const LogChange = ({ keyValue, beforeValue, afterValue }: Props) => {
  return (
    <>
      <p>
        <MdArrowRight />
        {`Updated ${keyValue} '${beforeValue}' to '${afterValue}'.`}
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

export const Logs = ({ contact }: { contact: Contact }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
  };

  let contactFields = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
  };

  const logsDiff =
    contact.logs?.map((log, idx) => {
      // Compare with current contact for the first one
      if (idx === 0) return { after: contact, before: log };

      // Update contactFields with edits
      contactFields = { ...contactFields, ...contact.logs?.[idx - 1] };
      return { after: contactFields, before: log };
    }) || [];

  return (
    <>
      <h3>Edit history</h3>
      {logsDiff.length ? (
        logsDiff?.map(({ before, after }) => (
          <div className='log' key={before.updatedAt.toString()}>
            <p>On {formatDate(before.updatedAt)}:</p>
            <div>
              {before.firstName ? (
                <LogChange
                  keyValue='first name'
                  beforeValue={before.firstName}
                  afterValue={after.firstName}
                />
              ) : null}
              {before.lastName ? (
                <LogChange
                  keyValue={'last name'}
                  beforeValue={before.lastName}
                  afterValue={after.lastName}
                />
              ) : null}
              {before.email ? (
                <LogChange keyValue={'email'} beforeValue={before.email} afterValue={after.email} />
              ) : null}
              {before.phoneNumber ? (
                <LogChange
                  keyValue={'phone number'}
                  beforeValue={before.phoneNumber}
                  afterValue={after.phoneNumber}
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
