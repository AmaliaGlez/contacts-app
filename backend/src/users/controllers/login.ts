import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import type { Request, Response } from 'express';
import { NotFoundError, ValidationError } from '../../shared/errors.js';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Get user from database
  const user = await User.findOne({ email: email });
  if (!user) throw new NotFoundError('User does not exist');

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new ValidationError('Invalid credentials');

  // Create and assign a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: '24h',
  });
  const { password: _, ...userWithoutPassword } = user.toObject();

  // Send token and user
  res.status(200).json({ token, user: userWithoutPassword });
};

export default login;
