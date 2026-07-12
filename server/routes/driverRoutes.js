const express = require("express");
const router = express.Router();

const {
    getAllDrivers,
    addDriver,
    updateDriver,
    getAvailableDrivers,
    getDriversOnDuty,
    getExpiredDrivers
} = require("../controllers/driverController");

router.get("/", getAllDrivers);
router.post("/", addDriver);
router.patch("/:id", updateDriver);
router.get("/available", getAvailableDrivers);
router.get("/on-duty", getDriversOnDuty);
router.get("/expired", getExpiredDrivers);

module.exports = router;