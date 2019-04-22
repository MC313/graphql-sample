const { gql } = require('apollo-server');

const typeDefs = gql`
  type Shoe {
    id: ID!
    name: String!
    brand: String!
    sizes: [Float]
    price: Float!
  },
  input ShoeInput {
    name: String!
    brand: String!
    price: Float!
    sizes: [Float]
  }
  type Query {
    shoes: [Shoe!]
    shoe(id: ID!): Shoe
  }
  type Mutation {
    createShoe(shoe: ShoeInput): String
  }
`;

module.exports = typeDefs;