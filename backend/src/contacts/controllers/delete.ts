import { Request, Response } from 'express';
import Contact from '../models/Contact.js';
import ContactLog from '../models/ContactLog.js';

async function deleteContact(req: Request, res: Response) {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) return res.status(404).json({ error: 'Contact not found' });

  await ContactLog.deleteMany({ contactId: id });

  res.status(200).json({ message: 'Contact deleted' });
}

export default deleteContact;
