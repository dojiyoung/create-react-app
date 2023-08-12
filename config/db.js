// db.js

const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://dojiyoung1844:2EA4YZxn0aXHOOrm@cluster0.cen0i3u.mongodb.net/?retryWrites=true&w=majority"; //config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;