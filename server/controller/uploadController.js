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
    // await updateImage(req.body, filesIds);
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

// const updateImage = async ({ id }, IDlist) => {
//   await IDlist.map((id) => `/images/${id}`);
//   let newImage = { image_src: IDlist };
//   try {
//     let response = await fetch(`/api/pet/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(newImage),
//       headers: new Headers({ 'Content-Type': 'application/json' }),
//     }).then((res) => {
//       if (!res.ok) {
//         throw Error({ error: `Could not add source image id: ${id}` });
//       }
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// PetDB.updateOne(
//   { id: id },
//   { $set: { image_src: IDlist } },
//   { upsert: false, new: true }
// ).then((result) => {
//   if (!result) {
//     return res.status(404).send({ error: `Pet not found with id: ${id}` });
//   }
// });
