import * as ALLMongoose from 'mongoose';

const mongoose = ALLMongoose.default;

const MessageSchema = mongoose.Schema(
  {
    chatID: String,
    senderID: String,
    message: String,
  },
  { timestamps: true }
);

const MessageDB = mongoose.model('Message', MessageSchema, 'Messages');
export default MessageDB;
