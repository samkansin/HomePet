import Pet, { PetBreeds } from '../model/pet.js';
import fs from 'fs';
import path, { dirname } from 'path';

//upload image
export const uploadImage = (req, res) => {
  res.json({ status: 'upload successfully' });
};

//get image pet
export const getProfileCard = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const dir = `uploads/${id}/`;
  const filepath = path.join(path.resolve(path.dirname('')), dir);
  fs.readdir(filepath, (err, files) => {
    if (err) {
      res.json({ status: `Error find image ${err}` });
    } else {
      const findFile = files.find((file) => {
        return file.startsWith('1');
      });
      if (findFile) {
        const image = path.join(filepath, findFile);
        res.sendFile(image);
      }
    }
  });
};

//show pet list
export const showListPet = (req, res) => {
  const { type } = req.params;
  Pet.list(type).then((result) => res.json(result));
};

//add pet
export const createNewPet = (req, res) => {
  Pet.addPet(req.body).then(() => {
    return res.send({ status: 'Create Pet Successfully' });
  });
};

//find pet
export const get = (req, res) => {
  const id = req.params.id;
  Pet.findPet(id)
    .then((pet) => {
      if (!pet) {
        return res.status(404).send({
          error: 'Pet not found with id ' + id,
        });
      }
      res.json(pet);
    })
    .catch((err) => {
      return res.status(500).send({
        error: 'Error retrieving Pet with id ' + id,
      });
    });
};

//update pet
export const put = (req, res) => {
  const data = req.body || {};
  if (!data || data.id != req.params.id)
    return res.status(422).send({ error: 'id must be alphanumeric.' });

  Pet.updatePetData(req.params.id, req.body)
    .then((pet) => {
      res.send(pet);
    })
    .catch((err) => {
      return res.status(500).send({
        error: 'Error updating Pet with id ' + req.param.id,
      });
    });
};

//delete pet
export const remove = (req, res) => {
  const data = req.body || {};
  if (!data || data.id != req.params.id)
    return res.status(422).send({ error: 'id must be alphanumeric.' });
  Pet.deletePet(data.id)
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch(() => {
      return res.status(404).send({
        error: 'Pet not found with id ' + req.params.id,
      });
    });
};

//get last pet
export const lastPost = (req, res) => {
  const { type } = req.params;
  Pet.LastFourPet(type).then((result) => res.json(result));
};

//get breeds
export const catBreeds = (req, res) => {
  PetBreeds.catBreeds().then((result) => res.json(result));
};

export const dogBreeds = (req, res) => {
  PetBreeds.dogBreeds().then((result) => res.json(result));
};
