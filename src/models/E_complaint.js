const mongoose = require("mongoose");

const E_complaint_schema = new mongoose.Schema(
{
    name:{
        type: String,
        required: true,
        trim: true
    },

    contactNumber:{
        type: String,
        required: true
    },

    crimeType:{
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true,
        trim: true
    },

    suspected:{
        type: String
    },

    crimeDateTime:{
        type: Date,
        required: true
    },

    image:{
        type: String
    },

    moreInformation:{
        type: String
    },

    status:{
        type: String,
        default: "Pending"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("E_comaplaint", E_complaint_schema);
