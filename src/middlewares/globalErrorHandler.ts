import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
};
