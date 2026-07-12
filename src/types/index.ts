import { Request } from 'express';

export enum Role {
  FLEET_MANAGER = 'FLEET_MANAGER',
  DRIVER = 'DRIVER',
  SAFETY_OFFICER = 'SAFETY_OFFICER',
  FINANCIAL_ANALYST = 'FINANCIAL_ANALYST',
}

export interface JwtPayload {
  userId: string;
  role: Role;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}