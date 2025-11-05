// backend/src/middleware/auth.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ISSUER = process.env.JWT_ISSUER;

if (!JWT_SECRET || !JWT_ISSUER) {
    throw new Error("CRITICAL: JWT_SECRET or JWT_ISSUER environment variables are missing at startup.");
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // --- THIS IS THE NEW DEBUGGING CODE ---
    // Print the exact token the server received from the browser.
    console.log("--- TOKEN RECEIVED BY SERVER ---");
    console.log(token);
    console.log("--------------------------------");
    // ------------------------------------

    try {
        jwt.verify(token, JWT_SECRET, { issuer: JWT_ISSUER });
        next();
    } catch (error) {
        console.error("JWT Verification Failed!", error);
        return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
};