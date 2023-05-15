import express from 'express';
import {
  createChatRoom,
  findChat,
  upDateTimeChats,
  userChats,
} from '../controller/chatController.js';

const router = express.Router();

router.post('/', createChatRoom);
router.get('/:uid', userChats);
router.put('/:chatID', upDateTimeChats);
router.get('/find/:firstId/:secondId', findChat);

export default router;
