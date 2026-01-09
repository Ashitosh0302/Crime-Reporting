const CyberCrime = require("../models/CyberCrime");

async function CyberCrime_page(req,res) {
    return res.render("Cyber_Crime")
}

async function Submit_Cyber_Crime(req,res,next)
{
    try
    {
        await CyberCrime.create({
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            email: req.body.email,
            crimeType: req.body.crimeType,
            otherCrime: req.body.otherCrime,
            occurredAt: req.body.occurredAt,
            dateTime: req.body.dateTime,
            screenshot: req.file ? req.file.filename : null,
            extraInfo: req.body.extraInfo
        });

        res.redirect("/Cyber_Crime")
    }
    catch(error)
    {
        next(error)
    }
};

module.exports ={
    CyberCrime_page,
    Submit_Cyber_Crime
};
