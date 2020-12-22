import polyfill from '@babel/polyfill';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlResolver from './graphql-resolver';
import graphqlSchema from './graphql-schemas';
import { graphqlHTTP } from 'express-graphql';

const port = process.env.PORT || 3001;
const api = express();
api.use(bodyParser.urlencoded({ extended: false}));
api.use(bodyParser.json());
api.use(cors());
api.use('/', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));//end;
api.listen(port, ()=>{
console.log(`eduApp express with graphql api started
url: http://localhost:${port}/
press ctrl + c to exit`);
});