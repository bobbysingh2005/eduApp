import { Schema } from "mongoose";



export const UserSchema = new Schema({
    userId: String,
    password: String,
    rePassword: String
});//endSchema;