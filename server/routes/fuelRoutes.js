const express = require("express");

const router = express.Router();

const {

    getFuelLogs,
    createFuelLog,
    getExpenses,
    createExpense,
    deleteExpense

} = require("../controllers/fuelController");

router.get("/", getFuelLogs);

router.post("/", createFuelLog);

router.get("/expenses", getExpenses);

router.post("/expenses", createExpense);

router.delete("/expenses/:id", deleteExpense);

module.exports = router;