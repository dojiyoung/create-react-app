// db.js

const mongoose = require('mongoose');

const connStr = "mongodb+srv://vercel-admin-user-64d7969ab915977f5618afcb:l5U61SwnOYcKGTal@cluster0.kmncufu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(connStr, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
