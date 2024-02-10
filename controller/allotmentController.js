const Allotment = require('../models/Allotment');

exports.createAllotment = async (req, res) =>{
    try{
        const {asset_code, station_code} = req.body;
        const allotment = new Allotment(req.body);
        const allotmentExists = Allotment.findOne({asset_code});
        if(allotmentExists){
            if(allotmentExists.station_code === station_code)
                return req.status(400).json({response: "Duplicate Record Found"});
        }
        const result = await allotment.save(allotment);
        return res.status(201).json({response:result});

    }catch(err){
        res.status(500).json({response: err})
    }
}
exports.getAllotmentById = async (req,res)=>{
    try{        
        const allotment = await Allotment.findById(req.params.id);
        if(!allotment){
            return res.status(404).json({ response: 'Allotment not found' });
        }
        res.status(200).json({response: allotment});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
exports.getAllotments = async (req,res)=>{
    try{        
        const allotment = await Allotment.find();
        if(!allotment){
            return res.status(404).json({ response: 'Allotment not found' });
        }
        res.status(200).json({response: allotment});
    }catch(err){
        res.status(500).json({response: err});
    }
}
exports.updateAllotment = async (req,res)=>{
    try{        
        const allotment = await Allotment.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        if(!allotment){
            return res.status(404).json({ response: 'Allotment not found' });
        }
        res.status(200).json({response: allotment});
    }catch(err){
        res.status(500).json({response: err});
    }
} 
exports.deleteAllotment = async (req,res)=>{
    try{        
        const allotment = await Allotment.findByIdAndDelete(req.params.id);
        if(!allotment){
            return res.status(404).json({ response: 'Allotment not found' });
        }
        res.status(200).json({response: "Allotment Deleted Successfully"});
    }catch(err){
        res.status(500).json({response: err});
    }
} 