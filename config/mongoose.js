const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/hospital_api");

const db=mongoose.connection;

db.on("error",(err)=>{
    console.error("Error in DB",err);
});

db.once('open',()=>{
    console.log("DB connected successfully");
})

