const mongoose = require("mongoose");

const accidentSchema = new mongoose.Schema(
    {
        ReporterName:{
            type: String,
            required:true
        },
        ReporterMobile:{
            type: String,
            required:true
        },
        ReporterType:{
            type: String,
            required: true
        },
        victimName:
        {
            type: String,
            required: true
        },
        victimAge:
        {
            type: Number,
            required: true
        },
        victimMobile:
        {
            type: String,
            required: true
        },
        accidentDateTime:
        {
            type: Date,
            required: true
        },
        location:
        {
            type: String,
            required: true
        },
        accidentType:
        {
            type: String,
            required: true
        },
        injuryNature:
        {
            type: String,
            required: true
        },
        Image:{
            type: String
        },
        otherInfo:
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

module.exports = mongoose.model("Accident_details", accidentSchema);
