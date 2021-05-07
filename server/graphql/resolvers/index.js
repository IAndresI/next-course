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
  portfolio : (root, {id}) => {
    return data.portfolios.find(e => e._id==id)
  },
  portfolios : () => {
    return data.portfolios
  },
  
}

exports.portfolioMutation = {
  createPortfolio: (root, {input}) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = {...input}
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
  updatePortfolio: (root, {id, input}) => {
    const index = data.portfolios.findIndex(({_id}) => _id === id)
    const portfolio = data.portfolios[index];
    const portfolioToUpdate = {...portfolio, ...input}
    data.portfolios[index] = portfolioToUpdate;
    return portfolioToUpdate;
  },
  deletePortfolio: (root, {id}) => {
    const index = data.portfolios.findIndex(e => e._id === id);
    const deleted = data.portfolios[index];
    const newArr = [...data.portfolios]
    newArr.splice(index, 1);
    data.portfolios = newArr;
    return deleted;
  }
}