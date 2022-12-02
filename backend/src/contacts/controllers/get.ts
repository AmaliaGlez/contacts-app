import { Request, Response } from 'express';
import Contact from '../models/Contact.js';

async function getContacts(req: Request, res: Response) {
  const contacts = await Contact.find();
  
  res.status(200).json(contacts);
}

export default getContacts;
