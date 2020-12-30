import mongoose, { model, models } from 'mongoose';
import {UserSchema} from './mongo-schemas';
const url = 'mongodb://localhost:27017/eduApp';
const conn = mongoose.connect(url,{
    useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 1000,
        bufferMaxEntries: 0,
        bufferCommands: false
    })
    .then((obj)=>{
        console.log(`database connection is ready`);
    })
    .catch(err=>console.log(`error: ${err}`))

    /* 
conn.once('open', ()=>{
    console.log(`database connection is ready`)
});//end;
conn.catch(err=>console.log(err));
 */

export default {
    Users: models.users || model('users', UserSchema)
}