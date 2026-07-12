const vehicles = require("../data/vehicles");

const getAllVehicles = (req, res) => {
    let result = [...vehicles];

const { search, status, type } = req.query;

if (search) {

    result = result.filter(vehicle =>
        vehicle.registrationNumber
            .toLowerCase()
            .includes(search.toLowerCase())
    );

}

if (status) {

    result = result.filter(vehicle =>
        vehicle.status.toLowerCase() === status.toLowerCase()
    );

}

if (type) {

    result = result.filter(vehicle =>
        vehicle.type.toLowerCase() === type.toLowerCase()
    );

}

return res.status(200).json({

    success: true,
    count: result.length,
    data: result

});
};

const addVehicle = (req, res) => {

    const {
        registrationNumber,
        type,
        capacity
    } = req.body;

    if (!registrationNumber || !type || !capacity) {
    return res.status(400).json({
        success: false,
        message: "All fields are required."
    });
}

    const alreadyExists = vehicles.find(
        vehicle => vehicle.registrationNumber === registrationNumber
    );

    if (alreadyExists) {
        return res.status(400).json({
            success: false,
            message: "Vehicle registration number already exists."
        });
    }

    const newVehicle = {
        id: vehicles.length + 1,
        registrationNumber,
        type,
        capacity,
        status: "Available"
    };

    vehicles.push(newVehicle);

    res.status(201).json({
        success: true,
        message: "Vehicle added successfully.",
        data: newVehicle
    });

};

const updateVehicle = (req, res) => {
    const id = Number(req.params.id);

    const vehicle = vehicles.find(v => v.id === id);

    if (!vehicle) {
        return res.status(404).json({
            success: false,
            message: "Vehicle not found."
        });
    }

    const {
        registrationNumber,
        type,
        capacity,
        status
    } = req.body;

    if (registrationNumber) {

        const duplicate = vehicles.find(v =>
            v.registrationNumber === registrationNumber &&
            v.id !== id
        );

        if (duplicate) {
            return res.status(400).json({
                success: false,
                message: "Registration number already exists."
            });
        }

        vehicle.registrationNumber = registrationNumber;
    }

    if (type)
        vehicle.type = type;

    if (capacity)
        vehicle.capacity = capacity;

    if (status)
        vehicle.status = status;

    res.status(200).json({
        success: true,
        message: "Vehicle updated successfully.",
        data: vehicle
    });
};

const getAvailableVehicles = (req, res) => {

    const availableVehicles = vehicles.filter(
        vehicle => vehicle.status === "Available"
    );

    return res.status(200).json({
        success: true,
        count: availableVehicles.length,
        data: availableVehicles
    });

};

const getVehicleStatusSummary = (req, res) => {

    const summary = {

        available: vehicles.filter(v => v.status === "Available").length,

        onTrip: vehicles.filter(v => v.status === "On Trip").length,

        maintenance: vehicles.filter(
            v => v.status === "Maintenance"
        ).length,

        retired: vehicles.filter(
            v => v.status === "Retired"
        ).length

    };

    return res.status(200).json({

        success: true,
        data: summary

    });

};

module.exports = {
    getAllVehicles,
    addVehicle,
    updateVehicle,
    getAvailableVehicles,
    getVehicleStatusSummary
};