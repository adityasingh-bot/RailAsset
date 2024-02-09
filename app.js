const express = require('express');
const app = express();
const port = 8082;
const user = require('./routes/user');
const asset = require('./routes/asset');
const platform = require('./routes/platform');
require('./config/connection');

//Middleware Setup and PlugIns
app.use(express.json());
app.use('/user', user);
app.use('/asset', asset);
app.use('/platform', platform);

app.get('/', (req, res) => {
    res.json({ response: `APIs Developed By Author -  ${process.env.AUTHOR}` });

});

app.listen(port, () => {
    console.log(`App is Running at port ${port}`);
});