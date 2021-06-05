const passport = require('passport');
// options = {email, password}
const authenticateUser = (req, options) => {
  return new Promise((resolve, reject) => {
    const done = (error, user) => {
      if(error) reject(new Error(error));
      // Here we will get user if user is auth
      if(user) {
        // If we will get user here, then we can save session to DB
        req.login(user, (error) => {
          if(error) reject(new Error(error));
          resolve(user)
        })
      }
      else reject(new Error('Invalid password or email!'))
    }
    const authFn = passport.authenticate('graphql', options, done)
    authFn();
  })
}

exports.buildAuthContext = (req) => {
  const auth = {
    authenticate: (options) => authenticateUser(req, options),
    logout: () => req.logout(),
    isAuthenticated: () => req.isAuthenticated(),
    getUser: () => req.user
  }
  return auth
}