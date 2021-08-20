import { Schema, model } from "mongoose";

export const userSchema = new Schema({
  userName: {
    type: String,
    validate: (raw: String) => {
      return raw.split(" ").length === 1;
    },
    required: [true, "User name is required"],
  },
  firstName: String,
});

export const User = model("User", userSchema);
