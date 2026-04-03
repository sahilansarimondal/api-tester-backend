import { Router } from "express";
import { createJob, getJob } from "../controllers/jobController";

const router = Router();

router.post("/", createJob);
router.get("/", getJob);

export default router;
