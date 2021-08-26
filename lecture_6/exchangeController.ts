import * as express from "express";

import axios from "axios";

type ApiData = {
  disclaimer: string;
  date: string;
  timestamp: number;
  rates: Record<string, string>;
};

export const getExchangeRates = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { currency } = req.query;
    const { data }: { data: ApiData } = await axios.get(
      "https://www.cbr-xml-daily.ru/latest.js"
    );

    if (!data?.rates) {
      throw new Error(`Can't retrieve exchange rates`);
    }

    if (currency) {
      if (typeof currency !== "string") {
        throw new Error(`currency param is invalid`);
      }

      if (!data?.rates?.[currency]) {
        throw new Error(`Can't retrieve exchange rates for ${currency}`);
      }

      return res.json({ [currency]: data?.rates?.[currency] });
    }

    return res.json(data.rates);
  } catch (err) {
    next(err);
  }
};
