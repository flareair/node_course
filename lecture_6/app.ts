import * as express from "express";

import { getExchangeRates } from "./exchangeController";

export const app = express();

app.use((req: express.Request, res, next) => {
  console.log(`${req.method} ${req.url}`);

  next();
});

app.get("/exchange-rates", getExchangeRates);

// error handling
app.use((req, res) => {
  return res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.log(err);

  return res.status(500).json(err.message);
});
