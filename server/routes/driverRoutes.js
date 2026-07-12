const express = require("express");
const router = express.Router();

const {
    getAllDrivers,
    addDriver,
    updateDriver
} = require("../controllers/driverController");

router.get("/", getAllDrivers);
router.post("/", addDriver);
router.patch("/:id", updateDriver);

module.exports = router;