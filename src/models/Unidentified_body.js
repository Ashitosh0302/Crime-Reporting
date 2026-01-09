const mongoose = require("mongoose");

const Unidentified_body_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        mobileNumber: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        dateTime: {
            type: Date,
            required: true
        },

        gender: {
            type: String
        },

        image: {
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

module.exports = mongoose.model("Unidentified_body",Unidentified_body_schema);
