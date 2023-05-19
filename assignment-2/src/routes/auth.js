import { Router } from 'express';
import authController from '../controller/auth.js';

const router = Router();

router.post('/register', authController.registerController);
router.post('/login', authController.loginController);

export default router;
