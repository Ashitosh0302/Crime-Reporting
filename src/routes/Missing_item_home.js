const express = require("express")
const upload = require("../middlewares/upload");
const router = express.Router()
const { Missing_item_home } = require("../controllers/Missing_item_home")
const { Missing_gadgets_home_page, Submit_Missing_gadgets } = require("../controllers/Missing_gadgets")
const {Missing_vehicle_home,Submit_Missing_vehicle}=require("../controllers/Missing_vehicle")
const {Other_missing_item_home,Submit_Other_missing_item}=require("../controllers/Other_items")

router.get("/", Missing_item_home)

//gadgets
router.get("/Missing_gadgets", Missing_gadgets_home_page)
router.post("/Missing_gadgets",upload.fields(
        [
            { name: "purchaseBill", maxCount: 1 },
            { name: "image", maxCount: 1 }
        ]
    ),
    Submit_Missing_gadgets
);

//vehicles
router.get("/Missing_vehicle",Missing_vehicle_home)
router.post("/Missing_vehicle",upload.fields(
    [
        { name: "vehiclePhoto", maxCount: 1 },
        { name: "rcPassingBill", maxCount: 1 },
        { name: "insuranceCopy", maxCount: 1 }
    ]
    ),
    Submit_Missing_vehicle
);

//other items
router.get("/Other_Missing_item",Other_missing_item_home)
router.post("/Other_Missing_item",upload.fields(
    [
        { name: "itemPhoto", maxCount: 1 },
        { name: "idProof", maxCount: 1 },
        { name: "purchaseProof", maxCount: 1 }
    ]
    ),
    Submit_Other_missing_item
);

module.exports = router