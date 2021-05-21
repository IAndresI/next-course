const Portfolio = require('../models/Portfolio');
const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
}

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