import express from 'express';
import {
  checkDuplicateEmail,
  get,
  updateInfo,
} from '../controller/userController.js';

const router = express.Router();

router.get('/:email', get);
router.get('/check/:email', checkDuplicateEmail);
router.put('/:email', updateInfo);

export default router;
