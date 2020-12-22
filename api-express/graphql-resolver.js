import db from './mongo-models';


export default {
    hello: ()=>{ return 'world!'},
    users: ()=>{
        console.log(`Query: Users`)
        const users = db.collection('users').find();
        return users
    }
}