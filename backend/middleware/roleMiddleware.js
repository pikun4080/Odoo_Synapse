/**
 * Role-based Authorization Middleware
 * Allows access only to users with specified roles
 */
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Ensure authenticated user exists
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Check if user's role is allowed
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    next();
  };
};

module.exports = authorizeRoles;