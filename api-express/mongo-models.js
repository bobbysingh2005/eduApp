import mongoose, { model, models } from 'mongoose';
import {UserSchema} from './mongo-schemas';
const url = 'mongodb://localhost:27017/eduApp';
const conn = mongoose.createConnection(url,{
    useNewUrlParser: true,
        useUnifiedTopology: true
    })
conn.once('open', ()=>{
    console.log(`database connection is ready`)
});//end;
conn.catch(err=>console.log(err));

export default {
    users: models.users || model('users', UserSchema)
}