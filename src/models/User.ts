import mongoose, { Schema } from 'mongoose'


export interface User {
    name: string;
    email: string;
    password: string;
    createdAt: Date    
}

export const UserV1Schema = new Schema({
    name: {
        type: String,
        required: true
      },
    email: { 
        type: String, 
        required: true,
        unique:true,
        lowercase: true
    },  
    password: { 
        type: String,
        required: true,
        select: false        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

export const UsersV1Model = mongoose.model('db_users', UserV1Schema)