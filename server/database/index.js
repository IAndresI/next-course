const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

require('./models/portfolio');
require('./models/user');

exports.connect = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, () => {
    console.log("connected to mongoDB");
  })
}

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: process.env.DB_URI,
    collection: 'portfolioSessions'
  });

  return store;
}