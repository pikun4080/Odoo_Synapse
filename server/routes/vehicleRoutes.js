const express = require("express");
const router = express.Router();

const { getAllVehicles , addVehicle } = require("../controllers/vehicleController");

router.get("/", getAllVehicles);
router.post("/", addVehicle);

module.exports = router;