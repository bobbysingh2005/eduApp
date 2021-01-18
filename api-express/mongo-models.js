import mongoose, { model, models } from 'mongoose';
import {UserSchema} from './mongo-schemas';
const url = 'mongodb://localhost:27017/eduApp';
var conn;
(function (){
conn = mongoose.connect(url,{
    useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        serverSelectionTimeoutMS: 1000,
        bufferMaxEntries: 0,
        bufferCommands: false
    })
    .then((obj)=>{
        console.log(`database connection is ready`);
    })
    .catch(err=>console.log(`error: ${err}`))
})();

export default {
    Users: models.users || model('users', UserSchema)
}