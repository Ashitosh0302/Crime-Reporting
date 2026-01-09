const mongoose = require("mongoose");

const cyberCrimeSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        mobileNumber:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String
        },
        crimeType:
        {
            type: String
        },
        otherCrime:
        {
            type: String
        },
        occurredAt:
        {
            type: String
        },
        dateTime:
        {
            type: Date,
            required: true
        },
        screenshot:
        {
            type: String
        },
        extraInfo:
        {
            type: String
        },
        status: {
            type: String,
            default: "Pending"
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model("CyberCrime", cyberCrimeSchema);