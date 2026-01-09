const CrimeReporting = require("../models/E_complaint");

async function E_complaint(req, res)
{
    return res.render("E_complaint");
}

async function submit_E_complaint_crime(req, res, next)
{
    try
    {
        await CrimeReporting.create({
            name: req.body.name,
            contactNumber: req.body.contactNumber,
            crimeType: req.body.crimeType,
            location: req.body.location,
            suspected: req.body.suspected,
            crimeDateTime: req.body.crimeDateTime,
            image: req.file ? req.file.filename : null,
            moreInformation: req.body.moreInformation
        });

        res.redirect("/");
    }
    catch(error)
    {
        next(error);
    }
}

module.exports =
{
    E_complaint,
    submit_E_complaint_crime
};
