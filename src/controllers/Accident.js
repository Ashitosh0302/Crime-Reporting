const Accident = require("../models/Accident");

async function Accident_page(req, res)
{
    return res.render("Accident");
}

async function Submit_Accident(req, res, next)
{
    try
    {
        await Accident.create({
            ReporterName: req.body.ReporterName,
            ReporterMobile: req.body.ReporterMobile,
            ReporterType: req.body.ReporterType,
            victimName: req.body.victimName,
            victimAge: req.body.victimAge,
            victimMobile: req.body.victimMobile,
            accidentDateTime: req.body.accidentDateTime,
            location: req.body.location,
            accidentType: req.body.accidentType,
            injuryNature: req.body.injuryNature,
            otherInfo: req.body.otherInfo
        });

        res.redirect("/Accident");
    }
    catch(error)
    {
        next(error);
    }
}

module.exports =
{
    Accident_page,
    Submit_Accident
};
