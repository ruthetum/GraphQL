const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks')

const typeDefs = gql`
    type Team {
        id: Int
        manager: String
        office: String
        extension_number: String
        mascot: String
        cleaning_duty: String
        project: String
        supplies: [Supply]
    }
`
const resolvers = {
    Query: {
        teams: (parent, args) => dbWorks.getTeams(args),
    },
    Mutation: {
        deleteTeam: (parent, args) => dbWorks.deleteItem('teams', args),
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}
