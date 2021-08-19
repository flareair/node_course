import * as express from "express";
import { urlencoded } from "body-parser";
import { MongoClient, Db } from "mongodb";

const app = express();

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("node_course");
    init(db);
  })
  .catch((err) => console.error("DB error", err));

const init = (db: Db) => {
  // middlewares
  app.use(urlencoded({ extended: true }));

  // routes
  app.get("/", (req, res) => {
    res.send("Welcome to People api");
  });

  app.get("/people", async (req, res) => {
    const { skip: skipRaw, limit: limitRaw } = req.query;

    const limit = Number(limitRaw) || undefined;
    const skip = Number(skipRaw) || undefined;

    const result = await db
      .collection("people")
      .find(
        {},
        {
          limit,
          skip,
        }
      )
      .toArray();

    return res.json({
      result,
      params: {
        skip,
        limit,
      },
      metaData: {
        length: result.length,
      },
    });
  });

  app.delete("/people", async (req, res) => {
    const result = await db.collection("people").deleteMany({});

    return res.json({
      result,
      metaData: {},
    });
  });

  // error handling
  app.use((req, res) => {
    res.status(404).json("Not found");
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json("Internal server error");
  });

  app.listen(3000, () => console.log("Api is listening on port 3000"));
};
