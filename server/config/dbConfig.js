let dbPath = 'mongodb://127.0.0.1:27017/HomePet';

if (process.env.NODE_ENV === 'production') {
  dbPath = process.env.MONGO_URI ? process.env.MONGO_URI : dbPath;
}

export const config = {
  database: dbPath,
  userMongClient: true,
  connectOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  mongoDebug: true,
};
