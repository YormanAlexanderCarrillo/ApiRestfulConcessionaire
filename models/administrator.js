const mongoose = require('mongoose')
const { Schema } = mongoose

const AdministratorSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('administrator', AdministratorSchema)