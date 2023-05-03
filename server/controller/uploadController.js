import mongoose from 'mongoose';
import PetDB from '../model/PetDB.js';

let bucket;
mongoose.connection.once('open', function () {
  bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads',
  });
});

export const uploadImage = async (req, res) => {
  const files = req.files;
  try {
    const promises = files.map(async (file) => {
      const uploadStream = bucket.openUploadStream(file.originalname);
      uploadStream.write(file.buffer);
      uploadStream.end();
      return uploadStream.id;
    });
    const filesIds = await Promise.all(promises);
    res.status(200).json({ success: 'upload image successfully', filesIds });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error uploading images' });
  }
};

export const getImage = async (req, res) => {
  const { id } = req.params;
  try {
    const detectError = await bucket
      .find({
        _id: new mongoose.Types.ObjectId(id),
      })
      .toArray();

    if (detectError.length === 0) {
      return res.status(404).send({ error: `Image not found with id ${id}` });
    }

    const image = await bucket.openDownloadStream(
      new mongoose.Types.ObjectId(id)
    );

    res.set('Content-Type', 'image/jpeg');
    image.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: `Internal Database Server Error` });
  }
};
