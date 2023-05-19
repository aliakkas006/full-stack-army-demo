import authService from '../service/auth.js';

const registerController = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ msg: 'Invalid data' });

  try {
    const user = authService.registerService({ name, email, password });
    return res.status(201).json({ msg: 'User created successfully', user });
  } catch (err) {
    next(err);
  }
};

const loginController = (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = authService.loginService({ email, password });
    return res.status(200).json({ msg: 'Login Successful', token });
  } catch (err) {
    next(err);
  }
};

export default { registerController, loginController };
