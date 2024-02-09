const express = require("express");
const router = express.Router();
const assetController = require("../controller/assetController");

router.post("/add", assetController.createAsset);

router.get("/getAll", assetController.getAssets);

router.get("/getById/:id", assetController.getAssetById);

router.put("/modify/:id", assetController.updateAsset);

router.delete("/delete/:id", assetController.deleteAsset);

module.exports = router;
