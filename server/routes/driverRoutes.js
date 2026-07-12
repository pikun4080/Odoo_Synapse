const express = require("express");
const router = express.Router();

const {
    getAllDrivers,
    addDriver
} = require("../controllers/driverController");

router.get("/", getAllDrivers);
router.post("/", addDriver);

module.exports = router;