import express from 'express';
import { addMessage, getMessage } from '../controller/messageController.js';

const router = express.Router();

router.post('/', addMessage);
router.get('/:chatID', getMessage);

export default router;
