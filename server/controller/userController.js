import User from '../model/UserDB.js';
import bcrypt from 'bcrypt';

export const checkDuplicateEmail = async (req, res) => {
  const { email } = req.params;
  const duplicate = await User.findOne({ email });
  if (duplicate) return res.sendStatus(409);
  else return res.sendStatus(200);
};

export const create = async (req, res) => {
  const { email, fullName, password } = req.body;
  if (!email || !fullName || !password) {
    return res
      .status(400)
      .json({ warning: 'Email, full name and password are required.' });
  }

  try {
    const duplicateEmail = await User.findOne({ email: email });
    if (duplicateEmail) return res.sendStatus(409);
  } catch (error) {
    console.log(`New user: ${JSON.stringify(error)}`);
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ ...req.body, password: hashPassword });
    console.log(result);
    res.status(201).json({ success: `New user ${fullName} created` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const get = (req, res) => {
  const email = req.params.email;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ error: `User not found with email: ${email}` });
      }
      res.json(user);
    })
    .catch((err) => {
      return res.status(500).send({
        error: `Error retrieving user with email ${email}`,
      });
    });
};

export const updateInfo = async (req, res) => {
  const data = req.body || {};
  const { email } = req.params;
  if (!data || !email) {
    return res.status(422).send({ error: 'email must be alphanumeric' });
  }

  if (data.fullName) {
    delete data.fullName;
  }

  try {
    const foundUser = await User.findOneAndUpdate({ email: email }, req.body, {
      upsert: false,
      new: true,
    });
    if (!foundUser) {
      return res
        .status(404)
        .send({ error: `User not found with email ${email}` });
    }
    return res.json(foundUser);
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).send({
        error: `User not found with email ${email}`,
      });
    }
    return res
      .status(500)
      .send({ error: `Error updating User with email ${email}` });
  }
};
