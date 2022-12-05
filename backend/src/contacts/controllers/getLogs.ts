import { Request, Response } from 'express';
import ContactLog from '../models/ContactLog.js';

async function getContactLogs(req: Request, res: Response) {
  const { id: contactId } = req.params;

  const contactLogs = await ContactLog.find({ contactId }).sort({ updatedAt: 1 });

  res.status(200).json(contactLogs);
}

export default getContactLogs;
