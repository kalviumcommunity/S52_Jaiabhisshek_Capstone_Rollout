const mongoose = require("mongoose")


const UserShema = new mongoose.Schema({
    email: String,
    name: String,
    password: String
})

const userModel = mongoose.model("users", UserShema)
module.exports = userModel