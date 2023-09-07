const express=require("express");
const router=express.Router();
const passport=require("passport");
const controller=require("../controllers/userControllers");





router.post("/register",passport.authenticate('jwt',{session:false}),controller.registerPatient);


router.post("/create_report/:id",passport.authenticate('jwt',{session:false}),controller.createReport);

router.get("/all_reports/:id",controller.allReports);

router.get("/status_reports/:status",controller.statusReports);


module.exports=router;

