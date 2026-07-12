const vehicles = require("../data/vehicles");

const getAllVehicles = (req, res) => {
    res.status(200).json({
        success: true,
        count: vehicles.length,
        data: vehicles
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

module.exports = {
    getAllVehicles,
    addVehicle,
    updateVehicle
};