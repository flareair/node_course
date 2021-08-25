import * as express from "express";

export const getExchangeRates = async (
  req: express.Request,
  res: express.Response
) => {
  return res.json("Exchange rates");
};
