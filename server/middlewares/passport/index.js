const GraphQLStrategy = require('./strategy');
const User = require('../../database/models/user');


exports.init = (passport) => {
  passport.use('graphql', new GraphQLStrategy((options, done) => {
    // 1. find user in a DB and if user exists, then verify user password
    // 2. If user is verified, then call "done" func
    const findingUser = User.findOne({email: options.email}, (err, data) => {
      // Check for errors and not finding user
      if(err) return done(err)
      if(!data) return done(null, false)
      //return user in done func
      return done(null, data)
    });
    
  }));
}