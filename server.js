const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({ 
  // config
  graphiql: true, 
  schema: schema
}));

app.listen(4000, () => {
  console.log('listening to port 4000')
});