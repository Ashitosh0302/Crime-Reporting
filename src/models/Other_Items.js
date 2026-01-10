const mongoose = require("mongoose");

const OtherMissingItemSchema = new mongoose.Schema(
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
    itemType:
    {
        type: String,
        required: true
    },
    otherItemType:
    {
        type: String
    },
    itemDescription:
    {
        type: String,
        required: true
    },
    color:
    {
        type: String
    },
    material:
    {
        type: String
    },
    approxValue:
    {
        type: String
    },
    identifyingMarks:
    {
        type: String
    },
    items:
    {
        type: String
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
    itemPhoto:
    {
        type: String
    },
    idProof:
    {
        type: String,
        required: true
    },
    purchaseProof:
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

module.exports = mongoose.model("Other_Missing_items", OtherMissingItemSchema);
