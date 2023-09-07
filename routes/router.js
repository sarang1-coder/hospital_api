const express=require("express");
const router=express.Router();
const controller=require("../controllers/userControllers");



router.use('/doctor',require('./doctor.js'));
router.post('/login',controller.login);
router.use('/patients',require('./patient.js'));


module.exports=router;