import { Request, Response } from 'express';
import Contact from '../models/Contact.js';

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

  res.status(201).json(contact);
}

export default createContact;
