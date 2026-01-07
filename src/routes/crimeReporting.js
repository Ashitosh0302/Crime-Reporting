const express = require("express");
const router = express.Router();

const
{
    createCrimeReport,
    getAllCrimeReports
} = require("../controllers/crimeReporting");

router.post("/", createCrimeReport);
router.get("/", getAllCrimeReports);

module.exports = router;
