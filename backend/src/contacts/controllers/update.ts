import { Request, Response } from 'express';
import Contact from '../models/Contact.js';
import ContactLog from '../models/ContactLog.js';

function getFieldsToBeUpdated(oldContact, newContact) {
  return Object.keys(newContact).reduce((acc, key) => {
    // If the new value is different from the old value
    if (newContact[key] !== oldContact[key] && newContact[key]) {
      acc[key] = newContact[key];
    }
    return acc;
  }, {} as any);
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
    return res.status(404).json({ error: 'Contact not found' });
  }

  const fieldsToUpdate = getFieldsToBeUpdated(oldContact, newContact);

  if (fieldsToUpdate.email) {
    const emailExist = await Contact.findOne({ email });
    if (emailExist) return res.status(400).json({ error: 'Email already exists' });
  }

  let contact = oldContact;
  if (!areFieldsToUpdateEmpty(fieldsToUpdate)) {
    // Wrap in transaction if mongo is a replica set
    // await transact(async (session: ClientSession) => {
    //   contact = await Contact.findByIdAndUpdate(id, newContact, { session });
    //   await ContactLog.create(
    //     { ...oldFieldsToUpdate, contactId: id },
    //     { session }
    //   );
    // });
    contact = await Contact.findByIdAndUpdate(id, newContact, { new: true });
    await ContactLog.create({ ...fieldsToUpdate, contactId: id });
  }

  res.status(200).json(contact);
}

export default updateContact;
