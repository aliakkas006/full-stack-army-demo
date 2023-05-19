import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import users from './user.js';
import error from '../utils/error.js';

const registerService = async ({ name, email, password }) => {
  const user = await users.findUserByEmail(email);
  if (user) throw error('User already exist!', 400);

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return users.createUser(name, email, hash);
};

const loginService = async ({ email, password }) => {
  const user = await users.findUserByEmail(email);
  if (!user) throw error('Invalid Credentials!', 400);

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) throw error('Invalid Credentials!', 400);

  const payload = {
    name: user.name,
    email: user.email,
  };

  return jwt.sign(payload, 'secret-key', { expiresIn: '1h' });
};

export default { registerService, loginService };
