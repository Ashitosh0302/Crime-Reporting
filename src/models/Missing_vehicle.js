const mongoose = require("mongoose");

const MissingVehicleSchema = new mongoose.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    mobile:
    {
        type: String,
        required: true
    },
    address:
    {
        type: String,
        required: true
    },
    vehicleType:
    {
        type: String,
        required: true
    },
    otherVehicleType:
    {
        type: String
    },
    vehicleNumber:
    {
        type: String,
        required: true
    },
    vehicleMake:
    {
        type: String,
        required: true
    },
    vehicleModel:
    {
        type: String,
        required: true
    },
    vehicleColor:
    {
        type: String,
        required: true
    },
    location:
    {
        type: String,
        required: true
    },
    dateTime:
    {
        type: Date,
        required: true
    },
    circumstances:
    {
        type: String,
        required: true
    },
    vehiclePhoto:
    {
        type: String,
        required: true
    },
    rcPassingBill:
    {
        type: String,
        required: true
    },
    insuranceCopy:
    {
        type: String
    },
    additionalInfo:
    {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Missing_Vehicle", MissingVehicleSchema);
