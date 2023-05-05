import express from 'express';
import {
  showListPet,
  createNewPet,
  get,
  put,
  remove,
  lastPost,
  getBreeds,
} from '../controller/petController.js';

let router = express.Router();

router.get('/pages/Adopt/:type', showListPet);
router.get('/pet/:id', get);
router.post('/pages/Post', createNewPet);
router.put('/pet/:id', put);
router.delete('/pet/:id', remove);
router.get('/pages/lastPost/:type', lastPost);
router.get('/pet/breeds/:type', getBreeds);

export default router;
