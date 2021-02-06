import express from "express";
import { json } from "body-parser";
import { dailyHumorRoute } from "./routes/daily-humor";

const app = express();
app.use(json());

app.use("/api", dailyHumorRoute);

app.listen(3000, () => {
  console.log("Listening on 3000");
});
