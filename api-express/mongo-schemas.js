import { Schema } from 'mongoose';

exports.UserSchema = new Schema({
_id: String,
user: String,
password: String,
rePassword: String,
detail:{
profileType: String,
firstName: String,
lastName: String,
dateOfBirth: {type: Date, default: Date(Date.now())},
bloodGroup: String,
class: String,
classGroup: String,
address: String,
city: String,
state: String,
country: String,
role: String,
subjects: [String],
updatedOn: {type: Date, default: Date(Date.now())},
},
createdOn: {type: Date, default: Date(Date.now())},
lastAccess: {type: Date, default: Date(Date.now())},
updatedOn: {type: Date, default: Date(Date.now())}
})