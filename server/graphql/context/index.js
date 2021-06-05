const passport = require('passport');
// options = {email, password}
const authenticateUser = (options) => {

  return new Promise((resolve, reject) => {

    const done = (error, user) => {
      if(error) reject(new Error(error));
      // Here we will get user if user is auth
      // If we will get user here, then we can save session to DB
      if(user) resolve(user)
      else reject(new Error('Invalid password or email!'))
    }
    const authFn = passport.authenticate('graphql', options, done)
    authFn();
  })
}

exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => authenticateUser(options)
  }

  return auth
}