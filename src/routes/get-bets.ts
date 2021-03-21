import express, { Request, Response } from "express";
import { myBetsCrawler } from "../crawler/my-bets/my-bets";

const router = express.Router();

router.post("/my-bets", async (req: Request, res: Response) => {
  const { user, password } = req.body;
  console.log("====================================");
  console.log("oi");
  console.log("====================================");
  await myBetsCrawler(user, password);

  res.send({ status: 200 });
});

export { router as getBets };
