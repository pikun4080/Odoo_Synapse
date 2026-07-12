const jwt = require("jsonwebtoken");

/**
 * JWT Authentication Middleware
 * Verifies Bearer token and attaches decoded user to req.user
 */
const authMiddleware = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    // Check Bearer format
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid token format. Use: Bearer <token>",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Token is invalid or expired",
    });
  }
};

module.exports = authMiddleware;