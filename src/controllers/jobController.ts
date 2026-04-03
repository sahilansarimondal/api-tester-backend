import type { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const createJob = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;

    await prisma.jobs.create({
      data: {
        email,
      },
    });

    res.status(201).json({ message: "job created" });
  } catch (error) {
    next(error);
  }
};

export const getJob = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const jobs = await prisma.jobs.findMany();
    res.status(201).json({ message: jobs });
  } catch (error) {
    next(error);
  }
};
