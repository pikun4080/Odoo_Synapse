const express = require("express");
const router = express.Router();

const { getAllVehicles , addVehicle , updateVehicle } = require("../controllers/vehicleController");

router.get("/", getAllVehicles);
router.post("/", addVehicle);
router.patch("/:id", updateVehicle);

module.exports = router;