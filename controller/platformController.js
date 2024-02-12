const Platform = require('../models/Platform');

exports.createPlatform = async (req,res)=>{
    try{
        const platform = new Platform(req.body);
        await platform.save();
        res.status(201).json({response: platform});
    }catch(err){
        res.status(500).json({response: err});
    }
}   
exports.getPlatformById = async (req,res)=>{
    try{
        const platform = await Platform.findById(req.params.id);
        if(!platform){
            return res.status(404).json({ response: 'Platform not found' });
        }
        res.status(200).json({response: platform});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
exports.getPlatforms = async (req,res)=>{
    try{        
        const platform = await Platform.find();
        if(!platform){
            return res.status(404).json({ response: 'Platform not found' });
        }
        res.status(200).json({response: platform});
    }catch(err){
        
        res.status(500).json({response: err});
    }
}
exports.updatePlatform = async (req,res)=>{
    try{        
        const platform = await Platform.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        if(!platform){
            console.log("failed Msg")
            return res.status(404).json({ response: 'Platform not found' });
        }
        res.status(200).json({response: platform});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
exports.deletePlatform = async (req,res)=>{
    try{        
        const platform = await Platform.findByIdAndDelete(req.params.id);
        if(!platform){
            return res.status(404).json({ response: 'Platform not found' });
        }
        res.status(200).json({response: "Platform Deleted Successfully"});
    }catch(err){
        res.status(500).json({response: err});
    }
} 