const mongoose=require("mongoose");

const DoctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"],
    },
    password:{
        type:String,
        required:[true,"Please Enter Password"],
        minLength:[6,"Password must be > than 6"]
    },
});

const Doctor=new mongoose.model("Doctor",DoctorSchema);

module.exports=Doctor;