const express = require("express");
const upload = require("../middlewares/upload");
const{home_route,submit_crime} = require("../controllers/crimeReporting");

const router = express.Router();

router.get("/", home_route);
router.post("/", upload.single("image"), submit_crime);

module.exports = router;