// connection
const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb+srv://mustafaharpy100:Harpy222_@loginapi.ark9wv5.mongodb.net/qspvxooz")

connect.then(()=>{
    console.log('Database connected successfuly')
}).catch(()=>{
    console.log('cannot connect to database')
})

// schema
const LoginSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

// models

const collection = new mongoose.model('users' , LoginSchema)

module.exports = collection