import { Request, Response } from 'express';
import Contact from '../models/Contact.js';
import ContactLog from '../models/ContactLog.js';

async function createContact(req: Request, res: Response) {
  const { firstName, lastName, email, phoneNumber } = req.body;

  const emailExist = await Contact.findOne({ email });
  if (emailExist) return res.status(400).json({ error: 'Email already exists' });

  const contact = await Contact.create({
    firstName,
    lastName,
    email,
    phoneNumber,
  });

  await ContactLog.create({
    firstName: contact.firstName,
    lastName: contact.lastName,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
    contactId: contact._id,
  });

  res.status(201).json(contact);
}

export default createContact;
