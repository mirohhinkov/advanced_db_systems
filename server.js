const mongoose = require('mongoose');
// Environment variables
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');


const mongoDB = process.env.DB.replace('<password>', process.env.PASSWORD);
console.log(mongoDB);

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
