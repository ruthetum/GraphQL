const { gql } = require('apollo-server')

const typeDefs = gql`
    type Mutation {
        deleteEquipment(id: String): Equipment,
        deleteSupply(id: String): Supply,
        deleteTeam(id: String): Team
    }
`

module.exports = typeDefs