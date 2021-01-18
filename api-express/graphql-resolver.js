import { GraphQLScalarType, Kind } from 'graphql';
import db, {Users} from './mongo-models';


export default {
Date: new GraphQLScalarType({
    name: "Date",
    description: "Custom scalar for Date",
    serialize: (val)=>{
        return val.getTime();
    },
    parseValue (val){
        return new Date(val);
    },
    parseLiteral(ast){
        if(ast.kind === Kind.INT) return parseInt(ast.value, 10);
        return null
    }
}),
    users: async ()=>{
return await db.Users.find({}, (err, result)=>{
if(err) throw err;
// console.log(result)
return result;
});

},
User: async ({id}) =>{
    console.log(`request user id: ${id}`);
const user = await db.Users.findById({_id: id})
.then(res=>{
    console.log(`response data: ${res} `)
return res;})
.catch(err=>console.log(err))
return user;
}, //end;
addUser: async ({user})=>{
console.log('add User request');
const nUser = {
user: user.email,
password: user.password,
rePassword: user.rePassword,
email: user.email,
lastAccess: new Date(),
updatedOn: new Date(),
createdOn: new Date()
};//end;

let nuser = await db.Users(nUser)
await nuser.save((err, doc)=>{
if(err) throw err;
console.log(doc);
return doc;
})
return nuser;
}, //end;
removeUser: async ({id})=>{
console.log(`remove user: ${id}`);
return await db.Users.findByIdAndDelete({_id: id}, (err, result)=>{
    if(err) throw err;
    console.log(`remove is done user: ${result}`);
    return result;
});
},
updateUser: async (root)=>{
const { id, detail} = root;
console.log(`Update User id: ${id}`);
console.log(detail)
return await db.Users.updateOne({_id: id}, {$set: detail}, (err, doc)=>{
if(err) throw err;
    console.log(`is exist ?`);
console.log(doc)
return doc;
});
}
};//TheEnd;