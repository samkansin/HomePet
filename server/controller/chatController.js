import ChatDB from '../model/ChatDB.js';

export const createChatRoom = async (req, res) => {
  try {
    const findRoom = await ChatDB.find({
      members: { $all: [req.body.senderId, req.body.receiverId] },
    });
    if (findRoom) {
      res.sendStatus(200);
    } else {
      const newChat = new ChatDB({
        members: [req.body.senderId, req.body.receiverId],
      });

      try {
        const result = await newChat.save();
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatDB.find({ members: { $in: [req.params.uid] } }).sort(
      { updatedAt: -1 }
    );
    if (chat) res.json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const upDateTimeChats = async (req, res) => {
  try {
    const chat = await ChatDB.findOneAndUpdate(
      { _id: req.params.chatID },
      { $set: { updatedAt: new Date().toISOString() } },
      { new: true }
    );
    if (!chat) {
      return res
        .status(404)
        .send({ error: `Chat not found with id ${req.params.chatID}` });
    }
    res.json(chat);
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
