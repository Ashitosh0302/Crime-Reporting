const express = require("express");
const upload = require("../middlewares/upload");
const router = express.Router();

const{Accident_page,Submit_Accident} = require("../controllers/Accident");

router.get("/", Accident_page);
router.post("/", upload.single("Image"),Submit_Accident);

module.exports = router;
