const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    username:String,
    password:String,
    role:String
 },{ autoCreate: false, autoIndex: false });

 const User = mongoose.model("users", schema);

module.exports = User;