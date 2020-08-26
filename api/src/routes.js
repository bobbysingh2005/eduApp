import {Router} from 'express';
import {Users} from './mongo-models';


const Api = Router();

Api.use('/', (req, res, next)=>{
console.log(`Api end point access`);
next();
});//end;

Api.use('/users', async (req, res)=>{
    // console.log(`Api get all users`);
    const users = await Users.find()
res.status(200).json(users)
});//end;


export default Api;