import express from 'express';
import { create } from '../controller/userController.js';
import {
  handleLogin,
  handleLogout,
  handleRefreshToken,
  checkDuplicateEmail,
} from '../controller/authDBController.js';

const router = express.Router();

router.post('/', handleLogin);
router.get('/', handleLogout);
router.get('/refresh', handleRefreshToken);
router.get('/check/:email', checkDuplicateEmail);
router.post('/register', create);

export default router;
