const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema, root } = require('./src/schema');

const PORT = process.env.PORT || 3000;
const server = express();

server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});