const Doctor=require("../models/doctor");
const Patient = require("../models/patient");
const Patients=require("../models/patient");



module.exports.registerDoctor=async (req,res,next)=>{

    try{
        const doctor=await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message:"doctor created successully",
        });
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            message:"error in creating doctor"
        })
    }

}


module.exports.login=async(req,res)=>{
    try{
        const doctor=Doctor.find(req.body);

        if(doctor){
            const token=jwt.sign(doctor.id,"secret");
            res.status(200).json({
                success:true,
                token,
            });
        }else{
            res.status(404).json({
                status:false,
                message:"name or password invalid"
            })
        }
    }catch(error){
        res.status(500).json({
            status:false,
            message:"unable to login"
        })
    }
}

module.exports.registerPatient=async (req,res)=>{
    try{
        req.body.doctor="64f997715f3b0541b42f1d94";
        const patient=await Patients.create(req.body);

        res.status(200).json({
            success:true,
            message:"successfully created"
        });

    }catch(error){

        res.status(500).json({
            success:true,
            message:"could not create patient"
        });
    }
}



module.exports.createReport=async(req,res)=>{
    try{
        const patient=await Patient.findById(req.params.id);

        req.body.date=Date.now();

        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            status:true,
            message:"report cerated successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"could not create report"
        })
    }
}

module.exports.allReports=async(req,res)=>{
    try{
        const allreports=await Patients.findById(req.params.id);

        res.status(200).json({
            succes:true,
           reports:allreports.reports
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"could not create report"
        })
    }
}


module.exports.statusReports=async(req,res)=>{
    try{

        const patient=await Patients.find({
            reports: { $elemMatch : {status:req.params.status}}
        });

        res.status(200).json({
            success:true,
            data:patient
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"could not get status"
        })
    }
}

