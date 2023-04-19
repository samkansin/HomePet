import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import {
  getImageFiles,
  uploadImage,
  showListPet,
  createNewPet,
  get,
  put,
  remove,
  lastPost,
  dogBreeds,
  catBreeds,
} from '../controller/petController.js';

let router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const { id } = req.params;
    const date = new Date();
    const dir = `uploads/${date.getFullYear()}/${date
      .toLocaleString('default', { month: 'long' })
      .toUpperCase()}/${id}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    callback(null, dir);
  },
  filename: (req, file, callback) => {
    const ext = path.extname(file.originalname);
    const name = `${req.files.length}${ext}`;
    callback(null, name);
  },
});

const upload = multer({ storage: storage });

router.post('/pages/Post', createNewPet);
router.get('/pages/Adopt/:type', showListPet);
router.get('/pages/lastPost/:type', lastPost);
router.get('/pet/:id', get);
router.put('/pet/:id', put);
router.delete('/pet/:id', remove);
router.get('/dog/breeds', dogBreeds);
router.get('/cat/breeds', catBreeds);
router.post('/uploads/:id', upload.array('files'), uploadImage);
router.get('/img/:year/:month/:id/:fileName', getImageFiles);

export default router;
