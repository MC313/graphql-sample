const {
  buildSchema,
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const { products: shoes } = require('./data');

const schema = buildSchema(`
  type Shoe {
    id: String!
    name: String!
    brand: String!
    sizes: [Float]
    price: Float!
  },

  type Query {
    shoe: Shoe
    shoes: [Shoe]
  }
`);

const root = {
  shoe: () => shoes[0],
  shoes: () => shoes
};
// let shoeType = new GraphQLObjectType({
//   name: 'Shoe',
//   fields: () => ({
//     id: {
//       type: GraphQLNonNull(GraphQLString)
//     },
//     name: {
//       type: GraphQLString,
//       description: 'The name of the shoe.'
//     },
//     brand: {
//       type: GraphQLString,
//       description: 'The brand of the shoe.'
//     },
//     price: {
//       type: GraphQLFloat,
//       description: 'the price of the shoe.'
//     },
//     sizes: {
//       type: GraphQLList(GraphQLFloat),
//       description: 'The sizes available for selected shoe.'
//     },
//   })
// });

// let schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       shoe: {
//         type: shoeType,
//         resolve() {
//           return shoes[0];
//         }
//       },
//       shoes: {
//         type: new GraphQLList(shoeType),
//         resolve() {
//           return shoes;
//         }
//       },
//     }
//   })
// });

exports.graphql = graphql;
exports.root = root;
exports.schema = schema;