import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest, JwtPayload, Role } from '../types';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-development-key';

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
     res.status(401).json({ message: 'Access Denied: No token provided.' });
     return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
     res.status(403).json({ message: 'Access Denied: Invalid or expired token.' });
     return;
  }
};

export const authorizeRoles = (...allowedRoles: Role[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: 'Unauthorized: User not authenticated.' });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
       res.status(403).json({ 
        message: `Forbidden: You need one of these roles: ${allowedRoles.join(', ')}` 
      });
       return;
    }

    next();
  };
};