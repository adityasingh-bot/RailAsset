const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    station_name:String,
    station_code:String,
 },{ autoCreate: false, autoIndex: false });

 const Platform = mongoose.model("platform_details", schema);

module.exports = Platform;