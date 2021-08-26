import * as express from "express";

import { getExchangeRates } from "./exchangeController";

const app = express();

app.get("/exchange-rates", getExchangeRates);

// error handling
app.use((req, res) => {
  return res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.log(err);

  return res.status(500).json(err.message);
});

app.listen(3000, () => console.log("Api is listening on port 3000"));
