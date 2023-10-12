require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log('Database connection successfully');
    })
    .catch((err) => {
      console.log('Database connection error', err);
    });
};

module.exports = { connectDB };
