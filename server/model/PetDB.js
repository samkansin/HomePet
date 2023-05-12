import * as ALLmongoose from 'mongoose';

let mongoose = ALLmongoose.default;

var petSchema = mongoose.Schema({
  PetID: { type: String, unique: true, required: true },
  image_src: [String],
  name: String,
  type: String,
  breed: String,
  details: String,
  adopted: Boolean,
  gender: String,
  ageMonth: Number,
  ageYear: Number,
  dateTime: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  topic: { type: [String] },
});

let PetDB = mongoose.model('Post', petSchema, 'Pets');
export default PetDB;
