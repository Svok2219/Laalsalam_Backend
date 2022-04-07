const mongoose = require('mongoose')
const ApplicationModel = mongoose.Schema({
  NeederName:{type:String,required:true},
  BloodGroup:{type:mongoose.Schema.Types.ObjectId,
    ref:'BloodGroup',
    required:true
  },
  Email:{type:String,required:false},
  Address:{type:String,required:true},
  Hospital:{type:String,required:true},
  MobileNumber:{type:String,required:true},
})


ApplicationModel.virtual('id').get(function () {
    return this._id.toHexString();
});
ApplicationModel.set('toJSON', {
    virtuals: true,
});


exports.Application = mongoose.model('Applications', ApplicationModel);