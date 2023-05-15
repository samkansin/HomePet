import PetDB from '../model/PetDB.js';
import BreedDB from '../model/BreedDB.js';
import UserDB from '../model/UserDB.js';

const projection_id_v = { _id: 0, __v: 0 };

//show pet list
export const showListPet = (req, res) => {
  const { type } = req.params;
  let filterwType =
    type !== 'null' ? { type: { $regex: type, $options: 'i' } } : {};

  PetDB.find(filterwType, projection_id_v)
    .sort({ dateTime: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(500).send({ errors: 'Servers Database Error' }));
};

//add pet to first child
export const createNewPet = async (req, res) => {
  const userID = await UserDB.findOne({ uid: req.body.owner });
  req.body.owner = userID._id;
  PetDB.create(req.body)
    .then(async (doc) => {
      res.json('Post create successfully');
    })
    .catch((error) => {
      if (error.name === 'MongoServerError' && error.code === 11000) {
        return res.status(400).send({
          error: `A duplicate key error on: ${
            Object.keys(error.keyPattern)[0]
          }`,
        });
      } else if (error.name === 'ValidationError') {
        let errors = {};
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });
        return res.status(400).send(errors);
      } else
        res.status(500).send({
          errors: `Database Server Error ${error.name} ${error.code}`,
        });
    });
};

//find pet
export const get = async (req, res) => {
  const id = req.params.id;
  PetDB.findOne({ PetID: id }, projection_id_v)
    .populate({ path: 'owner', select: 'uid displayName profileImg' })
    .exec()
    .then((pet) => {
      if (!pet) {
        return res.status(404).send({ error: `Pet not found with id ${id}` });
      }
      res.json(pet);
    })
    .catch((error) => {
      return res.status(500).send({
        error: `Error retrieving Pet with id ${id}`,
      });
    });
};

//update pet
export const put = (req, res) => {
  const data = req.body || {};
  const { id } = req.params;
  console.log(data);

  PetDB.findOneAndUpdate(
    { PetID: id },
    { $set: data },
    {
      projection: projection_id_v,
      upsert: false,
      new: true,
    }
  )
    .then((pet) => {
      if (!pet) {
        return res.status(404).send({ error: `Pet not found with id ${id}` });
      }
      res.json(pet);
    })
    .catch((error) => {
      if (error.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ error: `Object not found with id ${id}` });
      }
      return res
        .status(500)
        .send({ error: `Error updating Pet with id ${id}` });
    });
};

//delete pet
export const remove = (req, res) => {
  const { id } = req.params;

  PetDB.deleteOne({ PetID: id })
    .then((response) => {
      if (response.acknowledged && response.deletedCount === 1)
        return res.status(200).send({ success: 'Delete post successfully' });
      else
        return res
          .status(200)
          .send({ success: "Post doesn't exist or already deleted'" });
    })
    .catch((error) => {
      return res.status(404).send({ error: error.name });
    });
};

export const getPetFormTag = async (req, res) => {
  const { tag } = req.params;
  try {
    let petByTag = await PetDB.find({ topic: tag })
      .sort({ dateTime: -1 })
      .populate({ path: 'owner', select: 'uid displayName profileImg' })
      .exec();

    if (petByTag) {
      res.json(petByTag);
    } else {
      res.status(404).send({ error: `Not found post by tag : ${tag}` });
    }
  } catch (error) {
    res.status(500).send({ error: 'Error to get post by tag' });
  }
};

//get last pet
export const lastPost = (req, res) => {
  const { type } = req.params;
  let filterwType =
    type !== 'null' ? { type: { $regex: type, $options: 'i' } } : {};

  PetDB.find(filterwType, projection_id_v)
    .sort({ dateTime: -1 })
    .then((result) => {
      res.json(result.slice(0, 4));
    })
    .catch((err) => res.status(500).send({ errors: 'Servers Database Error' }));
};

//get breeds
export const getBreeds = (req, res) => {
  const { type } = req.params;
  BreedDB.find({ petType: type.toLowerCase() }, projection_id_v)
    .then((result) => {
      res.json(result[0].breeds);
    })
    .catch((err) => res.status(500).send({ errors: 'Servers Database Error' }));
};
