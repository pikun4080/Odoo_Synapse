const express = require("express");
const router = express.Router();

const { getAllVehicles , addVehicle , updateVehicle , getAvailableVehicles,getVehicleStatusSummary} = require("../controllers/vehicleController");

router.get("/available", getAvailableVehicles);
router.get("/", getAllVehicles);
router.post("/", addVehicle);
router.patch("/:id", updateVehicle);
router.get("/status-summary", getVehicleStatusSummary);

module.exports = router;