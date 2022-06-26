const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect(process.env.URI);
};
module.exports = connectDB;
