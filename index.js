const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers')

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT, async () => {
    console.log(`Server is ready`);
});

// const express = require('express');
// const graphqlHTTP = require('express-graphql');

// const { schema, root } = require('./src/schema');

// const PORT = process.env.PORT || 3000;
// const server = express();

// server.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }));

// server.listen(PORT, () => {
//     console.log(`Listening on http://localhost:${PORT}`);
// });