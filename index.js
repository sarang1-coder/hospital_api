const express=require("express");
const router = require("./routes/router");
const bodyParser=require('body-parser');
const db=require('./config/mongoose.js');
const passport=require("passport");
const passportStategy=require("./config/passport_jwt.js");
const app=express();

const PORT=8000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




app.use(router);



app.listen(PORT,(err)=>{
    if(err){
        console.log("error");
    }
    console.log(`port running on ${PORT}`)
});