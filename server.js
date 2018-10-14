const path = require('path')
const express = require('express')
const mongodb = require('mongodb')
const GraphQLHTTP = require('express-graphql')

const schema = require('./data/schema')

let app = express()

// app.use(express.static(path.join(__dirname, 'build')));


// process.env.CONNECTION_URL
const CONNECTION_URL = 'mongodb://dbuser:Password12@ds131983.mlab.com:31983/test-graphql'
let db

(async () => {
  let database = await mongodb.MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true })
  // console.log('db?', !!database)
  db = database.db()


  app.use('/graphql', GraphQLHTTP({
    schema:schema(db),
    graphiql: true
  }))

  const port = process.env.PORT || 8080
  app.listen(port, () => console.log('Server is running on port', port))
})()

