const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`======================================`);
    console.log(`||     Server is Ready!! 😎👍✔      ||`);
    console.log(`||      Running on port ${url}       ||`);
    console.log(`======================================`);
});