const database = require('./database');
const { ApolloServer, gql } = require('apollo-server');
const _ = require('lodash');

const queries = require('./graphql/_queries');
const mutations = require('./graphql/_mutation');
const equipments = require('./graphql/equipments');
const teams = require('./graphql/teams');
const supplies = require('./graphql/supplies');
const enums = require('./graphql/_enums');

const typeDefs = [
  queries,
  mutations,
  enums,
  equipments.typeDefs,
  teams.typeDefs,
  supplies.typeDefs
];

const resolvers = [
  equipments.resolvers,
  teams.resolvers,
  supplies.resolvers
];

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})