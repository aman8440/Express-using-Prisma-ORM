import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.post('/add', createUser);

export default router;
