const mongoose = require('mongoose');
require('dotenv').config({ path: 'env' });

const connectDB = () => {
  return mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
