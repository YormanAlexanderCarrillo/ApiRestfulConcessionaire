const mongoose = require('mongoose')
const {Schema} = mongoose

const CarSchema = new Schema({

    plate: {
        type: String, 
        required: true,
        unique: true
    },
    brand: {
        type : String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    model: {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('car', CarSchema)