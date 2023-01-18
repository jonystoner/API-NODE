import mongoose, { Schema } from 'mongoose'

export interface Clients {
    name: string;
    cnpj: string;
    email1: string;
    celphone: Number
}

export const ClientsV1Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    }, 
    celphone: {
        type: Number,
        required: true
    }  

})

export const ClientsV1Model = mongoose.model('db_clients', ClientsV1Schema)