const express = require("express");
const router = express.Router();
const platformController = require("../controller/platformController");


router.post("/add", platformController.createPlatform);

router.get("/getAll", platformController.getPlatforms);

router.get("/getById/:id", platformController.getPlatformById);

router.put("/modify/:id", platformController.updatePlatform);   

router.delete("/delete/:id", platformController.deletePlatform);


module.exports = router;