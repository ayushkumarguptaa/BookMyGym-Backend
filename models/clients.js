const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose)

const Clients = mongoose.model("Clients", userSchema)

module.exports = Clients