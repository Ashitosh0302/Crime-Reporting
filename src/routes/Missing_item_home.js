const express=require("express")
const router=express.Router()
const {Missing_item_home}=require("../controllers/Missing_item_home")

router.get("/",Missing_item_home)

module.exports=router