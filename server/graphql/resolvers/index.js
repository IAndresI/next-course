exports.portfolioQueries = {
  portfolio: async (root, {id}, ctx) => {
    return ctx.models.Portfolio.getOne(id);
  },
  portfolios: async (root, args, ctx) => {
    return ctx.models.Portfolio.getAll();
  },
}

exports.portfolioMutation = {
  createPortfolio: async (root, {input}, ctx) => {
    const created = await ctx.models.Portfolio.create(input)
    return created;
  },
  updatePortfolio: async (root, {id, input}, ctx) => {
    const updated = await ctx.models.Portfolio.update(id, input)
    return updated;
  },
  deletePortfolio: async (root, {id}, ctx) => {
    const deleted = await ctx.models.Portfolio.delete(id)
    return deleted;
  }
}

exports.userMutation = {
  signUp: async (root, {input}, ctx) => {
    const registred = await ctx.models.User.signUp(input)
    return registred;
  },
  signIn: async (root, {input}, ctx) => {
    const user = await ctx.models.User.signIn(input, ctx);
    return user
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
}