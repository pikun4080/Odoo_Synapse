const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const vehicleRoutes = require("./routes/vehicleRoutes");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/vehicles", vehicleRoutes);


app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "TransitOps Backend Running "
    });
});

module.exports = app;