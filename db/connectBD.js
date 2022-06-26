const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://shakil:${process.env.DB_PASSWORD}@cluster0.hm2km.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = async () => {
  await mongoose.connect(uri);
};
module.exports = connectDB;
