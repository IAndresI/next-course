const mongoose = require('mongoose');
require('./models/portfolio');
exports.connect = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log("connected to mongoDB");
  })
}