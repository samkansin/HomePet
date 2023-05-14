import express from 'express';
import {
  createChatRoom,
  findChat,
  userChats,
} from '../controller/chatController.js';

const router = express.Router();

router.post('/', createChatRoom);
router.get('/:uid', userChats);
router.get('/find/:firstId/:secondId', findChat);

export default router;
