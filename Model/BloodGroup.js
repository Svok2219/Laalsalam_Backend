const mongoose = require('mongoose')

const BloodGroup = mongoose.Schema({
    // id:{type:String,required:true},
    name:{type:String,
        required:true
    }
    // image:{type:String,rrquired:true}
})

exports.BGroups = mongoose.model('BloodGroup', BloodGroup)