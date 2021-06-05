const GraphQLStrategy = require('./strategy');
const User = require('../../database/models/user');


exports.init = (passport) => {

  passport.serializeUser((user, done) => {
    done(null,user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user)
    })
  });

  passport.use('graphql', new GraphQLStrategy(({email, password}, done) => {
    // 1. find user in a DB and if user exists, then verify user password
    // 2. If user is verified, then call "done" func
    const findingUser = User.findOne({email}, (err, data) => {
      // Check for errors and not finding user
      if(err) return done(err)
      if(!data) return done(null, false)
      // verified user
      data.validatePassword(password, (error, isMatching) => {
        if(error) return done(error);
        if(!isMatching) return done(null, false);
        return done(null, data)
      })
    });
    
  }));
}