const OtherMissingItem = require("../models/Other_Items");

async function Other_missing_item_home(req,res)
{
    return res.render("missing_things");
}

async function Submit_Other_missing_item(req,res)
{
    try
    {
        const itemPhoto =
            req.files.itemPhoto
            ? req.files.itemPhoto[0].filename
            : "";

        const idProof = req.files.idProof[0].filename;

        const purchaseProof =
            req.files.purchaseProof
            ? req.files.purchaseProof[0].filename
            : "";

        await OtherMissingItem.create(
        {
            name: req.body.name,
            mobile: req.body.mobile,
            address: req.body.address,
            itemType: req.body.itemType,
            otherItemType: req.body.otherItemType,
            itemDescription: req.body.itemDescription,
            color: req.body.color,
            material: req.body.material,
            approxValue: req.body.approxValue,
            identifyingMarks: req.body.identifyingMarks,
            items: req.body.items,
            location: req.body.location,
            dateTime: req.body.dateTime,
            circumstances: req.body.circumstances,
            itemPhoto: itemPhoto,
            idProof: idProof,
            purchaseProof: purchaseProof,
            additionalInfo: req.body.additionalInfo
        });

        res.redirect("/Missing_Item_forms/Other_Missing_item");
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Error submitting other missing item report");
    }
}

module.exports ={
    Other_missing_item_home,
    Submit_Other_missing_item
};
