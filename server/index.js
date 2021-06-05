const express = require('express')
const next = require('next')


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  // express
  const server = express()

  // MongoDB
  const db = require('./database');
  db.connect();

  //session
  require('./middlewares').init(server, db)

  // apolloGraphQL
  const apolloServer = require('./graphql').createApolloServer();
  apolloServer.applyMiddleware({app: server})

  // listen
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})