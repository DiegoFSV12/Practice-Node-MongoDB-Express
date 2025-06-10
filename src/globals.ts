// src/globals.ts
declare global {
  namespace Express {
    interface Request {
      emailConected?: string;
    }
  }
}

export {}