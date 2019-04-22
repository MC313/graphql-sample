const { prisma } = require('./generated/prisma-client');

async function main() {
    const newShoe = await prisma.createShoe({})
}


// const { GraphQLServer } = require('graphql-yoga');
// const typeDefs = require('./src/schema');
// const resolvers = require('./src/resolvers');

// const PORT = process.env.PORT || 3000;

// const server = new GraphQLServer({
//     typeDefs: './src/schema.graphql',
//     resolvers
// });

// server.start({ port: PORT }, () => {
//     console.log(`======================================`);
//     console.log(`||     Server is Ready!! 😎👍✔      ||`);
//     console.log('||      Running on port 3000        ||');
//     console.log(`======================================`);
// });


//const { ApolloServer } = require('apollo-server');

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