import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Role, JwtPayload } from '../types';

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-development-key'; 

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS);
  }

  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  static generateToken(userId: string, role: Role): string {
    const payload: JwtPayload = { userId, role };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
  }
}