import express from 'express';
import { get, getWithID, updateInfo } from '../controller/userController.js';

const router = express.Router();

router.get('/:email', get);
router.get('/wid/:id', getWithID);
router.put('/:email', updateInfo);

export default router;
