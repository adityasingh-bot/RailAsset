const Asset = require('../models/Asset');

exports.createAsset = async (req,res)=>{
    try{
        const asset = new Asset(req.body);
        await asset.save();
        res.status(201).json({response: asset});
    }catch(err){
        res.status(500).json({response: err});
    }
}   
exports.getAssetById = async (req,res)=>{
    try{        
        console.log(req.params.id);
        const asset = await Asset.findById(req.params.id);
        if(!asset){
            return res.status(404).json({ response: 'Asset not found' });
        }
        res.status(200).json({response: asset});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
exports.getAssets = async (req,res)=>{
    try{        
        console.log("Assets");
        const asset = await Asset.find();
        if(!asset){
            return res.status(404).json({ response: 'Asset not found' });
        }
        res.status(200).json({response: asset});
    }catch(err){
        res.status(500).json({response: err});
    }
}
exports.updateAsset = async (req,res)=>{
    try{        
        const asset = await Asset.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        if(!asset){
            return res.status(404).json({ response: 'Asset not found' });
        }
        res.status(200).json({response: asset});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
exports.deleteAsset = async (req,res)=>{
    try{        
        const asset = await Asset.findByIdAndDelete(req.params.id);
        if(!asset){
            return res.status(404).json({ response: 'Asset not found' });
        }
        res.status(200).json({response: "Asset Deleted Successfully"});
    }catch(err){
        res.status(500).json({response: err});
    }
} 