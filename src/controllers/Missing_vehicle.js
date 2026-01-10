const MissingVehicle = require("../models/Missing_vehicle");

async function Missing_vehicle_home(req,res)
{
    return res.render("missing_vehicle");
}

async function Submit_Missing_vehicle(req,res)
{
    try
    {
        const vehiclePhoto = req.files.vehiclePhoto[0].filename;
        const rcPassingBill = req.files.rcPassingBill[0].filename;
        const insuranceCopy =
            req.files.insuranceCopy
            ? req.files.insuranceCopy[0].filename
            : "";

        await MissingVehicle.create(
        {
            name: req.body.name,
            mobile: req.body.mobile,
            address: req.body.address,
            vehicleType: req.body.vehicleType,
            otherVehicleType: req.body.otherVehicleType,
            vehicleNumber: req.body.vehicleNumber,
            vehicleMake: req.body.vehicleMake,
            vehicleModel: req.body.vehicleModel,
            vehicleColor: req.body.vehicleColor,
            location: req.body.location,
            dateTime: req.body.dateTime,
            circumstances: req.body.circumstances,
            vehiclePhoto: vehiclePhoto,
            rcPassingBill: rcPassingBill,
            insuranceCopy: insuranceCopy,
            additionalInfo: req.body.additionalInfo
        });

        res.redirect("/Missing_Item_forms/Missing_vehicle");
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Error submitting missing vehicle report");
    }
}

module.exports =
{
    Missing_vehicle_home,
    Submit_Missing_vehicle
};
