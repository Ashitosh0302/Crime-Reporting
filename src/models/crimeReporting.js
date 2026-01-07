const mongoose = require("mongoose");

const crimeReportingSchema = new mongoose.Schema(
{
    name:
    {
        type: String,
        required: true,
        trim: true
    },
    contactNumber:
    {
        type: String,
        required: true
    },
    crimeType:
    {
        type: String,
        required: true
    },
    location:
    {
        latitude:
        {
            type: Number,
            required: true
        },
        longitude:
        {
            type: Number,
            required: true
        }
    },
    suspected:
    {
        type: String
    },
    crimeDateTime:
    {
        type: Date,
        required: true
    },
    image:
    {
        type: String
    },
    moreInformation:
    {
        type: String
    },
    status:
    {
        type: String,
        default: "Pending"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("CrimeReporting", crimeReportingSchema);
