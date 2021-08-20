import { Schema, model } from "mongoose";
import { userSchema } from "./user";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    content: {
      type: String,
      minlength: 50,
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

export const Post = model("Post", postSchema);
