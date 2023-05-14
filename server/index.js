import express from 'express';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import mongooseDbConnection from './config/dbConnect.js';

import cookieParser from 'cookie-parser';

//authorization
import verifyToken from './middleware/verifyToken.js';

// routers
import petRouter from './router/petRouter.js';
import userRouter from './router/userRouter.js';
import topicRouter from './router/topicRouter.js';
import uploadRouter from './router/uploadRouter.js';
import authRouter from './router/authRouter.js';
import chatRouter from './router/chatRouter.js';
import messageRouter from './router/messageRouter.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

mongooseDbConnection();

app.use(logger('short'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/api', petRouter, topicRouter, uploadRouter);

app.get('/secret', verifyToken, (req, res) =>
  res.json({ success: true, message: 'Secret Page' })
);

app.use('/api/user', verifyToken, userRouter);

app.use('/chat', chatRouter);
app.use('/message', messageRouter);

app.get('/', (req, res) => {
  res.status(401).send({ error: 'Invalid Endport' });
});

app.get('*', (req, res) => {
  res.status(404).json(new Error('Not Found Page!' + req.url));
});

app.use((err, req, res, next) => {
  console.error(`${err.name}: ${err.message}`);
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
