const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, required:true},
    password: String,
    create:{type: Date, default:Date.now}
});

module.exports = User =mongoose.model('User',UserSchema);