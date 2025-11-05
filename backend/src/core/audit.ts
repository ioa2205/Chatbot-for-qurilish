// backend/src/core/audit.ts

import fs from 'fs/promises';
import path from 'path';

const logFilePath = process.env.AUDIT_LOG_PATH || path.join(process.cwd(), 'audit.log');

interface AuditEvent {
  timestamp: string;
  user_id?: string;
  query?: string;
  status: 'OK' | 'REJECTED' | 'NO_EVIDENCE' | 'ERROR' | 'FEEDBACK';
  [key: string]: any;
}

// FIX: Corrected the type of the 'event' parameter
export async function logAuditEvent(event: Omit<AuditEvent, 'timestamp'>): Promise<void> {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...event,
  } as AuditEvent;

  try {
    // For production, use a structured logger (e.g., Winston, Pino) and write to a proper log management system.
    // For this minimal example, we append to a local JSONL file.
    await fs.appendFile(logFilePath, JSON.stringify(logEntry) + '\n');
  } catch (error) {
    console.error('Failed to write to audit log:', error);
  }
}