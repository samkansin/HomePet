import MessageDB from '../model/MessageDB.js';

export const addMessage = async (req, res) => {
  const { chatID, senderID, message } = req.body;
  const messageInstance = new MessageDB({ chatID, senderID, message });

  try {
    const result = await messageInstance.save();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  const { chatId } = req.params;

  try {
    const result = await MessageDB.find({ chatId });
    if (result) {
      res.json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
