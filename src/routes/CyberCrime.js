const express=require("express")
const upload = require("../middlewares/upload");
const router=express.Router()
const {CyberCrime_page,Submit_Cyber_Crime}=require("../controllers/CyberCrime")

router.get("/",CyberCrime_page)
router.post("/", upload.single("screenshot"),Submit_Cyber_Crime);

module.exports=router