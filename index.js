const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose =require('mongoose') 

require('dotenv/config')
const Port=process.env.PORT


//Middleware
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use('*',cors())

const ApplicationRouter=require('./Router/RequestRouter');
const HelpRouter=require('./Router/OfferRouter');
const BGRouter=require('./Router/BloodGroupsRouter');
const CityRouter=require('./Router/CityRouter');

const apiHelp="/Help"
const apiApplication="/Application"
const apiBG="/BloodGroup"
const apiCity="/City"

app.use(apiHelp,HelpRouter)
app.use(apiApplication,ApplicationRouter)
app.use(apiBG,BGRouter)
app.use(apiCity,CityRouter)


app.get("/",(req,res)=>{
res.send("Jayy Mahakaaal")
})


//Database
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.geudk.mongodb.net/RedDataBase?retryWrites=true&w=majority` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'RedDataBase'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})



app.listen(Port,()=>{
console.log(`Listening to the port:${Port}`)
})