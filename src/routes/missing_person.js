const express=require("express")
const upload=require("../middlewares/upload")
const {Missing_person_home,Submit_Missing_person_report}=require("../controllers/missing_person")

const router=express.Router()

router.get("/",Missing_person_home)
router.post("/",upload.single("photo"),Submit_Missing_person_report)

module.exports=router