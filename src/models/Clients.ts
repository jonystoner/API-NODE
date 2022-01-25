import mongoose, { Schema } from 'mongoose'

export interface Clients {
    name: String,
    uuid: String,
    active: Boolean,
    createdAt: Date,  
}

export const ClientsV1Schema = new Schema ({
    name: {
        type: String,
        unique: true,        
    },
    uuid: {
        type: String,
        unique: true,
    },
    active: {
        type: Boolean,
        default: null        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

export const ClientsV1Model = mongoose.model('db_clients', ClientsV1Schema)