const {Application}  = require("../Model/RequestModel")
const express= require("express")
const Router = express.Router()

Router.post('/postRequestApplication',async (req,res)=>{
  const ApplicationForPost = new Application({
    NeederName:req.body.NeederName,
    Email:req.body.Email,
    MobileNumber:req.body.MobileNumber,
    Address:req.body.Address,
    BloodGroup:req.body.BloodGroup,
    Hospital:req.body.Hospital
})

const postedApplication = await ApplicationForPost.save()
if(!postedApplication) return res.status(400).json({success:false})
res.status(200).json({success:true,content:postedApplication})
  })

Router.get("/getRequestApplications", async (req,res)=>{
  const Applications = await Application.find().populate('BloodGroup')
  if(!Applications) return res.status(400).send("Couldn’t get anything for you")
  res.status(200).send(Applications)
})

Router.get("/FindByBG/:id", async (req,res)=>{
  const specifiedApplication = await Application.find({BloodGroup:req.params.id})
  if(!specifiedApplication) return res.status(400).send("Couldn’t get anything for you")
  res.status(200).send(specifiedApplication)
})

Router.delete("/deleteApplication/:id",(req,res)=>{
   Application.findByIdAndRemove(req.params.id)
     .then((result)=>{
       if(result){res.send(result)}
       else{res.send("Couldn’t delete the Request Boss")}
       })
       .catch((err)=>res.send(err))
})

module.exports = Router;