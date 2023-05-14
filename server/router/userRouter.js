import express from 'express';
import {
  get,
  updateInfo,
} from '../controller/userController.js';

const router = express.Router();

router.get('/:email', get);
router.put('/:email', updateInfo);

export default router;
