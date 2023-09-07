const express=require("express");
const router=express.Router();
const controller=require("../controllers/userControllers");


router.post("/register",controller.registerDoctor);


module.exports=router;

