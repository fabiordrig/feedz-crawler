import express from "express";
import { json } from "body-parser";
import { getBets } from "./routes/get-bets";

const app = express();
app.use(json());

app.use("/api", getBets);

app.listen(3000, () => {
  console.log("Listening on 3000");
});
