import { Schema, model } from "mongoose";
import { userSchema } from "./user";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      minlength: 2,
      maxlength: 20,
    },
    content: {
      type: String,
      minlength: 10,
    },
    author: userSchema,
  },
  {
    timestamps: true,
  }
);

postSchema.static("getByUserName", async function (name: string) {
  return await this.find({
    author: {
      userName: name,
    },
  });
});

postSchema.static("createRandom", async function () {
  return await this.find({
    author: {
      userName: "",
    },
  });
});

export const Post = model("Post", postSchema);
