import express from 'express';
import {
  getTopicsList,
  addTopic,
  searchTopics,
  removeTopic,
} from '../controller/topicController.js';

let router = express.Router();

router.get('/topic', getTopicsList);
router.post('/topic', searchTopics);
router.post('/topic/add', addTopic);
router.delete('/topic/remove', removeTopic);

export default router;
