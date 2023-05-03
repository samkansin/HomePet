import express from 'express';
import multer from 'multer';
import { uploadImage, getImage } from '../controller/uploadController.js';

let router = express.Router();

//store image in buffer format without writing to disk
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/uploadsImg', upload.array('files'), uploadImage);
router.get('/images/:id', getImage);

export default router;
