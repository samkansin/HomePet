import ChatDB from '../model/ChatDB.js';

export const createChatRoom = async (req, res) => {
  const newChat = new ChatDB({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const result = await newChat.save();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatDB.find({ members: { $in: [req.params.uid] } });
    if (chat) res.json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatDB.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    if (chat) res.json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
