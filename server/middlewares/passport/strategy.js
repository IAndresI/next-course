const {Strategy} = require('passport-strategy');

// Strategy get options (email, password) needed to authenticate user
// Strategy gets a callback function that will contain functionality to verify user
// Strategy has to have "authenticate" function
// Strategy has access to "error", "fail" and "success" fucntions
module.exports = class GraphQLStrategy extends Strategy {
  constructor(verify) {
    super();

    if(!verify) throw new Error("GraphQLStratehy requires a verify callback")

    this.verify = verify;
    this.name = 'graphql';
  }

  authenticate(req, options) {
    // as first parameter in done we will recieve "error", as second "user", as third "info"
    const done = (error, user, info) => {
      // if user then call "success", otherwise call "fail"
      if (error) return this.error(error)
      if (!user) return this.fail(401)
      return this.success(user, info);
    }
    this.verify(options, done)
  }
}