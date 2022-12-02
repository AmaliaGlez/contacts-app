import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const initServer = () => {
  const PORT = process.env.PORT || 5001;
  mongoose
    .connect(process.env.MONGO_URL || '')
    .then(() => {
      app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
};

initServer();
