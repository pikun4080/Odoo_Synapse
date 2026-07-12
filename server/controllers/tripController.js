const trips = require("../data/trips");
const vehicles = require("../data/vehicles");
const drivers = require("../data/drivers");

const getAllTrips = (req, res) => {
    res.status(200).json({
        success: true,
        count: trips.length,
        data: trips
    });
};

const createTrip = (req, res) => {
    const {
        vehicleId,
        driverId,
        origin,
        destination
    } = req.body;

    if (!vehicleId || !driverId || !origin || !destination) {
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

    const driver = drivers.find(d => d.id === driverId);

    if (!driver) {
        return res.status(404).json({
            success: false,
            message: "Driver not found."
        });
    }

    const vehicleBusy = trips.find(
        trip =>
            trip.vehicleId === vehicleId &&
            trip.status === "Ongoing"
    );

    if (vehicleBusy) {
        return res.status(400).json({
            success: false,
            message: "Vehicle already assigned."
        });
    }

    const driverBusy = trips.find(
        trip =>
            trip.driverId === driverId &&
            trip.status === "Ongoing"
    );

    if (driverBusy) {
        return res.status(400).json({
            success: false,
            message: "Driver already assigned."
        });
    }

    const newTrip = {
        id: trips.length + 1,
        vehicleId,
        driverId,
        origin,
        destination,
        status: "Ongoing"
    };

    trips.push(newTrip);

    vehicle.status = "On Trip";
    driver.status = "On Trip";

    res.status(201).json({
        success: true,
        message: "Trip created successfully.",
        data: newTrip
    });
};

const completeTrip = (req, res) => {
    const id = Number(req.params.id);

    const trip = trips.find(t => t.id === id);

    if (!trip) {
        return res.status(404).json({
            success: false,
            message: "Trip not found."
        });
    }

    if (trip.status === "Completed") {
        return res.status(400).json({
            success: false,
            message: "Trip already completed."
        });
    }

    trip.status = "Completed";

    const vehicle = vehicles.find(v => v.id === trip.vehicleId);
    if (vehicle) {
        vehicle.status = "Available";
    }

    const driver = drivers.find(d => d.id === trip.driverId);
    if (driver) {
        driver.status = "Available";
    }

    res.status(200).json({
        success: true,
        message: "Trip completed successfully.",
        data: trip
    });
};

module.exports = {
    getAllTrips,
    createTrip,
    completeTrip
};