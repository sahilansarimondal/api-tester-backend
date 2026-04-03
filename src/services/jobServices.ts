import { prisma } from "../config/prisma";

export const getPendingJobs = async () => {
  try {
    const pendingJobs = await prisma.jobs.findMany({
      where: {
        status: "PENDING",
      },
    });
    return pendingJobs;
  } catch (error) {
    console.log(error);
  }
};
