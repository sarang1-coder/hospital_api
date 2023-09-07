const mongoose=require("mongoose");

const PatientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"],
        unique:true
    },
    reports:[
        {
            status:{
                type:String,
                required:true,
                enum:["Negative","Travelled-Quarantine","Symptoms-Quarantine","Positive-Admit"]
            },
            date:{
                type:Date,
                required:true,
            }
        }
    ],
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true,
    },
})

const Patient=new mongoose.model("Patient",PatientSchema);
module.exports=Patient;