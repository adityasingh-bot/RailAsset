const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res)=>{
    try{
        const {username, password, role} = req.body;
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({response: "User already exists"});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = new User({username, password:hashedPass, role});
        await user.save();
        res.status(201).json({response: user});        
    }catch(err){
        res.status(500).json({response: err})
    }
}
exports.loginUser = async (req, res)=>{ 
        try{
            const {username, password} = req.body;
            const existingUser = await User.findOne({username});
            if(!existingUser){
                return res.status(401).json({response: "Invalid username or Password"});
            }
            const isPasswordvalid = await bcrypt.compare(password, existingUser.password);
            if(!isPasswordvalid){
                return res.status(401).json({response: "Invalid username or Password"});
            }
            res.status(200).json({response: `User LoggedIn as ${existingUser.role}` });        
        }catch(err){
            res.status(500).json({response: err})
        }
}