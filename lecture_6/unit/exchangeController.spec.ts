import axios from "axios";
import * as express from "express";

import { getExchangeRates } from "../exchangeController";

jest.mock("axios");

const mockedGet = <jest.Mock>axios.get;

const res: express.Response = {
  json: jest.fn(),
} as any;

const next: express.NextFunction = jest.fn() as any;

describe("Exchange controller", () => {
  beforeEach(() => {
    // before every test
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("getExchangeRates", () => {
    it("should return data if currency is specified", async () => {
      // arrange
      const req: express.Request = {
        query: {
          currency: "EUR",
        },
      } as any;
      mockedGet.mockResolvedValue({
        data: {
          rates: {
            EUR: 999,
          },
        },
      });
      // act
      await getExchangeRates(req, res, next);
      // assert
      expect(next).not.toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ EUR: 999 });
    });

    it("should pass the error to next if currency is not supported", async () => {
      // arrange
      const req: express.Request = {
        query: {
          currency: "RANDOM",
        },
      } as any;
      mockedGet.mockResolvedValue({
        data: {
          rates: {
            EUR: 999,
            USD: 111,
            RUB: 123,
          },
        },
      });
      // act
      await getExchangeRates(req, res, next);
      // assert
      expect(next).toHaveBeenCalledWith(
        new Error(`Can't retrieve exchange rates for RANDOM`)
      );
    });
  });
});
