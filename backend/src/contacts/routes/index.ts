import express from 'express';
import createContact from '../controllers/create.js';
import deleteContact from '../controllers/delete.js';
import getContacts from '../controllers/get.js';
import getContact from '../controllers/getById.js';
import getContactLogs from '../controllers/getLogs.js';
import updateContact from '../controllers/update.js';
const router = express.Router();

router.post('/', createContact);
router.get('/', getContacts);
router.get('/:id', getContact);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);
router.get('/:id/logs', getContactLogs);

export default router;
