module.exports = class User {

  constructor(model) {
    this._model = model;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) throw new Error('Password must the same as confirmation password!')
    
    return this._model.create(signUpData)
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
}