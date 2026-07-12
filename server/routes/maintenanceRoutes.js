const express = require("express");

const router = express.Router();

const {
    getMaintenance,
    createMaintenance,
    completeMaintenance
} = require("../controllers/maintenanceController");

router.get("/", getMaintenance);

router.post("/", createMaintenance);

router.patch("/:id/complete", completeMaintenance);

module.exports = router;