// backend/src/middleware/auth.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ISSUER = process.env.JWT_ISSUER;

if (!JWT_SECRET || !JWT_ISSUER) {
    throw new Error("JWT_SECRET and JWT_ISSUER environment variables are required.");
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET, { issuer: JWT_ISSUER });
        // You can attach user info to the request if needed
        // (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
};