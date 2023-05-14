import User from '../model/UserDB.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const signToken = (email, name, roles) => {
  return jwt.sign(
    {
      UserInfo: {
        email: email,
        name: name,
        roles: roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_TIME
        ? process.env.ACCESS_TOKEN_TIME
        : '1200s',
    }
  );
};

export const checkDuplicateEmail = async (req, res) => {
  const { email } = req.params;
  const duplicate = await User.findOne({ email });
  if (duplicate) return res.sendStatus(409);
  else return res.sendStatus(200);
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'email and password are required' });

  let foundUser = await User.findOne({ email });
  if (!foundUser) {
    return res
      .status(404)
      .send({ error: `User not found with email ${email}` });
  }

  const match = await bcrypt.compare(password, foundUser?.password);

  if (match) {
    const roles = Object.values(foundUser.roles).filter(Boolean);

    const accessToken = signToken(
      foundUser.email,
      foundUser.displayName,
      foundUser.roles
    );
    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET_KEY,
      {
        expiresIn: process.env.REFRESH_TOKEN_TIME
          ? process.env.REFRESH_TOKEN_TIME
          : '1d',
      }
    );

    foundUser = await User.findOneAndUpdate(
      { email },
      { refreshToken },
      {
        projection: {
          _id: 0,
          password: 0,
          roles: 0,
          __v: 0,
          refreshToken: 0,
        },
        upsert: false,
        new: true,
      }
    );

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      path: '/',
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ ...foundUser._doc, roles, accessToken });
  } else {
    res.sendStatus(401);
  }
};

const handleLogout = async (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  if (!cookie?.jwt) return res.sendStatus(204);
  const refreshToken = cookie.jwt;

  let foundUser = {};
  try {
    foundUser = await User.findByRefreshToken(refreshToken);
    if (!foundUser) throw `Not found this refresh token ${refreshToken}`;
  } catch (error) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      path: '/',
      maxAge: 0,
    });
    return res.sendStatus(204);
  }

  const result = await User.findOneAndUpdate(
    { email: foundUser.email },
    { refreshToken: '' },
    { upsert: true }
  );
  console.log('Logout: ', result);

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
    path: '/',
    maxAge: 0,
  });

  res.sendStatus(204);
};

const handleRefreshToken = async (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  if (!cookie?.jwt) return res.sendStatus(401);

  const refreshToken = cookie.jwt;

  try {
    const foundUser = await User.findByRefreshToken(refreshToken);
    if (foundUser) {
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET_KEY,
        (err, decoded) => {
          if (err || foundUser.email !== decoded.email)
            return res.sendStatus(403);
          const roles = Object.values(foundUser.roles);
          const accessToken = signToken(decoded.email, foundUser.name, roles);
          res.json({ roles, accessToken });
        }
      );
    } else {
      return res.status(403).send(error);
    }
  } catch (error) {
    return res.status(403).send(error);
  }
};

export { handleLogin, handleLogout, handleRefreshToken };
