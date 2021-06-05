const session = require('express-session');
const passport = require('passport');

exports.init = (server, db) => {
  
  require('./passport').init(passport);
  const mySession = {
    name: 'portfolio-session',
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: 2 * 60 * 60 * 1000},
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore()
  }
  server.use(session(mySession))
  server.use(passport.initialize())
  server.use(passport.session())
}