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

module.exports = {
    getAllVehicles,
    addVehicle
};