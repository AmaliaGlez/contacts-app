import { Request, Response } from 'express';
import Contact from '../models/Contact.js';

async function getContact(req: Request, res: Response) {
  const { id } = req.params;

  const contact = await Contact.findById(id);
  if (!contact) return res.status(404).json({ message: 'Contact not found' });
  
  res.status(200).json(contact);
}

export default getContact;
