import axios from "axios";
import * as express from "express";
import * as request from "supertest";

import { app } from "../app";

jest.mock("axios");

const mockedGet = <jest.Mock>axios.get;

describe("App", () => {
  beforeEach(() => {
    // before every test
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("/exchange-rates", () => {
    it("should return data if no currency specified", async () => {
      // arrange
      mockedGet.mockResolvedValue({
        data: {
          rates: {
            EUR: 999,
          },
        },
      });
      // act
      const response = await request(app).get("/exchange-rates");
      // assert
      expect(response.status).toEqual(200);
      expect(JSON.parse(response.text)).toEqual({
        EUR: 999,
      });
    });

    it("should return error if currency is not supported", async () => {
      // arrange
      mockedGet.mockResolvedValue({
        data: {
          rates: {
            EUR: 999,
          },
        },
      });
      // act
      const response = await request(app).get(
        "/exchange-rates?currency=RANDOM"
      );
      // assert
      expect(response.status).toEqual(500);
      expect(JSON.parse(response.text)).toEqual(
        "Can't retrieve exchange rates for RANDOM"
      );
    });
  });
});
