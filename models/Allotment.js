const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    station_name:String,
    station_code:String,
    asset_code:String,
    asset_name:String,  
    description:String,
    allotment_date:Date,
    maintenance_due_date:Date,
    expiration_date:Date    
 },{ autoCreate: false, autoIndex: false });

 const Asset = mongoose.model("platform_asset_allotments", schema);

module.exports = Asset;