const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
  return mongoose.connect(process.env.URI);
};
module.exports = connectDB;
