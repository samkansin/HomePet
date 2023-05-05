import * as ALLmongoose from 'mongoose';

let mongoose = ALLmongoose.default;

var breedSchema = mongoose.Schema({
  petType: { type: String, required: true, unique: true },
  breeds: [{ value: String, label: String }],
});

let BreedDB = mongoose.model('breed', breedSchema, 'Breeds');
export default BreedDB;
