const mongoose = require('mongoose')
const {Schema} = mongoose

const CustomerSchema = new Schema({
    id:{
        type : Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address: {
        type: String
    }

})

module.exports= mongoose.model('customer', CustomerSchema)