const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
   age: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    address: [{
        number: {
            type: Number,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        lga: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true,
        }
    }]
})



module.exports = mongoose.model("user", userSchema)