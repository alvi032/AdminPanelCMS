const mongoose = require('mongoose');
const {Schema} = mongoose;

const formSchema = new Schema({
    userName: String,
    password: String,
})

mongoose.model('Login', formSchema)