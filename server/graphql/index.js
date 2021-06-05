const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

// GQLmodels
const Portfolio = require('.//models/Portfolio')
const User = require('.//models/User')
// resolver
const {portfolioQueries, portfolioMutation, userMutation} = require('./resolvers')
// types
const {portfolioTypes} = require('./types')
const {userTypes} = require('./types')
//context
const {buildAuthContext} = require('./context');

exports.createApolloServer = () => {
  // Construct a schema, using graphql schema language
  const typeDefs = gql`
    ${userTypes}
    ${portfolioTypes}

    type Query {
      hello: String
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID, input: PortfolioInput): Portfolio
      deletePortfolio(id: ID): Portfolio

      signIn(input: SignInInput): User
      signUp(input: SignUpInput): User
      signOut: String
    }
  `;

  // The resolvers provides the resolver for each API endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries
    },
    Mutation: {
      ...portfolioMutation,
      ...userMutation
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    context: () => ({
      ...buildAuthContext(),
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio')),
        User: new User(mongoose.model('User'))
      }
    })
  });

  return apolloServer;
}