const drivers = require("../data/drivers");
const vehicles = require("../data/vehicles");
const trips = require("../data/trips");
const maintenance = require("../data/maintenance");
const fuel = require("../data/fuel");
const expenses = require("../data/expenses");

const getDashboard = (req, res) => {

    const activeTrips = trips.filter(
        t => t.status === "Active"
    ).length;

    const maintenanceVehicles = maintenance.filter(
        m => m.status !== "Completed"
    ).length;

    const fuelCost = fuel.reduce(
        (sum, f) => sum + f.cost,
        0
    );

    const maintenanceCost = maintenance.reduce(
        (sum, m) => sum + m.cost,
        0
    );

    const otherExpenses = expenses.reduce(
        (sum, e) => sum + e.amount,
        0
    );

    return res.status(200).json({
        success: true,
        data: {
            totalDrivers: drivers.length,
            totalVehicles: vehicles.length,
            activeTrips,
            maintenanceVehicles,
            totalFuelCost: fuelCost,
            totalMaintenanceCost: maintenanceCost,
            totalExpenses: otherExpenses
        }
    });

};

module.exports = {
    getDashboard
};