const express = require("express");

const router = express.Router();

const {
    getMaintenance,
    createMaintenance,
    completeMaintenance,
    getActiveMaintenance,
    getCompletedMaintenance
} = require("../controllers/maintenanceController");

router.get("/", getMaintenance);

router.post("/", createMaintenance);

router.patch("/:id/complete", completeMaintenance);

router.get("/active", getActiveMaintenance);

router.get("/completed", getCompletedMaintenance);

module.exports = router;