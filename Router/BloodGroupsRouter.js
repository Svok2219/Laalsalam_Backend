const express =require('express');
const Router = express.Router();
const {BGroups} = require('../Model/BloodGroup')


Router.get('/', async (req,res)=>{
    const BloodGrps = await BGroups.find()
    if(!BloodGrps){
    res.status(500).json({success:false})}
    res.send(BloodGrps);
})


Router.get('/:id', async (req,res)=>{
    BGroups.findById(req.params.id)
   .then((theBGroups)=>{
       if(!theBGroups){
        res.status(404).json({success:false,message:'the BGroups does not exists'})
       }
       else{
       res.status(200).send(theBGroups)
       }
   })
   .catch((err=>{
       res.status(400).json({success:false,error:err})
   }))
})


Router.post('/', async (req,res)=>{
let BGroup = new BGroups({
    name:req.body.name
})
const savedBGroups = await BGroup.save();
if(!savedBGroups){
    res.status(500).json({
        success:false
    })
}
res.send(savedBGroups)
})
 

module.exports = Router;