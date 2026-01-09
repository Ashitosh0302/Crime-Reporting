const express = require("express");
const upload = require("../middlewares/upload");
const{E_complaint,submit_E_complaint_crime} = require("../controllers/E_complaint");

const router = express.Router();

router.get("/", E_complaint);
router.post("/", upload.single("image"), submit_E_complaint_crime);

module.exports = router;