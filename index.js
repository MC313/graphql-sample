const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema, root } = require('./src/schema');

const PORT = process.env.PORT || 4000;
const server = express();

server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

server.listen(PORT, () => {
    console.log(`======================================`);
    console.log(`||     Server is Ready!! 😎👍✔      ||`);
    console.log(`||      Running on port ${PORT}      ||`);
    console.log(`======================================`);
});