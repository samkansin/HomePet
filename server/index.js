import express from 'express';
import logger from 'morgan';
import mongooseDbConnection from './config/dbConnect.js';
// routers
import petRouter from './router/petRouter.js';
import topicRouter from './router/topicRouter.js';
import uploadRouter from './router/uploadRouter.js';

const app = express();
const PORT = 4000;

mongooseDbConnection();

app.use(logger('short'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', petRouter, topicRouter, uploadRouter);

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
