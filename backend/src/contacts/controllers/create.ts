import { Request, Response } from 'express';
import Contact from '../models/Contact.js';

async function createContact(req: Request, res: Response) {
  const { firstName, lastName, email, phoneNumber } = req.body;

  const contact = await Contact.create({
    firstName,
    lastName,
    email,
    phoneNumber,
  });

  res.status(201).json(contact);
}

export default createContact;
