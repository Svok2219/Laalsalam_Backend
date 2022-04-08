const express =require('express');
const Router = express.Router();
const {Cities} = require('../Model/City')


Router.get('/getCityList', async (req,res)=>{
    const cities = await Cities.find()
    if(!cities){
    res.status(500).json({success:false})}
    res.send(cities);
})


Router.get('/:id', async (req,res)=>{
    Cities.findById(req.params.id)
   .then((theCities)=>{
       if(!theCities){
        res.status(404).json({success:false,message:'the City does not exists here'})
       }
       else{
       res.status(200).send(theCities)
       }
   })
   .catch((err=>{
       res.status(400).json({success:false,error:err})
   }))
})


Router.post('/', async (req,res)=>{
let CitySaved= new Cities({
    name:req.body.name
})
const savedCities = await CitySaved.save();
if(!savedCities){
    res.status(500).json({
        success:false
    })
}
res.send(savedCities)
})
 

module.exports = Router;