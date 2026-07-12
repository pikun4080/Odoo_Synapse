const drivers = require("../data/drivers");

const getAllDrivers = (req, res) => {
    res.status(200).json({
        success: true,
        count: drivers.length,
        data: drivers
    });
};

const addDriver = (req, res) => {
    const {
        name,
        licenseNumber,
        licenseExpiry
    } = req.body;


    if (!name || !licenseNumber || !licenseExpiry) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    
    const today = new Date();

if (new Date(licenseExpiry) < today) {
    return res.status(400).json({
        success: false,
        message: "Driver license has expired."
    });
}

    
   const alreadyExists = drivers.find(
    driver =>
        driver.licenseNumber.toLowerCase() ===
        licenseNumber.toLowerCase()
);

    if (alreadyExists) {
        return res.status(400).json({
            success: false,
            message: "License number already exists."
        });
    }

    const newDriver = {
        id: drivers.length + 1,
        name,
        licenseNumber,
        licenseExpiry,
        status: "Available"
    };

    drivers.push(newDriver);

    res.status(201).json({
        success: true,
        message: "Driver added successfully.",
        data: newDriver
    });
};

const updateDriver = (req, res) => {
    const id = Number(req.params.id);

    const driver = drivers.find(d => d.id === id);

    if (!driver) {
        return res.status(404).json({
            success: false,
            message: "Driver not found."
        });
    }

    const {
        name,
        licenseNumber,
        licenseExpiry,
        contact,
        status
    } = req.body;

    if (licenseNumber) {

        const duplicate = drivers.find(d =>
            d.licenseNumber === licenseNumber &&
            d.id !== id
        );

        if (duplicate) {
            return res.status(400).json({
                success: false,
                message: "License number already exists."
            });
        }

        driver.licenseNumber = licenseNumber;
    }

    if (licenseExpiry) {
        driver.licenseExpiry = licenseExpiry;
    }

    if (name) {
        driver.name = name;
    }

    if (contact) {
        driver.contact = contact;
    }

    if (status) {
        driver.status = status;
    }

    return res.status(200).json({
        success: true,
        message: "Driver updated successfully.",
        data: driver
    });
};

module.exports = {
    getAllDrivers,
    addDriver,
    updateDriver
};