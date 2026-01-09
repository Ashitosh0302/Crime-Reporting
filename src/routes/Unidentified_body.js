const express = require("express");
const upload = require("../middlewares/upload");

const {Unidentified_body_home,Submit_Unidentified_body_report} = require("../controllers/Unidentified_body");

const router = express.Router();

router.get("/",Unidentified_body_home);
router.post("/",upload.single("image"),Submit_Unidentified_body_report);

module.exports = router;
