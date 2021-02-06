import express, { Request, Response } from "express";
import { dailyHumorCrawler } from "../crawler/daily-humor/daily-humor";

const router = express.Router();

router.post("/daily-humor", async (req: Request, res: Response) => {
  await dailyHumorCrawler();
});

export { router as dailyHumorRoute };
