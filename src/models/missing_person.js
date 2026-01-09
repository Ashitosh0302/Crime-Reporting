const mongoose = require("mongoose");

const Missing_person_schema = new mongoose.Schema(
{
    name:{
        type: String,
        required: true,
        trim: true
    },

    relation:{
        type: String,
        required: true,
        trim: true
    },

    contactNumber:{
        type: String,
        required: true
    },

    reporterAddress:{
        type: String,
        required: true,
        trim: true
    },

    missingPersonName:{
        type: String,
        required: true,
        trim: true
    },

    age:{
        type: Number,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    height:{
        type: String
    },

    identifyingMarks:{
        type: String,
        trim: true
    },

    clothing:{
        type: String,
        trim: true
    },

    crimeDateTime:{
        type: Date,
        required: true
    },

    circumstances:{
        type: String,
        required: true,
        trim: true
    },

    photo:{
        type: String
    },

    additionalInfo:{
        type: String,
        trim: true
    },

    status:{
        type: String,
        default: "Pending"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Missing_person", Missing_person_schema);
