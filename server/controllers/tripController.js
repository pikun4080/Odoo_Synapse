const trips = require("../data/trips");
const vehicles = require("../data/vehicles");
const drivers = require("../data/drivers");

const getAllTrips = (req, res) => {
    let result = [...trips];

const {

    status,
    origin,
    destination

} = req.query;

if (status) {

    result = result.filter(trip =>
        trip.status.toLowerCase() === status.toLowerCase()
    );

}

if (origin) {

    result = result.filter(trip =>
        trip.origin.toLowerCase() === origin.toLowerCase()
    );

}

if (destination) {

    result = result.filter(trip =>
        trip.destination.toLowerCase() === destination.toLowerCase()
    );

}

return res.status(200).json({

    success: true,
    count: result.length,
    data: result

});
};

const createTrip = (req, res) => {
    const {
        vehicleId,
        driverId,
        origin,
        destination,
        cargoWeight,
        plannedDistance
    } = req.body;

    if (
        !vehicleId ||
        !driverId ||
        !origin ||
        !destination ||
        cargoWeight == null ||
        plannedDistance == null
    ) {
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


    if (
        vehicle.status === "Maintenance" ||
        vehicle.status === "Retired"
    ) {
        return res.status(400).json({
            success: false,
            message: "Vehicle is not available for dispatch."
        });
    }

    if (cargoWeight > vehicle.capacity) {
        return res.status(400).json({
            success: false,
            message: "Cargo weight exceeds vehicle capacity."
        });
    }

    const driver = drivers.find(d => d.id === driverId);

    if (!driver) {
        return res.status(404).json({
            success: false,
            message: "Driver not found."
        });
    }

    if (driver.status === "Suspended") {
    return res.status(400).json({
        success: false,
        message: "Suspended driver cannot be assigned."
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
    cargoWeight,
    plannedDistance,
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

const cancelTrip = (req, res) => {
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
            message: "Completed trip cannot be cancelled."
        });
    }

    if (trip.status === "Cancelled") {
        return res.status(400).json({
            success: false,
            message: "Trip already cancelled."
        });
    }

    trip.status = "Cancelled";

    const vehicle = vehicles.find(v => v.id === trip.vehicleId);

    if (vehicle) {
        vehicle.status = "Available";
    }

    const driver = drivers.find(d => d.id === trip.driverId);

    if (driver) {
        driver.status = "Available";
    }

    return res.status(200).json({
        success: true,
        message: "Trip cancelled successfully.",
        data: trip
    });
};

module.exports = {
    getAllTrips,
    createTrip,
    completeTrip,
    cancelTrip
};