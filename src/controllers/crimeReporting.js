const CrimeReporting = require("../models/crimeReporting");

async function home_route(req, res)
{
    return res.render("home");
}

async function submit_crime(req, res, next)
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
    home_route,
    submit_crime
};
