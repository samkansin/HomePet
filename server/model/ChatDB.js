import mongoose, * as ALLMongoose from 'mongoose';

const ChatSchema = mongoose.Schema(
  {
    members: { type: Array },
  },
  {
    timestamps: true,
  }
);

const ChatDB = mongoose.model('Chat', ChatSchema, 'Chats');
export default ChatDB;
