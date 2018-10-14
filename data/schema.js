const graphql = require('graphql')

let Schema = (db) => {
  let linkType = new graphql.GraphQLObjectType({
    name: 'Link',
    fields: () => ({
      _id: { type: graphql.GraphQLString },
      url: { type: graphql.GraphQLString },
      title: { type: graphql.GraphQLString }
    })
  })

  let schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new graphql.GraphQLList(linkType),
          resolve: () => db.collection('links').find({}).toArray()
        },
        message: {
          type: graphql.GraphQLString,
          resolve: () => 'Hello'
        }

      })
    }),

    // mutation: new graphql.GraphQLObjectType({
    //   name: 'Mutation',
    //   fields: () => ({
    //     incrementCounter: {
    //       type: graphql.GraphQLInt,
    //       resolve: () => ++counter
    //     }
    //   })
    // })
  })

  return schema;
}


module.exports = Schema
