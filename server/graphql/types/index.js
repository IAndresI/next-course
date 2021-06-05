const portfolioFields = `
  title: String
  company: String
  companyWebsite: String
  location: String
  description: String
  jobTitle: String
  startDate: String
  endDate: String
`

const userFields = `
  name: String
  avatar: String
  email: String!
  userName: String!
  password: String!
  passwordConfirmation: String!
  info: String!
  createdAt: String
  role: String
`
exports.portfolioTypes = `
  type Portfolio {
    _id: ID!
    ${portfolioFields}
  }

  input PortfolioInput {
    ${portfolioFields}
  }
`

exports.userTypes = `
  type User {
    _id: ID!
    ${userFields}
  }

  input SignUpInput {
    ${userFields}
  }

  input SignInInput {
    email: String!
    password: String!
  }
`