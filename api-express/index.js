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

const LoginHandle =  async (req, res)=>{
let {user, password} = req.body;
console.log('login request', `user: ${user}, password: ${password}`);
return await db.Users.findOne({user: user}, {_id:0, user:1, password:1, email:1, createdOn:1, lastAccess:1}, async (err, doc)=>{
if(err) throw err;
let result = await bcrypt.compare(password, doc.password);
console.log(`result: ${result}`)
if(result){
const token = jwt.sign( user, SECRET_KEY);//end;
return res.status(200).json({success: true, token: token});
}else{
return res.status(404).json({success: false, error: 'invalid user and password'});
};//endif;
});//end;
};//endLoginHandle;

const SignupHandle = async (req, res)=>{
console.log(`SignUp request`);
let nuser = req.body;
nuser = {
user: nuser.user,
password: await bcrypt.hash(nuser.password, 10),
rePassword: nuser.rePassword,
email: nuser.email,
contactNo: nuser.contactNo,
accountStatus: 'pending',
detail: {
firstName: nuser.firstName,
lastName: nuser.lastName,
}
};//endNuser;

console.log(nuser)

let newUserNow = db.Users(nuser);
await newUserNow.save((err, result)=>{
if(err) throw err;
console.log("response");
console.log(result);
return res.status(200).json({ error: null, success: true, data: result });
});//endSave;
// const nerror = "invalid user and password";
// res.status(401).json({error: nerror, success: false})
};//end;

const LoginVerifyHandel = async (req, res, next)=>{
const token = (req.headers.authorization) ? req.headers.authorization.split(' ')[1] : false;
console.log(`request token: ${token}`)    ;
if(token){
const verify = jwt.verify(token, SECRET_KEY);
console.log(`verify: ${verify}`)
};//endif;
next();
};//endVerify;

api.post('/login', LoginHandle);
api.post('/signup', SignupHandle);
api.use('/', LoginVerifyHandel, graphqlHTTP({
schema: graphqlSchema,
rootValue: graphqlResolver,
graphiql: true
}));//end;
api.listen(port, ()=>{
console.log(`eduApp express with graphql api started
url: http://localhost:${port}/
press ctrl + c to exit`);
});