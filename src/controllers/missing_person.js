const MISSING_PERSON = require("../models/missing_person")

async function Missing_person_home(req, res) {
    return res.render("Missing_person")
}

async function Submit_Missing_person_report(req, res, next) 
{
    try {
        await MISSING_PERSON.create({
            name: req.body.name,
            relation: req.body.relation,
            contactNumber: req.body.contactNumber,
            reporterAddress: req.body.reporterAddress,

            missingPersonName: req.body.missingPersonName,
            age: req.body.age,
            gender: req.body.gender,
            height: req.body.height,
            identifyingMarks: req.body.identifyingMarks,
            clothing: req.body.clothing,

            crimeDateTime: req.body.crimeDateTime,
            circumstances: req.body.circumstances,

            photo: req.file ? req.file.filename : null,
            additionalInfo: req.body.additionalInfo
        });

        res.redirect("/Missing_person");
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    Missing_person_home,
    Submit_Missing_person_report
}