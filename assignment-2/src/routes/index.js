import { Router } from 'express';
import authRoutes from './auth.js';
import userRoutes from './users.js';
import authenticate from '../middleware/authenticate.js';

const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('api/v1/users/', authenticate, userRoutes);

export default router;
