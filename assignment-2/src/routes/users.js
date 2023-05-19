import { Router } from 'express';
import userController from '../controller/users.js';

const router = Router();

router.get('/:id', userController.getUserById);
router.get('/', userController.getUsers);
router.post('/', userController.postUser);

export default router;
