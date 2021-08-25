import * as express from "express";

import { getExchangeRates } from "./exchangeController";

const app = express();

app.get("/exchange-rates", getExchangeRates);

// error handling
app.use((req, res) => {
  res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("Internal server error");
});

app.listen(3000, () => console.log("Api is listening on port 3000"));
