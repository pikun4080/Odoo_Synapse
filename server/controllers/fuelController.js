const fuelLogs = require("../data/fuel");
const expenses = require("../data/expenses");
const vehicles = require("../data/vehicles");

const getFuelLogs = (req,res)=>{

    return res.status(200).json({
        success:true,
        count:fuelLogs.length,
        data:fuelLogs
    });

};

const createFuelLog = (req,res)=>{

    const{
        vehicleId,
        liters,
        cost
    }=req.body;

    if(!vehicleId || !liters || !cost){

        return res.status(400).json({
            success:false,
            message:"All fields required."
        });

    }

    const vehicle=vehicles.find(v=>v.id===vehicleId);

    if(!vehicle){

        return res.status(404).json({
            success:false,
            message:"Vehicle not found."
        });

    }

    const log={

        id:fuelLogs.length+1,
        vehicleId,
        liters,
        cost

    };

    fuelLogs.push(log);

    return res.status(201).json({

        success:true,
        message:"Fuel log added.",
        data:log

    });

};

const getExpenses=(req,res)=>{

    return res.status(200).json({

        success:true,
        count:expenses.length,
        data:expenses

    });

};

const createExpense=(req,res)=>{

    const{

        vehicleId,
        type,
        amount

    }=req.body;

    if(!vehicleId || !type || !amount){

        return res.status(400).json({

            success:false,
            message:"All fields required."

        });

    }

    const vehicle=vehicles.find(v=>v.id===vehicleId);

    if(!vehicle){

        return res.status(404).json({

            success:false,
            message:"Vehicle not found."

        });

    }

    const expense={

        id:expenses.length+1,
        vehicleId,
        type,
        amount

    };

    expenses.push(expense);

    return res.status(201).json({

        success:true,
        message:"Expense added.",
        data:expense

    });

};

const deleteExpense = (req, res) => {

    const id = Number(req.params.id);

    const index = expenses.findIndex(e => e.id === id);

    if (index === -1) {

        return res.status(404).json({
            success: false,
            message: "Expense not found."
        });

    }

    const deleted = expenses.splice(index, 1);

    return res.status(200).json({

        success: true,
        message: "Expense deleted.",
        data: deleted[0]

    });

};

module.exports={

    getFuelLogs,
    createFuelLog,
    getExpenses,
    createExpense,
    deleteExpense

};