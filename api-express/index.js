import polyfill from '@babel/polyfill';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './mongo-models';
import graphqlResolver from './graphql-resolver';
import graphqlSchema from './graphql-schemas';
import { graphqlHTTP } from 'express-graphql';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const port = process.env.PORT || 3001;
const api = express();
api.use(bodyParser.urlencoded({ extended: false}));
api.use(bodyParser.json());
api.use(cors());
const SECRET_KEY = 'mySecretKey!';

const LoginHandel =  async (req, res)=>{
    const {user,password} = req.body;
    console.log('login request', `user: ${user}, password: ${password}`);
const validUser = await db.Users.findOne({user: user}, {_id:0, user:1, email:1, createdOn:1, lastAccess:1}, (err, doc)=>{
    if(err) throw err;
console.log(doc)
    return doc;
})

if(!validUser){
return res.status(404).json({success: false, error: 'invalid user and password'});
};//endif;
const token = jwt.sign(
    // {user, cdate: new Date()}, 
    user,
    SECRET_KEY)
const result = {success: true, token: token};
res.status(200).json(result);
};//endLogin;

const LoginVerifyHandel = async (req, res, next)=>{
const token = (req.headers.authorization) ? req.headers.authorization.split(' ')[1] : false;
console.log(`request token: ${token}`)    ;
if(token){
const verify = jwt.verify(token, SECRET_KEY);
console.log(`verify: ${verify}`)
};//endif;

next();
};//endVerify;

api.post('/login', LoginHandel);
api.use('/', LoginVerifyHandel, graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    context: {
        headers: 'hello bolo'
    },
    graphiql: true
}));//end;
api.listen(port, ()=>{
console.log(`eduApp express with graphql api started
url: http://localhost:${port}/
press ctrl + c to exit`);
});