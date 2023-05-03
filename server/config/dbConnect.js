import mongoose from 'mongoose';
import { config } from './dbConfig.js';

mongoose.connection.on('connected', () => {
  console.log(`Database connected with ${config.database}`);
});

mongoose.connection.on('reconnected', () => {
  console.log('Database Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('Database Disconnected');
});

mongoose.connection.on('close', () => {
  console.log('Database Connection Closed');
});

mongoose.connection.on('error', (err) => {
  console.log(`Database Error: ${err}`);
});

process.on('SIGINT', function () {
  mongoose.connection.close().then(() => {
    console.log(
      `Disconnected database from ${config.database} through app termination`
    );
    process.exit(0);
  });
});

mongoose.set('debug', config.mongoDebug);
const mongooseDbConnection = async ({ database, connectOptions } = config) => {
  await mongoose.connect(database, connectOptions);
};

export default mongooseDbConnection;
