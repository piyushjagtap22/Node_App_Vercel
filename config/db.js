const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://piyush:Pj1234%23%40@mern-u-1-devconnector.x23xzio.mongodb.net/?retryWrites=true&w=majority', {
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
