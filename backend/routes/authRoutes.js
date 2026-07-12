const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register User
router.post("/register", authController.register);

// Login User
router.post("/login", authController.login);

// Get Logged-in User Profile (Protected)
router.get("/profile", authMiddleware, authController.profile);

module.exports = router;