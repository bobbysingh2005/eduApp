import { Schema } from 'mongoose';

exports.UserSchema = new Schema({

user: String,
password: String,
rePassword: String,
email: String,
contactNo: String,
accountStatus: String,
userPrivate: String,
detail:{
profileType: {type: String, default: 'none'},
role: {type: String, default: 'guest'},
firstName: String,
lastName: String,
dateOfBirth: {type: Date, default: Date(Date.now())},
bloodGroup: String,
gender: String,
standard: String,
group: String,
address: String,
city: String,
state: String,
country: String,
subjects: [String],
updatedOn: {type: Date, default: Date(Date.now())},
},
createdOn: Date,
lastAccess: Date,
updatedOn: {type: Date, default: Date(Date.now())}
})