require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const route = require('./src/routes/route')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:3000", "https://url-shortify-app.onrender.com"] 
}))

mongoose.connect(process.env.MONGODB_STRING,{
    useNewUrlParser : true
},mongoose.set('strictQuery', false))
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))

app.use('/',route)

app.use("/*", function(req,res){
    res.status(400).send("Provided url is wrong")
})

app.listen(process.env.PORT, function(){
    console.log("Express app is running on port:",process.env.PORT)
})