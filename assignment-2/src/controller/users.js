import userService from '../service/user.js';
import authService from '../service/auth.js';
import error from '../utils/error.js';

const getUsers = (_req, res, next) => {
  try {
    const users = userService.findUsers();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = (req, res, next) => {
  const { id } = req.params;
  try {
    const user = userService.findUserById(id);
    if (!user) throw error('User not found!', 404);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const postUser = (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = authService.registerService(name, email, password);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export default { getUsers, getUserById, postUser };
