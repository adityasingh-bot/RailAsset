require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const user = require('./routes/user');
const asset = require('./routes/asset');
const platform = require('./routes/platform');
const allotment = require('./routes/allotment');
const connectDB = require('./config/connection');

//Connection Invoke
connectDB();

//Middleware Setup and PlugIns
app.use(express.json());
app.use('/user', user);
app.use('/asset', asset);
app.use('/platform', platform);
app.use('/allotment', allotment);

//Test API
app.get('/', (req, res) => {
    res.json({ response: `APIs Developed By Author -  ${process.env.AUTHOR}`});
});

//Port Listen
app.listen(port, () => {
    console.log(`App is Running at port ${port}`);
});