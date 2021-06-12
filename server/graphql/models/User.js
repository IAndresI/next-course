module.exports = class User {

  constructor(model) {
    this._model = model;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) throw new Error('Password must the same as confirmation password!')
    try {
      return await this._model.create(signUpData)
    }
    catch(err) {
      throw new Error(`${err.code != 11000 ? err.message : "User with this email already exists!"}`)
    }
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData)
      return user;
    } 
    catch(err) {
      return err
    }
  }

  async signOut(ctx) {
    try {
      ctx.logout();
      return true
    }
    catch(e) {
      return false
    }
  }

  async getAuthUser(ctx) {
    if(ctx.isAuthenticated()) return await ctx.getUser();
    return null;
  }
}