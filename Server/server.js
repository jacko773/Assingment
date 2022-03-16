const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const app = express();

const schema = require('./schema');
const resolver = require('./resolver');

const corsOpts = {
    origin: '*',
    methods: '*',
    allowedHeaders: '*'
};

app.use(cors(corsOpts));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}))

app.listen(4000, () => console.log('localhost:4000/graphql'));