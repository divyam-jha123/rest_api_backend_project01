const mongoose = require('mongoose')

const appAuthSchema = new mongoose.Schema({
    userName: {
        type: String,
        required : true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    }
})

// model
const user = mongoose.model("userSchema", appAuthSchema)

module.exports = user

