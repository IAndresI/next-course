const express = require('express')
const next = require('next')
const { ApolloServer, gql } = require('apollo-server-express');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// resolver
const {portfolioQueries, portfolioMutation} = require('./graphql/resolvers')
// types
const {portfolioTypes} = require('./graphql/types')
app.prepare().then(() => {
  const server = express()

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

  const apolloServer = new ApolloServer({typeDefs, resolvers});
  apolloServer.applyMiddleware({app: server})

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})