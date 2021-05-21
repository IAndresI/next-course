const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');

// GQLmodels
const Portfolio = require('.//models/Portfolio')
// resolver
const {portfolioQueries, portfolioMutation} = require('./resolvers')
// types
const {portfolioTypes} = require('./types')

exports.createApolloServer = () => {
  // Construct a schema, using graphql schema language
  const typeDefs = gql`
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
    }
  `;

  // The resolvers provides the resolver for each API endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries
    },
    Mutation: {
      ...portfolioMutation
    }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio'))
      }
    })
  });

  return apolloServer;
}