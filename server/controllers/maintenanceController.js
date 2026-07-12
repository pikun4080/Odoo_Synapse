const maintenance = require("../data/maintenance");
const vehicles = require("../data/vehicles");

const getMaintenance = (req, res) => {
    res.status(200).json({
        success: true,
        count: maintenance.length,
        data: maintenance
    });
};
const createMaintenance = (req, res) => {

    const {
        vehicleId,
        serviceType,
        cost
    } = req.body;

    if (!vehicleId || !serviceType || !cost) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    const vehicle = vehicles.find(v => v.id === vehicleId);

    if (!vehicle) {
        return res.status(404).json({
            success: false,
            message: "Vehicle not found."
        });
    }

    if (vehicle.status === "On Trip") {
        return res.status(400).json({
            success: false,
            message: "Vehicle is currently on a trip."
        });
    }

    vehicle.status = "Maintenance";

    const record = {
        id: maintenance.length + 1,
        vehicleId,
        serviceType,
        cost,
        status: "Active"
    };

    maintenance.push(record);

    return res.status(201).json({
        success: true,
        message: "Maintenance started.",
        data: record
    });
};
const completeMaintenance = (req, res) => {

    const id = Number(req.params.id);

    const record = maintenance.find(m => m.id === id);

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Maintenance record not found."
        });
    }

    if (record.status === "Completed") {
        return res.status(400).json({
            success: false,
            message: "Already completed."
        });
    }

    record.status = "Completed";

    const vehicle = vehicles.find(v => v.id === record.vehicleId);

    if (vehicle) {
        vehicle.status = "Available";
    }

    return res.status(200).json({
        success: true,
        message: "Maintenance completed.",
        data: record
    });
};

module.exports = {
    getMaintenance,
    createMaintenance,
    completeMaintenance
};