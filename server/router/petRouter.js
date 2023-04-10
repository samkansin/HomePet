import express from 'express';
import {
  showListPet,
  createNewPet,
  get,
  put,
  remove,
  lastPost,
} from '../controller/petController.js';

let router = express.Router();

router.post('/pages/Post', createNewPet);
router.get('/pages/Adopt', showListPet);
router.get('/pages/lastPost', lastPost);
router.get('/pet/:id', get);
router.put('/pet/:id', put);
router.delete('/pet/:id', remove);

export default router;
