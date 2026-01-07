const CrimeReporting = require("../models/crimeReporting");

/* Create crime report */
const createCrimeReport = async (req, res, next) =>
{
    try
    {
        const crime = await CrimeReporting.create(req.body);

        res.status(201).json(
        {
            success: true,
            data: crime
        });
    }
    catch (error)
    {
        next(error);
    }
};

/* Get all crime reports */
const getAllCrimeReports = async (req, res, next) =>
{
    try
    {
        const crimes = await CrimeReporting.find().sort({ createdAt: -1 });

        res.status(200).json(
        {
            success: true,
            count: crimes.length,
            data: crimes
        });
    }
    catch (error)
    {
        next(error);
    }
};

module.exports =
{
    createCrimeReport,
    getAllCrimeReports
};
