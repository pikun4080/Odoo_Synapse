const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 TransitOps Backend is Running",
  });
});

// Routes
app.use("/api/auth", authRoutes);

module.exports = app;