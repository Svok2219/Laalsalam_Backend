const {Help} = require("../Model/OfferModel")
const express= require("express")
const Router = express.Router()

Router.post('/postHelpOffers',async (req,res)=>{
  const OfferForPost = new Help({
HelperName:req.body.HelperName,
Email:req.body.Email,
MobileNumber:req.body.MobileNumber,
city:req.body.city,
BloodGroup:req.body.BloodGroup,
readyToBearOwnPortalFee:req.body.readyToBearOwnPortalFee
})

const postedOffer = await OfferForPost.save()
if(!postedOffer) return res.status(400).json({success:false})
res.status(200).json({success:true,content:postedOffer})
  })

Router.get("/getHelpOffers", async (req,res)=>{
  const offers = await Help.find().populate('city').populate('BloodGroup')
  if(!offers) return res.status(400).send("Couldn’t get anything for you")
  res.status(200).send(offers)
  
})  

Router.get("/FindByBG/:id", async (req,res)=>{
  const specifiedOffer = await Help.find({BloodGroup:req.params.id})
  if(!specifiedOffer) return res.status(400).send("Couldn’t get anything for you")
  res.status(200).send(specifiedOffer)
})  

Router.delete("/deleteOffer/:id", (req,res)=>{
   Help.findByIdAndRemove(req.params.id)
     .then((result)=>{
       if(result){res.send(result)}
       else{res.send("Couldn’t delete the offer Boss")}
       })
       .catch((err)=>res.send(err))
})

module.exports = Router;