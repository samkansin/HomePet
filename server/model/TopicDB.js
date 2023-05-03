import * as ALLmongoose from 'mongoose';

const mongoose = ALLmongoose.default;

let topicSchema = mongoose.Schema({
  topic: String,
  used: Number,
});

let TopicDB = mongoose.model('topic', topicSchema, 'Topics');
export default TopicDB;
