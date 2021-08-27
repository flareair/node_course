import * as express from "express";

import { getExchangeRates } from "./exchangeController";

export const app = express();

app.get("/exchange-rates", getExchangeRates);

// error handling
app.use((req, res) => {
  return res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.log(err);

  return res.status(500).json(err.message);
});
