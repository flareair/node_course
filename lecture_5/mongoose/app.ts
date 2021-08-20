import * as express from "express";
import { json as jsonBodyParser } from "body-parser";
import * as faker from "faker";
import { Error } from "mongoose";

import { Post } from "./post";

export const app = express();
// middlewares
app.use(jsonBodyParser());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Posts api");
});

app.get("/posts", async (req, res, next) => {
  try {
    const result = await Post.find({});

    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.post("/posts", async (req, res, next) => {
  const postData = req.body;

  const post = new Post(postData);

  try {
    const result = await post.save();

    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.post("/posts/random", async (req, res, next) => {
  const postData = {
    title: faker.lorem.sentence(3),
    content: faker.lorem.paragraphs(2),
    author: {
      userName: faker.internet.userName(),
      firstName: faker.name.firstName(),
    },
  };

  const post = new Post(postData);

  try {
    const result = await post.save();

    res.json(result);
  } catch (err) {
    next(err);
  }
});

app.delete("/posts/all", async (req, res, next) => {
  try {
    const result = await Post.deleteMany({});

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// error handling
app.use((req, res) => {
  res.status(404).json("Not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof Error.ValidationError) {
    return res.status(400).json(err);
  }

  res.status(500).json(err);
});
