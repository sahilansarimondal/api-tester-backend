import type { NextFunction, Request, Response } from "express";

interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
};
