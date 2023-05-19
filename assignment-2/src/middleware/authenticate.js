import jwt from 'jsonwebtoken';
import userService from '../service/user.js';

const authenticate = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json({ msg: 'Unauthorized!' });

    token = token.split(' ')[1];
    const decoded = jwt.verify(token, 'secret-key');

    const user = await userService.findUserById(decoded._id);
    if (!user) return res.status(401).json({ msg: 'Unauthorized!' });

    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({ msg: 'Invalid Token!' });
  }
};

export default authenticate;
