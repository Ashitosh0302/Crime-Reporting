const MissingItem = require("../models/missing_gadgets");

async function Missing_gadgets_home_page(req,res) {
    return res.render("missing_gadgets")
}

async function Submit_Missing_gadgets(req,res)
{
    try
    {
        await MissingItem.create(
        {
            name: req.body.name,
            mobile: req.body.mobile,
            address: req.body.address,
            itemType: req.body.itemType,
            otherItemType: req.body.otherItemType,
            brand: req.body.brand,
            model: req.body.model,
            imei: req.body.imei,
            serialNumber: req.body.serialNumber,
            color: req.body.color,
            location: req.body.location,
            dateTime: req.body.dateTime,
            circumstances: req.body.circumstances,
            purchaseBill: req.files.purchaseBill[0].filename,
            image: req.files.image ? req.files.image[0].filename : "",
            additionalInfo: req.body.additionalInfo
        });

        res.redirect("/Missing_Item_forms/Missing_gadgets");
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Error submitting missing item report");
    }
}

module.exports ={
    Missing_gadgets_home_page,
    Submit_Missing_gadgets
};