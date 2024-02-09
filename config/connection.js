const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://127.0.0.1:27017/rail_assets_central_railways')
.then((res)=>{
    console.log("MongoDB connection established");
}).catch((err)=> {
    console.log("Error Response");
});

module.exports = connection