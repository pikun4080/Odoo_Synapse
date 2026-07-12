const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const vehicleRoutes = require("./routes/vehicleRoutes");
const driverRoutes = require("./routes/driverRoutes");
const tripRoutes = require("./routes/tripRoutes");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/trips", tripRoutes);


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "TransitOps Backend Running "
    });
});

module.exports = app;