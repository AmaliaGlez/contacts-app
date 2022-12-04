import { Request, Response } from 'express';
import Contact from '../models/Contact.js';
import ContactLog from '../models/ContactLog.js';

function getOldFieldsToBeUpdated(oldContact, newContact) {
  return Object.keys(newContact).reduce((acc, key) => {
    if (newContact[key] !== oldContact[key] && newContact[key]) {
      acc[key] = oldContact[key];
    } 
    return acc;
  }, {});
}

function areFieldsToUpdateEmpty(fields) {
  return Object.keys(fields).length === 0;
}

async function updateContact(req: Request, res: Response) {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber } = req.body;

  const oldContact = await Contact.findById(id);
  const newContact = { firstName, lastName, email, phoneNumber };

  if (!oldContact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  const oldFieldsToUpdate = getOldFieldsToBeUpdated(oldContact, newContact);

  let contact = oldContact;
  if (!areFieldsToUpdateEmpty(oldFieldsToUpdate)) {
    // Wrap in transaction if mongo is a replica set
    // await transact(async (session: ClientSession) => {
    //   contact = await Contact.findByIdAndUpdate(id, newContact, { session });
    //   await ContactLog.create(
    //     { ...oldFieldsToUpdate, contactId: id },
    //     { session }
    //   );
    // });
    contact = await Contact.findByIdAndUpdate(id, newContact, { new: true });
    await ContactLog.create({ ...oldFieldsToUpdate, contactId: id });
  }

  res.status(200).json(contact);
}

export default updateContact;
