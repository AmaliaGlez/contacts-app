import bcrypt from 'bcrypt';
import User from '../models/User.js';

const register = async (req, res) => {
  const { firstName, lastName, email, password, picturePath, location } = req.body;

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: passwordHash,
    picturePath,
    friends: [],
    location,
    viewedProfile: 0,
  });
  const savedUser = await newUser.save();

  res.status(201).json({ user: savedUser });
};

export default register;
