const mongoose = require('mongoose');
const config = require('config');
require("dotenv").config()
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_CONNECT, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
