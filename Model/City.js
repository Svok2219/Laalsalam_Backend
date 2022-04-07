const mongoose = require('mongoose')

const CityModel = mongoose.Schema({
    // id:{type:String,required:true},
    name:{type:String,
        required:true
    }
    // image:{type:String,rrquired:true}
})

exports.Cities = mongoose.model('City', CityModel)