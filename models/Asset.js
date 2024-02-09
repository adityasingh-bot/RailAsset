const mongoose = require('mongoose');
 const schema = new mongoose.Schema({
    asset_code:String,
    asset_name:String,
    description:String,
    purchase_date:Date,    
    maintenance_life:Number,
    expiration_date:Date
 },{ autoCreate: false, autoIndex: false });

 const Asset = mongoose.model("platform_assets", schema);

module.exports = Asset;