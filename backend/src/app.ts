import express from 'express';
import 'express-async-errors';
import contactRoutes from './contacts/routes/index.js';
import { useServerConfigurations, useServerErrorHandling } from './shared/express.js';

let app = express();
useServerConfigurations(app);

app.use('/contacts', contactRoutes);

useServerErrorHandling(app);

export default app;
