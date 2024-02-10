const express = require("express");
const router = express.Router();
const allotmentController = require("../controller/allotmentController");

router.post("/add", allotmentController.createAllotment);

router.get("/getAll", allotmentController.getAllotments);

router.get("/getById/:id", allotmentController.getAllotmentById);

router.put("/modify/:id", allotmentController.updateAllotment);

router.delete("/delete/:id", allotmentController.deleteAllotment);

module.exports = router;
