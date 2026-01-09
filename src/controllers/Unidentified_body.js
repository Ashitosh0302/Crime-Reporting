const UnidentifiedDeadBody = require("../models/Unidentified_body");

async function Unidentified_body_home(req, res)
{
    return res.render("unidentified_body");
}

async function Submit_Unidentified_body_report(req, res, next)
{
    try
    {
        await UnidentifiedDeadBody.create({
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            location: req.body.location,
            dateTime: req.body.dateTime,
            gender: req.body.gender,
            image: req.file ? req.file.filename : null
        });

        return res.redirect("/Unidentified_body");
    }
    catch(error)
    {
        return next(error);
    }
}

module.exports ={
   Unidentified_body_home,
   Submit_Unidentified_body_report
};
