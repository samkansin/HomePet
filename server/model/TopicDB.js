import * as ALLmongoose from 'mongoose';

const mongoose = ALLmongoose.default;

let topicSchema = mongoose.Schema({
  topic: { type: String, required: true, unique: true },
  used: Number,
});

let TopicDB = mongoose.model('topic', topicSchema, 'Topics');
export default TopicDB;
