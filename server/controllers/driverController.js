const drivers = require("../data/drivers");

const getAllDrivers = (req, res) => {
    let result = [...drivers];

const { search, status } = req.query;

if (search) {

    result = result.filter(driver =>
        driver.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

}

if (status) {

    result = result.filter(driver =>
        driver.status.toLowerCase() === status.toLowerCase()
    );

}

return res.status(200).json({

    success: true,
    count: result.length,
    data: result

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

const getAvailableDrivers = (req, res) => {

    const availableDrivers = drivers.filter(
        driver => driver.status === "Available"
    );

    return res.status(200).json({

        success: true,
        count: availableDrivers.length,
        data: availableDrivers

    });

};

const getDriversOnDuty = (req, res) => {

    const onDuty = drivers.filter(
        driver => driver.status === "On Trip"
    );

    return res.status(200).json({

        success: true,
        count: onDuty.length,
        data: onDuty

    });

};

const getExpiredDrivers = (req, res) => {

    const today = new Date();

    const expired = drivers.filter(driver =>
        new Date(driver.licenseExpiry) < today
    );

    return res.status(200).json({

        success: true,
        count: expired.length,
        data: expired

    });

};

module.exports = {
    getAllDrivers,
    addDriver,
    updateDriver,
    getAvailableDrivers,
    getDriversOnDuty,
    getExpiredDrivers
};