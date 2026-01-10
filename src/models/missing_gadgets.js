const mongoose = require("mongoose");

const MissingItemSchema = new mongoose.Schema(
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
    brand:
    {
        type: String,
        required: true
    },
    model:
    {
        type: String,
        required: true
    },
    imei:
    {
        type: String
    },
    serialNumber:
    {
        type: String
    },
    color:
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
    purchaseBill:
    {
        type: String,
        required: true
    },
    image:
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

module.exports = mongoose.model("Missing_Gadget", MissingItemSchema);
