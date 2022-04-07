const mongoose =require('mongoose')

const HelpModel = mongoose.Schema({
HelperName:{type:String,required:true},
Email:{type:String,required:true},
MobileNumber:{type:Number,required:true},
city:{type:mongoose.Schema.Types.ObjectId,ref:"City",required:true},
BloodGroup:{type:mongoose.Schema.Types.ObjectId,ref:"BloodGroup",required:true},
readyToBearOwnPortalFee:{type:Boolean,required:true}
})

exports.Help = mongoose.model("Helpings",HelpModel)